import { LOCAL_RECOMMENDATIONS_DATA } from "./siteContent";
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
    text: "Cover crops protect the ground between plantings, and their roots hold the soil together so it can take in water and air.",
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
export type GuideCategory = "Stay" | "Wine" | "Eat & Drink" | "Activities";
export const guideCategories: GuideCategory[] = ["Stay", "Wine", "Eat & Drink", "Activities"];
export type GuidePlace = {
  id: string;
  name: string;
  town: string;
  category: GuideCategory;
  kind: string;
  url?: string;
};
/** Maps each list from the farm's original recommendations page to a guide category. */
const guideSources: Record<string, { category: GuideCategory; kind: string }> = {
  "Places to Stay": { category: "Stay", kind: "Place to stay" },
  "Wineries & Wine Tasting": { category: "Wine", kind: "Winery & tasting" },
  Restaurants: { category: "Eat & Drink", kind: "Restaurant" },
  "Coffee Shops": { category: "Eat & Drink", kind: "Coffee & bakery" },
  "Bars & Nightlife": { category: "Eat & Drink", kind: "Bar & brewery" },
  Activities: { category: "Activities", kind: "Outing" },
  Hiking: { category: "Activities", kind: "Hike" },
  Shopping: { category: "Activities", kind: "Shop" },
};
/** Official websites checked October 26, 2026. Other places link to a map search. */
const guideWebsites: Record<string, string> = {
  "Bob’s Well Bread": "https://www.bobswellbread.com/",
};
const slug = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export const valleyPlaces: GuidePlace[] = ([
  ...LOCAL_RECOMMENDATIONS_DATA.flatMap(({ category, items }) => {
    const source = guideSources[category];
    if (!source) return [];
    return items.map((item): GuidePlace => ({
      id: slug(`${item.name}-${item.town}`),
      name: item.name,
      town: item.town,
      category: source.category,
      kind: source.kind,
      url: guideWebsites[item.name],
    }));
  }),
  { id: "solvang", name: "A day in Solvang", town: "Solvang", category: "Activities", kind: "Town guide", url: "https://solvangusa.com/" },
  { id: "los-olivos", name: "Explore Los Olivos", town: "Los Olivos", category: "Activities", kind: "Town guide", url: "https://www.losolivosca.com/" },
  { id: "santa-ynez", name: "Santa Ynez Valley guide", town: "Santa Ynez", category: "Activities", kind: "Town guide", url: "https://www.visitsyv.com/" },
] satisfies GuidePlace[]).sort((a, b) => guideCategories.indexOf(a.category) - guideCategories.indexOf(b.category));
