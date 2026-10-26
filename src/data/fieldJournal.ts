/** Content reviewed 2026-10-26 against the supplied proposal and archived farm pages.
 * Pending facts are intentionally absent. See CONTENT_SOURCES.md before publishing. */
export const places = [
  {
    id: "rose-garden",
    name: "Rose Garden",
    x: 26,
    y: 33,
    image: "17-dji-0658-enhanced-sr.jpg",
    alt: "Aerial photograph of the rose beds around the central lawn",
    detail:
      "The working rose garden surrounds a central lawn used for ceremonies. Ask the team how the garden fits your gathering.",
  },
  {
    id: "terraced-lawn",
    name: "Terraced Lawn",
    x: 55,
    y: 48,
    image: "18-sb5-52.jpg",
    alt: "Long reception tables on the lawn beside the barn",
    detail:
      "An outdoor reception space. The published venue guide describes seating for up to 150 guests; confirm the layout with the team.",
  },
  {
    id: "rose-barn",
    name: "Rose Barn",
    x: 24,
    y: 72,
    image: "19-kathy-justin-251.jpg",
    alt: "Rose Barn entrance with white curtains",
    detail:
      "An open-air setting for a luncheon, cocktails, or time together before a ceremony.",
  },
  {
    id: "mountain-barn",
    name: "Mountain View Barn",
    x: 73,
    y: 73,
    image: "20-shannon-james-wedding-websize.jpg",
    alt: "Tables and chairs arranged inside the Mountain View Barn",
    detail:
      "An indoor gathering space for dinner and dancing, with views toward the mountains.",
  },
  {
    id: "willow-pond",
    name: "Willow Pond",
    x: 75,
    y: 24,
    image: "27-screenshot-2024-07-25-at-10-38-35-am.png",
    alt: "A couple beside the pond in an archived estate photograph",
    detail:
      "The published vignette page describes the pond as under construction. Current access and completion must be confirmed before including it in your plans.",
  },
  {
    id: "suites",
    name: "Preparation Suites",
    x: 51,
    y: 83,
    image: "22-screenshot-2024-07-24-at-9-47-12-pm.png",
    alt: "Wedding party preparing in the Bridal Loft",
    detail:
      "The Bridal Loft and Groomsmen’s Cottage are preparation spaces. They are not advertised here as overnight accommodation.",
  },
];
export type Season =
  "All" | "Spring" | "Summer" | "Autumn" | "Winter" | "Unknown";
export const seasons: Season[] = [
  "All",
  "Spring",
  "Summer",
  "Autumn",
  "Winter",
  "Unknown",
];
export const seasonNotes: Record<Season, string> = {
  All: "Explore photographs from the farm. Cultivar names and flowering windows are awaiting grower identification.",
  Spring:
    "A season to ask about new growth and the first cuts. Exact flowering dates depend on the cultivar and weather.",
  Summer:
    "Ask the grower about repeat flowering and how heat affects the cut. A photograph is not a promise of summer availability.",
  Autumn:
    "Ask about late-season cuts for your date. Weather and the condition of each bush determine the harvest.",
  Winter:
    "A time to ask about soil care and the coming rose year. No winter cuts are listed as available.",
  Unknown:
    "These archive photographs do not yet have verified cultivar names or seasonal windows. You can still share a visual preference.",
};
export const roses: {
  id: string;
  name: string;
  color: string;
  image: string;
  alt: string;
  seasons: Season[];
}[] = [
  {
    id: "blush-cup",
    name: "Blush cup",
    color: "Pale blush",
    image: "55-hanna-carl-wedding-by-rachel-wakefield.jpg",
    alt: "Pale blush rose opening against dark leaves",
    seasons: [],
  },
  {
    id: "ivory-open",
    name: "Open ivory",
    color: "Ivory with a warm centre",
    image: "59-ecomamasocials-june-6.jpg",
    alt: "Ivory rose with an open, softly coloured centre",
    seasons: [],
  },
  {
    id: "apricot-branch",
    name: "Apricot arrangement",
    color: "Apricot and cream",
    image: "62-ecomama-farms-james-and-jess-2.jpg",
    alt: "Apricot and cream roses arranged with foliage on a ceremony arch",
    seasons: [],
  },
  {
    id: "pink-garden",
    name: "Pink in the garden",
    color: "Pink",
    image: "63-ecomama-farms-james-and-jess-3.jpg",
    alt: "Pink rose on a leafy stem in the garden",
    seasons: [],
  },
];
export const pairings = [
  {
    id: "lawn-supper",
    name: "A supper on the lawn",
    image: "18-sb5-52.jpg",
    alt: "White linens and low flowers on long tables outdoors",
    detail:
      "White linen, low garden arrangements, and timber chairs. A photographed estate setting to discuss with your planner.",
  },
  {
    id: "barn-candlelight",
    name: "Dinner by candlelight",
    image: "20-shannon-james-wedding-websize.jpg",
    alt: "A candlelit table setting in the barn",
    detail:
      "Warm candlelight and an indoor table. The photograph records a past event, not a list of included rentals.",
  },
  {
    id: "garden-cuts",
    name: "Garden colour",
    image: "83-ecomama-md22-20.jpg",
    alt: "Hands holding a colourful garden bouquet",
    detail:
      "Pink and apricot garden cuts as a colour reference. Ask about stoneware vessels, natural linen, and beeswax tapers; their supply and makers need confirmation.",
  },
];
export const soilNotes = [
  {
    id: "compost",
    name: "Compost",
    text: "Organic matter returns to the soil through composting. The farm describes compost as part of its regenerative practice.",
    image: "88-3870-baseline-ave-37-copy.jpg",
    alt: "Farm landscape from the sustainability archive",
  },
  {
    id: "roots",
    name: "Roots & cover crops",
    text: "Cover crops help protect the ground between plantings. Roots support soil structure; this diagram does not measure the depth of the farm’s soil.",
    image: "35-the-laras-sb1-87.jpg",
    alt: "Planted rose beds beneath a rose arch",
  },
  {
    id: "beneficials",
    name: "Beneficial life",
    text: "Flowering plants provide habitat for pollinators. Look closely at the lavender: even a small flower can be a busy place.",
    image: "41-ecomamasocials-june-9.jpg",
    alt: "A bee visiting purple lavender flowers",
  },
  {
    id: "water",
    name: "Water stewardship",
    text: "The farm describes efficient irrigation and soil care as parts of its water stewardship. No water-saving percentage is claimed here.",
    image: "17-dji-0658-enhanced-sr.jpg",
    alt: "Organised planted beds in the estate garden",
  },
];
export const valleyPlaces = [
  {
    id: "bobs-los-alamos",
    name: "Bob’s Well Bread",
    town: "Los Alamos",
    category: "Food",
    note: "Bread, pastries, and a café menu. Check the bakery’s site before making the drive.",
    url: "https://www.bobswellbread.com/",
    address: "550 Bell Street, Los Alamos, CA 93440",
  },
  {
    id: "bobs-ballard",
    name: "Bob’s Well Bread, Ballard",
    town: "Ballard",
    category: "Food",
    note: "The bakery’s Ballard location on Baseline Avenue.",
    url: "https://www.bobswellbread.com/pages/directions",
    address: "2449 Baseline Avenue, Ballard, CA 93463",
  },
  {
    id: "solvang",
    name: "A day in Solvang",
    town: "Solvang",
    category: "Explore",
    note: "The official visitor guide lists bakeries, museums, and local events.",
    url: "https://solvangusa.com/",
    address: "Solvang, CA",
  },
  {
    id: "los-olivos",
    name: "Explore Los Olivos",
    town: "Los Olivos",
    category: "Explore",
    note: "The local chamber’s guide to galleries, shops, dining, and tasting rooms.",
    url: "https://www.losolivosca.com/",
    address: "Los Olivos, CA",
  },
  {
    id: "santa-ynez",
    name: "Santa Ynez town guide",
    town: "Santa Ynez",
    category: "Explore",
    note: "Plan a visit with the valley tourism organisation’s town guide.",
    url: "https://www.visitsyv.com/",
    address: "Santa Ynez, CA",
  },
];
