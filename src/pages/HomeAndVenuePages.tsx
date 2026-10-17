import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { DesignMode } from '../components/Layout';
import { VIGNETTES_FACILITIES, VIGNETTES_PHOTO_OPS } from '../data/siteContent';
import {
  ReferoHeroFrame,
  ReferoSageStrip,
  BrandKitBotanicalSeal,
  OriginalReferoHeroFrame,
  OriginalReferoSageStrip
} from '../components/ReferoComponents';

const SERVICE_TIERS = [
  {
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

const BRANDKIT_ROSE_SPECIMENS = [
  {
    id: 'NO. 01',
    name: 'Apricot Clay Tea Rose',
    notes: 'Warm terracotta petal heart · Late spring harvest',
    img: '/images/brandkit/illustration-01.png'
  },
  {
    id: 'NO. 02',
    name: 'Parchment Alba Heirloom',
    notes: 'Unbleached linen bloom · Honeyed myrrh scent',
    img: '/images/brandkit/illustration-02.png'
  },
  {
    id: 'NO. 03',
    name: 'Sun-Baked Ochre Austin',
    notes: 'Kiln-fired amber rosette · Gathered at dawn',
    img: '/images/brandkit/illustration-04.png'
  },
  {
    id: 'NO. 04',
    name: 'Velvet Damask Cutting',
    notes: 'Deep botanical crimson · Long-stem apothecary rose',
    img: '/images/brandkit/illustration-06.png'
  },
  {
    id: 'NO. 05',
    name: 'Long-Stemmed Garden Sprig',
    notes: 'Hand-pruned stem with wild olive-toned foliage',
    img: '/images/brandkit/illustration-08.png'
  },
  {
    id: 'NO. 06',
    name: 'Pressed Herbarium Bough',
    notes: 'Botanical field study · Santa Ynez sanctuary',
    img: '/images/brandkit/illustration-09.png'
  }
];

/* ============================================================================
   1. HOME PAGE (/ and /home)
============================================================================ */
export const HomePage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  if (mode === 'organic') {
    return (
      <div className="text-[#0E2725]">
        {/* 1. Full-Bleed Hero Frame with Soft Bottom-Half Gradient (Top half completely unshaded) */}
        <ReferoHeroFrame
          image="/images/02-screenshot-2026-03-30-at-2-37-39-pm.png"
          imageAlt="Aerial view of Ecomama Farms in the Santa Ynez Valley"
          eyebrowLeft="Santa Ynez Valley · Vintage Rose Farm & Bespoke Estate"
          headlineLeft="Where Earth’s Beauty & Memorable Gatherings Converge."
          statementRight="A tactile, homegrown sanctuary of heirloom garden roses, hand-thrown stoneware tables, and bespoke California ranch celebrations."
          subcaptionRight="Welcome to our lush 30+ acre biodynamic farmstead in the Santa Ynez Valley—tended by hand, rooted in living clay, and opened with warmth for unforgettable gatherings."
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

        {/* 3. Tactile Pottery & Vintage Rose Farm Collage */}
        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-20">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2.5">
                <img
                  src="/images/brandkit/illustration-01.png"
                  alt=""
                  className="w-6 h-6 object-contain"
                />
                <span className="brandkit-stamp">
                  H O M E G R O W N   S A N C T U A R Y   &amp;   A T E L I E R
                </span>
              </div>
              <h2 className="refero-heading-lg text-[#0E2725]">
                Rooted in living soil and raw clay—crafted for unhurried, deeply personal
                celebrations.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[15.5px] leading-[1.75] text-[#0E2725]/80 font-light">
                Every gathering at Ecomama Farms unfolds inside a working heirloom rose farm and
                homestead—surrounded by fragrant David Austin roses, silver-leafed olive lanes,
                stoneware vessels, and sweeping views of the Santa Ynez Mountains.
              </p>
            </div>
          </div>

          {/* Asymmetric Tactile Collage — Raw Cotton-Rag Cards & Amphora Vessel Frames */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
            {/* Left Wide Garden Frame (7 cols) */}
            <div className="md:col-span-7 space-y-5">
              <div className="refero-photo aspect-[16/11] bg-[#F6F2EA]">
                <img
                  src="/images/06-dji-0676-enhanced-nr-copy.jpg"
                  alt="The Venue at Ecomama Farms"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-1 px-2">
                <div>
                  <span className="brandkit-stamp block mb-1">
                    0 1   ·   B E S P O K E   E V E N T   V E N U E
                  </span>
                  <h3 className="refero-heading text-[#0E2725]">
                    Sunlit ceremony lawns, weathered timber barns &amp; mountain-view terraces
                  </h3>
                </div>
                <Link to="/venue" className="refero-pill-btn shrink-0 self-start sm:self-auto">
                  <span>Discover the Venue</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Pottery Amphora Arch Frame (5 cols, vertically offset) */}
            <div className="md:col-span-5 md:mt-16 space-y-5">
              <div className="refero-arch-photo aspect-[4/5] bg-[#F6F2EA]">
                <img
                  src="/images/03-james-and-jess-at-ecomama-farms.jpg"
                  alt="2,500+ Organic Heirloom Roses"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="px-2 space-y-2">
                <span className="brandkit-stamp block">
                  0 2   ·   V I N T A G E   R O S E   F A R M
                </span>
                <h3 className="refero-heading text-[#0E2725]">
                  2,500+ heirloom garden roses gathered in stoneware buckets at dawn
                </h3>
                <p className="text-[14.5px] text-[#0E2725]/75 leading-[1.65] font-light">
                  Grown in biodynamic Santa Ynez earth without synthetic sprays, hand-cut at first
                  light, and arranged in our floral atelier hours before your guests arrive.
                </p>
                <div className="pt-1">
                  <Link to="/floral" className="refero-ghost-link text-[#0E2725]">
                    <span>Visit the Floral Atelier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Third Offset Frame (5 cols left) + Tactile Stoneware & Pressed Rose Card (7 cols right) */}
            <div className="md:col-span-5 md:-mt-12 space-y-4">
              <div className="refero-photo aspect-[4/3] bg-[#F6F2EA]">
                <img
                  src="/images/34-dji-0656.jpg"
                  alt="Regenerative Farming at Ecomama Farms"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="px-2">
                <span className="brandkit-stamp block mb-1">
                  0 3   ·   S O I L ,   C L A Y   &amp;   O R C H A R D
                </span>
                <div className="flex items-center justify-between mt-1 gap-4">
                  <h3
                    className="text-[23px] text-[#0E2725]"
                    style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                  >
                    Heritage orchards, living compost &amp; gentle sanctuary animals
                  </h3>
                  <Link to="/the-farm" className="refero-ghost-link text-[#0E2725] shrink-0">
                    <span>Meet the Farm</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 md:mt-6">
              <div className="refero-card relative overflow-hidden p-8 md:p-12 space-y-7">
                {/* Pressed Rose Herbarium Illustration from Brand Kit */}
                <img
                  src="/images/brandkit/illustration-08.png"
                  alt=""
                  className="pointer-events-none select-none absolute -right-4 -bottom-6 w-52 h-52 object-contain opacity-25"
                />

                <div className="space-y-2 relative z-10">
                  <div className="inline-flex items-center gap-2">
                    <img
                      src="/images/brandkit/illustration-03.png"
                      alt=""
                      className="w-5 h-5 object-contain"
                    />
                    <span className="brandkit-stamp">
                      T H E   A R T   O F   S L O W   G A T H E R I N G
                    </span>
                  </div>
                  <h3 className="refero-heading text-[#0E2725]">
                    “We wanted every guest to feel as though they had stepped into an heirloom rose
                    farm and pottery studio table where time slows down.”
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-[#A7713F]/25 relative z-10">
                  {[
                    { val: '30+ Acres', lbl: 'Biodynamic Farmstead' },
                    { val: '2,500+', lbl: 'Vintage Rose Bushes' },
                    { val: 'Up to 180', lbl: 'Long-Table Guests' },
                    { val: '100% Organic', lbl: 'Living Soil & Clay' }
                  ].map((s) => (
                    <div key={s.lbl}>
                      <div
                        className="text-[26px] md:text-[30px] leading-tight text-[#A7713F]"
                        style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                      >
                        {s.val}
                      </div>
                      <div className="text-[12.5px] text-[#0E2725]/75 mt-1 font-light">{s.lbl}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#A7713F]/25 flex flex-wrap items-center justify-between gap-4 relative z-10">
                  <p className="text-[14px] text-[#0E2725]/75 font-light">
                    Welcoming bespoke estate weddings, wheel-thrown pottery &amp; floral workshops,
                    and harvest suppers.
                  </p>
                  <div className="flex items-center gap-5">
                    <Link to="/vignettes" className="refero-pill-btn">
                      <span>Wander the Spaces</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link to="/services" className="refero-ghost-link text-[#0E2725]">
                      <span>Offerings</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. NEW: Brand Kit Heirloom Rose Herbarium & Pottery Moodboard Section */}
        <section className="stoneware-surface py-[96px] px-6 md:px-12 border-y border-[#A7713F]/30">
          <div className="max-w-[1440px] mx-auto space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7 space-y-2.5">
                <span className="brandkit-stamp block">
                  F R O M   T H E   E C O M A M A   B R A N D   A T E L I E R
                </span>
                <h2 className="refero-heading-lg text-[#0E2725]">
                  Pressed Botanical Specimens, Raw Stoneware &amp; Sun-Warmed Earth.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[15px] text-[#0E2725]/80 leading-[1.7] font-light">
                  Inspired by hand-thrown ceramics, vintage botanical studies, and unhurried
                  countryside tables—explore the seasonal rose varieties and tactile textures that
                  shape every celebration at Ecomama Farms.
                </p>
              </div>
            </div>

            {/* 6 Pressed Botanical Rose Specimen Cards from Brand Kit Pages 2 & 3 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {BRANDKIT_ROSE_SPECIMENS.map((spec) => (
                <div
                  key={spec.id}
                  className="refero-card p-5 flex flex-col items-center text-center justify-between group"
                >
                  <div className="w-full flex items-center justify-between text-[10px] tracking-[0.2em] text-[#A7713F] mb-2">
                    <span style={{ fontFamily: "'Montserrat', sans-serif" }}>{spec.id}</span>
                    <span className="w-2 h-2 rounded-full bg-[#A6A26A]" />
                  </div>
                  <div className="h-32 w-full flex items-center justify-center my-2">
                    <img
                      src={spec.img}
                      alt={spec.name}
                      className="max-h-28 max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-2">
                    <h3
                      className="text-[18px] text-[#0E2725] leading-snug"
                      style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                    >
                      {spec.name}
                    </h3>
                    <p
                      className="italic text-[13px] text-[#0E2725]/70 mt-1"
                      style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                    >
                      {spec.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tactile Brand Kit Moodboard Strip (Page 1 Moodboard Photographs + Deep Pine Glaze Note) */}
            <div className="pine-glaze-surface rounded-[28px] p-8 md:p-12 border border-[#A7713F]/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span
                  className="text-[10.5px] uppercase tracking-[0.28em] text-[#A6A26A] block"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  T A C T I L E   M A T E R I A L I T Y
                </span>
                <h3
                  className="text-[30px] md:text-[36px] leading-[1.08] text-[#EDE8DC]"
                  style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif", color: '#EDE8DC' }}
                >
                  Linen, terracotta, weathered slate &amp; morning-cut roses.
                </h3>
                <p className="text-[14.5px] text-[#D2CCBE]/90 leading-[1.7] font-light">
                  Our aesthetic honors the raw beauty of the Santa Ynez Valley: unbleached cotton
                  menus, wheel-thrown ceramic vessels, beeswax tapers, and heirloom blooms that look
                  and smell as though they were just gathered from the garden path.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/floral"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[100px] bg-[#A7713F] hover:bg-[#8F5E31] text-[#F6F2EA] text-[13.5px] tracking-[0.03em] transition-colors"
                  >
                    <span>Explore Event Florals</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/gatherings"
                    className="inline-flex items-center gap-1.5 text-[#D2CCBE] hover:text-[#A6A26A] text-[13.5px] border-b border-[#D2CCBE]/45 pb-0.5 transition-colors"
                  >
                    <span>Workshops &amp; Farm Dinners</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
                {[
                  {
                    src: '/images/brandkit/mood-1.jpg',
                    caption: 'Heirloom Blooms',
                    arch: true
                  },
                  {
                    src: '/images/brandkit/mood-2.jpg',
                    caption: 'Golden Hour Fields',
                    arch: false
                  },
                  {
                    src: '/images/brandkit/mood-3.jpg',
                    caption: 'Stoneware & Linen',
                    arch: true
                  },
                  {
                    src: '/images/brandkit/mood-4.jpg',
                    caption: 'Garden Gatherings',
                    arch: false
                  }
                ].map((m) => (
                  <div key={m.caption} className="space-y-2 text-center">
                    <div
                      className={`overflow-hidden aspect-[3/4] border border-[#D2CCBE]/30 ${
                        m.arch ? 'rounded-t-[120px] rounded-b-[18px]' : 'rounded-[20px]'
                      }`}
                    >
                      <img src={m.src} alt={m.caption} className="w-full h-full object-cover" />
                    </div>
                    <span
                      className="italic text-[14px] text-[#D2CCBE] block"
                      style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                    >
                      {m.caption}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Full-Bleed Sunset Section Break with Bottom-Half Gradient Only */}
        <section className="relative w-full h-[74vh] rounded-none overflow-hidden">
          <img
            src="/images/05-ecomama-farms-santa-ynez-wedding-reception18.jpg"
            alt="The Terraced Lawn at Ecomama Farms"
            className="w-full h-full object-cover"
          />
          {/* Soft bottom-half gradient ONLY — keeps the twilight sky and mountain ridge unshaded */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] hero-bottom-shade" />

          <div className="absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-12 py-14 flex flex-col justify-end text-[#F6F2EA]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7 space-y-3">
                <span
                  className="italic text-[19px] text-[#A6A26A]"
                  style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                >
                  Al Fresco Twilight on the Terraced Lawn
                </span>
                <h2
                  className="refero-display text-[#F6F2EA]"
                  style={{ color: '#F6F2EA' }}
                >
                  Golden hour fading into candlelight over the Santa Ynez mountains.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:text-right flex flex-col lg:items-end gap-4">
                <p className="text-[15.5px] text-[#EDE8DC]/90 max-w-md font-light leading-relaxed">
                  Move effortlessly from vows in the Heart of the Rose Garden to cocktails beside
                  the weeping willow pond and long-table stoneware dining on the lawn.
                </p>
                <Link
                  to="/vignettes"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[100px] bg-[#A7713F] hover:bg-[#8F5E31] border border-[#D2CCBE]/40 text-[#F6F2EA] text-[13.5px] transition-colors"
                >
                  <span>Explore All Garden &amp; Barn Spaces</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Asymmetric 6-Vignette Garden Showcase */}
        <section className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#A7713F]/30">
            <div>
              <span className="brandkit-stamp block mb-2">
                G A T H E R E D   A C R O S S   T H E   G R O U N D S
              </span>
              <h2 className="refero-heading-lg text-[#0E2725]">
                Six Intimate Spaces, One Homegrown Sanctuary
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
                    <div className="flex items-center justify-between text-[12px] text-[#A7713F] mb-2">
                      <span
                        className="italic text-[16px]"
                        style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                      >
                        {v.tag}
                      </span>
                      <span className="px-3 py-0.5 rounded-[100px] bg-[#D2CCBE]/70 text-[#0E2725] text-[11.5px]">
                        {v.capacity}
                      </span>
                    </div>
                    <h3 className="refero-heading text-[#0E2725] mt-1 mb-2">{v.title}</h3>
                    <p className="text-[14px] text-[#0E2725]/75 leading-[1.65] font-light mb-5">
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

        {/* 3. Asymmetric Editorial Mosaic Section (Warm Cream #F4F1EE Canvas + 20px Framed Images) */}
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

          {/* Asymmetric Staggered Photo Mosaic (20px radius, zero shadow, offset heights) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            {/* Large Left Feature Card (7 cols) */}
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

            {/* Vertically Offset Right Card (5 cols, md:mt-20 offset per Refero Mosaic Spec) */}
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

            {/* Third Offset Mosaic Card (5 cols left) + White Elevated Spec Card (7 cols right) */}
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

        {/* 4. Full-Bleed Cinematic Section Break with Bottom-Half Gradient Only */}
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

        {/* 5. Asymmetric 6-Vignette Preview Grid on Warm Cream Canvas */}
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
          <p className="text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
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
          eyebrowLeft="Private Estate Venue · Santa Ynez Valley"
          headlineLeft="The Estate, in Full."
          statementRight="Six distinct celebration spaces and six botanical portrait vignettes across 30+ acres of heirloom roses, olive trees, and orchards."
          primaryAction={{ label: 'Wander the 12 Vignettes', to: '/vignettes' }}
          secondaryAction={{ label: 'Explore Offerings', to: '/services' }}
          botanicalIllustration="/images/brandkit/illustration-02.png"
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Unhurried Celebrations"
          statement="One Private Celebration Per Weekend · Up to 180 Guests · In-House Planning & Estate-Grown Heirloom Florals"
          rightLink={{ text: 'Request Estate Guide', to: '/contact' }}
          illustration="/images/brandkit/illustration-02.png"
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
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
              <h2 className="refero-heading-lg text-[#0E2725]">
                An unhurried flow from sunlit rose gardens to starlit stoneware dining.
              </h2>
              <p className="text-[15.5px] text-[#0E2725]/80 leading-[1.75] font-light">
                In the heart of the Santa Ynez Valley lies a slice of paradise: Ecomama Farms.
                Welcome to our lush sanctuary, dedicated to regenerative agriculture, heirloom
                garden roses, and bespoke celebrations that feel genuinely homegrown.
              </p>
              <p className="text-[15.5px] text-[#0E2725]/80 leading-[1.75] font-light">
                On our sprawling property, you’ll find an idyllic wedding and events venue that can
                accommodate up to 180 guests. Choose from several picturesque spots, including our
                vibrant rose garden, tranquil willow pond, terraced lawn, and shaded olive lane,
                each offering a tactile, storied backdrop for your special occasion.
              </p>
              <div className="flex flex-wrap gap-5 pt-2">
                <Link to="/vignettes" className="refero-pill-btn">
                  <span>Explore All Vignettes</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/services" className="refero-ghost-link text-[#0E2725] py-2">
                  <span>View Services &amp; Offerings</span>
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
                  <p className="text-[12.5px] text-[#0E2725]/75 mt-1.5 font-light">
                    Heart of the Rose Garden (180) · Terraced Lawn (150–180) · Mountain View Barn
                  </p>
                </div>
              </div>
            </div>
          </div>

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

            {/* Asymmetric 20px Photo Pair */}
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
          headlineLeft="Spaces Shaped by Orchard, Water & Rose."
          statementRight="Each celebration unfolds progressively across our 30+ acre ranch—from the Heart of the Garden to the Mountain View Barn."
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
          <div className="flex flex-wrap items-center justify-between gap-4 mb-16 pb-6 border-b border-[#A7713F]/30">
            <div>
              <span className="brandkit-stamp block mb-1.5">
                W A N D E R   T H E   E S T A T E
              </span>
              <h2 className="refero-heading-lg text-[#0E2725]">Sanctuary Spaces &amp; Vignettes</h2>
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
                  className={`px-5 py-2 rounded-[100px] text-[13px] border transition-colors ${
                    tab === item.id
                      ? 'bg-[#A7713F] text-[#F6F2EA] border-[#A7713F]'
                      : 'bg-[#F6F2EA] text-[#0E2725] border-[#A7713F]/35 hover:border-[#A7713F]'
                  }`}
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
                  className="italic text-[22px] text-[#A7713F]"
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
                    <div className="flex items-center justify-between text-[12px] text-[#A7713F]">
                      <span
                        className="italic text-[16px]"
                        style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                      >
                        {f.tag}
                      </span>
                      <span className="px-3 py-0.5 rounded-[100px] bg-[#D2CCBE]/70 text-[#0E2725]">
                        {f.capacity}
                      </span>
                    </div>
                    <h3 className="refero-heading text-[#0E2725]">{f.title}</h3>
                    <p className="text-[14px] text-[#0E2725]/75 leading-[1.65] font-light">
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
                  className="italic text-[22px] text-[#A7713F]"
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
                    <p className="text-[14px] text-[#0E2725]/75 leading-[1.65] font-light">
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
          {/* 100px Pill Filter Bar */}
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
          headlineLeft="Thoughtful Hospitality, Tailored to Your Vision."
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {SERVICE_TIERS.map((pkg, idx) => (
              <div
                key={pkg.title}
                className={`refero-card relative overflow-hidden space-y-6 ${
                  idx === 1 ? 'lg:mt-10' : idx === 2 ? 'lg:mt-20' : ''
                }`}
              >
                <img
                  src={pkg.botanical}
                  alt=""
                  className="pointer-events-none absolute -right-4 -bottom-4 w-28 h-28 object-contain opacity-15"
                />
                <div className="refero-photo aspect-[16/10]">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="brandkit-stamp">{pkg.stamp}</span>
                  <img src={pkg.botanical} alt="" className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <span
                    className="italic text-[16.5px] text-[#A7713F] block"
                    style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                  >
                    {pkg.subtitle}
                  </span>
                  <h2 className="refero-heading text-[#0E2725] mt-0.5">{pkg.title}</h2>
                </div>
                <p className="text-[14px] text-[#0E2725]/75 leading-[1.65] font-light">
                  {pkg.description}
                </p>
                <ul className="space-y-2.5 pt-3 border-t border-[#A7713F]/25 text-[13.5px] text-[#0E2725] font-light relative z-10">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#A7713F] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 relative z-10">
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
