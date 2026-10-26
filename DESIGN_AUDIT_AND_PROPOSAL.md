# Ecomama Farms design audit and proposal

Reviewed October 26, 2026. Source baseline `9a249b6eeeb358a7d528e9cf8274cdb36c7feabb`.

## 1. Recommendation

Build the next version around the working rose farm. Let visitors see the soil, the people, the cutting, and the arranging before asking them to imagine their celebration here. The estate becomes more desirable when visitors understand what makes this particular place alive.

The recreation already has useful ingredients: pine ink, warm paper, the existing brand typography, botanical artwork, and photographs of the real property. Its weakness is composition and content hierarchy. Too many sections repeat the same rounded card, label, italic heading, and pill button. Materials are described more often than they are shown. The result risks resembling a premium wellness template with farm imagery.

The proposed direction is **a working farm's field journal, opened to guests**. Use generous photographs, legible captions, occasional botanical marks, and a few useful interactive studies. Keep the estate inquiry easy to find throughout.

The first release should contain an illustrated estate walk and a seasonal rose guide. Follow with a photographed table-setting study. Ambient sound and 3D belong in a later experiment, after the content and inquiry flow work.

## 2. Evidence and limits

This is an audit and proposal. No application source, dependencies, live content, or infrastructure were changed.

| Evidence | Coverage |
| --- | --- |
| Current source | All four files in `src/pages/`, both shared component files, `src/index.css`, routing, content data, package manifest, font imports, and image inventory |
| Historical documentation | `AUDIT_REPORT.md`, `README.md`, and the presence of the copy and asset archive |
| Live content | Browser DOM inspection of all 15 distinct content routes listed below. Saved in [live content evidence](audit-evidence/live-content-2026-10-26.json). Collapsed accordion content is not always included in that export. |
| Live visual evidence | Desktop screenshots inspected for the homepage, newsletter interruption, farm opening, and floral opening. The floral accordion was opened to verify its 2,500-bush claim. |
| Independent assessment | Separate source review and detector/contrast/asset assessment by GPT-6.1 Sol agents; consequential findings checked against source by the lead reviewer |
| Mechanical scan | `impeccable detect --json src` returned one Montserrat warning. It did not identify the form or contrast failures described here. |
| Local rendering | No working frontend server found. The process in this checkout on port 3025 was a browser-tools service and returned `Cannot GET /`. Port 5173 belonged to another project. No server or production build was started. |

The T3 preview screenshot call failed twice. Chrome provided the desktop visual inspection. A requested narrow preview viewport did not take effect: the page still reported 1440 × 1000. Mobile layout, touch gestures, local rendered appearance, screen-reader behavior, performance timings, and actual form delivery remain unverified. Source findings are labeled accordingly; this document is not a WCAG certification or a performance score.

The historical report calls this a 14-page audit, but its matrix lists 15 content routes. Its numerical redesign scores are unsupported by reproducible measurements and should not be reused as acceptance evidence.

## 3. Live site versus current recreation

The live site has an appealing sense of place. Its irregular white wordmark over roses and the Santa Ynez mountains is more distinctive than many hospitality sites. Its best writing is plain and specific. However, the opening photograph delays the useful proposition until the next section, and a newsletter modal interrupts that section while the cookie banner remains visible.

The recreation improves consistency and adds real category filtering. It also replaces some of the live site's strongest language with phrases such as "Where Earth's Beauty & Memorable Gatherings Converge" and "tactile sanctuary." Those phrases consume attention without explaining the farm.

| Page | Live observation | Current source and proposed direction |
| --- | --- | --- |
| [Home](https://www.ecomamafarms.com/) | Full photographic opening with two logo treatments; direct rose-garden proposition below; repetitive venue carousel; newsletter and cookie overlays collide | Default `organic` mode introduces botanical cards and an estate-first CTA. Lead with the working farm, a current field photograph, and two clear paths to farm and gatherings. |
| [Venue](https://www.ecomamafarms.com/venue) | Says four event spaces and up to 180 guests; broadly descriptive map/location copy | Source presents six facilities, including preparation rooms. Distinguish event spaces from support rooms and show how a day moves between them. |
| [Vignettes](https://www.ecomamafarms.com/vignettes) | Seven main-level headings; lawn says 150 seated; pond still says under construction | Local category filtering is useful. Add a spatial explorer and verified per-space facts. Do not turn the pond into a completed attraction through copy alone. |
| [Services](https://www.ecomamafarms.com/services) | Estate Wedding and Venue Only offers; pricing goes to Typeform; supporting services sit in accordions | Local three-tier offer needs reconciliation with the owner's actual offering. Use a readable inclusions comparison with clear exclusions and inquiry handoff. |
| [The farm](https://www.ecomamafarms.com/the-farm) | Strong farm-first introductory idea; five main-level headings; says 1,200 roses; orchard and compost content provide real substance | Keep the practices and animal content. Replace uniform marketing modules with field notes, photographs of work, and seasonal observations. |
| [Gatherings](https://www.ecomamafarms.com/gatherings) | Mentions past yoga, dinners, birthdays, and painting retreats | Separate past experiences, private commissions, and currently bookable dates. Do not imply that a workshop schedule or pottery offering exists without approval. |
| [Floral](https://www.ecomamafarms.com/floral) | Expanded accordion confirms over 2,500 bushes; title says "Shop Now" although the path ends in an inquiry | Local gallery filters exist. A bloom calendar does not. Replace the twelve decorative brand-kit tiles with a small, real rose field guide and explicit inquiry options. |
| [Explore](https://www.ecomamafarms.com/explore) | Testimonials, press imagery, and a local-guide link compete under a vague title | Give this page a clear role as stories and visits, or reduce it to navigation into those destinations. Retain attributed testimonials and link verified press articles. |
| [Local recommendations](https://www.ecomamafarms.com/local-recommendations) | Eight collapsed categories hide the practical information | Local category filtering improves scanning, but cards lack destination links and town filtering. Add verified websites/directions and short personal recommendations. |
| [About](https://www.ecomamafarms.com/about) | Land-first introduction followed by broad mission copy | Introduce the people who grow and host, with portraits and specific responsibilities. Avoid duplicating the story and sustainability pages. |
| [Our story](https://www.ecomamafarms.com/our-story) | Founded in 2019; "Looking Ahead" precedes growth; says over 1,500 plants | Local chronology is clearer, but the shared hero says `EST. 2020`. Use an approved timeline with dated images. |
| [Sustainability](https://www.ecomamafarms.com/sustainability) | Useful specifics about compost, irrigation, and cover crops beneath generic introductory copy | Build a photographed soil-to-rose explanation. Distinguish practices from certification and measured outcomes. |
| [Contact](https://www.ecomamafarms.com/contact) | Wedding CRM, event Typeform, floral Typeform, and general form create separate paths | Local form unifies the appearance but does not transmit inquiries. Repair this before treating the recreation as a working replacement. |
| [Partners](https://www.ecomamafarms.com/partner-with-us) | Broad collaboration benefits with an external intake path | Give planners a concise working brief, approved logistics, credits, and a dedicated inquiry reason. |
| [Privacy](https://www.ecomamafarms.com/privacy-policy) | Phone differs from contact page; section labels are not headings | Make contact facts consistent after verification. Preserve a compact reading layout and review policy text against the eventual intake and analytics implementation. |

## 4. Findings that affect the next design

Priorities refer to the proposed replacement site. P0 blocks real visitor use, P1 belongs before release, P2 belongs in the design revision, and P3 is optional polish.

### P0. The inquiry success state is false

`src/pages/ContactAndLegalPages.tsx:109` handles submission by preventing the browser action and setting local state. At line 104, the resulting message claims receipt and a response within 24 hours. The private-tour modal at `src/components/Layout.tsx:1128` also only displays an alert.

A visitor can complete the form and believe the farm has received an inquiry when nothing was sent. The smallest safe interim change is to identify the form as a demonstration and direct visitors to a verified existing intake path. The finished design needs one agreed intake contract, pending/error/retry states, and a success message only after server acceptance. A calendar preference is not a reservation.

### P1. Decorative claims have become operational promises

The user brief establishes a working biodynamic rose farm with 2,500+ heirloom bushes. It does not establish 1,200 cultivars, pottery classes, a natural-dye studio, or wheel-thrown tables.

`AUDIT_REPORT.md:31` combines conflicting bush counts into a new cultivar claim. `src/pages/FarmAndFloralPages.tsx:630` publishes that claim. `src/data/siteContent.ts:390` adds "180 Extended" to the lawn's capacity. `src/pages/HomeAndVenuePages.tsx:93` describes hand-thrown stoneware tables, and line 125 names a natural-dye studio.

These details shape booking expectations. Keep the approved 2,500+ bush figure, label historical counts by date where useful, and confirm every other capacity or service. Stoneware should describe photographed vessels or tableware, unless tables made by that process actually exist. The live site's pond construction notice remains evidence of a content discrepancy, not proof of its current physical condition.

### P1. The new accent color fails on small text and buttons

The ratios below use the standard sRGB relative-luminance calculation for the exact opaque hex pairs. They do not measure text over photographs, transparency, or rendered focus rings.

| Pair | Ratio | Appropriate use |
| --- | ---: | --- |
| Pine `#0E2725` on parchment `#FEF9EF` | 14.98:1 | Strong normal-text pairing |
| Ochre `#A7713F` on parchment | 3.94:1 | Fails 4.5:1 normal-text AA; reserve for nonessential decoration or qualifying large text |
| Ochre on aged paper `#F5EEE1` | 3.58:1 | Same restriction |
| Proposed dark ochre `#8E5D30` on parchment | 5.32:1 | Suitable candidate for small text and filled buttons |
| Live sage `#78926E` on cream `#F4F1EE` | 3.04:1 | Fails normal-text AA; passes the 3:1 large-text threshold for this exact pair |

The primary button uses 15px parchment text on ochre at `src/index.css:290`. The stamp and eyebrow use 11px and 12px ochre text at lines 178 and 188. Use pine for small text, and promote the existing darker hover color to the normal button color. Test all states afterward.

The historical report's 2.78:1 result for the specified sage/cream pair is inaccurate. It should not be used to declare every large sage heading a failure.

### P1. Form and modal accessibility are incomplete in source

The contact inputs at `src/pages/ContactAndLegalPages.tsx:135` depend on placeholders instead of visible labels. The select at line 163 has no accessible name. The tour modal at `src/components/Layout.tsx:1096` lacks dialog semantics, managed focus, Escape dismissal, and a named close button.

Use visible labels, sensible autocomplete, associated field errors, and an announced status. Use an established dialog implementation or a carefully tested native dialog. Keep the full contact page as the primary path so a modal is never required to inquire.

### P2. Farm-first positioning is not reflected in the hierarchy

Home's primary CTA goes to the venue at `src/pages/HomeAndVenuePages.tsx:95`, and its first major card is the venue. Desktop navigation places Venue, Vignettes, and Services before The Farm at `src/components/Layout.tsx:327`.

A farm visitor should see growing and harvesting first; a couple should still find Gatherings immediately. Change the order and section emphasis together. Reordering the navigation alone will not solve this.

### P2. The system repeats an apothecary template

`src/index.css:79` creates a regular dotted background. Cards at line 196 repeat that texture, a border, and 24px corners. Photos at line 255 repeat 24px corners; buttons and inputs use pills. A mechanically repeated dot grid does not resemble paper fibers or clay.

The floral archive at `src/pages/FarmAndFloralPages.tsx:642` explicitly exposes the brand kit to visitors. This is decoration presented as content. Use one botanical drawing beside relevant material, with decorative alt text where appropriate. Save specimen numbering for real, identified specimens.

Keep shared spacing and interaction rules. Vary the editorial composition: an unframed landscape, a portrait with a caption, a narrow field note, a spatial map, then a broad table photograph. Consistency should come from typography and alignment, not identical containers.

### P2. Task pages inherit a near-full-screen hero

`src/components/ReferoComponents.tsx:42` assigns `86vh` even when `fullHeight` is false. Contact and local recommendations use that variant before their tools. Visitors returning to send an inquiry or find a restaurant must pass a promotional opening again.

Introduce separate home, editorial, and compact header variants. Contact should expose its purpose selector and first field in the initial viewport at ordinary desktop and mobile sizes. The guide should expose a category control and useful results immediately.

### P2. Images remain expensive source assets

The homepage still references the 1,322,236-byte PNG at `src/pages/HomeAndVenuePages.tsx:84`. The shared image at `src/components/ReferoComponents.tsx:46` has a single source. No `srcSet`, `sizes`, or lazy-loading attributes were found under `src`.

The local archive contains 116 raster images and a manifest, totaling 74,001,480 bytes. Sixteen images exceed one million bytes. These are disk totals, not a homepage transfer measurement. The 4,225,452-byte vignette PNG is a useful optimization target.

Produce responsive image variants from the best available originals. Give the true hero priority, reserve image dimensions, and lazy-load lower galleries. Preserve photographic texture instead of applying a blanket blur or excessive compression.

### P2. Motion and reviewer tooling distract from the visit

The layout updates React state on every scroll at `src/components/Layout.tsx:58`, animates navigation width and padding at line 284, and rotates the rose mark at line 364. `src/index.css:58` enables smooth scrolling without a reduced-motion alternative.

Keep the wordmark legible and stable. Use a simple compact-header threshold if needed. Move the mode switcher, audit drawer, numerical scores, and "Fix Applied" labels into an explicit review environment. They are useful development tools, but do not belong in the visitor's experience.

### P2. Some promised interactions are still proposals

The local floral page filters image tags at `src/pages/FarmAndFloralPages.tsx:585`; it is not a bloom calendar. The local guide filters categories at `src/pages/ExploreAndAboutPages.tsx:181`, but its cards at line 253 have no destination links. The vignettes page filters facilities and photo locations; it is not a spatial estate map.

The next specification should distinguish implemented, verified, and proposed features. Retain the working filters and build from them.

## 5. Art direction and design system

### Materials should be visible in the photography

Commission a small documentary shoot of the actual farm rather than adding more stock scenes. Prioritize hands tying stems, morning harvest buckets, soil and roots, worn tools, a linen fold, a glazed vessel, and a table being set. Include faces, working clothing, imperfect petals, and the dry hills around the cultivated garden.

California wine country should appear through the real light, terrain, vegetation, and local makers. Do not add an on-property vineyard to a map because vineyards occur nearby. Beeswax, handmade ceramics, and natural dyes are proposed material references until their actual use and provenance are confirmed.

Keep the existing expressive wordmark. Pair it with clear typography and less ornament. Avoid faux handwriting for body copy, torn-paper edges around every section, drifting petals, fake film dust, and constant cursor effects.

### Color roles

Keep the current palette, but reduce competing surface tokens and give each a job.

| Role | Candidate | Use |
| --- | --- | --- |
| Main paper | `#FEF9EF` | Most reading surfaces |
| Alternate paper | `#F5EEE1` | Field notes, selected study panels |
| Ink | `#0E2725` | Body, headings, navigation, primary links |
| Clay | `#D2CCBE` | Dividers, material photographs, restrained background fields |
| Ochre | `#A7713F` | Illustration accents and nonessential marks |
| Action ochre | `#8E5D30` | Candidate accessible button fill and small accent text on parchment |
| Olive and slate | Existing brand values | Small supporting accents, never assumed to be accessible text colors |

As an initial composition guide, give roughly 65% of non-photographic area to paper, 20% to clay/linen, 10% to pine, and 5% to accent. This is an art-direction starting point, not a measured current ratio or a requirement for every page. Let the roses supply most of the pink.

Use a photographed or scanned paper texture only in generous empty margins, at very low opacity. Keep fields and reading columns clean. A single texture asset is sufficient; no canvas is needed.

### Typography and layout

Retain Sorts Mill Goudy for headings and Kumbh Sans for body and controls. Their current brand role is more important than the historical report's suggestion to replace them with Cormorant and Jakarta. Montserrat can remain for a rare stamp if the brand requires it. The detector's font-popularity warning is not a reason to discard a brand choice.

Use Goudy at its real regular and italic weights. Reserve italics for a short phrase, botanical name, or quotation. Do not italicize the second half of every heading. Set ordinary body copy around 17–18px with 1.55–1.7 line height, weight 400, and near-normal tracking. Keep paragraphs near 55–70 characters wide. Replace manually spaced uppercase strings with normal text and restrained CSS tracking.

Start home headings around 44–80px responsively, section headings around 32–48px, and captions around 13–14px. Validate actual font rendering before adopting these as tokens. Keep form text at least 16px on mobile.

Use a 12-column desktop grid and a single primary mobile column. Alternate a broad 7-column photograph with a narrower 4-column text block, then reverse the visual weight in the next chapter. Use 48–64px mobile and 80–112px desktop chapter spacing as starting values. Let captions sit close to photographs.

Make most editorial photographs rectangular. Use one arched image where its shape relates to the actual rose arch. Inputs can have 6–10px corners; pill styling belongs mainly to small filters. Maintain 44px practical touch targets, visible focus, and readable labels.

### Proposed homepage sequence

| Order | Composition and purpose | Visitor action |
| --- | --- | --- |
| 1. The working rose farm | A real dawn field image; clear farm-first headline; Santa Ynez location. Place essential copy in a predictable readable area. | Explore the farm; secondary link to private gatherings |
| 2. A note from the field | One dated observation, a worker's name, and one close photograph. No dashboard of statistics. | Read the current season |
| 3. Walk the estate | Wide illustrated plan, with a useful default place already selected | Explore a location |
| 4. The rose season | A small preview of the seasonal guide and two or three real blooms | Explore roses for a season |
| 5. Gather here | An expansive table photograph and a concise account of private estate celebrations | View spaces and services |
| 6. From soil to table | Three linked observations about growing, cutting, and arranging, with photographs of work | Open a deeper farm story |
| 7. The people | A short founder note and an attributed guest account with permission | Meet the team |
| 8. Plan a visit or celebration | A compact invitation with clearly differentiated inquiry reasons | Begin an inquiry |

Keep the direct live-site rose-garden line as an option for the venue opening. For the homepage, draft copy could be: "A working rose farm in the Santa Ynez Valley." Supporting copy: "2,500+ heirloom rose bushes, living soil, and a private estate for gatherings." These are proposed edits, not published copy.

Suggested navigation is Farm, Roses, Gatherings, Our story, and Inquire. Put estate spaces and services under Gatherings; put the valley guide under visit information. Preserve existing URLs and internal links during the first revision. Any later URL consolidation needs explicit redirects and search review.

## 6. Interactive section blueprints

### A. Walk the estate

Purpose: help a visitor understand the farm and help a couple connect ceremony, dinner, and preparation spaces.

Use an original illustrated plan based on an approved aerial/site plan. Show rose beds, orchard, barns, lawn, and other approved locations. Use irregular ink lines, a few plant silhouettes, and flat muted color. Keep text and controls in HTML rather than baking them into the illustration.

On desktop, allocate about two-thirds of the section to the plan and one-third to a place detail. A numbered button opens a photograph, a short description, and confirmed practical details. A "Farm life / Gatherings" control changes the emphasis without moving the map unexpectedly. A selected location can be shared through a stable URL fragment or query value.

On mobile, show a small overview followed by a readable place list. Selecting a place opens its details below the control or in an accessible sheet. Do not require pinch zoom, precise tapping, dragging, or hover. Every map location must also be reachable in the list.

Data needs: stable place ID, display name, approved plan coordinates, purpose, photographs and credits, guest-access status, verified capacity where relevant, and separately verified path/accessibility notes. Do not infer wheelchair suitability or walking times from an aerial image.

States: initial selection, selected place, missing photo, unavailable place, and image-load failure. Provide a static annotated image and full HTML list if interactive assets fail. The first version needs SVG, React state, and CSS only.

Acceptance: keyboard and touch users can reach the same details; selected state is announced; the map does not trap page scrolling; no invented vineyard, capacities, or path claims appear. Measure whether visitors use it before beginning an inquiry, without collecting private event details in analytics.

### B. The rose year and dawn-cut selection

Purpose: explain seasonal variation and help visitors communicate floral preferences.

Replace the brand-kit specimen strip with a field guide to a manageable set of identified roses. A month or season control changes the visible examples. Each entry shows a real photograph, verified name, color description, fragrance description supplied by the grower, and typical availability language.

Separate two concepts visibly: "Typical season" and a dated "Field update." The first is educational; the second requires an editor to maintain it. If no recent update exists, show the general guide. Never calculate current blooms from the calendar alone.

Allow visitors to select up to three favorites and carry those IDs into a floral inquiry. Call this a preference list. Do not show cart, inventory, delivery, or reservation behavior until those services exist. A requested date remains subject to weather, harvest, and team confirmation.

On desktop, use a horizontal month selector and a spacious specimen grid. On mobile, use a labeled select or wrapping season buttons, followed by two columns only when captions remain readable. Use swatches with text labels; color cannot be the only identifying signal.

Data needs: cultivar IDs, owner-approved names, images and rights, broad seasonal windows, color labels, descriptions, and review dates. Include unknown season and no-results states. Preserve selected IDs when changing filters and provide a clear reset.

Use native controls and React first. Motion may provide a brief crossfade between results. Reduced motion should update directly. No date library or chart package is necessary for a small authored seasonal guide.

Acceptance: no unsupported bloom dates; no empty screen when a season has no examples; all selections survive the inquiry handoff and remain editable. A staff member must be able to update season data without touching layout code.

### C. Set a table

Purpose: show how farm-grown flowers relate to actual linen, vessels, and tableware, and give the events team a useful visual preference.

Begin with three photographed arrangements using real available materials. Photograph them from the same angle and under consistent light. Offer labeled choices for linen, vessel, and floral mood only where combinations have been photographed or can be composited honestly. Describe the maker and material when verified.

Use a large still-life image with small tactile swatches below it. Selecting a swatch updates the image and a text description. Keep the composition still enough to inspect the glaze and weave. Show "Share this direction with our team" rather than a price or guaranteed rental selection.

On mobile, keep the image above compact controls and the selected combination in plain text. Radio buttons are preferable to drag-and-drop. Include a reset and a fallback photograph. Store only non-sensitive material IDs in a shareable URL; do not put names, email addresses, or private event notes there.

Start with images and CSS. Optional later 3D can rotate one verified vessel on request, with a static alternative and an accessible description. It must not delay the primary page or become a condition of using the picker.

Data needs: approved material IDs, photographs, maker credits, permissible combinations, availability disclaimer, and a text summary. Acceptance: unavailable combinations are explained, selections transfer accurately, and no fictional rentals appear.

### D. Living soil, explained through a real bed

Purpose: make biodynamic practice understandable through the farm's actual work.

Show a photographed bed above a modest illustrated soil section. Four buttons reveal short observations about compost, roots, irrigation, and pollinators. Each observation should identify what the team does and show an associated photograph. Use a grower's voice and date where useful.

A scroll-progress animation can draw a fine line between the observations on desktop, but all text remains present in ordinary reading order. On mobile, use stacked observations. Reduced motion removes the line animation. No particle simulation or WebGL is needed.

Do not turn illustrative soil layers into a scientific measurement of this property. Publish outcomes such as water savings or carbon storage only when the farm has supporting evidence.

### E. A minute in the garden

Purpose: offer an optional sense of the place through a short field recording and accompanying photograph.

Record real birds, wind, and harvesting activity with permission. Start silent. A labeled play/pause button, duration, and volume control invite listening. Provide a written sound description and transcript for any speech. Stop playback on route exit; never resume unexpectedly.

Use native audio, with no audio bytes requested until intent where practical. Avoid synthetic birds, background music that masks speech, and automatic sound on hover. Reduced motion and audio preference are separate controls. This is a later editorial detail, not a homepage dependency.

### F. A guest's valley guide

Purpose: turn the existing recommendation list into useful trip planning.

Keep category filtering, add town selection, and provide verified website and directions links. Use a short note such as what the team likes about a place, with a review date. Start with the best maintained recommendations rather than expanding the list.

A geographic map is optional. The list should solve the task without map downloads or location permission. A hand-drawn estate plan and a regional directions map serve different purposes and should not share invented geography.

## 7. Libraries and component sources

The current app uses React 18.3, React Router 6, Tailwind 3, and Lucide. Preserve that stack for this revision. No dependency installation is part of this report. Exact versions, peer dependencies, and licenses must be checked when an implementation selects packages or assets.

| Choice | Recommendation and reason |
| --- | --- |
| SVG, CSS, native controls | Default for the estate map, season selector, textures, image swaps, and small feedback. These features do not need a new runtime. |
| Lucide | Reuse the installed package for functional arrows, close, play, and menu icons. Use the farm's own artwork for identity. |
| Motion | Add only if coordinated panel transitions or shared selection animations justify it. Current documentation supports React 18.2 and newer; import from `motion/react`. Use `MotionConfig` and `useReducedMotion` intentionally. [Installation](https://motion.dev/docs/react-installation), [accessibility](https://motion.dev/docs/react-accessibility). |
| shadcn/ui | Suitable starting point for dialog, sheet, field, and radio-group behavior. Restyle completely to the farm system. Current dialog docs offer multiple underlying implementations, so inspect compatibility with this React 18/Tailwind 3 project before copying current examples. [Dialog documentation](https://ui.shadcn.com/docs/components/dialog). |
| Embla | Optional for a user-controlled photographic sequence if CSS scroll snap is insufficient. Never autoplay essential farm stories. The official site currently distinguishes a v9 release candidate from stable 8.6.0; do not adopt a release candidate unintentionally. [Official documentation](https://www.embla-carousel.com/). |
| React Three Fiber and Drei | Defer to the optional vessel study. Fiber's official documentation pairs v8 with React 18 and v9 with React 19. Do not install its newest major into this app blindly. Load the scene only on request and inspect compatible Drei/Three versions. [Compatibility guidance](https://r3f.docs.pmnd.rs/getting-started/introduction). |
| Lenis | Defer. Native scrolling fits this site and simplifies forms, anchors, and mobile behavior. Revisit only for a tested editorial sequence with a clear benefit. [Official repository](https://github.com/darkroomengineering/lenis). |
| GSAP, confetti, p5.js | No first-release use case. The proposed map and soil story do not justify complex timeline machinery or a decorative canvas. Confetti would compete with the quiet, agricultural character. |

The preferred component sources were reviewed for fit. [Launch UI](https://www.launchuicomponents.com/) can inform simple navigation and footer structure, but its product-launch composition should not determine this site. [Magic UI's marquee](https://magicui.design/docs/components/marquee) is unnecessary for readable farm notes. [Aceternity's component catalog](https://ui.aceternity.com/components) includes comparison interactions, but a native image control may be sufficient here. [Cruip](https://cruip.com/) is useful as a layout reference; its current templates and license terms must be checked before reuse, especially where they target Tailwind 4.

The reviewed upstream repositories identify Motion, Fiber, and Embla as MIT-licensed. That does not license every photograph, font, template, premium component, or future pinned version. Retain package notices and verify the chosen release and asset rights before adoption. Sources: [Motion license](https://github.com/motiondivision/motion/blob/main/LICENSE.md), [Fiber license](https://github.com/pmndrs/react-three-fiber/blob/master/LICENSE), [Embla license](https://github.com/davidjerleke/embla-carousel/blob/master/LICENSE).

## 8. Implementation architecture and content ownership

Separate the eventual visitor site from its comparison/audit interface. `App.tsx` currently defaults to `organic`; keep the alternate modes available to reviewers until the new design is accepted, but do not load their fonts and controls into the public experience unnecessarily.

Split the large page groups only as the new sections are implemented. Suggested components are `EstateMap`, `RoseSeasonGuide`, `TableStudy`, `SoilStory`, `FieldAudio`, and `InquiryForm`. Keep their content outside their layout code. Avoid introducing a CMS solely for this proposal; an owner-editable structured file is enough for an initial version if somebody owns updates.

Create an approved facts record before expanding the copy. Each consequential field needs its value, source, review date, and owner. Priority fields include bush count, cultivar count, acreage, founding year, event-space definitions, capacities, pond status, tours, floral sales, workshops, tableware, contact addresses, and service inclusions. Avoid a generic "certified" badge without the named certification and current evidence.

The asset record should preserve source URL, photographer or illustrator, usage permission, crop/focal point, alt text, and caption separately. The existing manifest is a useful provenance start but is not proof of usage rights. Generated imagery, if later commissioned, can help explore textures or layout concepts; it should never masquerade as the actual estate, a real harvest, or an available rental.

For inquiry handoff, pass stable IDs for selected roses, places, and materials. Validate those IDs at the intake boundary and show the visitor an editable plain-language summary. Keep submission states explicit: editing, submitting, accepted, and failed. Do not add a paid booking flow under the guise of a design picker.

Record the accepted product intent in `PRODUCT.md` and the accepted tokens, component rules, motion limits, and photography direction in `DESIGN.md` during implementation. This report proposes those decisions; it does not silently replace the brand system or approve operational facts.

## 9. Delivery order and acceptance

| Phase | Work | Exit condition |
| --- | --- | --- |
| 1. Establish trust | Approve facts, correct inquiry behavior, fix contrast and labels, separate reviewer controls, reconcile documentation | No misleading success states or invented services; every primary action has an honest destination |
| 2. Establish the visual language | Farm-first home, simpler navigation, compact task headers, editorial image rhythm, responsive images, reduced motion | Rendered desktop and mobile approval of home, farm, floral, and contact; no dependence on decorative animation |
| 3. Add the signature tools | Estate walk and rose guide, then photographed table study | Real owner-approved data; complete keyboard and mobile paths; selections reach inquiry correctly |
| 4. Add depth selectively | Soil story, better valley guide, optional field audio; prototype vessel 3D only if useful | Each addition meets the page budget and improves a specific visitor task |

The largest dependencies are an approved site plan, a small identified rose catalogue, consistent material photographs, and a verified intake endpoint. These determine sequencing more than animation work does.

### Proposed performance budgets

These are targets for the implementation, not measured results from this audit. Establish a baseline on the agreed build and device profile before claiming improvement.

- Target LCP at or below 2.5 seconds, INP at or below 200ms, and CLS at or below 0.1 at the 75th percentile when field data becomes available.
- For repeatable lab checks, record the device, network throttling, cache state, build SHA, route, and median of three runs. Keep lab results separate from field results.
- Aim for initial compressed JavaScript of at most 180KB and initial homepage transfer of at most 1.2MB on the agreed mobile profile. Treat these as provisional engineering budgets to validate against the real design.
- Aim for the mobile hero image at or below 250KB and desktop hero at or below 450KB, subject to visual quality. Load only necessary font families and subsets. `index.html` currently requests six families across review modes.
- Load no audio or 3D assets on the initial route. If a 3D study is retained, target an on-demand package of at most 1.5MB including its scene and textures, then measure interaction on a representative midrange phone.
- Pause offscreen work. Animate transform and opacity where possible. Keep essential content visible before animation initializes.

### Required acceptance scenarios

Test at 360px and 390px mobile widths, 768px tablet, and 1440px desktop. Include a narrow landscape viewport, 200% zoom, keyboard-only use, and reduced motion. Viewport emulation alone does not prove touch behavior or mobile Safari compatibility.

1. A first-time visitor can identify a working rose farm and reach both farm information and private gatherings from the opening.
2. A couple can find approved capacities, see the relationship between spaces, and begin an inquiry without exploring every gallery.
3. A floral buyer can understand typical seasonality, select preferences, and see that availability needs confirmation.
4. An inquiry failure preserves entered values and offers a retry or verified contact alternative. A success test verifies receipt at the actual destination in an authorized test environment.
5. Every interactive map location and material choice works without hover, drag, sound, color alone, or animation.
6. A missing image, empty season, unavailable place, blocked audio, and failed optional scene each have usable text or static fallbacks.
7. Navigation, dialogs, filters, and forms expose names, current state, visible focus, and sensible focus order. Test screen-reader announcements for selected results and submission outcomes.
8. Contrast is checked in normal, hover, focus, selected, disabled, and image-overlay states. Light texture must not reduce legibility.
9. A content editor can update a field note or seasonal observation without changing the component layout. Old updates show their dates rather than pretending to be current.

## 10. Decision to carry forward

Keep the real wordmark, brand typography, pine ink, warm paper, and property photography. Reduce the cards, stamps, pills, and invented material language. Put the grower's work at the center, then let the estate experience follow naturally.

The most valuable next design deliverable is a farm-first homepage and a working estate-map prototype using approved content. The rose guide follows once its seasonal data is ready. A convincing photograph of a hand cutting a rose will contribute more than a decorative 3D garden.
