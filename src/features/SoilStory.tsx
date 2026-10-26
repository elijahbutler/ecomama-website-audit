import { useState } from "react";
import { soilNotes } from "../data/fieldJournal";
import { JournalPhoto } from "../components/JournalPhoto";

export function SoilStory() {
  const [selected, setSelected] = useState(soilNotes[0]);
  return (
    <section className="journal-section soil-story" aria-labelledby="soil-title">
      <div className="soil-layout">
        <div>
          <h2 id="soil-title">Living soil</h2>
          <p className="large-reading">
            A rose begins below the surface. Choose a part of the cycle to see
            how it works on the farm.
          </p>
          <div className="choice-row" role="group" aria-label="Soil observations">
            {soilNotes.map((note) => (
              <button
                key={note.id}
                type="button"
                aria-pressed={selected.id === note.id}
                onClick={() => setSelected(note)}
              >
                {note.name}
              </button>
            ))}
          </div>
          <div aria-live="polite" className="soil-note">
            <h3>{selected.name}</h3>
            <p>{selected.text}</p>
          </div>
        </div>
        <JournalPhoto key={selected.image} file={selected.image} alt={selected.alt} />
      </div>
    </section>
  );
}
