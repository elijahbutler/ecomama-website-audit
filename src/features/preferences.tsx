import { createContext, useContext, useState, type ReactNode } from "react";
import { places, roses, pairings } from "../data/fieldJournal";

export function readPreferences(search: string) {
  const query = new URLSearchParams(search);
  return {
    roses: [...new Set(query.getAll("rose"))]
      .filter((id) => roses.some((r) => r.id === id))
      .slice(0, 3),
    place: places.find((p) => p.id === query.get("place"))?.id ?? "",
    table: pairings.find((p) => p.id === query.get("table"))?.id ?? "",
  };
}
type Preferences = ReturnType<typeof readPreferences>;
const PreferencesContext = createContext<{
  preferences: Preferences;
  setPreferences: React.Dispatch<React.SetStateAction<Preferences>>;
} | null>(null);
export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState(() =>
    readPreferences(window.location.search),
  );
  return (
    <PreferencesContext.Provider value={{ preferences, setPreferences }}>
      {children}
    </PreferencesContext.Provider>
  );
}
export function usePreferences() {
  const value = useContext(PreferencesContext);
  if (!value) throw new Error("PreferencesProvider is required");
  return value;
}
export function preferenceLink(preferences: Preferences) {
  const query = new URLSearchParams();
  preferences.roses.forEach((id) => query.append("rose", id));
  if (preferences.place) query.set("place", preferences.place);
  if (preferences.table) query.set("table", preferences.table);
  return `/contact${query.size ? `?${query}` : ""}`;
}
export function preferenceSummary(preferences: Preferences) {
  return [
    ...preferences.roses
      .map((id) => roses.find((r) => r.id === id))
      .filter((r) => r !== undefined)
      .map((r) => `Rose reference: ${r.name} [${r.id}]`),
    ...places
      .filter((p) => p.id === preferences.place)
      .map((p) => `Place: ${p.name} [${p.id}]`),
    ...pairings
      .filter((p) => p.id === preferences.table)
      .map((p) => `Table direction: ${p.name} [${p.id}]`),
  ].join("\n");
}
