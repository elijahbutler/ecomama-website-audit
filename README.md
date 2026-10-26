# Ecomama Farms field journal

React 18 and TypeScript website for Ecomama Farms. The default design follows [the design proposal](DESIGN_AUDIT_AND_PROPOSAL.md): a working rose farm’s field journal, opened to guests.

The implementation includes an estate place selector and photo dialog, a seasonal rose reference picker, photographed table directions, a soil study, a valley guide with town and category filters, and an email-draft inquiry handoff.

The rose catalogue currently contains unidentified photo references. The estate diagram is schematic, and photographed table directions do not establish rental inventory. See [content sources and pending approvals](CONTENT_SOURCES.md).

## Run locally

Use the existing dependencies, or install them with Bun. Start a development server only when needed and after checking for an existing instance.

```sh
bun install
bun run dev
```

Build with `bun run build`. The requested `npm run build` invokes the same `tsc -b && vite build` script and was also verified.

## Routes and comparison modes

The site has 15 content routes: `/`, `/venue`, `/vignettes`, `/services`, `/the-farm`, `/gatherings`, `/floral`, `/explore`, `/local-recommendations`, `/about`, `/our-story`, `/sustainability`, `/contact`, `/partner-with-us`, and `/privacy-policy`.

`/home` aliases the homepage. `/privacy-policy-1` redirects to `/privacy-policy`.

Open `/?review=1` to show the field journal, previous design, and original recreation controls. Comparison modes are historical references, not exact live-site reproductions or proof of resolved audit findings. The public experience has no audit scores or inspector overlay.

## Inquiry behaviour

The form prepares a mailto draft for `contact@ecomamafarms.com`. Visitors review and send it in their email app. A copyable text fallback is available. No receipt or response time is claimed. The separate wedding form links to the farm’s published CRM intake.

Only stable rose, place, and table IDs enter shareable URLs. Names, email addresses, and messages stay in the form until the visitor opens or copies the draft. No local storage or server submission is used.

## Verify

Run `scripts/verify-browser.mjs` with an installed Playwright module. It intercepts requests to a reserved test hostname and serves the production files directly. It opens no server or port.

```sh
PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.mjs \
CHROME_EXECUTABLE=/absolute/path/to/chromium \
node scripts/verify-browser.mjs
```

The optional executable override is useful when the installed browser revision differs from Playwright’s default. The script writes screenshots and results to `.impeccable/review/`.

See [implementation and verification](IMPLEMENTATION_REPORT.md), [product intent](PRODUCT.md), and [design rules](DESIGN.md). The older AUDIT_REPORT.md contains historical claims superseded by the current proposal and content record.
