import { JournalPhoto } from "../components/JournalPhoto";

type Photo = { file: string; alt: string; width: number; height: number };

const gardenSeasons: {
  name: string;
  months: string;
  text: string;
  main: Photo;
  detail: Photo;
}[] = [
  {
    name: "Spring Flush",
    months: "March to May",
    text: "After winter pruning, the bushes put out new canes and open in waves. Blush, pink, and cream come all at once, and the garden is at its fullest.",
    main: { file: "70-img-8291-large.png", alt: "Clusters of pale pink roses on the bush", width: 960, height: 1280 },
    detail: { file: "68-tessa-tommy-wedding-3.jpg", alt: "Rows of pink garden roses in full bloom", width: 1500, height: 2249 },
  },
  {
    name: "Summer Abundance",
    months: "June to August",
    text: "Repeat-flowering roses keep coming through the warm months, with lavender, zinnias, and the orchard in leaf around them. The team cuts at dawn, before the heat.",
    main: { file: "23-hanna-carl-wedding-day-santa-ynez-2.jpg", alt: "A rose arch covered in pink and peach blooms framing the garden lawn", width: 1500, height: 2250 },
    detail: { file: "66-ecomamasocials-june-1.jpg", alt: "A pink summer flower above white sweet alyssum", width: 1500, height: 2250 },
  },
  {
    name: "Autumn Warmth",
    months: "September to November",
    text: "A second flush arrives in cooler air. Blooms open more slowly, colours deepen toward apricot and peach, and the valley turns gold around the garden.",
    main: { file: "67-img-3164-large.png", alt: "A hand holding a full peach garden rose in warm evening light", width: 960, height: 1280 },
    detail: { file: "88-3870-baseline-ave-37-copy.jpg", alt: "The farm and surrounding valley from above in golden light", width: 1500, height: 844 },
  },
  {
    name: "Winter Slumber",
    months: "December to February",
    text: "The roses rest. Bushes are pruned, compost goes down, and the soil is readied for spring. The last ivory blooms linger while the oaks and paths take centre stage.",
    main: { file: "24-ecomama-wakingup-10.jpg", alt: "A wooden footbridge beneath a spreading oak on the quiet farm", width: 1500, height: 2250 },
    detail: { file: "59-ecomamasocials-june-6.jpg", alt: "A single ivory rose with a softly coloured centre", width: 1500, height: 1849 },
  },
];

export function SeasonalGarden() {
  return (
    <section className="journal-section seasonal-garden" aria-labelledby="seasons-title">
      <div className="estate-section-intro">
        <h2 id="seasons-title">The rose garden through the year</h2>
        <p>
          Every season brings a different garden. Here is how the roses and
          the farm around them tend to look from one flush to the next. Bloom
          timing follows the weather, so the grower confirms what will be
          flowering for your date.
        </p>
      </div>
      <div className="season-grid">
        {gardenSeasons.map((season) => (
          <article key={season.name} className="season-card">
            <div className="season-photos">
              <JournalPhoto
                className="season-main"
                file={season.main.file}
                alt={season.main.alt}
                width={season.main.width}
                height={season.main.height}
                sizes="(max-width: 700px) 100vw, 50vw"
              />
              <JournalPhoto
                className="season-detail"
                file={season.detail.file}
                alt={season.detail.alt}
                width={season.detail.width}
                height={season.detail.height}
                sizes="(max-width: 700px) 40vw, 20vw"
              />
            </div>
            <p className="season-months">{season.months}</p>
            <h3>{season.name}</h3>
            <p>{season.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
