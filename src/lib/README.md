# Use Sanity content in the frontend

`sanity.ts` reads published content from project `ocp45god`, dataset `production`, through the CDN. It contains no credentials. The dataset must allow public reads, and browser origins must be allowed in the project's CORS settings. Configure those in Sanity management when deploying the website.

Call `getVenueGalleries`, `getFloralGalleries`, or `getFarmPractices` to receive `{ source, entries }`. Each entry contains a title, description, label, and photos with `src`, `srcSet`, alt text, and optional caption and photographer credit. Venue entries also have a slug.

```ts
import { getVenueGalleries, localVenueGalleries } from './sanity';

// Render localVenueGalleries immediately while the request is pending.
const result = await getVenueGalleries();
// Replace the initial entries with result.entries.
```

The loaders validate incoming documents. Empty results, unusable documents, network failures, and five-second request timeouts return local entries. A collection containing valid documents uses those documents. Local photos come from `fieldJournal.ts` and `siteContent.ts`, with responsive files in `public/images/journal`. Image download failures after a successful query remain the consuming image component's responsibility.

Call `getSiteSettings` for the singleton with document ID `siteSettings`. An unavailable or invalid setting disables the announcement. The Studio's Site settings entry edits that exact document.

Use `urlForImage(source).width(960).url()` for a WebP image URL, or `srcSetForImage(source)` for 480, 960, and 1600 pixel variants. The builder retains image crop and hotspot data. Supply both width and height for a fixed aspect ratio.

Existing pages still use their local content directly. These helpers prepare the client integration; they do not replace page content or display announcements automatically.

Run `bun test tests/sanity.test.ts` from the app directory to check successful reads, local fallbacks, image transformations, and local asset availability. Run `bun run build` to execute the existing `tsc -b && vite build` script.

See Sanity's [client configuration](https://www.sanity.io/docs/apis-and-sdks/js-client-getting-started) and [image URL builder](https://www.sanity.io/plugins/image-url) documentation.
