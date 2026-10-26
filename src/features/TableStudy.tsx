import { useState } from "react";
import { Link } from "react-router-dom";
import { pairings } from "../data/fieldJournal";
import { JournalPhoto } from "../components/JournalPhoto";
import { preferenceLink, usePreferences } from "./preferences";
export function TableStudy() {
  const { preferences, setPreferences } = usePreferences();
  const [selectedId, setSelectedId] = useState(
    preferences.table || pairings[0].id,
  );
  const selected = pairings.find((p) => p.id === selectedId) ?? pairings[0];
  return (
    <section className="journal-section" aria-labelledby="table-title">
      <div className="section-intro">
        <h2 id="table-title">Set a table</h2>
        <p>
          Start with a setting from the estate archive. Look at the linen, the
          light, and how the flowers sit among the guests.
        </p>
      </div>
      <div className="table-study">
        <JournalPhoto
          key={selected.image}
          file={selected.image}
          alt={selected.alt}
        />
        <div>
          <fieldset>
            <legend>Choose a photographed direction</legend>
            {pairings.map((pairing) => (
              <label className="material-choice" key={pairing.id}>
                <input
                  type="radio"
                  name="table"
                  value={pairing.id}
                  checked={selectedId === pairing.id}
                  onChange={() => setSelectedId(pairing.id)}
                />
                <span>{pairing.name}</span>
              </label>
            ))}
          </fieldset>
          <div aria-live="polite">
            <h3>{selected.name}</h3>
            <p>{selected.detail}</p>
          </div>
          <p className="content-note">
            Stoneware, natural linen, beeswax tapers, and garden cuts are
            material references to discuss. Makers, exact materials, and rental
            availability are unverified. Only photographed directions can be
            selected.
          </p>
          <div className="choice-row">
            <button
              className="journal-button"
              onClick={() =>
                setPreferences((p) => ({ ...p, table: selected.id }))
              }
            >
              {preferences.table === selected.id
                ? "Direction added"
                : "Add this direction"}
            </button>
            <button
              onClick={() => {
                setSelectedId(pairings[0].id);
                setPreferences((p) => ({ ...p, table: "" }));
              }}
            >
              Reset
            </button>
          </div>
          <p role="status">
            {preferences.table
              ? `Your inquiry includes ${pairings.find((p) => p.id === preferences.table)?.name}.`
              : "No table direction added yet."}
          </p>
          <Link className="text-link" to={preferenceLink(preferences)}>
            Share this direction with our team
          </Link>
        </div>
      </div>
    </section>
  );
}
