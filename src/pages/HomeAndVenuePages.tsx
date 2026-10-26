import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { DesignMode } from '../components/Layout';
import { VIGNETTES_FACILITIES, VIGNETTES_PHOTO_OPS } from '../data/siteContent';
import {
  ReferoHeroFrame,
  ReferoSageStrip,
  BrandKitBotanicalSeal,
  ApothecaryStepCard,
  BotanicalTagList,
  EstateStatGrid,
  EditorialTestimonialRow,
  OriginalReferoHeroFrame,
  OriginalReferoSageStrip
} from '../components/ReferoComponents';

const SERVICE_TIERS = [
  {
    step: '01',
    titleRoman: 'The Full Estate',
    titleItalic: 'Wedding Experience',
    title: 'The Estate Wedding',
    subtitle: 'Full-Service Planning & Floral Design',
    stamp: 'K I L N   &   G A R D E N   T I E R   I',
    botanical: '/images/brandkit/illustration-04.png',
    image: '/images/29-val-and-blake-wedding-preview-1.jpg',
    description:
      'Our signature bespoke experience: unhurried access across all six estate spaces, in-house wedding planning, seasonal culinary curation, and 100% organic garden rose florals harvested on-site.',
    highlights: [
      'Up to 180 guests across all outdoor gardens & heritage barns',
      'Full-service planning, creative direction & day-of coordination',
      'Bespoke organic garden rose florals harvested hours before vows',
      'Bridal Loft & Groomsmen’s Cottage full-day sanctuary access'
    ]
  },
  {
    step: '02',
    titleRoman: 'Collaborative Curation &',
    titleItalic: 'Artisan Flow',
    title: 'Partial Planning & Curation',
    subtitle: 'Collaborative Estate Guidance',
    stamp: 'K I L N   &   G A R D E N   T I E R   I I',
    botanical: '/images/brandkit/illustration-02.png',
    image: '/images/30-jt-ally-photo.jpg',
    description:
      'Ideal for couples who have begun their planning journey and wish to partner with our Santa Ynez estate team for artisan vendor integration, garden flow, floral design, and effortless execution.',
    highlights: [
      'Exclusive private access across ceremony & reception lawns',
      'Curated Santa Ynez Valley artisan & culinary coordination',
      'Custom estate floral & botanical installation options',
      'Dedicated rehearsal & wedding-day estate hosts'
    ]
  },
  {
    step: '03',
    titleRoman: 'Private Sanctuary',
    titleItalic: 'Estate Buyout',
    title: 'Private Estate Buyout',
    subtitle: 'The Sanctuary Canvas',
    stamp: 'K I L N   &   G A R D E N   T I E R   I I I',
    botanical: '/images/brandkit/illustration-06.png',
    image: '/images/18-sb5-52.jpg',
    description:
      'Exclusive access to Ecomama Farms’ ceremony rose gardens, terraced reception lawn, Rose Barn, and Mountain View Barn for couples working with their own full-service planner.',
    highlights: [
      'Private access to the Rose Garden, Terraced Lawn & Barns',
      'Bridal Loft & Groomsmen’s Cottage getting-ready suites',
      'On-site estate steward & guest arrival coordination',
      'Optional estate-grown heirloom rose buckets & farm experiences'
    ]
  }
];

/* ============================================================================
   1. HOME PAGE (/ and /home)
============================================================================ */
export const HomePage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  if (mode === 'organic') {
    return (
      <div className="text-[#0E2725]">
        {/* 1. Full-Bleed Hero Frame with Signature Roman + Italic Display Rhythm */}
        <ReferoHeroFrame
          image="/images/02-screenshot-2026-03-30-at-2-37-39-pm.png"
          imageAlt="Aerial view of Ecomama Farms in the Santa Ynez Valley"
          eyebrowLeft="Santa Ynez Valley · Heirloom Rose Farm & Bespoke Estate"
          headlineLeft={
            <>
              Where Earth’s Beauty &{' '}
              <em className="italic font-light text-[#E4DDD0]">Memorable Gatherings</em> Converge.
            </>
          }
          statementRight="A tactile sanctuary of heirloom garden roses, gatherings around long tables, and bespoke California ranch celebrations."
          subcaptionRight="Welcome to our 30+ acre biodynamic farmstead in the Santa Ynez Valley—tended by hand, rooted in living clay, and opened with quiet devotion for unforgettable celebrations."
          primaryAction={{ label: 'Explore the Estate', to: '/venue' }}
          secondaryAction={{ label: 'Inquire for 2026–2027', to: '/contact' }}
          botanicalIllustration="/images/brandkit/illustration-04.png"
          fullHeight={true}
        />

        {/* 2. Deep Botanical Pine & Stoneware Apothecary Strip */}
        <ReferoSageStrip
          label="Tended by Hand"
          statement="30+ Biodynamic Acres · 2,500+ Heirloom Garden Rose Bushes · Wheel-Thrown Ceramic Tables & Bespoke Estate Gatherings"
          rightLink={{ text: 'Arrange a Private Garden Walk', to: '/contact' }}
          illustration="/images/brandkit/illustration-04.png"
        />

        {/* 3. Refero 21b71be3 Inline Botanical Tag Registry */}
        <section className="bg-[#FEF9EF] py-6 px-6 md:px-12 border-b border-[#D2CCBE]/60">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span
              className="text-[11px] uppercase tracking-[0.24em] text-[#8E5D30] font-semibold shrink-0"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              ESTATE REGISTRY
            </span>
            <BotanicalTagList
              items={[
                '30+ Biodynamic Acres',
                '2,500+ Heirloom Garden Roses',
                'One Wedding Per Weekend',
                'Up to 180 Guests',
                'Wheel-Thrown Stoneware Vessels',
                'Natural Dye Floral Studio',
                'Living Santa Ynez Clay',
                'Private Sanctuary Loft & Suites'
              ]}
            />
          </div>
        </section>

        {/* 4. Biodynamic Rose Farm & Event Venue Core Offerings */}
        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2.5">
                <img
                  src="/images/ecomama-rose-icon.png"
                  alt=""
                  className="w-5 h-5 object-contain"
                />
                <span className="brandkit-stamp">
                  B I O D Y N A M I C   R O S E   F A R M   &amp;   E V E N T   V E N U E
                </span>
              </div>
              <h2
                className="headline-dual text-[34px] md:text-[44px] text-[#0E2725] leading-[1.12]"
                style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
              >
                <span>Rooted in living soil—crafted for </span>
                <em className="italic font-light text-[#8E5D30]">unforgettable gatherings</em>.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p
                className="text-[16px] leading-[1.65] text-[#333333] font-light tracking-[-0.023em]"
                style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
              >
                Unlike conventional event spaces, every celebration at Ecomama Farms unfolds inside
                a living 30+ acre biodynamic farmstead—surrounded by 2,500+ fragrant heirloom
                roses, ancient olive trees, weathered barns, and panoramic views of the Santa Ynez
                Mountains.
              </p>
            </div>
          </div>

          {/* Dual Core Pillars: The Sanctuary Venue & The Biodynamic Rose Farm */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
            {/* PILLAR 1: The Private Estate Venue */}
            <div className="step-card flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/10] rounded-[18px] overflow-hidden mb-6 bg-[#FEF9EF] border border-[#D2CCBE]/60">
                  <img
                    src="/images/06-dji-0676-enhanced-nr-copy.jpg"
                    alt="Aerial view of the Estate Venue at Ecomama Farms"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center justify-between text-[11.5px] text-[#8E5D30] mb-3 font-semibold">
                  <span
                    className="uppercase tracking-[0.2em]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    THE PRIVATE ESTATE VENUE
                  </span>
                  <span className="px-3 py-1 rounded-[100px] bg-[#FEF9EF] border border-[#D2CCBE] text-[#0E2725] font-medium tracking-[-0.023em]">
                    Up to 180 Guests · 1 Wedding Per Weekend
                  </span>
                </div>
                <h3
                  className="headline-dual text-[26px] md:text-[32px] text-[#0E2725] mb-3 leading-snug"
                  style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                >
                  <span>Six Intimate Facilities &amp; </span>
                  <em className="italic font-light text-[#8E5D30]">Sunlit Ceremony Lawns</em>
                </h3>
                <p
                  className="text-[15.5px] text-[#333333] leading-[1.65] font-light tracking-[-0.023em] mb-6"
                  style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                >
                  Dedicated to one exclusive celebration each weekend. Experience total sanctuary
                  privacy across 30+ acres with progressive flow from rose garden vows to cocktail
                  hour beside the weeping willow pond and starlit dining on the Terraced Lawn.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    'Heart of the Rose Garden',
                    'The Terraced Lawn',
                    'The Rose Barn',
                    'Mountain View Barn',
                    'Bridal Loft & Cottage'
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-[100px] bg-[#FEF9EF] border border-[#D2CCBE] text-[#515151] text-[12px] tracking-[-0.023em]"
                      style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-[#D2CCBE]/70 flex flex-wrap items-center justify-between gap-3">
                <Link to="/venue" className="refero-pill-btn">
                  <span>Explore the Venue</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/vignettes" className="refero-ghost-link text-[#0E2725]">
                  <span>View All 12 Vignettes</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* PILLAR 2: The Biodynamic Rose Farm */}
            <div className="step-card flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/10] rounded-[18px] overflow-hidden mb-6 bg-[#FEF9EF] border border-[#D2CCBE]/60">
                  <img
                    src="/images/03-james-and-jess-at-ecomama-farms.jpg"
                    alt="2,500+ Heirloom Garden Roses at Ecomama Farms"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center justify-between text-[11.5px] text-[#8E5D30] mb-3 font-semibold">
                  <span
                    className="uppercase tracking-[0.2em]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    BIODYNAMIC ROSE FARM
                  </span>
                  <span className="px-3 py-1 rounded-[100px] bg-[#FEF9EF] border border-[#D2CCBE] text-[#0E2725] font-medium tracking-[-0.023em]">
                    2,500+ Bushes · Seed to Centerpiece
                  </span>
                </div>
                <h3
                  className="headline-dual text-[26px] md:text-[32px] text-[#0E2725] mb-3 leading-snug"
                  style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                >
                  <span>2,500+ Heirloom Garden Roses &amp; </span>
                  <em className="italic font-light text-[#8E5D30]">Living Soil Stewardship</em>
                </h3>
                <p
                  className="text-[15.5px] text-[#333333] leading-[1.65] font-light tracking-[-0.023em] mb-6"
                  style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                >
                  Grown in living Santa Ynez soil without synthetic chemicals, pesticides, or
                  commercial fertilizers. Our heirloom and David Austin garden roses are harvested
                  hours before your event for incomparable fragrance, botanical vitality, and natural form.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    '2,500+ Heirloom Rose Bushes',
                    'David Austin Rosettes',
                    '100% Foam-Free Mechanics',
                    'Closed-Loop Composting',
                    'Olive Grove & Heritage Animals'
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-[100px] bg-[#FEF9EF] border border-[#D2CCBE] text-[#515151] text-[12px] tracking-[-0.023em]"
                      style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-[#D2CCBE]/70 flex flex-wrap items-center justify-between gap-3">
                <Link to="/the-farm" className="refero-pill-btn">
                  <span>Discover the Farm</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/floral" className="refero-ghost-link text-[#0E2725]">
                  <span>View Floral Lookbook</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Estate Metric / Stat Grid with 1px Warm Taupe Dividers */}
          <EstateStatGrid
            stats={[
              { val: '30+ Acres', lbl: 'Biodynamic Farmstead', notes: 'Santa Ynez Valley foothills' },
              { val: '2,500+', lbl: 'Heirloom Rose Bushes', notes: 'Gathered by hand at first light' },
              { val: 'Up to 180', lbl: 'Long-Table Guests', notes: 'Al fresco & weathered barn seating' },
              { val: '1 Wedding', lbl: 'Per Weekend Reserved', notes: 'Total sanctuary privacy' }
            ]}
          />
        </section>

        {/* 5. Editorial Testimonial Row (Direct on Parchment Canvas) */}
        <section className="bg-[#EDE8DC]/50 border-y border-[#D2CCBE]/70 py-6">
          <EditorialTestimonialRow
            quote="We envisioned a sanctuary where wedding celebrations feel deeply rooted in the land—where guests dine on raw linen beside heirloom roses harvested that very morning, surrounded by the quiet rhythm of the Santa Ynez mountains."
            author="The Ecomama Farm Stewards"
            role="Founders &amp; Biodynamic Rose Growers · Santa Ynez, California"
            avatar="/images/03-james-and-jess-at-ecomama-farms.jpg"
            illustration="/images/brandkit/illustration-09.png"
            stamp="THE ART OF SLOW GATHERING"
          />
        </section>

        {/* 7. Full-Bleed Sunset Section Break with Bottom-Half Gradient Only */}
        <section className="relative w-full h-[74vh] rounded-none overflow-hidden">
          <img
            src="/images/05-ecomama-farms-santa-ynez-wedding-reception18.jpg"
            alt="The Terraced Lawn at Ecomama Farms"
            className="w-full h-full object-cover"
          />
          {/* Soft bottom-half gradient ONLY — keeps the twilight sky and mountain ridge unshaded */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] hero-bottom-shade" />

          <div className="absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-12 py-14 flex flex-col justify-end text-[#FEF9EF]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7 space-y-3">
                <span
                  className="italic text-[19px] text-[#A6A26A]"
                  style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                >
                  Al Fresco Twilight on the Terraced Lawn
                </span>
                <h2
                  className="headline-dual text-[34px] md:text-[50px] leading-[1.05] text-[#FEF9EF]"
                  style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                >
                  <span>Golden hour fading into </span>
                  <em className="italic font-light text-[#E4DDD0]">candlelight</em>
                  <span> over the Santa Ynez mountains.</span>
                </h2>
              </div>
              <div className="lg:col-span-5 lg:text-right flex flex-col lg:items-end gap-4">
                <p
                  className="text-[16px] text-[#EDE8DC]/95 max-w-md font-light leading-relaxed tracking-[-0.023em]"
                  style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                >
                  Move effortlessly from vows in the Heart of the Rose Garden to cocktails beside
                  the weeping willow pond and long-table stoneware dining on the lawn.
                </p>
                <Link
                  to="/vignettes"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[40px] bg-[#8E5D30] hover:bg-[#8E5D30] text-[#FEF9EF] text-[14.5px] font-semibold tracking-[-0.023em] transition-colors"
                >
                  <span>Explore All Garden &amp; Barn Spaces</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Six Vignettes Showcase on Aged Paper Cards */}
        <section className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#8E5D30]/30">
            <div>
              <span className="brandkit-stamp block mb-2">
                G A T H E R E D   A C R O S S   T H E   G R O U N D S
              </span>
              <h2
                className="headline-dual text-[32px] md:text-[42px] text-[#0E2725] leading-[1.12]"
                style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
              >
                <span>Six Intimate Spaces, </span>
                <em className="italic font-light text-[#8E5D30]">One Homegrown Sanctuary</em>
              </h2>
            </div>
            <Link to="/vignettes" className="refero-pill-btn self-start md:self-auto">
              <span>Explore All 12 Estate Vignettes</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-7 md:gap-8">
            {VIGNETTES_FACILITIES.map((v, i) => {
              const colSpan =
                i % 3 === 0
                  ? 'md:col-span-5'
                  : i % 3 === 1
                  ? 'md:col-span-4 md:mt-10'
                  : 'md:col-span-3 md:mt-20';
              return (
                <div
                  key={v.title}
                  className={`${colSpan} refero-card flex flex-col justify-between`}
                >
                  <div>
                    <div className="refero-photo aspect-[4/3] mb-5">
                      <img
                        src={v.image}
                        alt={v.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[13px] text-[#8E5D30] mb-2 font-medium">
                      <span
                        className="italic text-[16.5px]"
                        style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                      >
                        {v.tag}
                      </span>
                      <span className="px-3 py-0.5 rounded-[9999px] bg-[#FEF9EF] border border-[#D2CCBE] text-[#0E2725] text-[11.5px] font-medium tracking-[-0.023em]">
                        {v.capacity}
                      </span>
                    </div>
                    <h3 className="refero-heading text-[#0E2725] mt-1 mb-2">{v.title}</h3>
                    <p
                      className="text-[14.5px] text-[#333333] leading-[1.65] font-light tracking-[-0.023em] mb-5"
                      style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                    >
                      {v.originalCopy}
                    </p>
                  </div>
                  <Link to="/vignettes" className="refero-ghost-link text-[#0E2725] self-start">
                    <span>Discover {v.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>

          <BrandKitBotanicalSeal
            illustration="/images/brandkit/illustration-10.png"
            stamp="S A N T A   Y N E Z   V A L L E Y   ·   C A L I F O R N I A"
            quote="Every rose is cut at daybreak, every table set on raw linen and stoneware, and every weekend reserved for one family alone."
          />
        </section>
      </div>
    );
  }

  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        {/* 1. Full-Bleed 100vh Hero Frame with Split Opposite-Edge Headline & Soft Bottom-Half Gradient */}
        <OriginalReferoHeroFrame
          image="/images/02-screenshot-2026-03-30-at-2-37-39-pm.png"
          imageAlt="Aerial view of Ecomama Farms in the Santa Ynez Valley"
          eyebrowLeft="34.6136° N, 120.0797° W — SANTA YNEZ VALLEY"
          headlineLeft="Where Earth’s Beauty & Memorable Gatherings Converge."
          statementRight="A working regenerative rose farm and private California ranch estate for bespoke weddings & events."
          subcaptionRight="In the heart of the Santa Ynez Valley lies a slice of paradise: Ecomama Farms. Welcome to our lush 30+ acre sanctuary, dedicated to regenerative agriculture, sustainability, and unforgettable events."
          primaryAction={{ label: 'Explore the Venue', to: '/venue' }}
          secondaryAction={{ label: 'Inquire for 2026–2027', to: '/contact' }}
          fullHeight={true}
        />

        {/* 2. Ecomama Sage Accent Strip (#78926E) */}
        <OriginalReferoSageStrip
          label="01 / The Sanctuary"
          statement="30+ Regenerative Acres · 2,500+ Organic Heirloom Rose Bushes · Up to 180 Celebration Guests"
          rightLink={{ text: 'Schedule a Private Estate Tour', to: '/contact' }}
        />

        {/* 3. Asymmetric Editorial Mosaic Section */}
        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7">
              <div className="text-[12px] uppercase tracking-[0.14em] text-[#78926E] mb-3">
                02 / Architectural &amp; Botanical Harmony
              </div>
              <h2 className="refero-heading-lg text-[#3E3E3E]">
                Designed by nature, curated for life’s most meaningful milestones.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <p className="text-[16px] leading-[1.45] tracking-[-0.025em] text-[#78756F] max-w-md ml-auto">
                Unlike conventional event halls, every celebration at Ecomama Farms unfolds inside a
                living biodynamic ecosystem—surrounded by fragrant David Austin roses, ancient olive
                trees, and panoramic Santa Ynez mountain ridgelines.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            <div className="md:col-span-7 space-y-4">
              <div className="rounded-[20px] overflow-hidden aspect-[16/11] bg-white">
                <img
                  src="/images/06-dji-0676-enhanced-nr-copy.jpg"
                  alt="The Venue at Ecomama Farms"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="flex items-start justify-between gap-4 pt-2 px-1">
                <div>
                  <span className="text-[12px] text-[#999690] tracking-[-0.02em]">
                    01 — Private Estate Venue
                  </span>
                  <h3 className="refero-heading text-[#3E3E3E] mt-0.5">
                    Six distinct facilities &amp; six portrait spaces across 30+ acres
                  </h3>
                </div>
                <Link to="/venue" className="refero-pill-btn shrink-0">
                  <span>Explore Venue</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-5 md:mt-20 space-y-4">
              <div className="rounded-[20px] overflow-hidden aspect-[4/5] bg-white">
                <img
                  src="/images/03-james-and-jess-at-ecomama-farms.jpg"
                  alt="2,500+ Organic Heirloom Roses"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="flex items-start justify-between gap-4 pt-2 px-1">
                <div>
                  <span className="text-[12px] text-[#999690] tracking-[-0.02em]">
                    02 — Seed-to-Centerpiece Florals
                  </span>
                  <h3 className="refero-heading text-[#3E3E3E] mt-0.5">
                    2,500+ organic garden roses harvested at peak fragrance
                  </h3>
                </div>
                <Link to="/floral" className="refero-ghost-link text-[#3E3E3E] shrink-0 mt-2">
                  <span>Floral Program</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-5 md:-mt-10 space-y-4">
              <div className="rounded-[20px] overflow-hidden aspect-[4/3] bg-white">
                <img
                  src="/images/34-dji-0656.jpg"
                  alt="Regenerative Farming at Ecomama Farms"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="px-1">
                <span className="text-[12px] text-[#999690]">03 — Regenerative Stewardship</span>
                <div className="flex items-center justify-between mt-1">
                  <h3
                    className="text-[22px] tracking-[-0.03em] text-[#3E3E3E]"
                    style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                  >
                    Heritage orchards, biodynamic compost &amp; farm animals
                  </h3>
                  <Link to="/the-farm" className="refero-ghost-link text-[#3E3E3E]">
                    <span>The Farm</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 md:mt-8">
              <div className="bg-white rounded-[20px] p-8 md:p-12 border border-[#D9D4CC] space-y-6">
                <div className="flex items-center justify-between border-b border-[#D9D4CC] pb-4">
                  <div className="flex items-center gap-2.5">
                    <img src="/images/ecomama-rose-icon.png" alt="" className="w-5 h-5" />
                    <span className="text-[12px] uppercase tracking-[0.14em] text-[#78926E]">
                      Estate Specifications
                    </span>
                  </div>
                  <span className="text-[12px] text-[#999690]">Santa Ynez, CA</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {[
                    { val: '180', lbl: 'Estate Capacity' },
                    { val: '2,500+', lbl: 'Heirloom Roses' },
                    { val: '12', lbl: 'Facilities & Vignettes' },
                    { val: '100%', lbl: 'Organic & Biodynamic' }
                  ].map((s) => (
                    <div key={s.lbl}>
                      <div
                        className="text-[34px] leading-none tracking-[-0.04em] text-[#3E3E3E]"
                        style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                      >
                        {s.val}
                      </div>
                      <div className="text-[12px] text-[#78756F] mt-1.5">{s.lbl}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#D9D4CC] flex flex-wrap items-center justify-between gap-4">
                  <p className="text-[14px] text-[#78756F]">
                    Available for full-weekend buyouts, intimate farm dinners, and custom workshops.
                  </p>
                  <div className="flex items-center gap-4">
                    <Link to="/vignettes" className="refero-pill-btn">
                      <span>View Vignettes</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link to="/services" className="refero-ghost-link text-[#3E3E3E]">
                      <span>Packages</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Full-Bleed Cinematic Section Break */}
        <section className="relative w-full h-[72vh] rounded-none overflow-hidden">
          <img
            src="/images/05-ecomama-farms-santa-ynez-wedding-reception18.jpg"
            alt="The Terraced Lawn at Ecomama Farms"
            className="w-full h-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 hero-top-nav-whisper" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] hero-bottom-shade" />
          <div className="absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-12 py-14 flex flex-col justify-between text-white">
            <div className="flex items-center justify-between text-[12px] tracking-[-0.02em] border-b border-white/25 pb-4">
              <span>FEATURED VIGNETTE — THE TERRACED LAWN &amp; ROSE GARDEN</span>
              <span>UP TO 180 GUESTS</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <h2
                className="lg:col-span-7 refero-display text-white"
                style={{ color: '#FFFFFF' }}
              >
                Panoramic golden hour over the Santa Ynez mountains.
              </h2>
              <div className="lg:col-span-5 lg:text-right flex flex-col lg:items-end gap-4">
                <p className="text-[16px] text-white/85 max-w-md">
                  Move effortlessly from a Rose Garden ceremony to cocktail hour beside the willow
                  pond and candlelit dining on the Terraced Lawn.
                </p>
                <Link
                  to="/vignettes"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[100px] border border-white text-white text-[14px] hover:bg-white hover:text-[#3E3E3E] transition-colors"
                >
                  <span>Explore All Estate Vignettes</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Asymmetric 6-Vignette Preview Grid */}
        <section className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-[#D9D4CC]">
            <div>
              <div className="text-[12px] uppercase tracking-[0.14em] text-[#78926E] mb-2">
                03 / Estate Architecture
              </div>
              <h2 className="refero-heading-lg text-[#3E3E3E]">
                Six Event Facilities, One Seamless Flow
              </h2>
            </div>
            <Link to="/vignettes" className="refero-pill-btn self-start md:self-auto">
              <span>All 12 Facilities &amp; Vignettes</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {VIGNETTES_FACILITIES.map((v, i) => {
              const colSpan =
                i % 3 === 0
                  ? 'md:col-span-5'
                  : i % 3 === 1
                  ? 'md:col-span-4 md:mt-10'
                  : 'md:col-span-3 md:mt-20';
              return (
                <div
                  key={v.title}
                  className={`${colSpan} bg-white rounded-[20px] p-5 border border-[#D9D4CC] flex flex-col justify-between`}
                >
                  <div>
                    <div className="rounded-[20px] overflow-hidden aspect-[4/3] mb-4">
                      <img
                        src={v.image}
                        alt={v.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[12px] text-[#78926E] mb-1">
                      <span>
                        0{i + 1} / {v.tag}
                      </span>
                      <span className="text-[#999690]">{v.capacity}</span>
                    </div>
                    <h3 className="refero-heading text-[#3E3E3E] mt-1 mb-2">{v.title}</h3>
                    <p className="text-[14px] text-[#78756F] leading-[1.4] mb-4">
                      {v.originalCopy}
                    </p>
                  </div>
                  <Link to="/vignettes" className="refero-ghost-link text-[#3E3E3E] self-start">
                    <span>Inspect Vignette</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="relative h-[78vh] min-h-[520px] flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src="/images/02-screenshot-2026-03-30-at-2-37-39-pm.png"
          alt="Ecomama Farms Aerial View"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[56%] hero-bottom-shade" />
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
            Where Earth’s Beauty and Memorable Gatherings Converge
          </h1>
          <p className="text-base md:lg font-light max-w-2xl mx-auto leading-relaxed">
            In the heart of the Santa Ynez Valley lies a slice of paradise: Ecomama Farms.
            Welcome to our lush sanctuary, dedicated to regenerative agriculture,
            sustainability, and unforgettable events.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'The Farm', img: '/images/34-dji-0656.jpg', link: '/the-farm' },
            {
              title: 'Roses',
              img: '/images/03-james-and-jess-at-ecomama-farms.jpg',
              link: '/floral'
            },
            {
              title: 'The Venue',
              img: '/images/06-dji-0676-enhanced-nr-copy.jpg',
              link: '/venue'
            }
          ].map((card) => (
            <div key={card.title} className="text-center space-y-4">
              <div className="aspect-[4/5] overflow-hidden bg-black/5">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <h2 className="font-serif text-3xl text-[#3E3E3E]">{card.title}</h2>
              <div>
                <Link
                  to={card.link}
                  className="inline-block px-7 py-3 bg-[#78926E] text-white text-xs uppercase tracking-widest hover:opacity-90"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

/* ============================================================================
   2. VENUE PAGE (/venue)
============================================================================ */
export const VenuePage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  if (mode === 'organic') {
    return (
      <div className="text-[#0E2725]">
        <ReferoHeroFrame
          image="/images/06-dji-0676-enhanced-nr-copy.jpg"
          imageAlt="Ecomama Farms Wedding & Event Venue"
          eyebrowLeft="Private Estate Sanctuary · Santa Ynez Valley"
          headlineLeft={
            <>
              Six Intimate Facilities,{' '}
              <em className="italic font-light text-[#E4DDD0]">One Seamless Flow.</em>
            </>
          }
          statementRight="A private California ranch estate of heirloom rose gardens, olive lanes, and mountain-view barns—reserved exclusively for your gathering."
          subcaptionRight="Welcome to our 30+ acre sanctuary in the heart of the Santa Ynez Valley—dedicated to regenerative agriculture, homegrown heirloom roses, and celebrations that feel genuinely natural."
          primaryAction={{ label: 'Wander the 12 Vignettes', to: '/vignettes' }}
          secondaryAction={{ label: 'Explore Offerings & Tiers', to: '/services' }}
          botanicalIllustration="/images/brandkit/illustration-02.png"
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Unhurried Privacy"
          statement="One Private Celebration Per Weekend · Up to 180 Guests · In-House Planning & Estate-Grown Heirloom Florals"
          rightLink={{ text: 'Request Estate Guide', to: '/contact' }}
          illustration="/images/brandkit/illustration-02.png"
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2.5">
                <img
                  src="/images/brandkit/illustration-05.png"
                  alt=""
                  className="w-6 h-6 object-contain"
                />
                <span className="brandkit-stamp">
                  A   N A T U R A L   S E N S E   O F   P L A C E
                </span>
              </div>
              <h2
                className="headline-dual text-[34px] md:text-[44px] text-[#0E2725] leading-[1.12]"
                style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
              >
                <span>An unhurried flow from </span>
                <em className="italic font-light text-[#8E5D30]">sunlit rose gardens</em>
                <span> to starlit stoneware dining.</span>
              </h2>
              <p
                className="text-[16px] text-[#333333] leading-[1.7] font-light tracking-[-0.023em]"
                style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
              >
                On our sprawling 30+ acre property, you’ll find an idyllic wedding and events venue
                that can comfortably accommodate up to 180 guests. Choose from several picturesque
                spots, including our vibrant rose garden, tranquil willow pond, terraced lawn, and
                shaded olive lane, each offering a tactile, storied backdrop for your special occasion.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/vignettes" className="refero-pill-btn">
                  <span>Explore All 12 Vignettes</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/services" className="refero-btn-secondary">
                  <span>View Services &amp; Packages</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Asymmetric Photo Pair with Pottery Amphora Arch & Stoneware Card */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-6 items-start">
              <div className="col-span-7 refero-arch-photo aspect-[4/5]">
                <img
                  src="/images/18-sb5-52.jpg"
                  alt="Terraced Lawn Reception"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-5 mt-16 space-y-6">
                <div className="refero-photo aspect-square">
                  <img
                    src="/images/26-screenshot-2024-07-24-at-9-19-50-pm.png"
                    alt="The Olive Lane"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="refero-card p-6 relative overflow-hidden">
                  <img
                    src="/images/brandkit/illustration-07.png"
                    alt=""
                    className="pointer-events-none absolute -right-2 -bottom-4 w-20 h-20 object-contain opacity-25"
                  />
                  <div className="brandkit-stamp mb-1">G A R D E N   C A P A C I T Y</div>
                  <div className="refero-heading text-[#0E2725]">Up to 180 Guests</div>
                  <p className="text-[13px] text-[#4E5852] mt-1.5 font-light tracking-[-0.023em]">
                    Heart of the Rose Garden (180) · Terraced Lawn (150–180) · Mountain View Barn
                  </p>
                </div>
              </div>
            </div>
          </div>

          <EstateStatGrid
            stats={[
              { val: '6 Spaces', lbl: 'Event Facilities', notes: 'Ceremony gardens, lawn & barns' },
              { val: '6 Vignettes', lbl: 'Portrait Backdrops', notes: 'Willow pond, olive lane & arbor' },
              { val: '2 Suites', lbl: 'Getting-Ready Sanctuaries', notes: 'Bridal Loft & Cottage' },
              { val: '100% Private', lbl: 'Exclusive Access', notes: 'Only one wedding per weekend' }
            ]}
          />

          <BrandKitBotanicalSeal
            illustration="/images/brandkit/illustration-08.png"
            stamp="P R I V A T E   E S T A T E   H O S P I T A L I T Y"
            quote="We host only one wedding each weekend so the gardens, barns, and rose fields belong entirely to your gathering."
          />
        </section>
      </div>
    );
  }

  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <OriginalReferoHeroFrame
          image="/images/06-dji-0676-enhanced-nr-copy.jpg"
          imageAlt="Ecomama Farms Wedding & Event Venue"
          eyebrowLeft="PRIVATE ESTATE VENUE · SANTA YNEZ VALLEY"
          headlineLeft="The Venue at Ecomama Farms."
          statementRight="Six celebration facilities and six botanical portrait vignettes across 30+ acres of organic roses, olive trees, and orchards."
          primaryAction={{ label: 'Explore Vignettes', to: '/vignettes' }}
          secondaryAction={{ label: 'View Packages', to: '/services' }}
          fullHeight={false}
        />

        <OriginalReferoSageStrip
          label="Venue Architecture"
          statement="Exclusive Private Estate Access · Up to 180 Guests · In-House Full & Partial Planning · Estate-Grown Organic Florals"
          rightLink={{ text: 'Download Venue Brochure', to: '/contact' }}
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-[12px] uppercase tracking-[0.14em] text-[#78926E]">
                01 / Estate Overview
              </div>
              <h2 className="refero-heading-lg text-[#3E3E3E]">
                An unhurried progressive flow from ceremony to starlight.
              </h2>
              <p className="text-[16px] text-[#78756F] leading-[1.5]">
                In the heart of the Santa Ynez Valley lies a slice of paradise: Ecomama Farms.
                Welcome to our lush sanctuary, dedicated to regenerative agriculture,
                sustainability, and unforgettable events.
              </p>
              <p className="text-[16px] text-[#78756F] leading-[1.5]">
                On our sprawling property, you’ll find an idyllic wedding and events venue that can
                accommodate up to 180 guests. Choose from several picturesque spots, including our
                vibrant rose garden, tranquil willow pond, terraced lawn, and shaded olive lane,
                each offering a magical backdrop for your special occasion.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/vignettes" className="refero-pill-btn">
                  <span>Explore All 12 Vignettes</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/services" className="refero-ghost-link text-[#3E3E3E] py-2">
                  <span>Services &amp; Packages</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-12 gap-6 items-start">
              <div className="col-span-7 rounded-[20px] overflow-hidden aspect-[4/5]">
                <img
                  src="/images/18-sb5-52.jpg"
                  alt="Terraced Lawn Reception"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-5 mt-16 space-y-6">
                <div className="rounded-[20px] overflow-hidden aspect-square">
                  <img
                    src="/images/26-screenshot-2024-07-24-at-9-19-50-pm.png"
                    alt="The Olive Lane"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white rounded-[20px] p-6 border border-[#D9D4CC]">
                  <div className="text-[12px] text-[#78926E] mb-1">Capacity</div>
                  <div className="refero-heading text-[#3E3E3E]">Up to 180 Guests</div>
                  <p className="text-[12px] text-[#78756F] mt-1">
                    Heart of the Garden (180) · Terraced Lawn (150–180) · Mountain View Barn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <h1 className="font-serif text-4xl md:text-6xl text-[#252A26]">The Venue</h1>
          <p className="text-base text-[#252A26]/80 font-light leading-relaxed">
            In the heart of the Santa Ynez Valley lies a slice of paradise: Ecomama Farms. On our
            sprawling property, you’ll find an idyllic wedding and events venue that can
            accommodate up to 180 guests across six distinct outdoor vignettes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/vignettes"
              className="px-6 py-3.5 bg-[#78926E] text-white text-xs uppercase tracking-[0.2em]"
            >
              Explore Vignettes
            </Link>
            <Link
              to="/services"
              className="px-6 py-3.5 border border-[#252A26]/30 text-xs uppercase tracking-[0.2em]"
            >
              View Services
            </Link>
          </div>
        </div>
        <div className="lg:col-span-6">
          <img
            src="/images/06-dji-0676-enhanced-nr-copy.jpg"
            alt="The Venue"
            className="w-full h-[460px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   3. VIGNETTES PAGE (/vignettes)
============================================================================ */
export const VignettesPage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  const [tab, setTab] = useState<'all' | 'facilities' | 'photo'>('all');

  if (mode === 'organic') {
    return (
      <div className="text-[#0E2725]">
        <ReferoHeroFrame
          image="/images/17-dji-0658-enhanced-sr.jpg"
          imageAlt="Estate Vignettes at Ecomama Farms"
          eyebrowLeft="Garden Lawns, Heritage Barns & Shaded Lanes"
          headlineLeft={
            <>
              Spaces Shaped by{' '}
              <em className="italic font-light text-[#E4DDD0]">Orchard, Water &amp; Rose.</em>
            </>
          }
          statementRight="Each celebration unfolds progressively across our 30+ acre ranch—from vows in the Heart of the Garden to dining in the Mountain View Barn."
          primaryAction={{ label: 'Book a Private Walkthrough', to: '/contact' }}
          secondaryAction={{ label: 'Explore Packages', to: '/services' }}
          botanicalIllustration="/images/brandkit/illustration-03.png"
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Twelve Intimate Settings"
          statement="Six Celebration Facilities & Suites Paired with Six Botanical Portrait Vignettes Across the Estate"
          illustration="/images/brandkit/illustration-03.png"
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-16 pb-6 border-b border-[#8E5D30]/30">
            <div>
              <span className="brandkit-stamp block mb-1.5">
                W A N D E R   T H E   E S T A T E
              </span>
              <h2
                className="headline-dual text-[32px] md:text-[42px] text-[#0E2725]"
                style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
              >
                <span>Sanctuary Spaces &amp; </span>
                <em className="italic font-light text-[#8E5D30]">Botanical Vignettes</em>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Estate Spaces' },
                { id: 'facilities', label: 'Ceremony, Barns & Suites' },
                { id: 'photo', label: 'Garden & Orchard Vignettes' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTab(item.id as 'all' | 'facilities' | 'photo')}
                  className={`px-5 py-2.5 rounded-[40px] text-[13.5px] font-medium tracking-[-0.023em] border transition-colors ${
                    tab === item.id
                      ? 'bg-[#8E5D30] text-[#FEF9EF] border-[#8E5D30]'
                      : 'bg-[#F5EEE1] text-[#0E2725] border-[#D2CCBE] hover:border-[#8E5D30]'
                  }`}
                  style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {(tab === 'all' || tab === 'facilities') && (
            <div className="mb-24">
              <div className="flex items-center gap-2.5 mb-8">
                <img
                  src="/images/brandkit/illustration-04.png"
                  alt=""
                  className="w-6 h-6 object-contain"
                />
                <span
                  className="italic text-[22px] text-[#8E5D30]"
                  style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                >
                  Ceremony Lawns, Heritage Barns &amp; Private Suites
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {VIGNETTES_FACILITIES.map((f, idx) => (
                  <div
                    key={f.title}
                    className={`refero-card space-y-4 ${
                      idx % 3 === 1 ? 'lg:mt-8' : idx % 3 === 2 ? 'lg:mt-16' : ''
                    }`}
                  >
                    <div className="refero-photo aspect-[4/3]">
                      <img src={f.image} alt={f.alt} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center justify-between text-[12px] text-[#8E5D30]">
                      <span
                        className="italic text-[16px]"
                        style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                      >
                        {f.tag}
                      </span>
                      <span className="px-3 py-0.5 rounded-[9999px] bg-[#FEF9EF] border border-[#D2CCBE] text-[#0E2725] text-[11.5px] font-medium tracking-[-0.023em]">
                        {f.capacity}
                      </span>
                    </div>
                    <h3 className="refero-heading text-[#0E2725]">{f.title}</h3>
                    <p
                      className="text-[14.5px] text-[#333333] leading-[1.65] font-light tracking-[-0.023em]"
                      style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                    >
                      {f.originalCopy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(tab === 'all' || tab === 'photo') && (
            <div>
              <div className="flex items-center gap-2.5 mb-8">
                <img
                  src="/images/brandkit/illustration-06.png"
                  alt=""
                  className="w-6 h-6 object-contain"
                />
                <span
                  className="italic text-[22px] text-[#8E5D30]"
                  style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                >
                  Botanical Walks, Orchards &amp; Golden-Hour Portrait Vignettes
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {VIGNETTES_PHOTO_OPS.map((p, idx) => (
                  <div
                    key={p.title}
                    className={`refero-card space-y-4 ${
                      idx % 3 === 1 ? 'lg:mt-8' : idx % 3 === 2 ? 'lg:mt-16' : ''
                    }`}
                  >
                    <div className="refero-photo aspect-[4/3]">
                      <img src={p.image} alt={p.alt} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="refero-heading text-[#0E2725]">{p.title}</h3>
                    <p
                      className="text-[14.5px] text-[#333333] leading-[1.65] font-light tracking-[-0.023em]"
                      style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                    >
                      {p.redesignCopy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    );
  }

  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <OriginalReferoHeroFrame
          image="/images/17-dji-0658-enhanced-sr.jpg"
          imageAlt="Estate Vignettes at Ecomama Farms"
          eyebrowLeft="12 ESTATE SPACES · 6 FACILITIES + 6 PORTRAIT VIGNETTES"
          headlineLeft="Spaces Shaped by Orchard, Water & Rose."
          statementRight="Each celebration unfolds progressively across our 30+ acre ranch—from the Heart of the Garden to the Mountain View Barn."
          primaryAction={{ label: 'Book a Private Tour', to: '/contact' }}
          secondaryAction={{ label: 'Explore Packages', to: '/services' }}
          fullHeight={false}
        />

        <OriginalReferoSageStrip
          label="Spatial Directory"
          statement="6 Event Facilities & Getting-Ready Suites + 6 Botanical Portrait Vignettes"
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-14 pb-6 border-b border-[#D9D4CC]">
            <h2 className="refero-heading-lg text-[#3E3E3E]">Estate Spaces &amp; Vignettes</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All 12 Spaces' },
                { id: 'facilities', label: '6 Event Facilities' },
                { id: 'photo', label: '6 Portrait Vignettes' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTab(item.id as 'all' | 'facilities' | 'photo')}
                  className={`px-5 py-2 rounded-[100px] text-[13px] border transition-colors ${
                    tab === item.id
                      ? 'bg-[#3E3E3E] text-[#F4F1EE] border-[#3E3E3E]'
                      : 'bg-white text-[#3E3E3E] border-[#D9D4CC] hover:border-[#3E3E3E]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {(tab === 'all' || tab === 'facilities') && (
            <div className="mb-20">
              <div className="text-[12px] uppercase tracking-[0.14em] text-[#78926E] mb-8">
                01 / Event Facilities &amp; Suites
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {VIGNETTES_FACILITIES.map((f, idx) => (
                  <div
                    key={f.title}
                    className={`bg-white rounded-[20px] p-6 border border-[#D9D4CC] space-y-4 ${
                      idx % 3 === 1 ? 'lg:mt-8' : idx % 3 === 2 ? 'lg:mt-16' : ''
                    }`}
                  >
                    <div className="rounded-[20px] overflow-hidden aspect-[4/3]">
                      <img src={f.image} alt={f.alt} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center justify-between text-[12px] text-[#78926E]">
                      <span>{f.tag}</span>
                      <span className="px-2.5 py-0.5 rounded-[100px] border border-[#D9D4CC] text-[#3E3E3E]">
                        {f.capacity}
                      </span>
                    </div>
                    <h3 className="refero-heading text-[#3E3E3E]">{f.title}</h3>
                    <p className="text-[14px] text-[#78756F] leading-[1.45]">{f.originalCopy}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(tab === 'all' || tab === 'photo') && (
            <div>
              <div className="text-[12px] uppercase tracking-[0.14em] text-[#78926E] mb-8">
                02 / Botanical &amp; Portrait Vignettes
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {VIGNETTES_PHOTO_OPS.map((p, idx) => (
                  <div
                    key={p.title}
                    className={`bg-white rounded-[20px] p-6 border border-[#D9D4CC] space-y-4 ${
                      idx % 3 === 1 ? 'lg:mt-8' : idx % 3 === 2 ? 'lg:mt-16' : ''
                    }`}
                  >
                    <div className="rounded-[20px] overflow-hidden aspect-[4/3]">
                      <img src={p.image} alt={p.alt} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="refero-heading text-[#3E3E3E]">{p.title}</h3>
                    <p className="text-[14px] text-[#78756F] leading-[1.45]">{p.redesignCopy}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      <div className="max-w-3xl">
        <h1 className="font-serif text-4xl md:text-6xl mb-4">Estate Vignettes</h1>
        <p className="text-base opacity-80 font-light">
          Explore the six event facilities and six portrait vignettes at Ecomama Farms.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {VIGNETTES_FACILITIES.map((v) => (
          <div key={v.title} className="bg-white p-6 border border-black/10 space-y-4">
            <img src={v.image} alt={v.alt} className="w-full h-72 object-cover" />
            <h2 className="font-serif text-3xl">{v.title}</h2>
            <p className="text-sm opacity-80">{v.originalCopy}</p>
          </div>
        ))}
        {VIGNETTES_PHOTO_OPS.map((p) => (
          <div key={p.title} className="bg-white p-6 border border-black/10 space-y-4">
            <img src={p.image} alt={p.alt} className="w-full h-72 object-cover" />
            <h2 className="font-serif text-3xl">{p.title}</h2>
            <p className="text-sm opacity-80">{p.originalCopy}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ============================================================================
   4. SERVICES PAGE (/services)
============================================================================ */
export const ServicesPage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  if (mode === 'organic') {
    return (
      <div className="text-[#0E2725]">
        <ReferoHeroFrame
          image="/images/29-val-and-blake-wedding-preview-1.jpg"
          imageAlt="Ecomama Farms Services & Planning Packages"
          eyebrowLeft="Bespoke Celebrations & Floral Artistry"
          headlineLeft={
            <>
              Thoughtful Hospitality,{' '}
              <em className="italic font-light text-[#E4DDD0]">Tailored to Your Vision.</em>
            </>
          }
          statementRight="Whether you desire an all-inclusive estate wedding with farm-grown heirloom roses or a private sanctuary canvas for your planning team."
          primaryAction={{ label: 'Request Custom Proposal', to: '/contact' }}
          secondaryAction={{ label: 'Heirloom Event Florals', to: '/floral' }}
          botanicalIllustration="/images/brandkit/illustration-05.png"
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Bespoke Offerings"
          statement="The Estate Wedding (Full-Service) · Partial Planning & Design · Private Estate Buyout"
          illustration="/images/brandkit/illustration-05.png"
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {SERVICE_TIERS.map((pkg) => (
              <div
                key={pkg.title}
                className="step-card relative overflow-hidden"
              >
                <img
                  src={pkg.botanical}
                  alt=""
                  className="pointer-events-none absolute -right-4 -bottom-4 w-28 h-28 object-contain opacity-15"
                />
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#D2CCBE]/60">
                    <span
                      className="text-[14px] font-semibold text-[#8E5D30] tracking-[-0.023em]"
                      style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                    >
                      TIER {pkg.step}
                    </span>
                    <span className="brandkit-stamp">{pkg.stamp}</span>
                  </div>

                  <div className="refero-photo aspect-[16/10] my-2">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <span
                      className="italic text-[16px] text-[#8E5D30] block"
                      style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                    >
                      {pkg.subtitle}
                    </span>
                    <h2
                      className="headline-dual text-[28px] md:text-[32px] text-[#0E2725] leading-snug mt-1"
                      style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                    >
                      <span>{pkg.titleRoman} </span>
                      <em className="italic font-light text-[#8E5D30]">{pkg.titleItalic}</em>
                    </h2>
                  </div>

                  <p
                    className="text-[14.5px] text-[#333333] leading-[1.65] font-light tracking-[-0.023em]"
                    style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                  >
                    {pkg.description}
                  </p>

                  <ul className="space-y-2.5 pt-3 border-t border-[#D2CCBE]/60 text-[13.5px] text-[#0E2725] font-light tracking-[-0.023em] relative z-10">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#8E5D30] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D2CCBE]/60 relative z-10">
                  <Link to="/contact" className="refero-pill-btn w-full justify-center">
                    <span>Inquire for {pkg.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <OriginalReferoHeroFrame
          image="/images/29-val-and-blake-wedding-preview-1.jpg"
          imageAlt="Ecomama Farms Services & Planning Packages"
          eyebrowLeft="TAILORED CELEBRATION PACKAGES"
          headlineLeft="Venue Rental, Full Service & Partial Planning."
          statementRight="Every wedding is unique—and your celebration at Ecomama Farms is tailored to reflect your personal style and vision."
          primaryAction={{ label: 'Request Custom Proposal', to: '/contact' }}
          secondaryAction={{ label: 'Organic Event Florals', to: '/floral' }}
          fullHeight={false}
        />

        <OriginalReferoSageStrip
          label="Planning & Production"
          statement="Three Transparent Tiers: The Estate Wedding (Full-Service) · Partial Planning · Venue Only Buyout"
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {SERVICE_TIERS.map((pkg, idx) => (
              <div
                key={pkg.title}
                className={`bg-white rounded-[20px] p-8 border border-[#D9D4CC] space-y-6 ${
                  idx === 1 ? 'lg:mt-10' : idx === 2 ? 'lg:mt-20' : ''
                }`}
              >
                <div className="rounded-[20px] overflow-hidden aspect-[16/10]">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between text-[12px] text-[#78926E]">
                  <span>0{idx + 1} / Package Tier</span>
                  <span className="px-3 py-0.5 rounded-[100px] border border-[#D9D4CC] text-[#3E3E3E]">
                    {pkg.subtitle}
                  </span>
                </div>
                <h2 className="refero-heading text-[#3E3E3E]">{pkg.title}</h2>
                <p className="text-[14px] text-[#78756F] leading-[1.45]">{pkg.description}</p>
                <ul className="space-y-2.5 pt-3 border-t border-[#D9D4CC] text-[13px] text-[#3E3E3E]">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#78926E] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Link to="/contact" className="refero-pill-btn w-full justify-center">
                    <span>Inquire for {pkg.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      <h1 className="font-serif text-4xl md:text-6xl">Services &amp; Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICE_TIERS.map((pkg) => (
          <div key={pkg.title} className="bg-white p-6 border border-black/10 space-y-4">
            <img src={pkg.image} alt={pkg.title} className="w-full h-56 object-cover" />
            <h2 className="font-serif text-3xl">{pkg.title}</h2>
            <p className="text-sm opacity-80">{pkg.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
