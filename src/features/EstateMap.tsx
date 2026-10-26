import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { X, Expand } from "lucide-react";
import { places } from "../data/fieldJournal";
import { JournalPhoto } from "../components/JournalPhoto";
import { preferenceLink, usePreferences } from "./preferences";

export function EstateMap() {
  const [selected, setSelected] = useState(places[0]);
  const { preferences, setPreferences } = usePreferences();
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <section className="journal-section" aria-labelledby="estate-title">
      <div className="section-intro">
        <h2 id="estate-title">Walk the estate</h2>
        <p>
          Meet the places within 30+ acres. Choose a place on the plan or in the
          list.
        </p>
      </div>
      <p className="content-note">
        Illustrated place index, not a surveyed map. Positions are schematic and
        do not indicate paths, distances, or accessible routes. Arrange access
        with the team.
      </p>
      <div className="estate-explorer">
        <div>
          <div
            className="estate-plan"
            aria-label="Schematic estate place selector"
          >
            <svg viewBox="0 0 800 550" aria-hidden="true" focusable="false">
              <path
                d="M30 130 Q140 20 340 60 T760 100 L770 450 Q510 535 300 490 T35 420Z"
                fill="#e8e4d5"
                stroke="#8E5D30"
                strokeWidth="1"
              />
              <path
                d="M50 185 Q250 90 420 140 T750 180 M40 210 Q250 115 420 165 T755 205 M45 235 Q250 140 420 190 T750 230"
                fill="none"
                stroke="#a6a26a"
              />
              <rect x="115" y="130" width="190" height="120" fill="#c4cba9" />
              <path
                d="M130 150h160m-160 20h160m-160 20h160m-160 20h160m-160 20h160"
                stroke="#74805d"
              />
              <rect x="355" y="225" width="170" height="90" fill="#cad1b6" />
              <rect x="110" y="350" width="140" height="55" fill="#c4ac8e" />
              <rect x="550" y="345" width="115" height="90" fill="#c4ac8e" />
              <ellipse cx="605" cy="105" rx="67" ry="40" fill="#b8cac9" />
              <rect x="365" y="425" width="75" height="40" fill="#d3bd9d" />
            </svg>
            {places.map((place) => (
              <button
                key={place.id}
                style={{ left: `${place.x}%`, top: `${place.y}%` }}
                aria-pressed={selected.id === place.id}
                aria-controls="estate-detail"
                onClick={() => setSelected(place)}
              >
                {place.name}
              </button>
            ))}
          </div>
          <div className="choice-row" aria-label="Estate places">
            {places.map((place) => (
              <button
                key={place.id}
                aria-pressed={selected.id === place.id}
                onClick={() => setSelected(place)}
              >
                {place.name}
              </button>
            ))}
          </div>
        </div>
        <article id="estate-detail" className="estate-detail">
          <button
            className="photo-button"
            onClick={() => dialog.current?.showModal()}
            aria-label={`Enlarge photograph of ${selected.name}`}
          >
            <JournalPhoto
              key={selected.image}
              file={selected.image}
              alt={selected.alt}
            />
            <span>
              <Expand size={16} /> View photograph
            </span>
          </button>
          <div aria-live="polite" aria-atomic="true">
            <h3>{selected.name}</h3>
            <p>{selected.detail}</p>
          </div>
          <button
            className="journal-button"
            onClick={() =>
              setPreferences((p) => ({ ...p, place: selected.id }))
            }
          >
            {preferences.place === selected.id
              ? "Added to your inquiry"
              : "Add this place to my inquiry"}
          </button>
          <Link className="text-link" to={preferenceLink(preferences)}>
            Begin an inquiry
          </Link>
        </article>
      </div>
      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-labelledby="photo-title"
      >
        <button
          className="dialog-close"
          aria-label="Close photograph"
          onClick={() => dialog.current?.close()}
          autoFocus
        >
          <X />
        </button>
        <h3 id="photo-title">{selected.name}</h3>
        <JournalPhoto
          key={selected.image}
          file={selected.image}
          alt={selected.alt}
        />
        <p>{selected.alt}</p>
      </dialog>
    </section>
  );
}
