import { createClient } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { places, soilNotes } from "../data/fieldJournal";
import { FLORAL_GALLERY } from "../data/siteContent";

/** Public, published content only. Never put a write token in this browser client. */
export const sanityClient = createClient({
  projectId: "ocp45god",
  dataset: "production",
  apiVersion: "2026-10-01",
  useCdn: true,
  perspective: "published",
  timeout: 5000,
  maxRetries: 0,
});
const imageBuilder = createImageUrlBuilder(sanityClient);

/** Chain width/height before url() to preserve Sanity's crop and hotspot handling. */
export function urlForImage(source: SanityImageSource) {
  return imageBuilder.image(source).format("webp").quality(80).fit("max");
}

export function srcSetForImage(source: SanityImageSource) {
  return [480, 960, 1600].map((width) => `${urlForImage(source).width(width).url()} ${width}w`).join(", ");
}

export type SanityPhoto = {
  _type: "websiteImage";
  asset: { _type: "reference"; _ref: string };
  alt: string;
  caption?: string;
  photographerCredit?: string;
  hotspot?: { x: number; y: number; width: number; height: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};
export type VenueGallery = {
  _id: string;
  _type: "venueGallery";
  title: string;
  location: string;
  slug: { current: string };
  images: SanityPhoto[];
};
export type FloralGallery = {
  _id: string;
  _type: "floralGallery";
  season: "Spring" | "Summer" | "Autumn" | "Winter";
  cultivar: string;
  notes?: string;
  photos: SanityPhoto[];
};
export type FarmPractice = {
  _id: string;
  _type: "farmPractice";
  title: string;
  description: string;
  category: "Compost" | "Beneficials" | "Heritage Animals" | "Orchard" | "Water";
  photos: SanityPhoto[];
};
export type SiteSettings = {
  _id: string;
  _type: "siteSettings";
  announcementEnabled: boolean;
  announcement?: string;
};

/** Both CMS and local records become this renderable shape. */
export type ContentPhoto = {
  src: string;
  srcSet: string;
  alt: string;
  caption?: string;
  photographerCredit?: string;
};
export type ContentEntry = {
  id: string;
  title: string;
  description: string;
  label: string;
  slug?: string;
  photos: ContentPhoto[];
};
export type ContentResult = { source: "sanity" | "local"; entries: ContentEntry[] };

function localPhoto(file: string, alt: string): ContentPhoto {
  const name = file.replace(/^.*\//, "").replace(/\.[^.]+$/, "");
  return {
    src: `/images/journal/${name}-960.webp`,
    srcSet: [480, 960, 1600].map((width) => `/images/journal/${name}-${width}.webp ${width}w`).join(", "),
    alt,
  };
}
export const localVenueGalleries: ContentEntry[] = places.map((place) => ({
  id: place.id, title: place.name, description: place.detail, label: place.name,
  slug: place.id, photos: [localPhoto(place.image, place.alt)],
}));
export const localFloralGalleries: ContentEntry[] = FLORAL_GALLERY.map((photo, index) => ({
  id: `local-floral-${index}`, title: photo.tag, description: "", label: photo.tag,
  photos: [localPhoto(photo.src, photo.alt)],
}));
export const localFarmPractices: ContentEntry[] = soilNotes.map((note) => ({
  id: note.id, title: note.name, description: note.text, label: note.name,
  photos: [localPhoto(note.image, note.alt)],
}));

function record(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function text(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}
function optionalText(value: unknown): value is string | undefined {
  return value === undefined || typeof value === "string";
}
function fraction(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= 1;
}
function isPhoto(value: unknown): value is SanityPhoto {
  if (!record(value) || value._type !== "websiteImage" || !record(value.asset) ||
    value.asset._type !== "reference" || !text(value.asset._ref) ||
    !/^image-[a-zA-Z0-9]+-[1-9]\d*x[1-9]\d*-[a-zA-Z0-9]+$/.test(value.asset._ref) ||
    !text(value.alt) || !optionalText(value.caption) || !optionalText(value.photographerCredit)) return false;
  const { hotspot, crop } = value;
  return (hotspot === undefined || (record(hotspot) && fraction(hotspot.x) && fraction(hotspot.y) && fraction(hotspot.width) && fraction(hotspot.height))) &&
    (crop === undefined || (record(crop) && fraction(crop.top) && fraction(crop.bottom) && fraction(crop.left) && fraction(crop.right) && crop.top + crop.bottom < 1 && crop.left + crop.right < 1));
}
function photos(value: unknown): value is SanityPhoto[] {
  return Array.isArray(value) && value.length > 0 && value.every(isPhoto);
}
function isVenue(value: unknown): value is VenueGallery {
  return record(value) && text(value._id) && value._type === "venueGallery" && text(value.title) &&
    text(value.location) && record(value.slug) && text(value.slug.current) && photos(value.images);
}
function isFloral(value: unknown): value is FloralGallery {
  return record(value) && text(value._id) && value._type === "floralGallery" &&
    (value.season === "Spring" || value.season === "Summer" || value.season === "Autumn" || value.season === "Winter") &&
    text(value.cultivar) && optionalText(value.notes) && photos(value.photos);
}
function isPractice(value: unknown): value is FarmPractice {
  return record(value) && text(value._id) && value._type === "farmPractice" && text(value.title) && text(value.description) &&
    (value.category === "Compost" || value.category === "Beneficials" || value.category === "Heritage Animals" || value.category === "Orchard" || value.category === "Water") && photos(value.photos);
}
function isSettings(value: unknown): value is SiteSettings {
  return record(value) && text(value._id) && value._type === "siteSettings" &&
    typeof value.announcementEnabled === "boolean" && optionalText(value.announcement) &&
    (!value.announcementEnabled || text(value.announcement));
}
function cmsPhoto(photo: SanityPhoto): ContentPhoto {
  return { src: urlForImage(photo).width(960).url(), srcSet: srcSetForImage(photo),
    alt: photo.alt, caption: photo.caption, photographerCredit: photo.photographerCredit };
}

/** Injectable reader lets tests exercise failures without changing the production client. */
export type ContentReader = (query: string) => Promise<unknown>;
const readContent: ContentReader = (query) => sanityClient.fetch<unknown>(query);
async function loadEntries<T>({ type, isDocument, toEntry, fallback, read }: {
  type: "venueGallery" | "floralGallery" | "farmPractice";
  isDocument: (value: unknown) => value is T;
  toEntry: (document: T) => ContentEntry;
  fallback: ContentEntry[];
  read: ContentReader;
}): Promise<ContentResult> {
  try {
    const result = await read(`*[_type == "${type}" && !(_id in path("drafts.**"))] | order(_createdAt asc, _id asc)`);
    const entries = Array.isArray(result) ? result.filter(isDocument).map(toEntry) : [];
    if (entries.length) return { source: "sanity", entries };
  } catch {
    // Offline, permission, timeout, and malformed-image failures retain local content.
  }
  return { source: "local", entries: fallback };
}
export function getVenueGalleries(read: ContentReader = readContent) {
  return loadEntries({ type: "venueGallery", isDocument: isVenue, read, fallback: localVenueGalleries,
    toEntry: (doc) => ({ id: doc._id, title: doc.title, label: doc.location, slug: doc.slug.current, description: "", photos: doc.images.map(cmsPhoto) }) });
}
export function getFloralGalleries(read: ContentReader = readContent) {
  return loadEntries({ type: "floralGallery", isDocument: isFloral, read, fallback: localFloralGalleries,
    toEntry: (doc) => ({ id: doc._id, title: doc.cultivar, label: doc.season, description: doc.notes ?? "", photos: doc.photos.map(cmsPhoto) }) });
}
export function getFarmPractices(read: ContentReader = readContent) {
  return loadEntries({ type: "farmPractice", isDocument: isPractice, read, fallback: localFarmPractices,
    toEntry: (doc) => ({ id: doc._id, title: doc.title, label: doc.category, description: doc.description, photos: doc.photos.map(cmsPhoto) }) });
}
export async function getSiteSettings(read: ContentReader = readContent): Promise<SiteSettings> {
  try {
    const value = await read('*[_type == "siteSettings" && _id == "siteSettings"][0]');
    if (isSettings(value)) return value;
  } catch {
    // No banner is the local default.
  }
  return { _id: "siteSettings", _type: "siteSettings", announcementEnabled: false };
}
