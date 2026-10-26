import { useState } from "react";
import { soilNotes } from "../data/fieldJournal";
import { JournalPhoto } from "../components/JournalPhoto";
export function SoilStory() {
  const [selected, setSelected] = useState(soilNotes[0]);
  return (
    <section
      className="journal-section soil-story"
      aria-labelledby="soil-title"
    >
      <div className="section-intro">
        <h2 id="soil-title">Living soil</h2>
        <p>
          A rose begins below the surface. Explore the relationships between
          organic matter, roots, beneficial life, and water.
        </p>
      </div>
      <div className="soil-layout">
        <div>
          <div
            className="soil-section"
            aria-label="Illustrative soil cross-section"
          >
            <div className="soil-layer soil-surface">
              Plant cover & beneficial life
            </div>
            <div className="soil-layer soil-compost">
              Compost & organic matter
            </div>
            <div className="soil-layer soil-roots">
              Roots & soil structure
              <svg viewBox="0 0 500 100" aria-hidden="true">
                <path
                  d="M80 0v85m0-65L30 60m50-20 40 38M260 0v95m0-60-65 35m65-20 50 40M420 0v70m0-50-35 25m35-5 40 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="soil-layer soil-water">
              Water moving through soil
            </div>
          </div>
          <p className="content-note">
            An explanatory diagram. Layer depths and water movement are not
            measurements of this property.
          </p>
          <div className="choice-row" aria-label="Soil observations">
            {soilNotes.map((note) => (
              <button
                key={note.id}
                aria-pressed={selected.id === note.id}
                onClick={() => setSelected(note)}
              >
                {note.name}
              </button>
            ))}
          </div>
        </div>
        <div>
          <JournalPhoto
            key={selected.image}
            file={selected.image}
            alt={selected.alt}
          />
          <div aria-live="polite">
            <h3>{selected.name}</h3>
            <p>{selected.text}</p>
          </div>
        </div>
      </div>
      <details>
        <summary>Read all soil observations</summary>
        {soilNotes.map((note) => (
          <div key={note.id}>
            <h3>{note.name}</h3>
            <p>{note.text}</p>
          </div>
        ))}
      </details>
    </section>
  );
}
