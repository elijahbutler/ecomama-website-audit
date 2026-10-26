import { useState } from "react";
import { guideCategories, valleyPlaces, type GuideCategory } from "../data/fieldJournal";

type Filter = GuideCategory | "All";

function mapLink(name: string, town: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${town}, CA`)}`;
}

export function ValleyGuide() {
  const [category, setCategory] = useState<Filter>("All");
  const [search, setSearch] = useState("");
  const query = search.trim().toLowerCase();
  const filtered = valleyPlaces.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      `${p.name} ${p.town} ${p.kind}`.toLowerCase().includes(query),
  );
  const count = (value: Filter) =>
    value === "All" ? valleyPlaces.length : valleyPlaces.filter((p) => p.category === value).length;

  return (
    <section className="journal-section guide" aria-label="Valley recommendations">
      <div className="guide-toolbar">
        <div className="guide-categories" role="group" aria-label="Filter by category">
          {(["All", ...guideCategories] as Filter[]).map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={category === value}
              onClick={() => setCategory(value)}
            >
              {value === "All" ? "Everything" : value}
              <span aria-hidden="true">{count(value)}</span>
            </button>
          ))}
        </div>
        <label className="guide-search">
          Search the guide
          <input
            type="search"
            value={search}
            placeholder="A name, town, or kind of place"
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      <p role="status" className="content-note">
        {filtered.length} {filtered.length === 1 ? "recommendation" : "recommendations"}
        {category === "All" ? "" : ` in ${category}`}
      </p>
      <ul className="guide-list">
        {filtered.map((place) => (
          <li key={place.id}>
            <span className="guide-kind">
              {place.kind} · {place.town}
            </span>
            <h2>{place.name}</h2>
            <div className="guide-links">
              {place.url && (
                <a href={place.url} target="_blank" rel="noopener noreferrer">
                  Website <span className="sr-only">for {place.name}, opens a new tab</span>↗
                </a>
              )}
              <a href={mapLink(place.name, place.town)} target="_blank" rel="noopener noreferrer">
                Map <span className="sr-only">for {place.name}, opens a new tab</span>↗
              </a>
            </div>
          </li>
        ))}
      </ul>
      {!filtered.length && (
        <div className="empty-state">
          <h2>No matches</h2>
          <p>Try another category or clear your search.</p>
          <button
            type="button"
            onClick={() => {
              setCategory("All");
              setSearch("");
            }}
          >
            Show everything
          </button>
        </div>
      )}
      <p className="content-note">
        Favourites from the Ecomama team. Check opening hours and reservations
        directly. Map links open a Google Maps search, and no location
        permission is needed.
      </p>
    </section>
  );
}
