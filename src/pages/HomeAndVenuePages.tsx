import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { DesignMode } from '../components/Layout';
import { VIGNETTES_FACILITIES, VIGNETTES_PHOTO_OPS } from '../data/siteContent';
import {
  ReferoHeroFrame,
  ReferoSageStrip,
  OriginalReferoHeroFrame,
  OriginalReferoSageStrip
} from '../components/ReferoComponents';

const SERVICE_TIERS = [
  {
    title: 'The Estate Wedding',
    subtitle: 'Full-Service Planning & Floral Design',
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
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        {/* 1. Full-Bleed Hero Frame with Soft Bottom-Half Gradient (Top half completely unshaded) */}
        <ReferoHeroFrame
          image="/images/02-screenshot-2026-03-30-at-2-37-39-pm.png"
          imageAlt="Aerial view of Ecomama Farms in the Santa Ynez Valley"
          eyebrowLeft="In the Heart of the Santa Ynez Valley"
          headlineLeft="Where Earth’s Beauty & Memorable Gatherings Converge."
          statementRight="A working biodynamic rose sanctuary and private California ranch estate for bespoke weddings & gatherings."
          subcaptionRight="Welcome to our lush 30+ acre sanctuary, dedicated to regenerative agriculture, heirloom roses, and unforgettable celebrations."
          primaryAction={{ label: 'Explore the Estate', to: '/venue' }}
          secondaryAction={{ label: 'Inquire for 2026–2027', to: '/contact' }}
          fullHeight={true}
        />

        {/* 2. Organic Ecomama Sage Ribbon */}
        <ReferoSageStrip
          label="A Living Sanctuary"
          statement="30+ Regenerative Acres · Over 2,500 Organic Heirloom Rose Bushes · Up to 180 Guests Under the Santa Ynez Sky"
          rightLink={{ text: 'Arrange a Private Visit', to: '/contact' }}
        />

        {/* 3. Organic Asymmetric Garden Collage & Poetic Narrative */}
        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-20">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-[#78926E]">
                <img src="/images/ecomama-rose-icon.png" alt="" className="w-4 h-4 opacity-80" />
                <span
                  className="italic text-[18px]"
                  style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                >
                  A Sanctuary in Bloom
                </span>
              </div>
              <h2 className="refero-heading-lg text-[#3E3E3E]">
                Tended by hand as a living rose farm, opened with warmth for life’s most meaningful
                celebrations.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[15.5px] leading-[1.7] text-[#66625B] font-light">
                Every gathering at Ecomama Farms unfolds inside a living ecosystem—surrounded by
                fragrant David Austin and heirloom garden roses, silver-leafed olive trees, organic
                stone-fruit orchards, and sweeping views of the Santa Ynez Mountains.
              </p>
            </div>
          </div>

          {/* Asymmetric Botanical Collage — Warm Linen & Soft Arch / 24px Frames */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
            {/* Left Wide Garden Frame (7 cols) */}
            <div className="md:col-span-7 space-y-5">
              <div className="rounded-[24px] overflow-hidden aspect-[16/11] bg-[#FAF8F4] border border-[#78926E]/20">
                <img
                  src="/images/06-dji-0676-enhanced-nr-copy.jpg"
                  alt="The Venue at Ecomama Farms"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-1 px-2">
                <div>
                  <span
                    className="italic text-[16px] text-[#78926E]"
                    style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                  >
                    The Private Estate Venue
                  </span>
                  <h3 className="refero-heading text-[#3E3E3E] mt-0.5">
                    Lush ceremony lawns, open-air barns &amp; mountain-view terraces
                  </h3>
                </div>
                <Link to="/venue" className="refero-pill-btn shrink-0 self-start sm:self-auto">
                  <span>Discover the Venue</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Botanical Arch Portrait Frame (5 cols, vertically offset) */}
            <div className="md:col-span-5 md:mt-16 space-y-5">
              <div className="refero-arch-photo aspect-[4/5] bg-[#FAF8F4] border border-[#78926E]/20">
                <img
                  src="/images/03-james-and-jess-at-ecomama-farms.jpg"
                  alt="2,500+ Organic Heirloom Roses"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="px-2 space-y-2">
                <span
                  className="italic text-[16px] text-[#78926E]"
                  style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                >
                  Seed-to-Centerpiece Florals
                </span>
                <h3 className="refero-heading text-[#3E3E3E]">
                  2,500+ organic garden roses harvested at peak fragrance
                </h3>
                <p className="text-[14px] text-[#66625B] leading-[1.6] font-light">
                  Grown in biodynamic Santa Ynez soil without synthetic sprays and gathered the
                  morning of your celebration.
                </p>
                <div className="pt-1">
                  <Link to="/floral" className="refero-ghost-link text-[#3E3E3E]">
                    <span>Explore our floral studio</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Third Offset Frame (5 cols left) + Warm Parchment Sanctuary Note (7 cols right) */}
            <div className="md:col-span-5 md:-mt-12 space-y-4">
              <div className="rounded-[24px] overflow-hidden aspect-[4/3] bg-[#FAF8F4] border border-[#78926E]/20">
                <img
                  src="/images/34-dji-0656.jpg"
                  alt="Regenerative Farming at Ecomama Farms"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="px-2">
                <span
                  className="italic text-[16px] text-[#78926E]"
                  style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                >
                  Biodynamic &amp; Regenerative Roots
                </span>
                <div className="flex items-center justify-between mt-1 gap-4">
                  <h3
                    className="text-[22px] text-[#3E3E3E]"
                    style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                  >
                    Heritage orchards, living compost &amp; gentle farm animals
                  </h3>
                  <Link to="/the-farm" className="refero-ghost-link text-[#3E3E3E] shrink-0">
                    <span>Meet the Farm</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 md:mt-6">
              <div className="relative overflow-hidden bg-[#FAF8F4] rounded-[24px] p-8 md:p-12 border border-[#78926E]/25 space-y-7">
                {/* Delicate Botanical Rose Watermark */}
                <img
                  src="/images/ecomama-rose-icon.png"
                  alt=""
                  className="pointer-events-none absolute -right-10 -bottom-10 w-56 h-56 object-contain opacity-[0.045]"
                />

                <div className="space-y-2">
                  <span
                    className="italic text-[17px] text-[#78926E]"
                    style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                  >
                    Life on the Estate
                  </span>
                  <h3 className="refero-heading text-[#3E3E3E]">
                    “We wanted every guest to feel as though they had stepped into a private Santa
                    Ynez garden party where time slows down.”
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-[#78926E]/20">
                  {[
                    { val: '30+ Acres', lbl: 'Private Sanctuary' },
                    { val: '2,500+', lbl: 'Heirloom Rose Bushes' },
                    { val: 'Up to 180', lbl: 'Celebration Guests' },
                    { val: '100% Organic', lbl: 'Biodynamic Grounds' }
                  ].map((s) => (
                    <div key={s.lbl}>
                      <div
                        className="text-[26px] md:text-[30px] leading-tight text-[#587050]"
                        style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                      >
                        {s.val}
                      </div>
                      <div className="text-[12.5px] text-[#66625B] mt-1 font-light">{s.lbl}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#78926E]/20 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-[14px] text-[#66625B] font-light">
                    Welcoming bespoke weddings, harvest dinners, and seasonal botanical workshops.
                  </p>
                  <div className="flex items-center gap-5">
                    <Link to="/vignettes" className="refero-pill-btn">
                      <span>Wander the Spaces</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link to="/services" className="refero-ghost-link text-[#3E3E3E]">
                      <span>Offerings</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Full-Bleed Sunset Section Break with Bottom-Half Gradient Only */}
        <section className="relative w-full h-[74vh] rounded-none overflow-hidden">
          <img
            src="/images/05-ecomama-farms-santa-ynez-wedding-reception18.jpg"
            alt="The Terraced Lawn at Ecomama Farms"
            className="w-full h-full object-cover"
          />
          {/* Soft bottom-half gradient ONLY — keeps the twilight sky and mountain ridge unshaded */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] hero-bottom-shade" />

          <div className="absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-12 py-14 flex flex-col justify-end text-[#FAF8F4]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7 space-y-3">
                <span
                  className="italic text-[18px] text-[#E9EFE6]"
                  style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                >
                  Al Fresco Twilight on the Terraced Lawn
                </span>
                <h2 className="refero-display text-[#FAF8F4]">
                  Golden hour fading into starlight over the Santa Ynez mountains.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:text-right flex flex-col lg:items-end gap-4">
                <p className="text-[15.5px] text-[#FAF8F4]/90 max-w-md font-light leading-relaxed">
                  Move effortlessly from vows in the Heart of the Rose Garden to cocktails beside
                  the weeping willow pond and candlelit dining on the lawn.
                </p>
                <Link
                  to="/vignettes"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[100px] bg-[#78926E]/90 hover:bg-[#78926E] border border-white/30 text-[#FAF8F4] text-[13.5px] transition-colors"
                >
                  <span>Explore All Garden &amp; Barn Spaces</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Asymmetric 6-Vignette Garden Showcase */}
        <section className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#78926E]/25">
            <div>
              <span
                className="italic text-[18px] text-[#78926E] block mb-1"
                style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
              >
                Gathered Across the Grounds
              </span>
              <h2 className="refero-heading-lg text-[#3E3E3E]">
                Six Intimate Spaces, One Private Sanctuary
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
                  className={`${colSpan} bg-[#FAF8F4] rounded-[24px] p-6 border border-[#78926E]/20 flex flex-col justify-between`}
                >
                  <div>
                    <div className="rounded-[20px] overflow-hidden aspect-[4/3] mb-5">
                      <img
                        src={v.image}
                        alt={v.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[12px] text-[#587050] mb-2">
                      <span
                        className="italic text-[15px]"
                        style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                      >
                        {v.tag}
                      </span>
                      <span className="px-3 py-0.5 rounded-[100px] bg-[#E9EFE6] text-[#587050] text-[11.5px]">
                        {v.capacity}
                      </span>
                    </div>
                    <h3 className="refero-heading text-[#3E3E3E] mt-1 mb-2">{v.title}</h3>
                    <p className="text-[14px] text-[#66625B] leading-[1.6] font-light mb-5">
                      {v.originalCopy}
                    </p>
                  </div>
                  <Link to="/vignettes" className="refero-ghost-link text-[#3E3E3E] self-start">
                    <span>Discover {v.title}</span>
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
              <h2 className="lg:col-span-7 refero-display text-white">
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
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <ReferoHeroFrame
          image="/images/06-dji-0676-enhanced-nr-copy.jpg"
          imageAlt="Ecomama Farms Wedding & Event Venue"
          eyebrowLeft="Private Estate Venue · Santa Ynez Valley"
          headlineLeft="The Estate, in Full."
          statementRight="Six distinct celebration spaces and six botanical portrait vignettes across 30+ acres of organic roses, olive trees, and orchards."
          primaryAction={{ label: 'Wander the 12 Vignettes', to: '/vignettes' }}
          secondaryAction={{ label: 'Explore Offerings', to: '/services' }}
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Unhurried Celebrations"
          statement="One Private Celebration Per Weekend · Up to 180 Guests · In-House Planning & Estate-Grown Organic Florals"
          rightLink={{ text: 'Request Estate Guide', to: '/contact' }}
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span
                className="italic text-[18px] text-[#78926E] block"
                style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
              >
                A Natural Sense of Place
              </span>
              <h2 className="refero-heading-lg text-[#3E3E3E]">
                An unhurried flow from sunlit rose gardens to starlit dining.
              </h2>
              <p className="text-[15.5px] text-[#66625B] leading-[1.7] font-light">
                In the heart of the Santa Ynez Valley lies a slice of paradise: Ecomama Farms.
                Welcome to our lush sanctuary, dedicated to regenerative agriculture,
                sustainability, and unforgettable events.
              </p>
              <p className="text-[15.5px] text-[#66625B] leading-[1.7] font-light">
                On our sprawling property, you’ll find an idyllic wedding and events venue that can
                accommodate up to 180 guests. Choose from several picturesque spots, including our
                vibrant rose garden, tranquil willow pond, terraced lawn, and shaded olive lane,
                each offering a magical backdrop for your special occasion.
              </p>
              <div className="flex flex-wrap gap-5 pt-2">
                <Link to="/vignettes" className="refero-pill-btn">
                  <span>Explore All Vignettes</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/services" className="refero-ghost-link text-[#3E3E3E] py-2">
                  <span>View Services &amp; Offerings</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Asymmetric Photo Pair with Botanical Arch & 24px Frame */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-6 items-start">
              <div className="col-span-7 refero-arch-photo aspect-[4/5]">
                <img
                  src="/images/18-sb5-52.jpg"
                  alt="Terraced Lawn Reception"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-5 mt-16 space-y-6">
                <div className="rounded-[24px] overflow-hidden aspect-square">
                  <img
                    src="/images/26-screenshot-2024-07-24-at-9-19-50-pm.png"
                    alt="The Olive Lane"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#FAF8F4] rounded-[24px] p-6 border border-[#78926E]/25">
                  <div
                    className="italic text-[15px] text-[#78926E] mb-1"
                    style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                  >
                    Garden Capacity
                  </div>
                  <div className="refero-heading text-[#3E3E3E]">Up to 180 Guests</div>
                  <p className="text-[12.5px] text-[#66625B] mt-1.5 font-light">
                    Heart of the Rose Garden (180) · Terraced Lawn (150–180) · Mountain View Barn
                  </p>
                </div>
              </div>
            </div>
          </div>
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
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <ReferoHeroFrame
          image="/images/17-dji-0658-enhanced-sr.jpg"
          imageAlt="Estate Vignettes at Ecomama Farms"
          eyebrowLeft="Garden Lawns, Heritage Barns & Shaded Lanes"
          headlineLeft="Spaces Shaped by Orchard, Water & Rose."
          statementRight="Each celebration unfolds progressively across our 30+ acre ranch—from the Heart of the Garden to the Mountain View Barn."
          primaryAction={{ label: 'Book a Private Walkthrough', to: '/contact' }}
          secondaryAction={{ label: 'Explore Packages', to: '/services' }}
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Twelve Intimate Settings"
          statement="Six Celebration Facilities & Suites Paired with Six Botanical Portrait Vignettes Across the Estate"
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-16 pb-6 border-b border-[#78926E]/25">
            <div>
              <span
                className="italic text-[17px] text-[#78926E] block"
                style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
              >
                Wander the Estate
              </span>
              <h2 className="refero-heading-lg text-[#3E3E3E]">Sanctuary Spaces &amp; Vignettes</h2>
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
                      ? 'bg-[#78926E] text-[#FAF8F4] border-[#78926E]'
                      : 'bg-[#FAF8F4] text-[#3E3E3E] border-[#78926E]/30 hover:border-[#78926E]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {(tab === 'all' || tab === 'facilities') && (
            <div className="mb-24">
              <div
                className="italic text-[20px] text-[#78926E] mb-8"
                style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
              >
                Ceremony Lawns, Heritage Barns &amp; Private Suites
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {VIGNETTES_FACILITIES.map((f, idx) => (
                  <div
                    key={f.title}
                    className={`bg-[#FAF8F4] rounded-[24px] p-6 border border-[#78926E]/20 space-y-4 ${
                      idx % 3 === 1 ? 'lg:mt-8' : idx % 3 === 2 ? 'lg:mt-16' : ''
                    }`}
                  >
                    <div className="rounded-[20px] overflow-hidden aspect-[4/3]">
                      <img src={f.image} alt={f.alt} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center justify-between text-[12px] text-[#587050]">
                      <span
                        className="italic text-[15px]"
                        style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                      >
                        {f.tag}
                      </span>
                      <span className="px-3 py-0.5 rounded-[100px] bg-[#E9EFE6] text-[#587050]">
                        {f.capacity}
                      </span>
                    </div>
                    <h3 className="refero-heading text-[#3E3E3E]">{f.title}</h3>
                    <p className="text-[14px] text-[#66625B] leading-[1.6] font-light">
                      {f.originalCopy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(tab === 'all' || tab === 'photo') && (
            <div>
              <div
                className="italic text-[20px] text-[#78926E] mb-8"
                style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
              >
                Botanical Walks, Orchards &amp; Golden-Hour Portrait Vignettes
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {VIGNETTES_PHOTO_OPS.map((p, idx) => (
                  <div
                    key={p.title}
                    className={`bg-[#FAF8F4] rounded-[24px] p-6 border border-[#78926E]/20 space-y-4 ${
                      idx % 3 === 1 ? 'lg:mt-8' : idx % 3 === 2 ? 'lg:mt-16' : ''
                    }`}
                  >
                    <div className="rounded-[20px] overflow-hidden aspect-[4/3]">
                      <img src={p.image} alt={p.alt} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="refero-heading text-[#3E3E3E]">{p.title}</h3>
                    <p className="text-[14px] text-[#66625B] leading-[1.6] font-light">
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
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <ReferoHeroFrame
          image="/images/29-val-and-blake-wedding-preview-1.jpg"
          imageAlt="Ecomama Farms Services & Planning Packages"
          eyebrowLeft="Bespoke Celebrations & Floral Artistry"
          headlineLeft="Thoughtful Hospitality, Tailored to Your Vision."
          statementRight="Whether you desire an all-inclusive estate wedding with farm-grown florals or a private sanctuary canvas for your planning team."
          primaryAction={{ label: 'Request Custom Proposal', to: '/contact' }}
          secondaryAction={{ label: 'Organic Event Florals', to: '/floral' }}
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Bespoke Offerings"
          statement="The Estate Wedding (Full-Service) · Partial Planning & Design · Private Estate Buyout"
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {SERVICE_TIERS.map((pkg, idx) => (
              <div
                key={pkg.title}
                className={`bg-[#FAF8F4] rounded-[24px] p-8 border border-[#78926E]/25 space-y-6 ${
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
                <div className="flex items-center justify-between text-[12px] text-[#587050]">
                  <span
                    className="italic text-[16px]"
                    style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                  >
                    {pkg.subtitle}
                  </span>
                </div>
                <h2 className="refero-heading text-[#3E3E3E]">{pkg.title}</h2>
                <p className="text-[14px] text-[#66625B] leading-[1.6] font-light">
                  {pkg.description}
                </p>
                <ul className="space-y-2.5 pt-3 border-t border-[#78926E]/20 text-[13.5px] text-[#3E3E3E] font-light">
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
