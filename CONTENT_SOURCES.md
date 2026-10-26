# Content and asset record

Reviewed October 26, 2026. Implementation baseline: 9a249b6eeeb358a7d528e9cf8274cdb36c7feabb.

| Content | Evidence | Publication limit |
| --- | --- | --- |
| 2,500+ bushes, 30+ acres, biodynamic rose farm, dawn cuts | User implementation brief and DESIGN_AUDIT_AND_PROPOSAL.md | Bushes are not cultivars. No certification badge. |
| Estate place names and photos | src/data/siteContent.ts and audit-evidence/live-content-2026-10-26.json | Plan is schematic. No surveyed locations, distances, paths, or accessibility claims. |
| Estate capacity up to 180; lawn up to 150 seated | Archived live venue and vignettes pages | Event layout requires confirmation. Removed unsupported 180 extended lawn claim. |
| Pond | Archived live vignettes page says under construction | Current completion and access unconfirmed. |
| Founding in 2019, Tamie Posnick | Archived live story and about pages | No invented staff roles or biographies. |
| Rose photographs | Existing floral archive, visually inspected during implementation | Photo reference names describe colour and form. Cultivar, fragrance, and seasons are unknown. No current bloom report. |
| Table settings | Actual archived lawn and barn event photos | Linen composition, vessel makers, beeswax, rental inventory, and availability unverified. No fabricated combinations. |
| Soil practices | Archived farm and sustainability pages | Explanatory section only. No measured depths, water savings, or carbon claims. |
| General email and phone | https://www.ecomamafarms.com/contact | contact@ecomamafarms.com decoded from the page's Cloudflare email protection in current HTML; (805) 894-1477. No message sent for verification. |
| Wedding intake | Current contact page links to https://crm.ecomamafarms.com/f/wedding-inquiry | Destination fetched and displays the farm's wedding inquiry start. Delivery not tested. Floral Typeform link failed; it is not used. |
| Bob's Well Bread | https://www.bobswellbread.com/ and https://www.bobswellbread.com/pages/directions | Both locations and addresses checked. Opening hours intentionally linked rather than copied. |
| Solvang | https://solvangusa.com/ | Official visitor guide, not a specific business endorsement. |
| Los Olivos | https://www.losolivosca.com/ | Chamber town guide. |
| Santa Ynez Valley | https://www.visitsyv.com/ | Tourism organisation's regional guide. |

## Content maintenance

Edit src/data/fieldJournal.ts to update places, rose references, verified seasonal windows, photographed table directions, soil observations, and valley destinations. Stable IDs travel to the inquiry and must not be repurposed. Unknown seasons stay empty. Only populate cultivar names, fragrance, and seasons after grower review. A new current field report needs a date and an assigned editor.

The property owner or farm team must approve operational content and archive usage before publication. This implementation does not grant that approval.

## Images

The existing public/images archive and its manifest retain original provenance. public/images/journal contains local WebP derivatives generated from those originals, at 480/960/1600 maximum widths and quality 82. No stock or generated estate imagery was added. Alt text describes visible subjects; it does not assert cultivar identity or material provenance. Images have a visible text fallback when unavailable.

## Still needed for full editorial release

An owner-approved site plan, identified rose catalogue with grower-supplied seasonal and fragrance notes, consistently photographed material combinations with maker and availability records, and documentary portraits of the working team. The interactions are usable with honest archive references while these assets are pending.

## Navigation and page expansion, October 26

The follow-up brief restores Venue, The Farm, Floral, Explore, About, and Contact & Inquire navigation. Venue and Vignettes each display the archive's six facilities and six portrait locations. The Floral lookbook combines individual blooms, ceremony installations, bouquets, and reception photography. A ceremony-arch photograph is described as an arrangement, not flowers growing on a branch.

The user supplied David Austin roses, foam-free design, biodynamic preparations, owl boxes, and heritage animals as required content. Estate services and the restoration story also use the saved live-page evidence. No fixed estate access hours appear in that evidence. The services page therefore asks for arrival, setup, guest departure, and load-out times in the written proposal. Pond completion and access remain unconfirmed.

General inquiries retain the visitor-sent email draft. The contact page explains that no webhook is connected. Wedding inquiries link directly to https://crm.ecomamafarms.com/f/wedding-inquiry. No external form platform is embedded.
