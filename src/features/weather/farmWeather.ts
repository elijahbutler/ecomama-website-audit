/** Current conditions from the farm's Tempest station (WeatherFlow public REST API).
 * The station is public, so this token ships in the browser bundle by design. */
const STATION_ID = 149109;
const STATION_TOKEN = "efc0706c-e69f-4fa2-b9d5-a0be3c07f449";
const ENDPOINT = `https://swd.weatherflow.com/swd/rest/observations/station/${STATION_ID}?token=${STATION_TOKEN}`;
const CACHE_KEY = "ecomama:farm-weather";

export const LIVE_WINDOW_MS = 30 * 60 * 1000;

export type FarmReading = {
  temperatureF: number;
  /** When the station recorded the observation, in epoch milliseconds. */
  observedAt: number;
};

type StationResponse = {
  obs?: { air_temperature?: number; timestamp?: number }[];
};

export async function fetchFarmReading(signal?: AbortSignal): Promise<FarmReading> {
  const response = await fetch(ENDPOINT, { signal });
  if (!response.ok) throw new Error(`Tempest station returned ${response.status}`);
  const data = (await response.json()) as StationResponse;
  const latest = data.obs?.[0];
  if (typeof latest?.air_temperature !== "number" || typeof latest.timestamp !== "number") {
    throw new Error("Tempest station returned no observation");
  }
  return {
    temperatureF: Math.round((latest.air_temperature * 9) / 5 + 32),
    observedAt: latest.timestamp * 1000,
  };
}

export function readCachedReading(): FarmReading | null {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(CACHE_KEY) ?? "null");
    if (
      value &&
      typeof value === "object" &&
      "temperatureF" in value &&
      "observedAt" in value &&
      typeof value.temperatureF === "number" &&
      typeof value.observedAt === "number"
    ) {
      return { temperatureF: value.temperatureF, observedAt: value.observedAt };
    }
  } catch {
    // Storage can be unavailable or hold malformed data; treat both as no cache.
  }
  return null;
}

export function writeCachedReading(reading: FarmReading) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(reading));
  } catch {
    // Private browsing can block storage. The pill still works without a cache.
  }
}

export function describeAge(ms: number) {
  const minutes = Math.max(0, Math.round(ms / 60000));
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.round(hours / 24);
  return `${days} day${days === 1 ? "" : "s"} ago`;
}
