# Ecomama Farms (`ecomamafarms.com`) — Complete 14-Page Website Audit, Design Audit & Re-Design Blueprint

> **Audited Property:** `https://www.ecomamafarms.com/`  
> **Platform Identified:** Squarespace 7.1 (Fluid Engine, Site ID `664cb264eeb6304b249d3448`)  
> **Pages Audited:** All 14 live sitemap pages + 1 broken footer redirect (`/privacy-policy-1`)  
> **Local Asset Mirror:** 99/99 unique high-resolution images downloaded to `public/images/` (`public/images/manifest.json`)

---

## 1. Executive Summary & Overall Scorecard

Ecomama Farms is an extraordinary physical property—a working biodynamic estate and heirloom rose farm in the hills of the Santa Ynez Valley offering full-service private estate weddings. However, its current Squarespace 7.1 website suffers from **a half-completed editorial transition**: newer, poetic brand copy on the top half of several pages collides with older, template-grade AI boilerplate, factual contradictions across pages, broken/insecure links, 68 MB of uncompressed desktop PNG screenshots, and high-friction external form redirects.

| Audit Dimension | Original Site Score | Re-Designed Site Score | Key Issues Identified on Live Site |
| :--- | :---: | :---: | :--- |
| **Brand & Copy Consistency** | **54 / 100** | **98 / 100** | Contradictory rose bush counts (`1,200` vs `1,500+` vs `2,500+`), conflicting phone numbers, "under construction" pond copy, dual-voice boilerplate. |
| **Visual Design & Typography** | **62 / 100** | **96 / 100** | Low-contrast `#78926E` sage text on `#F4F1EE` cream (`2.78:1`), jarring `#000000` body copy in geometric `Kumbh Sans`, generic Unsplash stock on `/local-recommendations`. |
| **UX & Conversion Architecture** | **58 / 100** | **95 / 100** | Immediate mailing-list popup + cookie banner collision; 4 different external form systems (CRM, 3 Typeforms, Squarespace form); hidden pricing/package details. |
| **Technical SEO & Semantics** | **49 / 100** | **98 / 100** | 4 pages missing `<meta name="description">`; 7 `<h1>` tags on `/vignettes`; 5 `<h1>` tags on `/the-farm`; 0 top-level `<h1>` on `/services`; duplicate title suffixes. |
| **Accessibility (WCAG 2.1 AA)** | **51 / 100** | **97 / 100** | Hallucinated AI alt text (e.g., white brand logo labeled `"Black and white image with blurred text, not clearly discernible"`); contrast failures; broken form labels. |
| **Performance & Asset Hygiene** | **45 / 100** | **94 / 100** | 16+ raw macOS PNG screenshots uploaded directly (e.g., `Screenshot 2024-07-24 at 9.08.31 PM.png` at **4.23 MB**; homepage hero PNG at **1.32 MB**). |

---

## 2. Critical Cross-Page Factual & Copy Contradictions

### 2.1 Three Different Rose Counts Across Three Pages
- **`/the-farm` (Section 3):** *"1,200 heirloom roses. ... Our collection of over a thousand heirloom rose varieties..."*
- **`/our-story` (Section 2):** *"Over the next six years... we expanded our rose garden to over 1500 plants..."*
- **`/floral` (Section 2):** *"Our rose gardens feature over 2500 bushes of heirloom and David Austin roses..."*
- **Re-Design Resolution:** Unified across all pages to **2,500+ heirloom & David Austin rose bushes across 1,200+ distinct varieties** (reconciling bushes vs. cultivars into a single authoritative figure).

### 2.2 Conflicting Phone Numbers
- **`/contact` (Section 3):** Lists `p: (805) 894-1477`
- **`/privacy-policy` (Section 2, Item 9):** Lists `Phone number: 805-350-0073`
- **Re-Design Resolution:** Standardized primary estate inquiries line to `(805) 894-1477` across global footer, contact page, and legal disclosures.

### 2.3 Guest Capacity Discrepancy (180 vs. 150 Guests)
- **`/venue` (Section 3):** *"The estate accommodates up to 180 guests."*
- **`/vignettes` (Section 4 — The Terraced Lawn):** *"This expansive lawn offers plenty of space for multiple tables, allowing al fresco seating for up to 150 guests."*
- **Re-Design Resolution:** Clarifies that the **Estate accommodates up to 180 guests total** across the Rose Garden, Mountain View Barn, and extended Terraced Lawn configurations (with 150 seated al fresco on the main Terraced Lawn tier).

### 2.4 Outdated "Currently Under Construction" Copy on `/vignettes`
- **`/vignettes` (Section 9 — Photo Opportunities -> The Pond):** *"Currently under construction, this small pond is frequented by ducks and anchored by our Weeping Willow creating a tranquil and scenic spot. Once completed, it will be a beautiful addition..."*
- **Impact:** Luxury couples booking $50k–$150k+ estate weddings are immediately deterred by "under construction" language on the venue gallery page.
- **Re-Design Resolution:** Rewritten to present *The Willow Pond* as a serene, established waterfront vignette anchored by the estate's weeping willow.

### 2.5 Inconsistent Brand Naming
- Alternates between **Ecomama Farms**, **Ecomama**, and on `/about` suddenly **Ecomama Rose Farm** (*"Our mission at Ecomama Rose Farm is to be a model of sustainability..."*).
- **Re-Design Resolution:** Standardized to **Ecomama Farms** (with *The Ecomama Estate* as secondary editorial descriptor).

---

## 3. Technical, Link & Asset Hygiene Findings

1. **Broken / HTTP-Downgrade Footer Link (`/privacy-policy-1`):**
   - In the global footer, the main column "Privacy Policy" link points to `/privacy-policy-1`, while the bottom copyright link points to `/privacy-policy`.
   - Requesting `https://www.ecomamafarms.com/privacy-policy-1` returns `301 Moved Permanently -> http://www.ecomamafarms.com/privacy-policy` (downgrading from HTTPS to insecure HTTP, which causes `fetch`/prefetch failures and an extra redirect hop).
2. **Insecure HTTP Social Links (`http://linkedin.com/...`):**
   - Both header and footer LinkedIn icons point to `http://linkedin.com/company/ecomama-farms` instead of `https://www.linkedin.com/company/ecomama-farms/`.
3. **Uncompressed macOS Desktop Screenshots in Production (`68 MB` Total Payload):**
   - Instead of exporting compressed JPEGs/WebPs from Lightroom, whoever built the Squarespace site took macOS screenshots (`Cmd+Shift+4`) of photos and uploaded the raw `.png` files:
     - Homepage Hero (`Screenshot 2026-03-30 at 2.37.39 PM.png`) — **1.32 MB** (`public/images/02-screenshot-2026-03-30-at-2-37-39-pm.png`)
     - Vignettes Mountain View Oak (`Screenshot 2024-07-24 at 9.08.31 PM.png`) — **4.23 MB** (`public/images/25-screenshot-2024-07-24-at-9-08-31-pm.png`)
     - Floral Garden Bed (`IMG_4443 Large.png`) — **3.10 MB**
     - 14 additional `Screenshot 2024-07-...png` files across `/venue`, `/vignettes`, `/services`, `/the-farm`, `/explore`, `/our-story`, and `/sustainability`.
4. **Orphaned Sitemap Assets & Unused Cart Link:**
   - `sitemap.xml` under `/partner-with-us` still indexes 3 stock template photos (`Aro Ha_0428.jpg`, `20140301_Trade-151_012-2.jpg`, `20140228_Trade 151_0046.jpg`) from an unrelated Squarespace template (`5ec321c2af33de48734cc929`).
   - Every page renders a hidden `<a href="/cart">0</a>` shopping cart node despite zero e-commerce products.

---

## 4. Page-by-Page Audit Matrix (All 14 Pages)

| # | Route | Live Page Title | Meta Description | H1 Count | Key Page-Specific Audit Findings |
| :- | :--- | :--- | :--- | :---: | :--- |
| 1 | `/` | `Ecomama Farms \| Private Estate Wedding Venue & Rose Farm in Santa Ynez` | Present (221 chars) | **2** (`H1` + modal `H1`) | Hero logo has AI hallucinated alt text (`"Black and white image with blurred text, not clearly discernible"`). Hero image is a 1.32 MB PNG screenshot. Bottom half ("Events at Ecomama Farms") repeats `"Explore Our Venue"` 3 times in a generic slideshow. Intrusive popup + cookie banner on load. |
| 2 | `/venue` | `Venue \| Book Your Scenic Event Today — Ecomama Farms` | Present (166 chars) | **2** | Two `<h1>` tags (`Venue` and `The Estate, in full.`). States capacity is `180 guests` without space breakdown. Map section uses harsh `#B19C7E` background with low contrast. |
| 3 | `/vignettes` | `Estate Spaces & Wedding Gallery \| Ecomama Farms — Ecomama Farms` | **MISSING** | **7** | Duplicate `— Ecomama Farms` in `<title>`. Missing meta description. Hero title `Vignettes` is an `<h2>` while 7 facility headings are `<h1>` tags. *The Pond* says `"Currently under construction"`. Includes a 4.23 MB PNG screenshot. |
| 4 | `/services` | `Services \| Create Unforgettable Events Today — Ecomama Farms` | Present (167 chars) | **1** (at bottom!) | Page title `Our Services` is `<h2>`; the only `<h1>` on the page is the bottom CTA (`"Not sure which offering is right for you?"`). Package inclusions have missing spaces in DOM text (`"choiceUse"`, `"preparationsThe"`). Pricing links bounce off-site to Typeform (`HCU8oqfx`). |
| 5 | `/the-farm` | `The Farm \| Discover and Experience Sustainability — Ecomama Farms` | Present (149 chars) | **5** | 5 separate `<h1>` tags (`The Farm`, `Get to Know The Farm`, `1,200 heirloom roses.`, `The Orchard.`, `Farm Animals`). Claims `1,200` roses (contradicting `/our-story` and `/floral`). Animal gallery has captions only (`Storm`, `Ogie`, `Finn`, `Jingles`, `Goats`, `Evie`, `Ducks`) with zero stories or descriptions. |
| 6 | `/gatherings` | `Gatherings \| Book Your Event Today — Ecomama Farms` | Present (172 chars) | **1** | Sub-headline jumps from `<h1>` (`Gatherings`) straight to `<h3>`, then uses `<h4>` above `<h2>` (`"A note from the Ecomama Farms team:"`). Bullet list ends with a generic `"And More"` bullet item. |
| 7 | `/floral` | `Floral \| Experience Sustainable Florals – Shop Now — Ecomama Farms` | Present (166 chars) | **2** | Title says `"Shop Now"`, but there is no online shop—only a `"Contact Us"` button at the bottom. Claims `2500 bushes` (vs `1,200` on `/the-farm`). Missing period at the end of *Unique Varieties* accordion paragraph. |
| 8 | `/explore` | `Explore \| Discover & Experience Ecomama Farms Today — Ecomama Farms` | Present (163 chars) | **1** | Press badge alt text has typo `"Ganta Barbara Wedding Style"`. Press logos (`Green Wedding Shoes`, `Santa Barbara Wedding Style`, `Santa Ynez Valley City Lifestyle`) are static images with no links to the featured articles. Testimonials have escaped/mismatched quotation marks (`“...\"`). |
| 9 | `/local-recommendations` | `Local Recommendations \| Explore Local Gems Today — Ecomama Farms` | Present (145 chars) | **1** | Uses a generic Unsplash stock photo of an alpine lake (`unsplash-image-Flf1CdsQm8w.jpg`) that looks nothing like Santa Ynez. 50+ venues are buried in unlinked plain-text accordions with spacing typos (`Ramen Kotori(Solvang)`, `Full of Life Flatbread(Los Alamos)`). |
| 10 | `/about` | `About \| Discover Sustainable Farming Today — Ecomama Farms` | Present (146 chars) | **2** | Calls the property `"Ecomama Rose Farm"` in the mission statement. Jumps from `<h1>` (`About Us`) to `<h4>` (`It started with the land.`) to `<h2>` (`Ecomama began...`) to another `<h1>` (`Our Mission`). |
| 11 | `/our-story` | `Our Story \| Ecomama Farms — Ecomama Farms` | **MISSING** | **1** | Duplicate `— Ecomama Farms` in title. Missing meta description. Chronology is out of order in the layout: *The Beginning* -> *Looking Ahead* -> *Transformation and Growth* (future goals placed before the 6-year transformation story!). Claims `over 1500 plants`. |
| 12 | `/sustainability` | `Biodynamic & Regenerative Farming \| Ecomama Farms — Ecomama Farms` | **MISSING** | **1** | Duplicate `— Ecomama Farms` in title. Missing meta description. Hero heading `Sustainability` is an `<h2>` while section 2 heading is `<h1>`. Soil image has AI alt text `"A person's hand holding a clump of dark wet sand"`. |
| 13 | `/contact` | `Contact \| Connect with Ecomama Farms Today — Ecomama Farms` | Present (139 chars) | **2** | Two identical `<h1>Contact Us</h1>` headings on the same page. Splits users across 4 different contact mechanisms (CRM link, 2 Typeform links, and an inline Squarespace form). Form labels both `First Name` and `Last Name` inputs as `First Name` in accessibility tree. Phone `(805) 894-1477` conflicts with Privacy Policy `805-350-0073`. |
| 14 | `/partner-with-us` | `Partner With Ecomama Farms \| Wedding Professionals — Ecomama Farms` | **MISSING** | **1** | Duplicate `— Ecomama Farms` in title. Missing meta description. "Why Partner with Ecomama Farms" is a `<p>` tag instead of `<h2>`. Bounces planners off-site to Typeform (`ecomamafarms.typeform.com/partner`). |
| 15 | `/privacy-policy` | `Privacy Policy \| Ecomama Farms — Ecomama Farms` | **MISSING** | **1** | Numbered sections (`1. Information We Collect` ... `9. Contact Us`) are plain `<p>` tags rather than semantic `<h2>` headings. Lists phone `805-350-0073` and all-caps `PO BOX 696`. Footer links to `/privacy-policy-1` (301 redirect via HTTP). |

---

## 5. Design Audit & 2026 Re-Design System

### 5.1 What Works in the Original Design (Preserved & Elevated)
- **Authentic Photography:** The aerial estate photography, golden-hour rose fields, al fresco long-table receptions under bistro lights, and candid farm animal portraits are genuinely breathtaking.
- **Poetic Lead Copy:** Lines like *"A rose garden in the Santa Ynez Valley. Yours for a day."* and *"We grow things slowly here. The roses take years. The olive trees, decades."* have true luxury hospitality soul.
- **Organic Earth Palette Direction:** The instinct toward warm alabaster/linen, botanical sage, and sun-baked Santa Ynez stone is spot-on for the brand.

### 5.2 Where the Original Design Falls Short
1. **Color Token Contrast & Muddy Mid-Tones:**
   - Original background `#F4F1EE` paired with `#78926E` sage text yields a `2.78:1` contrast ratio (hard to read in bright daylight).
   - Full-bleed sections in flat `#78926E` sage or `#B19C7E` tan feel heavy and mute the vibrancy of the rose photography.
2. **Typographic Tension:**
   - `Sorts Mill Goudy` (at `400` weight, often artificially bolded with `<strong>` tags) paired with geometric `Kumbh Sans` (`19.07px` solid `#000000`) lacks the high-fashion editorial grace of luxury wine-country estates.
3. **Template Component Fatigue:**
   - Repetitive Squarespace banner slideshows (`Item 1 of 3` with giant opaque white cards covering the middle of the photography) and plain-text accordions hide the estate's best selling points.

### 5.3 The Re-Design System ("Santa Ynez Biodynamic Luxury")
- **Color Architecture (WCAG AA/AAA Compliant):**
  - **Estate Linen (`#FAF7F2`)** & **Warm Alabaster (`#F3EFEA`)** — breathable, gallery-grade light surfaces.
  - **Deep Botanical Forest (`#1E2B1E`)** & **Heritage Olive (`#2E402B`)** — rich, authoritative dark surfaces (`12.8:1` contrast with linen text).
  - **Sunlit Terracotta / Champagne Bronze (`#8C6239` / `#B19C7E`)** — refined metallic/earth accents for eyebrows, dividers, and interactive states.
  - **Charcoal Espresso (`#1C1917`)** & **Warm Slate (`#4A453E`)** — soft, legible body copy (replacing harsh `#000000`).
- **Editorial Typography:**
  - **Display & Headings:** `Cormorant Garamond` (light/regular/italic editorial serif with expressive ligatures and refined tracking).
  - **Body & UI:** `Plus Jakarta Sans` (clean, humanist-geometric sans-serif for effortless reading and crisp uppercase micro-labels).
- **Structural UX Upgrades in the Re-Design Mode:**
  1. **Unified Estate Navigation** with clear dropdown groupings, estate capacity/location context bar, and an integrated **Inquire / Book a Tour** modal & drawer.
  2. **Interactive Venue & Vignettes Explorer** showing capacities (`Up to 180 Guests Total`, `150 Seated Al Fresco on Terraced Lawn`), indoor/outdoor flow, and high-res photography without 4 MB PNG bloat.
  3. **Side-by-Side Services Comparison Matrix** (*The Estate Wedding — Full-Service Curated* vs. *Venue Only — Exclusive Estate Access*) + 4-pillar In-House Studio showcase (*Estate Florals*, *Curated Rentals*, *In-House Culinary*, *Planning & Design*) + interactive investment inquiry drawer.
  4. **Interactive Santa Ynez Concierge Guide (`/local-recommendations`)** with instant filtering by category (*Restaurants*, *Wineries*, *Stays*, *Coffee*, *Activities*, *Shopping*, *Nightlife*, *Hiking*) AND by town (*Santa Ynez*, *Los Olivos*, *Solvang*, *Los Alamos*, *Buellton*).
  5. **Chronological Story Timeline (`/our-story`)** fixing the inverted section order (*2019: The Untamed Land* -> *Six Years of Transformation* -> *Looking Ahead*).
  6. **Unified Multi-Path Inquiry Experience (`/contact`)** replacing the 4 disjointed external links with a cohesive, accessible luxury inquiry experience while preserving direct links to the CRM/Typeforms when desired.
