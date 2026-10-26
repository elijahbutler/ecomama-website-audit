import { describe, expect, test } from "bun:test";
import { existsSync } from "node:fs";
import {
  getVenueGalleries, getFloralGalleries, getFarmPractices, getSiteSettings,
  srcSetForImage, urlForImage,
} from "../src/lib/sanity";

const image = {
  _type: "websiteImage",
  asset: { _type: "reference", _ref: "image-abc123-1800x1200-jpg" },
  alt: "Roses in the garden",
  caption: "Spring flowers",
  photographerCredit: "Farm team",
};
const venue = {
  _id: "rose-garden", _type: "venueGallery", title: "Garden ceremony",
  location: "Heart of the Rose Garden", slug: { current: "garden-ceremony" }, images: [image],
};

describe("Sanity content loaders", () => {
  test("published gallery becomes responsive WebP content with image credits", async () => {
    const result = await getVenueGalleries(async () => [venue]);
    expect(result.source).toBe("sanity");
    expect(result.entries[0]).toMatchObject({ title: "Garden ceremony", slug: "garden-ceremony",
      photos: [{ alt: "Roses in the garden", caption: "Spring flowers", photographerCredit: "Farm team" }] });
    const url = new URL(result.entries[0].photos[0].src);
    expect(url.pathname).toBe("/images/ocp45god/production/abc123-1800x1200.jpg");
    expect(url.searchParams.get("fm")).toBe("webp");
    expect(url.searchParams.get("w")).toBe("960");
    expect(result.entries[0].photos[0].srcSet).toContain(" 1600w");
  });

  test("floral and practice documents retain their fields", async () => {
    const floral = await getFloralGalleries(async () => [{ _id: "flower", _type: "floralGallery", season: "Spring", cultivar: "Garden rose", notes: "First flush", photos: [image] }]);
    expect(floral).toMatchObject({ source: "sanity", entries: [{ title: "Garden rose", label: "Spring", description: "First flush" }] });
    const practices = await getFarmPractices(async () => [{ _id: "soil", _type: "farmPractice", title: "Soil care", category: "Compost", description: "Returning organic matter", photos: [image] }]);
    expect(practices).toMatchObject({ source: "sanity", entries: [{ title: "Soil care", label: "Compost", description: "Returning organic matter" }] });
  });

  for (const [name, reader] of [
    ["empty", async () => []],
    ["network failure", async () => { throw new Error("offline"); }],
    ["invalid payload", async () => ({ error: "unavailable" })],
    ["invalid image", async () => [{ ...venue, images: [{ ...image, asset: { _ref: "bad" } }] }]],
  ] as const) {
    test(`${name} returns usable local content for every collection`, async () => {
      const venueResult = await getVenueGalleries(reader);
      const floralResult = await getFloralGalleries(reader);
      const practiceResult = await getFarmPractices(reader);
      expect(venueResult.entries[0].title).toBe("Rose Garden");
      expect(floralResult.entries[0].title).toBe("Garden Blooms");
      expect(practiceResult.entries[0].title).toBe("Compost");
      for (const result of [venueResult, floralResult, practiceResult]) {
        expect(result.source).toBe("local");
        for (const entry of result.entries) {
          for (const photo of entry.photos) {
            expect(existsSync(`public${photo.src}`)).toBe(true);
            for (const source of photo.srcSet.split(", ")) expect(existsSync(`public${source.split(" ")[0]}`)).toBe(true);
          }
        }
      }
    });
  }

  test("invalid documents do not discard valid documents", async () => {
    const result = await getVenueGalleries(async () => [null, { ...venue, images: [] }, venue]);
    expect(result.source).toBe("sanity");
    expect(result.entries.map((entry) => entry.title)).toEqual(["Garden ceremony"]);
  });

  test("announcement defaults off and accepts an enabled message", async () => {
    expect(await getSiteSettings(async () => null)).toEqual({ _id: "siteSettings", _type: "siteSettings", announcementEnabled: false });
    expect(await getSiteSettings(async () => { throw new Error("offline"); })).toEqual({ _id: "siteSettings", _type: "siteSettings", announcementEnabled: false });
    expect(await getSiteSettings(async () => ({ _id: "siteSettings", _type: "siteSettings", announcementEnabled: true, announcement: "Open day on Saturday" }))).toMatchObject({ announcementEnabled: true, announcement: "Open day on Saturday" });
  });

  test("image helper respects crop and offers three responsive widths", () => {
    const url = new URL(urlForImage({ ...image, crop: { top: 0, bottom: 0, left: 0.25, right: 0.25 } }).width(480).url());
    expect(url.searchParams.get("rect")).toBe("450,0,900,1200");
    expect(url.searchParams.get("fm")).toBe("webp");
    expect(srcSetForImage(image).split(", ").map((part) => part.split(" ")[1])).toEqual(["480w", "960w", "1600w"]);
  });
});
