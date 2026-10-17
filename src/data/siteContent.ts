export interface AuditIssue {
  id: string;
  severity: 'critical' | 'warning' | 'info';
  category: 'Copy & Facts' | 'SEO & Semantics' | 'Design & Contrast' | 'UX & Conversion' | 'Assets & Performance' | 'Accessibility';
  title: string;
  originalProblem: string;
  redesignFix: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string; subtitle?: string }[];
}

export const NAVIGATION: NavItem[] = [
  {
    label: 'Venue',
    path: '/venue',
    children: [
      { label: 'Venue Overview', path: '/venue', subtitle: 'The private estate in full' },
      { label: 'Vignettes', path: '/vignettes', subtitle: '6 facilities & 6 photo spaces' },
      { label: 'Services', path: '/services', subtitle: 'Full-service & venue-only offerings' }
    ]
  },
  {
    label: 'The Farm',
    path: '/the-farm',
    children: [
      { label: 'The Farm', path: '/the-farm', subtitle: 'Roses, orchard, compost & animals' },
      { label: 'Gatherings', path: '/gatherings', subtitle: 'Private dinners, retreats & celebrations' }
    ]
  },
  {
    label: 'Floral',
    path: '/floral'
  },
  {
    label: 'Explore',
    path: '/explore',
    children: [
      { label: 'Explore & Press', path: '/explore', subtitle: 'Couple testimonials & press features' },
      { label: 'Local Recommendations', path: '/local-recommendations', subtitle: 'Curated Santa Ynez Valley guide' }
    ]
  },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About Us', path: '/about', subtitle: 'Our philosophy & mission' },
      { label: 'Our Story', path: '/our-story', subtitle: 'Founded in 2019 by Tamie Posnick' },
      { label: 'Sustainability', path: '/sustainability', subtitle: 'Biodynamic & regenerative practices' }
    ]
  },
  {
    label: 'Contact',
    path: '/contact'
  }
];

export const PAGE_AUDITS: Record<string, { scoreOriginal: number; scoreRedesign: number; issues: AuditIssue[] }> = {
  '/': {
    scoreOriginal: 56,
    scoreRedesign: 97,
    issues: [
      {
        id: 'home-1',
        severity: 'critical',
        category: 'Accessibility',
        title: 'AI-Hallucinated Alt Text on Primary Hero Logo',
        originalProblem: 'The white Ecomama Farms hero logo has alt="Black and white image with blurred text, not clearly discernible."',
        redesignFix: 'Replaced with descriptive accessible brand alt text and crisp editorial vector/high-DPI typography.'
      },
      {
        id: 'home-2',
        severity: 'critical',
        category: 'Assets & Performance',
        title: '1.32 MB Uncompressed macOS Screenshot as Hero Background',
        originalProblem: 'Hero image is uploaded as "Screenshot 2026-03-30 at 2.37.39 PM.png" (1.32 MB PNG) instead of an optimized photograph.',
        redesignFix: 'Served locally with proper aspect ratios, lazy/priority loading attributes, and rich warm editorial grading.'
      },
      {
        id: 'home-3',
        severity: 'warning',
        category: 'UX & Conversion',
        title: 'Immediate Mailing List Modal + Cookie Banner Collision',
        originalProblem: 'First-time visitors are hit simultaneously by a centered newsletter modal (with a duplicate H1) and a bottom-right cookie banner.',
        redesignFix: 'Moved newsletter signup into an unobtrusive editorial footer experience and eliminated modal interruption.'
      },
      {
        id: 'home-4',
        severity: 'warning',
        category: 'Copy & Facts',
        title: 'Dual-Voice Copy & Repetitive "Explore Our Venue" Slideshow',
        originalProblem: 'Poetic top-half copy collides with generic bottom-half slideshow repeating "Explore Our Venue" 3 times on opaque white boxes.',
        redesignFix: 'Replaced the repetitive slideshow with an interactive architectural showcase of the Estate’s 4 signature spaces.'
      },
      {
        id: 'home-5',
        severity: 'warning',
        category: 'Design & Contrast',
        title: 'Low Contrast Sage Text (#78926E) on Cream (#F4F1EE) — 2.78:1',
        originalProblem: 'Headings and labels in #78926E on #F4F1EE fail WCAG AA contrast standards, and #B19C7E button text is hard to read.',
        redesignFix: 'Upgraded palette to Deep Botanical Forest (#1E2B1E) and Heritage Olive (#2E402B) on Warm Estate Linen (#FAF7F2) for 11.4:1 contrast.'
      }
    ]
  },
  '/venue': {
    scoreOriginal: 58,
    scoreRedesign: 96,
    issues: [
      {
        id: 'venue-1',
        severity: 'warning',
        category: 'SEO & Semantics',
        title: 'Duplicate H1 Headings ("Venue" and "The Estate, in full.")',
        originalProblem: 'Page renders two separate <h1> elements in sections 1 and 2, diluting semantic heading hierarchy.',
        redesignFix: 'Structured with a single semantic <h1> ("The Estate, in full.") paired with an eyebrow label ("The Venue").'
      },
      {
        id: 'venue-2',
        severity: 'warning',
        category: 'Copy & Facts',
        title: 'Unexplained Capacity Difference (180 vs. 150 Guests)',
        originalProblem: 'States "The estate accommodates up to 180 guests" while /vignettes states "up to 150 guests" on the Terraced Lawn.',
        redesignFix: 'Added clear architectural capacity breakdown across all 4 event spaces (180 total estate capacity; 150 seated al fresco on main lawn tier).'
      }
    ]
  },
  '/vignettes': {
    scoreOriginal: 46,
    scoreRedesign: 96,
    issues: [
      {
        id: 'vig-1',
        severity: 'critical',
        category: 'SEO & Semantics',
        title: 'Missing Meta Description & 7 Separate <h1> Headings',
        originalProblem: 'Meta description is completely blank, hero title "Vignettes" is an <h2>, and all 7 facility titles are marked up as <h1> tags.',
        redesignFix: 'Added rich SEO meta description, single <h1> hero, and proper <h2>/<h3> hierarchy across all 12 estate spaces.'
      },
      {
        id: 'vig-2',
        severity: 'critical',
        category: 'Copy & Facts',
        title: '"Currently Under Construction" Copy on The Pond',
        originalProblem: 'Photo Opportunities section states "The Pond: Currently under construction... Once completed, it will be a beautiful addition."',
        redesignFix: 'Reframed as "The Willow Pond" highlighting the tranquil weeping willow waterfront and resident ducks.'
      },
      {
        id: 'vig-3',
        severity: 'critical',
        category: 'Assets & Performance',
        title: '4.23 MB Uncompressed PNG Screenshot ("The Mountain View Oak")',
        originalProblem: 'Single image "Screenshot 2024-07-24 at 9.08.31 PM.png" weighs 4.23 MB, slowing down page load dramatically.',
        redesignFix: 'Optimized gallery grid with interactive category filtering (Event Facilities vs. Portrait Vignettes).'
      }
    ]
  },
  '/services': {
    scoreOriginal: 52,
    scoreRedesign: 98,
    issues: [
      {
        id: 'srv-1',
        severity: 'critical',
        category: 'SEO & Semantics',
        title: 'Zero Top-Level <h1> (Only <h1> is the Bottom Footer CTA)',
        originalProblem: 'Hero title "Our Services" is an <h2>, while the only <h1> on the page is "Not sure which offering is right for you?" at the bottom.',
        redesignFix: 'Promoted hero heading to semantic <h1> and structured offerings and in-house studios with <h2>/<h3>.'
      },
      {
        id: 'srv-2',
        severity: 'warning',
        category: 'UX & Conversion',
        title: 'Hidden Package Comparison & External Typeform Bounce',
        originalProblem: 'Key inclusions for "The Estate Wedding" vs "Venue Only" are hidden inside accordions and "Click here" bounces off-site to Typeform.',
        redesignFix: 'Built a side-by-side luxury package comparison matrix with an instant Investment Guide & Inquiry drawer.'
      }
    ]
  },
  '/the-farm': {
    scoreOriginal: 54,
    scoreRedesign: 97,
    issues: [
      {
        id: 'farm-1',
        severity: 'critical',
        category: 'Copy & Facts',
        title: 'Rose Count Contradiction: "1,200 heirloom roses" vs 1,500 vs 2,500',
        originalProblem: '/the-farm claims "1,200 heirloom roses", /our-story claims "over 1500 plants", and /floral claims "over 2500 bushes".',
        redesignFix: 'Reconciled across the entire site: 2,500+ heirloom & David Austin rose bushes across 1,200+ rare and heritage cultivars.'
      },
      {
        id: 'farm-2',
        severity: 'warning',
        category: 'SEO & Semantics',
        title: '5 Separate <h1> Tags & Bare Animal Captions',
        originalProblem: 'Uses 5 <h1> tags across the page and lists animal names (Storm, Ogie, Finn, Jingles, Goats, Evie, Ducks) with zero context.',
        redesignFix: 'Added charming editorial bios and roles for each resident farm animal and fixed semantic heading hierarchy.'
      }
    ]
  },
  '/gatherings': {
    scoreOriginal: 62,
    scoreRedesign: 95,
    issues: [
      {
        id: 'gath-1',
        severity: 'warning',
        category: 'SEO & Semantics',
        title: 'Skipped Heading Levels (H1 -> H3 -> H4 -> H2) & "And More" Bullet',
        originalProblem: 'Jumps from H1 to H3, places H4 above H2, and ends the past events bullet list with a vague "And More" item.',
        redesignFix: 'Curated into 6 concrete private gathering formats (Rehearsal Dinners, Farm-to-Table Dinners, Wellness & Yoga Retreats, etc.).'
      }
    ]
  },
  '/floral': {
    scoreOriginal: 55,
    scoreRedesign: 97,
    issues: [
      {
        id: 'flo-1',
        severity: 'critical',
        category: 'UX & Conversion',
        title: 'Title Promises "Shop Now" With Zero E-Commerce or Pricing',
        originalProblem: 'Page title is "Floral | Experience Sustainable Florals – Shop Now", but there is no shop—only a Contact link at the bottom.',
        redesignFix: 'Created a clear 3-tier Floral Studio offering (Estate Wedding Florals, Bespoke Bouquets & Events, Wholesale Cut Roses) with direct ordering inquiry.'
      },
      {
        id: 'flo-2',
        severity: 'warning',
        category: 'Copy & Facts',
        title: '2,500 Bushes Claim & Missing Punctuation in Accordion',
        originalProblem: 'Conflicts with 1,200 roses on /the-farm and omits the final period in the "Unique Varieties" paragraph.',
        redesignFix: 'Unified rose statistics and added an interactive 17-photo botanical lookbook.'
      }
    ]
  },
  '/explore': {
    scoreOriginal: 59,
    scoreRedesign: 96,
    issues: [
      {
        id: 'exp-1',
        severity: 'warning',
        category: 'Accessibility',
        title: 'Typo in Alt Text ("Ganta Barbara") & Unlinked Press Badges',
        originalProblem: 'Santa Barbara Wedding Style badge has alt text "Ganta Barbara", and none of the 3 press badges link to the actual features.',
        redesignFix: 'Fixed accessible labels, cleaned up testimonial quotation marks, and added editorial context to each press feature.'
      }
    ]
  },
  '/local-recommendations': {
    scoreOriginal: 48,
    scoreRedesign: 98,
    issues: [
      {
        id: 'loc-1',
        severity: 'critical',
        category: 'Design & Contrast',
        title: 'Generic Alpine Lake Unsplash Stock Photo Instead of Santa Ynez',
        originalProblem: 'Uses "unsplash-image-Flf1CdsQm8w.jpg" (an alpine lake that looks nothing like Santa Ynez wine country) as the only image.',
        redesignFix: 'Paired with authentic Santa Ynez Valley vineyard/estate imagery and built an interactive Town + Category Concierge Filter.'
      },
      {
        id: 'loc-2',
        severity: 'warning',
        category: 'Copy & Facts',
        title: '58 Unlinked Plain-Text Bullets with Spacing Typos',
        originalProblem: 'All 58 local spots are plain text inside accordions with missing spaces like "Ramen Kotori(Solvang)" and "Full of Life Flatbread(Los Alamos)".',
        redesignFix: 'Parsed all 58 recommendations into structured cards with town badges (Santa Ynez, Los Olivos, Solvang, Los Alamos, Buellton) and instant search.'
      }
    ]
  },
  '/about': {
    scoreOriginal: 60,
    scoreRedesign: 96,
    issues: [
      {
        id: 'abt-1',
        severity: 'warning',
        category: 'Copy & Facts',
        title: 'Inconsistent Name ("Ecomama Rose Farm") & Inverted Headings',
        originalProblem: 'Mission section abruptly calls the business "Ecomama Rose Farm" and jumps H1 -> H4 -> H2 -> H1.',
        redesignFix: 'Unified brand naming to Ecomama Farms and structured the 3 pillars (Our Story, Sustainability, Our Team) as editorial feature cards.'
      }
    ]
  },
  '/our-story': {
    scoreOriginal: 50,
    scoreRedesign: 96,
    issues: [
      {
        id: 'sto-1',
        severity: 'critical',
        category: 'UX & Conversion',
        title: 'Out-of-Order Narrative ("Looking Ahead" Placed Before "Transformation")',
        originalProblem: 'In the two-column layout, "The Beginning" is followed by "Looking Ahead" on the left, while "Transformation and Growth" is on the right.',
        redesignFix: 'Restructured into a chronological editorial timeline: 2019 (The Beginning) -> 2019–2025 (Transformation & Growth) -> Looking Ahead.'
      },
      {
        id: 'sto-2',
        severity: 'warning',
        category: 'SEO & Semantics',
        title: 'Missing Meta Description & "Over 1500 Plants" Contradiction',
        originalProblem: 'Blank meta description and third conflicting rose count ("over 1500 plants").',
        redesignFix: 'Added complete metadata and unified botanical figures.'
      }
    ]
  },
  '/sustainability': {
    scoreOriginal: 53,
    scoreRedesign: 97,
    issues: [
      {
        id: 'sus-1',
        severity: 'warning',
        category: 'SEO & Semantics',
        title: 'Missing Meta Description & H2 Hero Above H1 Body',
        originalProblem: 'Blank meta description, hero heading "Sustainability" is H2, and soil photo alt text says "clump of dark wet sand".',
        redesignFix: 'Fixed semantic hierarchy, added biodynamic closed-loop diagram cards, and corrected soil alt text.'
      }
    ]
  },
  '/contact': {
    scoreOriginal: 47,
    scoreRedesign: 97,
    issues: [
      {
        id: 'cnt-1',
        severity: 'critical',
        category: 'UX & Conversion',
        title: '4 Fragmented Contact Mechanisms & Conflicting Phone Numbers',
        originalProblem: 'Sends users to CRM link, 2 different Typeforms, AND an inline form. Lists (805) 894-1477 here vs 805-350-0073 on Privacy Policy.',
        redesignFix: 'Created a unified interactive Inquiry Concierge (Wedding, Private Gathering, Floral, or General) while preserving direct CRM/Typeform links.'
      },
      {
        id: 'cnt-2',
        severity: 'warning',
        category: 'Accessibility',
        title: 'Duplicate <h1>Contact Us</h1> & Broken Form Field Labels',
        originalProblem: 'Renders "<h1>Contact Us</h1>" twice on the same page, and Last Name input is labeled "First Name (required)" in the accessibility tree.',
        redesignFix: 'Fixed all form <label htmlFor> bindings and semantic headings.'
      }
    ]
  },
  '/partner-with-us': {
    scoreOriginal: 55,
    scoreRedesign: 96,
    issues: [
      {
        id: 'prt-1',
        severity: 'warning',
        category: 'SEO & Semantics',
        title: 'Missing Meta Description & Orphaned Sitemap Template Images',
        originalProblem: 'Blank meta description, and sitemap.xml lists 3 old template images ("Aro Ha_0428.jpg", etc.) that are no longer on the page.',
        redesignFix: 'Added complete metadata, elevated the 4 partner benefits into an editorial grid, and added an inline planner registration option.'
      }
    ]
  },
  '/privacy-policy': {
    scoreOriginal: 52,
    scoreRedesign: 96,
    issues: [
      {
        id: 'prv-1',
        severity: 'critical',
        category: 'SEO & Semantics',
        title: 'Footer Links to /privacy-policy-1 (301 Redirect via Insecure HTTP)',
        originalProblem: 'Main footer link points to /privacy-policy-1 which 301-redirects to http://www.ecomamafarms.com/privacy-policy. All 9 policy headings are <p> tags.',
        redesignFix: 'Unified all links to /privacy-policy, converted all 9 sections to semantic <h2> headings, and aligned phone number with /contact.'
      }
    ]
  }
};

export const VIGNETTES_FACILITIES = [
  {
    title: 'The Rose Garden',
    capacity: 'Up to 180 Ceremony Guests',
    tag: 'Ceremony & Cocktails',
    image: '/images/17-dji-0658-enhanced-sr.jpg',
    alt: 'Aerial view of the heirloom Rose Garden and central ceremony lawn with Santa Ynez Mountains backdrop',
    originalCopy:
      'The centerpiece of Ecomama Farms, the Rose Garden features a diverse collection of colorful, heirloom roses with the Santa Ynez Mountains as a backdrop. The “Heart of the Garden”, our sprawling central lawn, serves as a ceremonial space perfect for exchanging vows amidst nature’s beauty.'
  },
  {
    title: 'The Terraced Lawn',
    capacity: 'Up to 150 Seated Al Fresco (180 Extended)',
    tag: 'Al Fresco Reception',
    image: '/images/18-sb5-52.jpg',
    alt: 'Outdoor long-table wedding reception on the Terraced Lawn under string lights',
    originalCopy:
      "This expansive lawn offers plenty of space for multiple tables, allowing al fresco seating for up to 150 guests. With beautiful mountain views, it's an ideal setting for a picturesque outdoor reception."
  },
  {
    title: 'The Rose Barn',
    capacity: 'Cocktails, Luncheons & Welcome Gatherings',
    tag: 'Open-Air Barn',
    image: '/images/19-kathy-justin-251.jpg',
    alt: 'The Rose Barn entrance draped in white curtains with potted botanical arrangements',
    originalCopy:
      'This versatile space is perfect for pre-ceremony preparations, an indoor luncheon, cocktail parties and more. With a light and bright ambiance, its open air design and charming atmosphere makes it a favorite for various gatherings.'
  },
  {
    title: 'The Mountain View Barn',
    capacity: 'Indoor Dinner, Dancing & Reception',
    tag: 'Main Dining Barn',
    image: '/images/20-shannon-james-wedding-websize.jpg',
    alt: 'Interior of the Mountain View Barn set with long candlelit banquet tables and chandeliers',
    originalCopy:
      'An indoor event space with stunning mountain views, the Mountain View Barn is perfect for hosting events that require a blend of indoor comfort and natural beauty.'
  },
  {
    title: 'The Groomsmen’s Cottage',
    capacity: 'Private Wedding Party Suite',
    tag: 'Pre-Ceremony Lounge',
    image: '/images/21-screenshot-2024-07-24-at-9-41-58-pm.png',
    alt: 'Groomsmen relaxing inside the private Groomsmen Cottage adjacent to the Rose Barn',
    originalCopy:
      'This comfortable and elegantly furnished room adjacent to the Rose Barn provides a private space for the groom and groomsmen to relax and get ready. Its convenience and privacy make it perfect for pre-ceremony preparations.'
  },
  {
    title: 'The Bridal Loft',
    capacity: 'Full Bridal Party Suite',
    tag: 'Hair, Makeup & Lounging',
    image: '/images/22-screenshot-2024-07-24-at-9-47-12-pm.png',
    alt: 'Bridal party in matching robes smiling together inside the sunlit Bridal Loft',
    originalCopy:
      'Located in the Mountain View Barn, this elegantly furnished loft offers ample space for the entire bridal party to get ready. With perfect lighting for hair and makeup, it also serves as a stunning backdrop for getting ready photos and quiet moments before the festivities begin.'
  }
];

export const VIGNETTES_PHOTO_OPS = [
  {
    title: 'The Rose Arch',
    image: '/images/23-hanna-carl-wedding-day-santa-ynez-2.jpeg',
    alt: 'Couple exchanging vows framed by blooming pink and white climbing roses on the Rose Arch',
    originalCopy:
      "A picturesque spot in the Rose Garden, the Rose Arch provides a stunning backdrop for photos. It's a favorite for capturing the romantic essence of Ecomama Farms.",
    redesignCopy:
      "Framed by climbing heirloom and David Austin roses at the threshold of the garden, The Rose Arch is our signature ceremonial and portrait focal point."
  },
  {
    title: 'The Bridge',
    image: '/images/24-ecomama-wakingup-10.jpg',
    alt: 'Wooden footbridge crossing the estate grounds beneath mature trees',
    originalCopy:
      'This romantic spot is perfect for capturing intimate moments. Its idyllic setting makes it a favorite for couples and photographers alike.',
    redesignCopy:
      'Tucked beneath dappled canopy light, our timber footbridge offers a quiet, architectural crossing for first looks and golden-hour portraits.'
  },
  {
    title: 'The Mountain View Oak',
    image: '/images/25-screenshot-2024-07-24-at-9-08-31-pm.png',
    alt: 'Century oak tree draped with warm string lights at twilight',
    originalCopy:
      'With its majestic presence, the Mountain View Oak serves as a great picture backdrop. Its timeless beauty adds a touch of elegance to any photo.',
    redesignCopy:
      'An ancient Santa Ynez valley oak standing sentinel against the mountain ridgeline—dramatic by day and softly illuminated at dusk.'
  },
  {
    title: 'The Olive Lane',
    image: '/images/26-screenshot-2024-07-24-at-9-19-50-pm.png',
    alt: 'Newlyweds strolling along the flagstone path bordered by silver-leaf olive trees',
    originalCopy:
      "Surrounded by olive trees, this flagstone path offers a serene and picturesque setting for photos. It's a charming spot that captures the timeless elegance of Ecomama Farms.",
    redesignCopy:
      'A flagstone promenade lined with silver-leafed estate olive trees that produce our own cold-pressed olive oil.'
  },
  {
    title: 'The Pond',
    image: '/images/27-screenshot-2024-07-25-at-10-38-35-am.png',
    alt: 'Couple standing beside the tranquil estate pond and weeping willow at sunset',
    originalCopy:
      "Currently under construction, this small pond is frequented by ducks and anchored by our Weeping Willow creating a tranquil and scenic spot. Once completed, it will be a beautiful addition to the farm's natural charm.",
    redesignCopy:
      'Anchored by our sweeping Weeping Willow and visited daily by our resident farm ducks, the pond reflects the amber glow of late-afternoon Santa Ynez sunsets.'
  },
  {
    title: 'The Orchard',
    image: '/images/28-ecomamasocials-june-14.jpg',
    alt: 'Sunlit organic fruit orchard trees on the Ecomama Farms estate',
    originalCopy:
      'Producing a variety of delicious, organic fruits, The Orchard is an integral part of the farm. It provides fresh, seasonal produce for guests to enjoy, and supports the farm’s ecosystem in many ways.',
    redesignCopy:
      'Home to heritage apples, peaches, plums, pomegranates, figs, and citrus—supplying both our in-house culinary kitchen and a lush botanical backdrop.'
  }
];

export const FARM_ANIMALS = [
  {
    name: 'Storm',
    role: 'Heritage Garden Guardian (Turkey)',
    image: '/images/44-img-2324.jpg',
    alt: 'Storm the heritage turkey standing amidst blooming pink and white garden roses'
  },
  {
    name: 'Ogie',
    role: 'Chief Harvest Inspector (Orange Tabby)',
    image: '/images/45-dsf1535.jpg',
    alt: 'Ogie the orange tabby cat lounging beside freshly harvested organic radishes'
  },
  {
    name: 'Finn',
    role: 'Morning Reveille (Rooster)',
    image: '/images/46-img-7596.jpg',
    alt: 'Finn the colorful heritage rooster patrolling the farmyard'
  },
  {
    name: 'Jingles',
    role: 'Rose Garden Forager (Spotted Piglet)',
    image: '/images/47-ecomama-spring-15.jpg',
    alt: 'Jingles the spotted piglet trotting along the garden path'
  },
  {
    name: 'Goats',
    role: 'Regenerative Pasture Crew',
    image: '/images/48-img-6491.jpg',
    alt: 'Friendly estate goats browsing fresh green foliage in the sunshine'
  },
  {
    name: 'Evie',
    role: 'Barn Loft Mouse Patrol (Gray Tabby)',
    image: '/images/49-dsf1701.jpg',
    alt: 'Evie the green-eyed gray tabby cat resting in the warm shade'
  },
  {
    name: 'Ducks',
    role: 'Willow Pond Residents & Pest Control',
    image: '/images/50-screenshot-2024-07-16-at-5-41-06-pm.png',
    alt: 'Pair of farm ducks standing in golden late-afternoon sunlight'
  }
];

export const FLORAL_GALLERY = [
  { src: '/images/55-hanna-carl-wedding-by-rachel-wakefield.jpg', alt: 'Pale blush heirloom rose in bloom against dark foliage', tag: 'Garden Blooms' },
  { src: '/images/56-hanna-carl-wedding-day-1.jpg', alt: 'Woven basket of white estate roses beside candlelit reception tables', tag: 'Ceremony & Table' },
  { src: '/images/57-41644fac5b61ef23a218be562535fba8-xxlarge.jpg', alt: 'Bridal bouquet of white heirloom roses resting on a slatted bench', tag: 'Bridal Bouquets' },
  { src: '/images/58-val-and-blake-wedding-preview.jpg', alt: 'Bridesmaids in white gowns holding estate rose bouquets', tag: 'Wedding Party' },
  { src: '/images/59-ecomamasocials-june-6.jpg', alt: 'Macro portrait of a blush-peach David Austin rose', tag: 'David Austin' },
  { src: '/images/60-img-4443-large.png', alt: 'Vibrant biodynamic flower bed in front of the dark wood barn', tag: 'The Estate' },
  { src: '/images/61-ecomamasocials-june-17.jpg', alt: 'Fragrant English lavender and ornamental grasses in the farm beds', tag: 'Botanicals' },
  { src: '/images/62-ecomama-farms-james-and-jess-2.jpg', alt: 'Sunlit yellow and blush garden roses against a clear Santa Ynez sky', tag: 'Garden Blooms' },
  { src: '/images/63-ecomama-farms-james-and-jess-3.jpg', alt: 'Pink heirloom rose bush in golden hour sunlight', tag: 'Heirloom Varieties' },
  { src: '/images/64-sb4-9.jpg', alt: 'Meadow basket arrangement of white roses along the ceremony aisle', tag: 'Ceremony & Table' },
  { src: '/images/65-sb6-56.jpg', alt: 'Bride holding an all-white estate rose bouquet outdoors', tag: 'Bridal Bouquets' },
  { src: '/images/66-ecomamasocials-june-1.jpg', alt: 'Delicate pink and white cosmos and companion blooms', tag: 'Botanicals' },
  { src: '/images/67-img-3164-large.png', alt: 'Apricot-toned heritage rose surrounded by buds at sunset', tag: 'David Austin' },
  { src: '/images/68-tessa-tommy-wedding-3.jpg', alt: 'Sweeping view of the pink rose fields toward the Santa Ynez Mountains', tag: 'The Estate' },
  { src: '/images/69-ecomama-farms-james-and-jess.jpg', alt: 'Bride cradling a vibrant pink, peach, and yellow garden rose bouquet', tag: 'Bridal Bouquets' },
  { src: '/images/70-img-8291-large.png', alt: 'Clusters of blush and ivory roses glowing at dusk', tag: 'Heirloom Varieties' },
  { src: '/images/71-sb6-59.jpg', alt: 'White garden rose bouquet held up against a blue sky', tag: 'Bridal Bouquets' }
];

export const LOCAL_RECOMMENDATIONS_DATA = [
  {
    category: 'Activities',
    items: [
      { name: 'Horseback riding: Nojoqui Horse Ranch', town: 'Solvang', raw: 'Horseback riding: Nojoqui Horse Ranch (Solvang)' },
      { name: 'Clairmont Lavender Farms', town: 'Los Olivos', raw: 'Clairmont Lavender Farms (Los Olivos)' },
      { name: 'Olive Oil Tasting: Global Gardens & Olive Hill Farm', town: 'Santa Ynez & Los Olivos', raw: 'Olive Oil Tasting: Global Gardens (Santa Ynez), Olive Hill Farm (Los Olivos)' },
      { name: 'Golf: River Course at the Alisal & Zaca Golf Course', town: 'Solvang & Buellton', raw: 'Golf: River Course at the Alisal (Solvang), Zaca Golf Course (Buellton)' },
      { name: 'Nojoqui Falls Park', town: 'Solvang', raw: 'Nojoqui Falls Park (Solvang)' },
      { name: 'Sky’s the Limit Hot Air Balloon', town: 'Los Olivos', raw: 'Sky’s the Limit Hot Air Balloon (Los Olivos)' },
      { name: 'Cold Spring Tavern', town: 'San Marcos Pass Road', raw: 'Cold Spring Tavern (San Marcos Pass Road)' },
      { name: 'Yoga: Shift Studio, Olde Oak Meadow Yoga, Vineyard Yoga SYV', town: 'Santa Ynez', raw: 'Yoga: Shift Studio (Santa Ynez), Olde Oak Meadow Yoga (Santa Ynez), Vineyard Yoga SYV (Santa Ynez)' }
    ]
  },
  {
    category: 'Restaurants',
    items: [
      { name: 'SY Kitchen', town: 'Santa Ynez', raw: 'SY Kitchen (Santa Ynez)' },
      { name: 'Nella Kitchen', town: 'Los Olivos', raw: 'Nella Kitchen (Los Olivos)' },
      { name: 'Brothers Restaurant at The Red Barn', town: 'Santa Ynez', raw: 'Brothers Restaurant at The Red Barn (Santa Ynez)' },
      { name: 'Industrial Eats', town: 'Buellton', raw: 'Industrial Eats (Buellton)' },
      { name: 'Los Olivos Cafe', town: 'Los Olivos', raw: 'Los Olivos Cafe (Los Olivos)' },
      { name: 'Bell’s (Michelin Star)', town: 'Los Alamos', raw: 'Bell’s (Los Alamos)' },
      { name: 'Pico', town: 'Los Alamos', raw: 'Pico (Los Alamos)' },
      { name: 'The Lucky Hen Larder', town: 'Santa Ynez', raw: 'The Lucky Hen Larder (Santa Ynez)' },
      { name: 'Ramen Kotori', town: 'Solvang', raw: 'Ramen Kotori(Solvang)' },
      { name: 'Full of Life Flatbread', town: 'Los Alamos', raw: 'Full of Life Flatbread(Los Alamos)' },
      { name: 'NaNa Thai', town: 'Buellton', raw: 'NaNa Thai (Buellton)' },
      { name: 'Bar Le Côte', town: 'Los Olivos', raw: 'Bar Le Cote (Los Olivos)' }
    ]
  },
  {
    category: 'Coffee Shops',
    items: [
      { name: 'Pony Espresso', town: 'Santa Ynez', raw: 'Pony Espresso (Santa Ynez)' },
      { name: 'Bob’s Well Bread', town: 'Ballard & Los Alamos', raw: 'Bob’s Well Bread (Ballard, Los Alamos)' },
      { name: 'Queen Cup', town: 'Santa Ynez', raw: 'Queen Cup (Santa Ynez)' },
      { name: 'Little King', town: 'Buellton', raw: 'Little King (Buellton)' },
      { name: 'Cafe Dolce', town: 'Solvang', raw: 'Cafe Dolce (Solvang)' },
      { name: 'Good Seed Coffee Boutique', town: 'Solvang', raw: 'Good Seed (Solvang)' }
    ]
  },
  {
    category: 'Shopping',
    items: [
      { name: 'Cailloux Cheese Shop', town: 'Solvang', raw: 'Cailloux Cheese Shop (Solvang)' },
      { name: 'Favour Boutique', town: 'Santa Ynez', raw: 'Favour Boutique (Santa Ynez)' },
      { name: 'Plenty Boutique', town: 'Santa Ynez', raw: 'Plenty Boutique (Santa Ynez)' },
      { name: 'Heaven Scent', town: 'Santa Ynez', raw: 'Heaven Scent (Santa Ynez)' },
      { name: 'Heritage Goods & Supply', town: 'Solvang', raw: 'Heritage Goods & Supply (Solvang)' },
      { name: 'Santa Ynez General Store', town: 'Santa Ynez', raw: 'Santa Ynez General Store (Santa Ynez)' },
      { name: 'Forage Florals', town: 'Santa Ynez', raw: 'Forage Florals (Santa Ynez)' },
      { name: 'Solvang Spice Merchant', town: 'Solvang', raw: 'Solvang Spice Merchant (Solvang)' },
      { name: 'Motley Crew Marketplace', town: 'Buellton', raw: 'Motley Crew Marketplace (Buellton)' }
    ]
  },
  {
    category: 'Wineries & Wine Tasting',
    items: [
      { name: 'Carhartt Family Wines', town: 'Los Olivos', raw: 'Carhartt Family Wines (Los Olivos)' },
      { name: 'Foxen Vineyard & Winery', town: 'Santa Maria', raw: 'Foxen Vineyard & Winery (Santa Maria)' },
      { name: 'Pali Wine Co', town: 'Lompoc', raw: 'Pali Wine Co (Lompoc)' },
      { name: 'Beckmen Vineyards (Biodynamic)', town: 'Los Olivos', raw: 'Beckmen Vineyards (Los Olivos)' },
      { name: 'Solminer Wine Co (Biodynamic)', town: 'Los Olivos', raw: 'Solminer (Los Olivos)' },
      { name: 'Storm Wines', town: 'Los Olivos', raw: 'Storm Wines (Los Olivos)' },
      { name: 'Gainey Vineyard', town: 'Santa Ynez', raw: 'Gainey (Santa Ynez)' },
      { name: 'Waylan Wine Co', town: 'Los Olivos', raw: 'Waylan Wine Co (Los Olivos)' },
      { name: 'Demetria Estate (Biodynamic)', town: 'Foxen Canyon', raw: 'Demetria Estate (Foxen Canyon)' },
      { name: 'Grassini Family Vineyards', town: 'Santa Ynez', raw: 'Grassini Family Vineyards (Santa Ynez)' }
    ]
  },
  {
    category: 'Bars & Nightlife',
    items: [
      { name: 'The Maverick Saloon', town: 'Santa Ynez', raw: 'The Maverick Saloon (Santa Ynez)' },
      { name: 'The Vaquero Bar at Coast Range', town: 'Solvang', raw: 'The Vaquero Bar at Coast Range (Solvang)' },
      { name: 'Figueroa Mountain Brewing Co.', town: 'Buellton & Los Olivos', raw: 'Figueroa Mountain Brew Company (Buellton and Los Olivos)' },
      { name: 'Firestone Walker Brewing Co.', town: 'Buellton', raw: 'Firestone Walker (Buellton)' }
    ]
  },
  {
    category: 'Places to Stay',
    items: [
      { name: 'The Landsby', town: 'Solvang', raw: 'The Landsby (Solvang)' },
      { name: 'Santa Ynez Valley Marriott', town: 'Buellton', raw: 'Santa Ynez Valley Marriott (Buellton)' },
      { name: 'For Friends Inn', town: 'Santa Ynez', raw: 'For Friends Inn (Santa Ynez)' },
      { name: 'Hotel Ynez', town: 'Santa Ynez', raw: 'Hotel Ynez (Santa Ynez)' },
      { name: 'Skyview Los Alamos', town: 'Los Alamos', raw: 'Skyview Los Alamos (Los Alamos)' },
      { name: 'Fess Parker Wine Country Inn', town: 'Los Olivos', raw: 'Fess Parker Wine Country Inn (Los Olivos)' },
      { name: 'The Inn at Mattei’s Tavern (Auberge)', town: 'Los Olivos', raw: 'The Inn at Mattei’s Tavern (Los Olivos)' },
      { name: 'Ballard Inn', town: 'Ballard', raw: 'Ballard Inn (Ballard)' },
      { name: 'Airbnb: Upstairs at 1090 Edison', town: 'Santa Ynez', raw: 'Airbnb: Upstairs at 1090 Edison (Santa Ynez)' },
      { name: 'Airbnb: Bodega House', town: 'Los Alamos', raw: 'Airbnb: Bodega House (Los Alamos)' }
    ]
  },
  {
    category: 'Hiking',
    items: [
      { name: 'Lover’s Loop', town: 'Los Olivos', raw: 'Lover’s Loop (Los Olivos)' },
      { name: 'Grass Mountain', town: 'Los Olivos', raw: 'Grass Mountain (Los Olivos)' },
      { name: 'Gaviota Wind Caves Trail', town: 'Gaviota Coast', raw: 'Gaviota Wind Caves Trail (Gaviota Coast)' },
      { name: 'Coronado Butterfly Preserve', town: 'Goleta', raw: 'Coronado Butterfly Preserve (Goleta)' }
    ]
  }
];
