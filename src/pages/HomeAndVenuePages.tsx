import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Sparkles, Check } from 'lucide-react';
import { DesignMode } from '../components/Layout';
import { VIGNETTES_FACILITIES, VIGNETTES_PHOTO_OPS } from '../data/siteContent';
import { ReferoHeroFrame, ReferoSageStrip } from '../components/ReferoComponents';

const SERVICE_TIERS = [
  {
    title: 'The Estate Wedding (Full-Service)',
    subtitle: 'Comprehensive Planning & Production',
    image: '/images/29-val-and-blake-wedding-preview-1.jpg',
    description:
      'Our signature all-inclusive experience: full weekend access across all 6 estate facilities, in-house wedding planning, farm-to-table culinary curation, and 100% organic garden rose florals.',
    highlights: [
      'Up to 180 guests across all 6 outdoor & barn vignettes',
      'Full-service planning, design & day-of coordination',
      'Bespoke organic garden rose florals harvested on-site',
      'Bridal Loft & Groomsmen’s Cottage full-day access'
    ]
  },
  {
    title: 'Partial Planning & Design',
    subtitle: 'Collaborative Estate Curation',
    image: '/images/30-jt-ally-photo.jpg',
    description:
      'Ideal for couples who have begun their planning journey and want our Santa Ynez estate team to curate vendor integration, floorplans, floral design, and seamless event execution.',
    highlights: [
      'Exclusive estate buyout across ceremony & reception lawns',
      'Curated preferred Santa Ynez vendor & catering management',
      'Custom estate floral & botanical installation options',
      'Dedicated rehearsal & wedding-day production team'
    ]
  },
  {
    title: 'Venue Only Buyout',
    subtitle: 'The Private Estate Canvas',
    image: '/images/18-sb5-52.jpg',
    description:
      'Exclusive private access to Ecomama Farms’ ceremony gardens, terraced reception lawn, Rose Barn, and Mountain View Barn for couples working with their own full-service planner.',
    highlights: [
      'Private access to the Rose Garden, Terraced Lawn & Barns',
      'Bridal Loft & Groomsmen’s Cottage getting-ready suites',
      'On-site estate manager & parking coordination',
      'Optional add-on estate rose buckets & farm experiences'
    ]
  }
];

/* ============================================================================
   1. HOME PAGE (/ and /home)
============================================================================ */
export const HomePage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        {/* 1. Full-Bleed 100vw x 100vh Hero Frame (Zero Radius, Left+Right Split Display Type) */}
        <ReferoHeroFrame
          image="/images/02-screenshot-2026-03-30-at-2-37-39-pm.png"
          imageAlt="Aerial view of Ecomama Farms in the Santa Ynez Valley"
          eyebrowLeft="SANTA YNEZ VALLEY · 30+ REGENERATIVE ACRES"
          headlineLeft="Where Earth’s Beauty & Memorable Gatherings Converge."
          statementRight="A private California ranch estate with 2,500+ organic heirloom roses and six outdoor wedding vignettes."
          subcaptionRight="In the heart of the Santa Ynez Valley lies a slice of paradise: Ecomama Farms."
          primaryAction={{ label: 'Explore the Venue', to: '/venue' }}
          secondaryAction={{ label: 'Inquire for 2026–2027', to: '/contact' }}
          fullHeight={true}
        />

        {/* 2. Ecomama Sage Accent Strip (Replacing Lightship's Ember Orange Wash) */}
        <ReferoSageStrip
          label="Estate Highlights"
          statement="30+ Regenerative Acres · 2,500+ Organic Garden Roses · Up to 180 Seated Guests · 6 Distinct Outdoor Vignettes"
          rightLink={{ text: 'Schedule a Private Tour', to: '/contact' }}
        />

        {/* 3. Asymmetric Photo Mosaic & Editorial Headline Pair (100px Section Gap) */}
        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-7">
              <div className="text-[12px] uppercase tracking-[0.14em] text-[#78926E] mb-3">
                01 / The Sanctuary
              </div>
              <h2 className="refero-heading-lg text-[#3E3E3E]">
                A working biodynamic rose farm designed as an open-air gallery for celebrations.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[16px] leading-[1.45] tracking-[-0.02em] text-[#78756F]">
                Welcome to Ecomama Farms, a lush sanctuary dedicated to regenerative agriculture,
                sustainability, and unforgettable events. Every celebration is surrounded by active
                orchards, fragrant garden roses, and panoramic Santa Ynez Mountain views.
              </p>
            </div>
          </div>

          {/* Off-Grid Asymmetric Collage Layout with 20px Border Radius */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            {/* Large Left Card (7 cols) */}
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

        {/* 4. Full-Bleed Cinematic Section Break (Zero Border Radius per Refero Spec) */}
        <section className="relative w-full h-[72vh] rounded-none overflow-hidden">
          <img
            src="/images/05-ecomama-farms-santa-ynez-wedding-reception18.jpg"
            alt="The Terraced Lawn at Ecomama Farms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
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
                02 / Venue Architecture
              </div>
              <h2 className="refero-heading-lg text-[#3E3E3E]">Six Spaces, One Private Estate</h2>
            </div>
            <Link to="/vignettes" className="refero-pill-btn self-start md:self-auto">
              <span>Full Vignette Specifications</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {VIGNETTES_FACILITIES.map((v, i) => {
              const colSpan =
                i % 3 === 0
                  ? 'md:col-span-5'
                  : i % 3 === 1
                  ? 'md:col-span-4 md:mt-12'
                  : 'md:col-span-3 md:mt-24';
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
                      <span>0{i + 1}</span>
                      <span className="px-2.5 py-0.5 rounded-[100px] border border-[#D9D4CC] text-[#3E3E3E]">
                        {v.tag}
                      </span>
                    </div>
                    <h3 className="refero-heading text-[#3E3E3E] mt-1 mb-2">{v.title}</h3>
                    <p className="text-[14px] text-[#78756F] leading-[1.4] mb-4">
                      {v.originalCopy}
                    </p>
                  </div>
                  <Link to="/vignettes" className="refero-ghost-link text-[#3E3E3E] self-start">
                    <span>Inspect space</span>
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

  if (mode === 'original') {
    return (
      <div>
        <section className="relative h-[78vh] min-h-[520px] flex items-center justify-center text-center text-white overflow-hidden">
          <img
            src="/images/02-screenshot-2026-03-30-at-2-37-39-pm.png"
            alt="Ecomama Farms Aerial View"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
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
              { title: 'Roses', img: '/images/03-james-and-jess-at-ecomama-farms.jpg', link: '/floral' },
              { title: 'The Venue', img: '/images/06-dji-0676-enhanced-nr-copy.jpg', link: '/venue' }
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
  }

  return (
    <div>
      <section className="relative min-h-[86vh] flex items-end pb-16 md:pb-24 px-6 md:px-12 overflow-hidden bg-[#1D221E] text-white">
        <img
          src="/images/05-ecomama-farms-santa-ynez-wedding-reception18.jpg"
          alt="Golden hour across the Ecomama Farms terraced lawn and Santa Ynez mountains"
          className="absolute inset-0 w-full h-full object-cover opacity-80 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161B17] via-[#161B17]/45 to-black/25" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-[0.22em] text-[#D8E2D3]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Santa Ynez Valley • 30+ Acre Private Sanctuary</span>
            </div>
            <h1 className="font-cormorant text-5xl sm:text-6xl md:text-7xl leading-[1.04] font-normal tracking-tight text-white">
              Where Earth’s Beauty &amp; Memorable Gatherings Converge.
            </h1>
            <p className="text-base md:text-lg text-white/85 font-light max-w-2xl leading-relaxed">
              In the heart of the Santa Ynez Valley lies Ecomama Farms—a working regenerative
              estate, organic sanctuary of 2,500+ heirloom garden roses, and private wedding
              venue for up to 180 guests.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/venue"
                className="px-7 py-4 bg-[#4E6745] hover:bg-[#3D5236] text-white text-xs uppercase tracking-[0.2em] font-medium flex items-center gap-2 transition-all"
              >
                <span>Explore the Venue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs uppercase tracking-[0.2em] font-medium transition-all"
              >
                Inquire for 2026–2027 Dates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ============================================================================
   2. VENUE PAGE (/venue)
============================================================================ */
export const VenuePage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <ReferoHeroFrame
          image="/images/06-dji-0676-enhanced-nr-copy.jpg"
          imageAlt="Ecomama Farms Wedding & Event Venue"
          eyebrowLeft="PRIVATE ESTATE VENUE · SANTA YNEZ VALLEY"
          headlineLeft="The Estate, in Full."
          statementRight="Six distinct facilities and six picturesque portrait settings across 30+ acres of organic roses, olive trees, and orchards for up to 180 guests."
          primaryAction={{ label: 'Explore 12 Vignettes', to: '/vignettes' }}
          secondaryAction={{ label: 'Compare Packages', to: '/services' }}
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Venue Architecture"
          statement="Exclusive One-Event-Per-Weekend Buyouts · Seated Receptions up to 180 · Curated In-House Planning & Organic Florals"
          rightLink={{ text: 'Request Venue Brochure', to: '/contact' }}
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-[12px] uppercase tracking-[0.14em] text-[#78926E]">
                The Estate Canvas
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
                vibrant rose garden, tranquil pond, terraced lawn, and shaded olive lane, each
                offering a magical backdrop for your special occasion.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/vignettes" className="refero-pill-btn">
                  <span>Inspect All Vignettes</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/services" className="refero-ghost-link text-[#3E3E3E] py-2">
                  <span>View Services &amp; Packages</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Asymmetric Photo Pair with 20px Radius */}
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
                <div className="bg-white rounded-[20px] p-5 border border-[#D9D4CC]">
                  <div className="text-[12px] text-[#78926E] mb-1">Estate Capacity</div>
                  <div className="refero-heading text-[#3E3E3E]">Up to 180 Guests</div>
                  <p className="text-[12px] text-[#78756F] mt-1">
                    Rose Garden (180) · Terraced Lawn (150–180) · Mountain View Barn
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
              className="px-6 py-3.5 bg-[#4E6745] text-white text-xs uppercase tracking-[0.2em]"
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

  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <ReferoHeroFrame
          image="/images/17-dji-0658-enhanced-sr.jpg"
          imageAlt="Estate Vignettes at Ecomama Farms"
          eyebrowLeft="6 EVENT FACILITIES & 6 PORTRAIT VIGNETTES"
          headlineLeft="Spaces Shaped by Orchard, Water & Rose."
          statementRight="Each celebration flows progressively across our 30+ acre ranch—from the Heart of the Garden to the Mountain View Barn."
          primaryAction={{ label: 'Book a Walkthrough', to: '/contact' }}
          secondaryAction={{ label: 'View Packages', to: '/services' }}
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Audit Resolution Applied"
          statement="Resolved live site's 'Currently under construction' Pond notice & unified capacity specs across all 12 estate spaces."
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          {/* 100px Pill Filter Bar per Refero Spec */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-14 pb-6 border-b border-[#D9D4CC]">
            <h2 className="refero-heading-lg text-[#3E3E3E]">Estate Directory</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All 12 Spaces' },
                { id: 'facilities', label: '6 Event Facilities' },
                { id: 'photo', label: '6 Portrait Vignettes' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTab(item.id as 'all' | 'facilities' | 'photo')}
                  className={`px-4 py-2 rounded-[100px] text-[13px] tracking-[-0.02em] border transition-colors ${
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
            <p className="text-sm opacity-80">
              {mode === 'original' ? p.originalCopy : p.redesignCopy}
            </p>
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
  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <ReferoHeroFrame
          image="/images/29-val-and-blake-wedding-preview-1.jpg"
          imageAlt="Ecomama Farms Services & Planning Packages"
          eyebrowLeft="TAILORED CELEBRATION PACKAGES"
          headlineLeft="Venue Rental, Full Service & Partial Planning."
          statementRight="Every wedding is unique—and your celebration at Ecomama Farms is tailored to reflect your personal style and vision."
          primaryAction={{ label: 'Request Custom Proposal', to: '/contact' }}
          secondaryAction={{ label: 'Organic Event Florals', to: '/floral' }}
          fullHeight={false}
        />

        <ReferoSageStrip
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
