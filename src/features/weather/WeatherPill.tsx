import { useEffect, useId, useState } from "react";
import {
  LIVE_WINDOW_MS,
  describeAge,
  fetchFarmReading,
  readCachedReading,
  writeCachedReading,
  type FarmReading,
} from "./farmWeather";
import "./weather-pill.css";

const REFRESH_MS = 5 * 60 * 1000;

function useFarmWeather() {
  const [reading, setReading] = useState<FarmReading | null>(readCachedReading);
  const [failed, setFailed] = useState(false);
  const [now, setNow] = useState(Date.now);

  useEffect(() => {
    let controller: AbortController | null = null;
    const refresh = () => {
      if (document.visibilityState === "hidden") return;
      controller?.abort();
      controller = new AbortController();
      fetchFarmReading(controller.signal)
        .then((next) => {
          writeCachedReading(next);
          setReading(next);
          setFailed(false);
        })
        .catch((error: unknown) => {
          if (error instanceof DOMException && error.name === "AbortError") return;
          setFailed(true);
        })
        .finally(() => setNow(Date.now()));
    };
    refresh();
    const poll = window.setInterval(refresh, REFRESH_MS);
    const tick = window.setInterval(() => setNow(Date.now()), 60 * 1000);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      controller?.abort();
      window.clearInterval(poll);
      window.clearInterval(tick);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);

  return { reading, failed, now };
}

export function WeatherPill() {
  const { reading, failed, now } = useFarmWeather();
  const tooltipId = useId();
  const age = reading ? now - reading.observedAt : Infinity;
  const live = age < LIVE_WINDOW_MS;
  const note = !reading
    ? failed
      ? "The farm station is offline right now"
      : "Checking the farm station"
    : live
      ? `Live from the farm station · ${describeAge(age)}`
      : `Last updated ${describeAge(age)}`;

  return (
    <span
      className={`weather-pill${live ? " is-live" : ""}`}
      tabIndex={0}
      aria-describedby={tooltipId}
      onKeyDown={(event) => {
        if (event.key === "Escape") event.currentTarget.blur();
      }}
    >
      <span className="weather-dot" aria-hidden="true" />
      <span className="weather-reading">
        {reading ? `${reading.temperatureF}°F` : "–°F"}
        <span className="weather-place"> · Santa Ynez</span>
      </span>
      <span role="tooltip" id={tooltipId} className="weather-tooltip">
        {note}
      </span>
    </span>
  );
}
