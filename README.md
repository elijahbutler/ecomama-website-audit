# Ecomama Farms (`ecomamafarms.com`) — Full Website Audit, Asset Archive, 1:1 Rebuild & 2026 Re-Design

This repository contains the complete 14-page website audit, local image archive (all 99 unique images), verbatim copy deck, 1:1 original Squarespace rebuild, and 2026 luxury editorial re-design for **Ecomama Farms** (`https://www.ecomamafarms.com/`).

## Deliverables Included

1. **[`AUDIT_REPORT.md`](./AUDIT_REPORT.md)** — Comprehensive 14-page audit covering:
   - Critical cross-page factual contradictions (e.g., 1,200 vs 1,500+ vs 2,500+ heirloom roses; conflicting phone numbers `(805) 894-1477` vs `805-350-0073`; `"Currently under construction"` notice on `/vignettes`; capacity discrepancies 180 vs 150).
   - Broken & insecure links (`/privacy-policy-1` 301 redirect to HTTP, `http://linkedin.com/...`).
   - Asset & performance audit (16+ raw macOS PNG desktop screenshots up to 4.23 MB each; 68 MB total image payload).
   - SEO & WCAG accessibility audit (missing meta descriptions on 4 pages, multiple `<h1>` tags per page, AI-hallucinated logo `alt` text, `2.78:1` sage text contrast failure).
   - Complete **2026 Editorial Re-Design System** & conversion strategy.

2. **[`SITE_COPY_AND_ASSETS.md`](./SITE_COPY_AND_ASSETS.md)** — Verbatim copy deck, typography/color tokens, form schemas, and image mappings for all 14 pages.

3. **[`public/images/`](./public/images/)** — All **99 unique images** downloaded locally from `images.squarespace-cdn.com` along with [`public/images/manifest.json`](./public/images/manifest.json).

4. **Interactive Dual-Mode Web Application (`src/`)** — Built with React 18, TypeScript, Vite, React Router, and Tailwind CSS:
   - **2026 Re-Design Mode**: Elevated Santa Ynez luxury editorial aesthetic (`Cormorant Garamond` + `Plus Jakarta Sans`), WCAG AA-compliant tokens (`#4E6745` sage, `#252A26` forest obsidian, `#F6F3EE` alabaster), interactive Estate Vignettes Explorer with capacity & power specs, interactive Seasonal Bloom Calendar, transparent Venue Investment & Package comparison, and multi-step Inquiry Concierge.
   - **1:1 Original Rebuild Mode**: Faithful recreation of the original Squarespace 7.1 layout, copy, and visual tokens (`Old Standard TT` + `Poppins`, `#78926E` sage, `#F4F1EE` cream) for instant side-by-side comparison on any page.
   - **Interactive Page Audit Inspector Drawer**: Slide-out drawer displaying page-by-page audit findings, severity badges, and before/after fixes for whichever route you are viewing.

## All 14 Rebuilt & Re-Designed Routes

- `/` (`/home`) — Homepage
- `/venue` — Venue Overview & Package Architecture
- `/vignettes` — 6 Estate Vignettes Explorer
- `/services` — Venue Rental, Full Service & Partial Planning
- `/the-farm` — Regenerative Farm, Animals, Orchard & Roses
- `/gatherings` — Workshops, Dinners & Private Gatherings
- `/floral` — 100% Organic Garden Roses & Seasonal Florals
- `/explore` — Santa Ynez Valley Guide
- `/local-recommendations` — Filterable Curated Concierge Guide (Eat, Drink, Stay, Do)
- `/about` — About Ecomama Farms
- `/our-story` — Founder Story & Regenerative Vision
- `/sustainability` — Regenerative Agriculture Pillars
- `/contact` — Event & General Inquiry Concierge
- `/partner-with-us` — Vendor, Planner & Retreat Partnerships
- `/privacy-policy` (and redirect from `/privacy-policy-1`) — Legal & Privacy Policy

## Running Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```
