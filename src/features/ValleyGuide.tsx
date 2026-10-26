import { useState } from "react";
import { valleyPlaces } from "../data/fieldJournal";
export function ValleyGuide() {
  const [town, setTown] = useState("All towns");
  const [category, setCategory] = useState("All categories");
  const [search, setSearch] = useState("");
  const filtered = valleyPlaces.filter(
    (p) =>
      (town === "All towns" || p.town === town) &&
      (category === "All categories" || p.category === category) &&
      `${p.name} ${p.note} ${p.town}`
        .toLowerCase()
        .includes(search.trim().toLowerCase()),
  );
  return (
    <section
      className="journal-section guide"
      aria-label="Valley recommendations"
    >
      <div className="guide-filters">
        <label>
          Town
          <select
            aria-label="Town"
            value={town}
            onChange={(e) => setTown(e.target.value)}
          >
            {["All towns", ...new Set(valleyPlaces.map((p) => p.town))].map(
              (t) => (
                <option key={t}>{t}</option>
              ),
            )}
          </select>
        </label>
        <label>
          Category
          <select
            aria-label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {["All categories", "Food", "Explore"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label>
          Search the guide
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      <p role="status">
        {filtered.length}{" "}
        {filtered.length === 1 ? "recommendation" : "recommendations"}
      </p>
      <div className="guide-list">
        {filtered.map((place) => (
          <article key={place.id}>
            <div>
              <span className="content-note">
                {place.town} · {place.category}
              </span>
              <h2>{place.name}</h2>
              <p>{place.note}</p>
            </div>
            <div className="guide-links">
              <a href={place.url} target="_blank" rel="noopener noreferrer">
                Visit website{" "}
                <span className="sr-only">
                  for {place.name}, opens a new tab
                </span>
                ↗
              </a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.address)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions{" "}
                <span className="sr-only">
                  to {place.name}, opens a new tab
                </span>
                ↗
              </a>
            </div>
          </article>
        ))}
      </div>
      {!filtered.length && (
        <div className="empty-state">
          <h2>No matches</h2>
          <p>Try another town or clear the filters.</p>
          <button
            onClick={() => {
              setTown("All towns");
              setCategory("All categories");
              setSearch("");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
      <p className="content-note">
        Official destination websites checked October 26, 2026. Check current
        opening hours and reservations directly. Directions open Google Maps; no
        location permission is required here.
      </p>
    </section>
  );
}
