import { useState } from "react";
import { Link } from "react-router-dom";
import { roses, seasons, seasonNotes, type Season } from "../data/fieldJournal";
import { JournalPhoto } from "../components/JournalPhoto";
import { preferenceLink, usePreferences } from "./preferences";
export function RoseSeasonGuide() {
  const [season, setSeason] = useState<Season>("All");
  const { preferences, setPreferences } = usePreferences();
  const filtered = roses.filter(
    (r) =>
      season === "All" ||
      (season === "Unknown"
        ? r.seasons.length === 0
        : r.seasons.includes(season)),
  );
  return (
    <section className="journal-section" aria-labelledby="rose-title">
      <div className="section-intro">
        <h2 id="rose-title">The rose year</h2>
        <p>
          Dawn cuts begin with what the garden gives. Choose up to three visual
          favourites to discuss with the grower.
        </p>
      </div>
      <div className="choice-row" aria-label="Typical season">
        {seasons.map((value) => (
          <button
            key={value}
            aria-pressed={season === value}
            onClick={() => setSeason(value)}
          >
            {value === "Unknown" ? "Season unconfirmed" : value}
          </button>
        ))}
      </div>
      <p className="season-note" aria-live="polite">
        {seasonNotes[season]}
      </p>
      <p className="content-note">
        General guide, not a current bloom report. These are photo references,
        not named cultivars. Names, fragrance, and seasonal windows need grower
        confirmation.
      </p>
      {filtered.length ? (
        <div className="rose-grid">
          {filtered.map((rose) => {
            const checked = preferences.roses.includes(rose.id);
            return (
              <article key={rose.id}>
                <JournalPhoto file={rose.image} alt={rose.alt} />
                <h3>{rose.name}</h3>
                <p>{rose.color}</p>
                <p className="content-note">
                  Cultivar and fragrance unconfirmed
                </p>
                <label className="check-choice">
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={!checked && preferences.roses.length >= 3}
                    onChange={() =>
                      setPreferences((p) => ({
                        ...p,
                        roses: checked
                          ? p.roses.filter((id) => id !== rose.id)
                          : p.roses.length < 3
                            ? [...p.roses, rose.id]
                            : p.roses,
                      }))
                    }
                  />{" "}
                  {checked ? "Selected" : "Choose"} {rose.name}
                </label>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No verified seasonal entries yet</h3>
          <p>
            We haven’t assigned bloom dates to unidentified roses. Browse the
            archive to choose colour and form instead.
          </p>
          <button onClick={() => setSeason("Unknown")}>
            Browse photo references
          </button>
        </div>
      )}
      <div className="selection-summary">
        <p role="status">
          {preferences.roses.length} of 3 favourites selected
          {preferences.roses.length === 3
            ? ". Remove one to choose another."
            : "."}
        </p>
        <ul>
          {roses
            .filter((r) => preferences.roses.includes(r.id))
            .map((r) => (
              <li key={r.id}>
                {r.name}{" "}
                <button
                  aria-label={`Remove ${r.name}`}
                  onClick={() =>
                    setPreferences((p) => ({
                      ...p,
                      roses: p.roses.filter((id) => id !== r.id),
                    }))
                  }
                >
                  Remove
                </button>
              </li>
            ))}
        </ul>
        <div className="choice-row">
          <button
            onClick={() => setPreferences((p) => ({ ...p, roses: [] }))}
            disabled={!preferences.roses.length}
          >
            Clear favourites
          </button>
          <Link className="journal-button" to={preferenceLink(preferences)}>
            Carry favourites into an inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
