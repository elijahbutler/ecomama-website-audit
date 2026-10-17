import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { DesignMode } from '../components/Layout';
import { FARM_ANIMALS, FLORAL_GALLERY } from '../data/siteContent';
import {
  ReferoHeroFrame,
  ReferoSageStrip,
  BrandKitBotanicalSeal,
  OriginalReferoHeroFrame,
  OriginalReferoSageStrip
} from '../components/ReferoComponents';

const FARM_PILLARS = [
  {
    id: 'roses',
    stamp: 'H E I R L O O M   R O S E   F I E L D S',
    botanical: '/images/brandkit/illustration-04.png',
    subtitle: 'Over 2,500 Bushes · 1,200+ Heirloom Varieties',
    title: 'Heirloom & David Austin Roses',
    originalCopy:
      'Our farm is home to over 1,200 heirloom roses, each nurtured using biodynamic and organic practices.',
    redesignCopy:
      'Our sanctuary cultivates over 2,500 organic garden rose bushes spanning 1,200+ heirloom and David Austin varieties—grown in living Santa Ynez soils without synthetic sprays and gathered at daybreak in stoneware buckets.',
    images: [
      '/images/35-the-laras-sb1-87.jpg',
      '/images/36-screenshot-2024-08-07-at-12-45-23-pm.png',
      '/images/37-ecomamasocials-june-12.jpg'
    ]
  },
  {
    id: 'orchard',
    stamp: 'S T O N E   F R U I T   &   O L I V E   G R O V E',
    botanical: '/images/brandkit/illustration-08.png',
    subtitle: 'Seasonal Stone Fruit, Citrus & Cold-Pressed Olive Oil',
    title: 'The Organic Orchard & Olive Grove',
    originalCopy:
      'Our orchard produces a variety of organic fruits, including apples, peaches, plums, pomegranates, figs, and citrus.',
    redesignCopy:
      'Producing organic apples, peaches, plums, pomegranates, figs, citrus, and estate-pressed olive oil that supply our farm-to-table harvest suppers and nourish the ranch ecosystem.',
    images: [
      '/images/38-ecomamasocials-june-16.jpg',
      '/images/39-screenshot-2024-07-16-at-1-44-09-pm.png',
      '/images/40-kathy-justin-529.jpg'
    ]
  },
  {
    id: 'compost',
    stamp: 'L I V I N G   S O I L   &   C L A Y',
    botanical: '/images/brandkit/illustration-10.png',
    subtitle: 'Closed-Loop Biodynamic Fertility',
    title: 'Living Compost & Soil Stewardship',
    originalCopy:
      'Composting is at the heart of our regenerative farming practices, turning organic waste into nutrient-rich soil.',
    redesignCopy:
      'Every green cutting, pasture grazing cycle, and botanical trim returns to our biodynamic compost windrows—building deep microbial soil health, rich Santa Ynez clay tilth, and natural water retention.',
    images: [
      '/images/41-ecomamasocials-june-9.jpg',
      '/images/42-jt-ally-madison-olling-4.jpg',
      '/images/43-ecomama-wakingup-1.jpg'
    ]
  }
];

const GATHERINGS_LIST = [
  {
    title: 'Rehearsal Dinners & Welcome Gatherings',
    stamp: 'G A T H E R I N G   N O .   0 1',
    botanical: '/images/brandkit/illustration-01.png',
    cadence: 'Up to 180 Guests',
    image: '/images/51-sunkissed-hair-2021-finals-2.jpg',
    description:
      'Begin your wedding weekend with wood-fired Santa Ynez cuisine, wheel-thrown stoneware platters, and local biodynamic wines in the Rose Barn or beneath the century oak.'
  },
  {
    title: 'Farm-to-Table Harvest Dinners',
    stamp: 'G A T H E R I N G   N O .   0 2',
    botanical: '/images/brandkit/illustration-04.png',
    cadence: 'Seasonal Long Table',
    image: '/images/52-val-and-blake-wedding-preview-1.jpg',
    description:
      'Intimate candlelit long-table suppers featuring seasonal produce from our orchard, local Santa Ynez chefs, unbleached linen runners, and freshly cut garden roses.'
  },
  {
    title: 'Botanical, Pottery & Floral Workshops',
    stamp: 'G A T H E R I N G   N O .   0 3',
    botanical: '/images/brandkit/illustration-06.png',
    cadence: 'Spring through Autumn',
    image: '/images/53-sunkissed-hair-2021-finals-15.jpg',
    description:
      'Harvest heirloom blooms directly from the field and learn sustainable, foam-free floral artistry in handmade ceramic vessels with our floral studio.'
  },
  {
    title: 'Wellness, Yoga & Restorative Retreats',
    stamp: 'G A T H E R I N G   N O .   0 4',
    botanical: '/images/brandkit/illustration-09.png',
    cadence: 'Full-Day & Multi-Day Buyouts',
    image: '/images/54-sb-40.jpg',
    description:
      'Host restorative offsites, meadow yoga sessions, and tactile creative retreats across 30+ private acres of quiet Santa Ynez countryside.'
  }
];

/* ============================================================================
   5. THE FARM PAGE (/the-farm)
============================================================================ */
export const TheFarmPage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  if (mode === 'organic') {
    return (
      <div className="text-[#0E2725]">
        <ReferoHeroFrame
          image="/images/34-dji-0656.jpg"
          imageAlt="Regenerative Farming at Ecomama Farms"
          eyebrowLeft="Working Regenerative Homestead · Santa Ynez"
          headlineLeft="A Living Biodynamic Rose Farm."
          statementRight="Home to 2,500+ organic heirloom garden roses, heritage stone-fruit orchards, closed-loop composting, and resident sanctuary animals."
          primaryAction={{ label: 'Explore Heirloom Florals', to: '/floral' }}
          secondaryAction={{ label: 'Gatherings & Workshops', to: '/gatherings' }}
          botanicalIllustration="/images/brandkit/illustration-08.png"
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Regenerative Stewardship"
          statement="100% Chemical-Free Soil Biology · Holistic Pasture Care · Biodynamic Compost & Vermicompost Fertility"
          rightLink={{ text: 'Our Sustainability Philosophy', to: '/sustainability' }}
          illustration="/images/brandkit/illustration-08.png"
        />

        <section
          id="content-start"
          className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto space-y-24"
        >
          {FARM_PILLARS.map((sec, idx) => (
            <div
              key={sec.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-8 border-t border-[#A7713F]/25 first:border-t-0"
            >
              <div
                className={`lg:col-span-5 refero-card relative overflow-hidden space-y-4 ${
                  idx % 2 === 1 ? 'lg:order-2 lg:mt-12' : ''
                }`}
              >
                <img
                  src={sec.botanical}
                  alt=""
                  className="pointer-events-none absolute -right-4 -bottom-4 w-32 h-32 object-contain opacity-20"
                />
                <div className="inline-flex items-center gap-2">
                  <img src={sec.botanical} alt="" className="w-5 h-5 object-contain" />
                  <span className="brandkit-stamp">{sec.stamp}</span>
                </div>
                <div
                  className="italic text-[17.5px] text-[#A7713F]"
                  style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                >
                  {sec.subtitle}
                </div>
                <h2 className="refero-heading-lg text-[#0E2725]">{sec.title}</h2>
                <p className="text-[15px] text-[#0E2725]/80 leading-[1.7] font-light">
                  {sec.redesignCopy}
                </p>
                <div className="pt-2">
                  <Link to="/contact" className="refero-ghost-link text-[#0E2725]">
                    <span>Arrange a private farm walk</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div
                className={`lg:col-span-7 grid grid-cols-12 gap-5 items-start ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="col-span-7 refero-arch-photo aspect-[4/5] bg-[#F6F2EA]">
                  <img
                    src={sec.images[0]}
                    alt={sec.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-5 mt-10 space-y-5">
                  {sec.images.slice(1, 3).map((img, i) => (
                    <div
                      key={i}
                      className="refero-photo aspect-[4/3] bg-[#F6F2EA]"
                    >
                      <img
                        src={img}
                        alt={`${sec.title} ${i + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Resident Farm Animals Asymmetric Mosaic */}
          <div className="pt-14 border-t border-[#A7713F]/30">
            <span className="brandkit-stamp block mb-2">
              G E N T L E   C O M P A N I O N S   O F   T H E   L A N D
            </span>
            <h2 className="refero-heading-lg text-[#0E2725] mb-12">Meet Our Resident Animals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FARM_ANIMALS.map((animal, i) => (
                <div
                  key={animal.name}
                  className={`refero-card p-5 space-y-3 ${
                    i % 2 === 1 ? 'lg:mt-8' : ''
                  }`}
                >
                  <div className="refero-photo aspect-square">
                    <img
                      src={animal.image}
                      alt={animal.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="refero-heading text-[#0E2725]">{animal.name}</h3>
                  <p className="text-[13.5px] text-[#0E2725]/75 font-light">{animal.role}</p>
                </div>
              ))}
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
          image="/images/34-dji-0656.jpg"
          imageAlt="Regenerative Farming at Ecomama Farms"
          eyebrowLeft="WORKING REGENERATIVE RANCH · SANTA YNEZ"
          headlineLeft="A Living Biodynamic Sanctuary."
          statementRight="Home to 2,500+ organic heirloom garden roses, heritage stone-fruit orchards, closed-loop composting, and resident farm animals."
          primaryAction={{ label: 'Explore Organic Florals', to: '/floral' }}
          secondaryAction={{ label: 'Gatherings & Workshops', to: '/gatherings' }}
          fullHeight={false}
        />

        <OriginalReferoSageStrip
          label="Regenerative Agriculture"
          statement="100% Chemical-Free Soil Biology · Rotational Grazing · Biodynamic Compost & Vermicompost Fertility"
          rightLink={{ text: 'Our Sustainability Philosophy', to: '/sustainability' }}
        />

        <section
          id="content-start"
          className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto space-y-24"
        >
          {FARM_PILLARS.map((sec, idx) => (
            <div
              key={sec.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-8 border-t border-[#D9D4CC] first:border-t-0"
            >
              <div
                className={`lg:col-span-5 bg-white rounded-[20px] p-8 border border-[#D9D4CC] space-y-4 ${
                  idx % 2 === 1 ? 'lg:order-2 lg:mt-12' : ''
                }`}
              >
                <div className="text-[12px] tracking-[-0.03em] text-[#78926E]">
                  0{idx + 1} / Regenerative Pillar
                </div>
                <h2 className="refero-heading-lg text-[#3E3E3E]">{sec.title}</h2>
                <p className="text-[15px] text-[#78756F] leading-[1.55]">{sec.redesignCopy}</p>
                <div className="pt-2">
                  <Link to="/contact" className="refero-ghost-link text-[#3E3E3E]">
                    <span>Schedule a farm tour</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div
                className={`lg:col-span-7 grid grid-cols-12 gap-5 items-start ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="col-span-7 rounded-[20px] overflow-hidden aspect-[4/3] bg-white">
                  <img
                    src={sec.images[0]}
                    alt={sec.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-5 mt-10 space-y-5">
                  {sec.images.slice(1, 3).map((img, i) => (
                    <div
                      key={i}
                      className="rounded-[20px] overflow-hidden aspect-[4/3] bg-white"
                    >
                      <img
                        src={img}
                        alt={`${sec.title} ${i + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Resident Farm Animals Asymmetric Mosaic */}
          <div className="pt-12 border-t border-[#D9D4CC]">
            <h2 className="refero-heading-lg text-[#3E3E3E] mb-12">Meet Our Resident Animals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FARM_ANIMALS.map((animal, i) => (
                <div
                  key={animal.name}
                  className={`bg-white rounded-[20px] p-5 border border-[#D9D4CC] space-y-3 ${
                    i % 2 === 1 ? 'lg:mt-8' : ''
                  }`}
                >
                  <div className="rounded-[20px] overflow-hidden aspect-square">
                    <img
                      src={animal.image}
                      alt={animal.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="refero-heading text-[#3E3E3E]">{animal.name}</h3>
                  <p className="text-[13px] text-[#78756F]">{animal.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      <h1 className="font-serif text-4xl md:text-6xl">The Farm</h1>
      <div className="space-y-16">
        {FARM_PILLARS.map((sec) => (
          <div key={sec.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="font-serif text-3xl">{sec.title}</h2>
              <p className="text-sm opacity-80 leading-relaxed">{sec.originalCopy}</p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {sec.images.slice(0, 2).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={sec.title}
                  className="w-full h-64 object-cover"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ============================================================================
   6. GATHERINGS PAGE (/gatherings)
============================================================================ */
export const GatheringsPage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  if (mode === 'organic') {
    return (
      <div className="text-[#0E2725]">
        <ReferoHeroFrame
          image="/images/51-sunkissed-hair-2021-finals-2.jpg"
          imageAlt="Al Fresco Long Table Gathering at Ecomama Farms"
          eyebrowLeft="Workshops, Retreats & Long-Table Dinners"
          headlineLeft="Gatherings Rooted in the Season."
          statementRight="From floral & ceramic arranging in the rose fields to candlelit harvest suppers beneath the Santa Ynez oaks."
          primaryAction={{ label: 'Host a Private Gathering', to: '/contact' }}
          secondaryAction={{ label: 'Partner With Us', to: '/partner-with-us' }}
          botanicalIllustration="/images/brandkit/illustration-01.png"
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Seasonal Table & Studio"
          statement="Botanical & Pottery Workshops · Orchard-to-Table Harvest Dinners · Restorative Wellness & Creative Retreats"
          illustration="/images/brandkit/illustration-01.png"
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {GATHERINGS_LIST.map((g, idx) => (
              <div
                key={g.title}
                className={`refero-card relative overflow-hidden space-y-5 ${
                  idx % 2 === 1 ? 'md:mt-14' : ''
                }`}
              >
                <img
                  src={g.botanical}
                  alt=""
                  className="pointer-events-none absolute -right-4 -bottom-4 w-28 h-28 object-contain opacity-15"
                />
                <div className="refero-photo aspect-[16/10]">
                  <img src={g.image} alt={g.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="brandkit-stamp">{g.stamp}</span>
                  <span className="px-3 py-0.5 rounded-[100px] bg-[#D2CCBE]/75 text-[#0E2725] text-[12px]">
                    {g.cadence}
                  </span>
                </div>
                <h2 className="refero-heading text-[#0E2725]">{g.title}</h2>
                <p className="text-[14.5px] text-[#0E2725]/75 leading-[1.65] font-light">
                  {g.description}
                </p>
                <div className="relative z-10">
                  <Link to="/contact" className="refero-pill-btn">
                    <span>Inquire About {g.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <BrandKitBotanicalSeal
            illustration="/images/brandkit/illustration-11.png"
            stamp="L O N G - T A B L E   H O S P I T A L I T Y"
            quote="Shared loaves, estate-pressed olive oil, hand-thrown ceramics, and heirloom roses freshly cut from the field."
          />
        </section>
      </div>
    );
  }

  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <OriginalReferoHeroFrame
          image="/images/51-sunkissed-hair-2021-finals-2.jpg"
          imageAlt="Al Fresco Long Table Gathering at Ecomama Farms"
          eyebrowLeft="WORKSHOPS, RETREATS & LONG-TABLE DINNERS"
          headlineLeft="Gatherings Rooted in the Season."
          statementRight="From floral arranging in the rose fields to candlelit harvest dinners under the oaks."
          primaryAction={{ label: 'Host a Private Gathering', to: '/contact' }}
          secondaryAction={{ label: 'Partner With Us', to: '/partner-with-us' }}
          fullHeight={false}
        />

        <OriginalReferoSageStrip
          label="Seasonal Programming"
          statement="Hands-On Botanical Workshops · Farm-to-Table Harvest Dinners · Executive & Wellness Retreats"
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {GATHERINGS_LIST.map((g, idx) => (
              <div
                key={g.title}
                className={`bg-white rounded-[20px] p-6 md:p-8 border border-[#D9D4CC] space-y-5 ${
                  idx % 2 === 1 ? 'md:mt-14' : ''
                }`}
              >
                <div className="rounded-[20px] overflow-hidden aspect-[16/10]">
                  <img src={g.image} alt={g.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center justify-between text-[12px] text-[#78926E]">
                  <span>0{idx + 1} / Gathering Format</span>
                  <span className="px-3 py-0.5 rounded-[100px] border border-[#D9D4CC] text-[#3E3E3E]">
                    {g.cadence}
                  </span>
                </div>
                <h2 className="refero-heading text-[#3E3E3E]">{g.title}</h2>
                <p className="text-[14px] text-[#78756F] leading-[1.45]">{g.description}</p>
                <div>
                  <Link to="/contact" className="refero-pill-btn">
                    <span>Inquire About {g.title}</span>
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
    <div className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      <h1 className="font-serif text-4xl md:text-6xl">Gatherings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {GATHERINGS_LIST.map((g) => (
          <div key={g.title} className="bg-white p-6 border border-black/10 space-y-4">
            <img src={g.image} alt={g.title} className="w-full h-64 object-cover" />
            <h2 className="font-serif text-2xl">{g.title}</h2>
            <p className="text-sm opacity-80">{g.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ============================================================================
   7. FLORAL PAGE (/floral)
============================================================================ */
export const FloralPage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  const [tagFilter, setTagFilter] = useState<string>('All');
  const tags = ['All', 'Garden Blooms', 'Bridal Bouquets', 'David Austin', 'Ceremony & Table'];
  const filteredGallery =
    tagFilter === 'All'
      ? FLORAL_GALLERY
      : FLORAL_GALLERY.filter((item) => item.tag === tagFilter);

  if (mode === 'organic') {
    return (
      <div className="text-[#0E2725]">
        <ReferoHeroFrame
          image="/images/55-hanna-carl-wedding-by-rachel-wakefield.jpg"
          imageAlt="2,500+ Organic Garden Roses at Ecomama Farms"
          eyebrowLeft="2,500+ Heirloom Garden Roses · Seed to Centerpiece"
          headlineLeft="Vintage Rose Farm & Event Floral Atelier."
          statementRight="Grown in living Santa Ynez soils without synthetic chemicals, harvested at peak fragrance, and arranged in wheel-thrown vessels."
          primaryAction={{ label: 'Inquire for Event Florals', to: '/contact' }}
          secondaryAction={{ label: 'Explore the Rose Fields', to: '/the-farm' }}
          botanicalIllustration="/images/brandkit/illustration-06.png"
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Botanical Artistry"
          statement="Over 2,500 Heirloom & David Austin Rose Bushes · Cut Hours Before Your Ceremony · 100% Foam-Free & Chemical-Free"
          illustration="/images/brandkit/illustration-06.png"
        />

        {/* 12-Illustration Brand Kit Botanical Study Strip */}
        <section className="stoneware-surface py-12 px-6 md:px-12 border-b border-[#A7713F]/30">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <span className="brandkit-stamp">
                E C O M A M A   B O T A N I C A L   A R C H I V E   ( 1 2   S T U D I E S )
              </span>
              <span
                className="italic text-[15px] text-[#0E2725]/75"
                style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
              >
                Hand-painted heirloom rose &amp; stem studies from our Santa Ynez brand kit
              </span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-3">
              {Array.from({ length: 12 }, (_, idx) => {
                const num = String(idx + 1).padStart(2, '0');
                return (
                  <div
                    key={num}
                    className="bg-[#F6F2EA] rounded-[18px] p-2.5 border border-[#A7713F]/25 flex flex-col items-center justify-center aspect-square hover:border-[#A7713F] transition-colors"
                  >
                    <img
                      src={`/images/brandkit/illustration-${num}.png`}
                      alt={`Ecomama Botanical Specimen ${num}`}
                      className="max-h-14 max-w-full object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-[#A7713F]/30">
            <div>
              <span className="brandkit-stamp block mb-1.5">
                G A T H E R E D   F R O M   O U R   F I E L D S
              </span>
              <h2 className="refero-heading-lg text-[#0E2725]">
                Heirloom Rose &amp; Ceramic Vessel Lookbook
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setTagFilter(t)}
                  className={`px-4 py-2 rounded-[100px] text-[13px] border transition-colors ${
                    tagFilter === t
                      ? 'bg-[#A7713F] text-[#F6F2EA] border-[#A7713F]'
                      : 'bg-[#F6F2EA] text-[#0E2725] border-[#A7713F]/35 hover:border-[#A7713F]'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.src}
                className={`refero-card p-5 space-y-3 ${
                  idx % 3 === 1 ? 'md:mt-10' : idx % 3 === 2 ? 'md:mt-20' : ''
                }`}
              >
                <div
                  className={`${
                    idx % 2 === 0 ? 'refero-arch-photo' : 'refero-photo'
                  } aspect-[4/5]`}
                >
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span
                    className="italic text-[16px] text-[#A7713F]"
                    style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
                  >
                    {item.tag}
                  </span>
                  <span className="brandkit-stamp text-[9.5px]">NO. 0{idx + 1}</span>
                </div>
                <p className="text-[13.5px] text-[#0E2725]/75 font-light">{item.alt}</p>
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
          image="/images/55-hanna-carl-wedding-by-rachel-wakefield.jpg"
          imageAlt="2,500+ Organic Garden Roses at Ecomama Farms"
          eyebrowLeft="2,500+ ORGANIC GARDEN ROSES · SEED TO CENTERPIECE"
          headlineLeft="100% Organic Estate Event Florals."
          statementRight="Grown in living Santa Ynez soils without synthetic chemicals, harvested at peak fragrance for weddings and editorial installations."
          primaryAction={{ label: 'Request Floral Availability', to: '/contact' }}
          secondaryAction={{ label: 'Explore the Farm', to: '/the-farm' }}
          fullHeight={false}
        />

        <OriginalReferoSageStrip
          label="Botanical Program"
          statement="Over 2,500 Heirloom Rose Bushes · Cut to Order Hours Before Your Ceremony · Zero Imported Foam or Chemicals"
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#D9D4CC]">
            <div>
              <div className="text-[12px] uppercase tracking-[0.14em] text-[#78926E] mb-2">
                17-Photograph Botanical Lookbook
              </div>
              <h2 className="refero-heading-lg text-[#3E3E3E]">Estate Rose &amp; Floral Portfolio</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setTagFilter(t)}
                  className={`px-4 py-2 rounded-[100px] text-[13px] border transition-colors ${
                    tagFilter === t
                      ? 'bg-[#3E3E3E] text-[#F4F1EE] border-[#3E3E3E]'
                      : 'bg-white text-[#3E3E3E] border-[#D9D4CC]'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.src}
                className={`bg-white rounded-[20px] p-5 border border-[#D9D4CC] space-y-3 ${
                  idx % 3 === 1 ? 'md:mt-10' : idx % 3 === 2 ? 'md:mt-20' : ''
                }`}
              >
                <div className="rounded-[20px] overflow-hidden aspect-[4/5]">
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center justify-between text-[12px] text-[#78926E] pt-1">
                  <span>0{idx + 1}</span>
                  <span className="px-2.5 py-0.5 rounded-[100px] border border-[#D9D4CC] text-[#3E3E3E]">
                    {item.tag}
                  </span>
                </div>
                <p className="text-[13px] text-[#78756F]">{item.alt}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      <h1 className="font-serif text-4xl md:text-6xl">Event Floral</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FLORAL_GALLERY.map((item) => (
          <div key={item.src} className="bg-white p-5 border border-black/10 space-y-3">
            <img src={item.src} alt={item.alt} className="w-full h-72 object-cover" />
            <p className="text-xs opacity-75">{item.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
