# Ecomama field journal

The visual direction comes from the supplied design proposal. Use an open journal rhythm: a broad documentary photograph, a generous reading column, a narrow observation, then a practical study. Avoid repeating a rounded card around every section.

## Tokens
- Paper: #FEF9EF. Alternate paper: #F5EEE1. Clay divider: #D2CCBE.
- Ink: #0E2725. Action ochre: #8E5D30. Muted text: #4B554D.
- Sorts Mill Goudy for Roman display and occasional italic field notes. Kumbh Sans for reading and controls. Montserrat only for the small wordmark caption.
- Display size: clamp(2.8rem, 5.6vw, 5.9rem). Section heading: clamp(2.2rem, 3.5vw, 3.8rem).
- Main horizontal gutter: 4vw, 5vw on mobile. Section spacing: 5.5rem desktop and 3.5rem mobile.
- Photos are rectangular. Controls have a 3px radius and at least 44px targets. Focus has a 3px ochre outline and 5px offset.

## Composition and use
Home is a persuasion surface, beginning with the working rose farm and two direct paths. Contact and the valley guide are task surfaces with compact headings. Farm and story pages use long reading columns. Estate, rose, table, and soil studies provide direct controls with a text equivalent. No hover-only content, dragging, sound, decorative canvas, or automatic carousel is required.

## Photography
Use the archive's actual farm photographs. Responsive WebP derivatives are generated at 480, 960, and 1600 pixels, without upscaling. Preserve the originals and source manifest. These derivatives do not establish publication rights. See CONTENT_SOURCES.md.

## Motion and components
Reuse Lucide for menu, close, and photo enlargement. Native dialog provides modal focus containment and Escape dismissal. All other tasks remain inline. CSS handles state changes. Reduced motion disables transitions, animations, and smooth scrolling.

Preferred component sources were evaluated in the supplied proposal. Their card, decorative hero, and animation patterns do not serve these studies. Native controls and the existing React stack avoid an additional dependency.

## Review environment
The public default is the field journal. Open with ?review=1 to expose the three design modes. Historical modes are comparison artifacts. The unsupported numerical audit scores are not exposed as acceptance evidence.

## Expanded navigation and editorial pages

The header uses button disclosures for Venue, The Farm, Explore, and About, with Floral and Contact & Inquire as direct links. Below 1001px, the same groups become mobile accordions. Tab follows the links, Escape closes a disclosure and restores its trigger, and outside interaction dismisses it.

Estate location photography uses a two-column editorial grid that stacks on phones. The floral lookbook uses four columns on desktop and two on smaller screens. Services stack below 1001px. The wedding CRM callout precedes the general inquiry form, whose delivery explanation stays above the fields on mobile. Existing typography, colours, and native controls remain in use.
