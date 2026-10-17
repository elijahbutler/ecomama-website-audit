import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { DesignMode } from '../components/Layout';
import { FARM_ANIMALS, FLORAL_GALLERY } from '../data/siteContent';
import {
  ReferoHeroFrame,
  ReferoSageStrip,
  OriginalReferoHeroFrame,
  OriginalReferoSageStrip
} from '../components/ReferoComponents';

const FARM_PILLARS = [
  {
    id: 'roses',
    subtitle: 'Over 2,500 Bushes · 1,200+ Heirloom Varieties',
    title: 'Heirloom & David Austin Roses',
    originalCopy:
      'Our farm is home to over 1,200 heirloom roses, each nurtured using biodynamic and organic practices.',
    redesignCopy:
      'Our sanctuary cultivates over 2,500 organic garden rose bushes spanning 1,200+ heirloom and David Austin varieties—grown in living Santa Ynez soils without synthetic sprays.',
    images: [
      '/images/35-the-laras-sb1-87.jpg',
      '/images/36-screenshot-2024-08-07-at-12-45-23-pm.png',
      '/images/37-ecomamasocials-june-12.jpg'
    ]
  },
  {
    id: 'orchard',
    subtitle: 'Seasonal Stone Fruit, Citrus & Cold-Pressed Olive Oil',
    title: 'The Organic Orchard & Olive Grove',
    originalCopy:
      'Our orchard produces a variety of organic fruits, including apples, peaches, plums, pomegranates, figs, and citrus.',
    redesignCopy:
      'Producing organic apples, peaches, plums, pomegranates, figs, citrus, and estate-pressed olive oil that supply our farm-to-table dinners and nourish the ranch ecosystem.',
    images: [
      '/images/38-ecomamasocials-june-16.jpg',
      '/images/39-screenshot-2024-07-16-at-1-44-09-pm.png',
      '/images/40-kathy-justin-529.jpg'
    ]
  },
  {
    id: 'compost',
    subtitle: 'Closed-Loop Biodynamic Fertility',
    title: 'Living Compost & Soil Stewardship',
    originalCopy:
      'Composting is at the heart of our regenerative farming practices, turning organic waste into nutrient-rich soil.',
    redesignCopy:
      'Every green cutting, pasture grazing cycle, and botanical trim returns to our biodynamic compost windrows—building deep microbial soil health and water retention.',
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
    cadence: 'Up to 180 Guests',
    image: '/images/51-sunkissed-hair-2021-finals-2.jpg',
    description:
      'Begin your wedding weekend with wood-fired Santa Ynez cuisine and local biodynamic wines in the Rose Barn or beneath the century oak.'
  },
  {
    title: 'Farm-to-Table Harvest Dinners',
    cadence: 'Seasonal Long Table',
    image: '/images/52-val-and-blake-wedding-preview-1.jpg',
    description:
      'Intimate candlelit long-table dinners featuring seasonal produce from our orchard, local Santa Ynez chefs, and freshly cut garden roses.'
  },
  {
    title: 'Botanical & Floral Workshops',
    cadence: 'Spring through Autumn',
    image: '/images/53-sunkissed-hair-2021-finals-15.jpg',
    description:
      'Harvest heirloom blooms directly from the field and learn sustainable, foam-free floral artistry with our floral studio.'
  },
  {
    title: 'Wellness, Yoga & Restorative Retreats',
    cadence: 'Full-Day & Multi-Day Buyouts',
    image: '/images/54-sb-40.jpg',
    description:
      'Host restorative offsites, meadow yoga sessions, and creative retreats across 30+ private acres of quiet Santa Ynez countryside.'
  }
];

/* ============================================================================
   5. THE FARM PAGE (/the-farm)
============================================================================ */
export const TheFarmPage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  if (mode === 'organic') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <ReferoHeroFrame
          image="/images/34-dji-0656.jpg"
          imageAlt="Regenerative Farming at Ecomama Farms"
          eyebrowLeft="Working Regenerative Ranch · Santa Ynez"
          headlineLeft="A Living Biodynamic Sanctuary."
          statementRight="Home to 2,500+ organic heirloom garden roses, heritage stone-fruit orchards, closed-loop composting, and resident farm animals."
          primaryAction={{ label: 'Explore Organic Florals', to: '/floral' }}
          secondaryAction={{ label: 'Gatherings & Workshops', to: '/gatherings' }}
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Regenerative Stewardship"
          statement="100% Chemical-Free Soil Biology · Holistic Pasture Care · Biodynamic Compost & Vermicompost Fertility"
          rightLink={{ text: 'Our Sustainability Philosophy', to: '/sustainability' }}
        />

        <section
          id="content-start"
          className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto space-y-24"
        >
          {FARM_PILLARS.map((sec, idx) => (
            <div
              key={sec.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-8 border-t border-[#78926E]/20 first:border-t-0"
            >
              <div
                className={`lg:col-span-5 bg-[#FAF8F4] rounded-[24px] p-8 md:p-10 border border-[#78926E]/25 space-y-4 ${
                  idx % 2 === 1 ? 'lg:order-2 lg:mt-12' : ''
                }`}
              >
                <div
                  className="italic text-[17px] text-[#78926E]"
                  style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                >
                  {sec.subtitle}
                </div>
                <h2 className="refero-heading-lg text-[#3E3E3E]">{sec.title}</h2>
                <p className="text-[15px] text-[#66625B] leading-[1.65] font-light">
                  {sec.redesignCopy}
                </p>
                <div className="pt-2">
                  <Link to="/contact" className="refero-ghost-link text-[#3E3E3E]">
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
                <div className="col-span-7 rounded-[24px] overflow-hidden aspect-[4/3] bg-[#FAF8F4]">
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
                      className="rounded-[24px] overflow-hidden aspect-[4/3] bg-[#FAF8F4]"
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
          <div className="pt-14 border-t border-[#78926E]/25">
            <span
              className="italic text-[18px] text-[#78926E] block mb-1"
              style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
            >
              Gentle Companions of the Land
            </span>
            <h2 className="refero-heading-lg text-[#3E3E3E] mb-12">Meet Our Resident Animals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FARM_ANIMALS.map((animal, i) => (
                <div
                  key={animal.name}
                  className={`bg-[#FAF8F4] rounded-[24px] p-5 border border-[#78926E]/20 space-y-3 ${
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
                  <p className="text-[13.5px] text-[#66625B] font-light">{animal.role}</p>
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
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <ReferoHeroFrame
          image="/images/51-sunkissed-hair-2021-finals-2.jpg"
          imageAlt="Al Fresco Long Table Gathering at Ecomama Farms"
          eyebrowLeft="Workshops, Retreats & Long-Table Dinners"
          headlineLeft="Gatherings Rooted in the Season."
          statementRight="From floral arranging in the rose fields to candlelit harvest dinners beneath the Santa Ynez oaks."
          primaryAction={{ label: 'Host a Private Gathering', to: '/contact' }}
          secondaryAction={{ label: 'Partner With Us', to: '/partner-with-us' }}
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Seasonal Table & Studio"
          statement="Botanical Floral Workshops · Orchard-to-Table Harvest Dinners · Restorative Wellness & Creative Retreats"
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {GATHERINGS_LIST.map((g, idx) => (
              <div
                key={g.title}
                className={`bg-[#FAF8F4] rounded-[24px] p-6 md:p-8 border border-[#78926E]/25 space-y-5 ${
                  idx % 2 === 1 ? 'md:mt-14' : ''
                }`}
              >
                <div className="rounded-[20px] overflow-hidden aspect-[16/10]">
                  <img src={g.image} alt={g.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center justify-between text-[12px] text-[#587050]">
                  <span
                    className="italic text-[16px]"
                    style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                  >
                    Private Estate Experience
                  </span>
                  <span className="px-3 py-0.5 rounded-[100px] bg-[#E9EFE6] text-[#587050]">
                    {g.cadence}
                  </span>
                </div>
                <h2 className="refero-heading text-[#3E3E3E]">{g.title}</h2>
                <p className="text-[14px] text-[#66625B] leading-[1.6] font-light">
                  {g.description}
                </p>
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
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <ReferoHeroFrame
          image="/images/55-hanna-carl-wedding-by-rachel-wakefield.jpg"
          imageAlt="2,500+ Organic Garden Roses at Ecomama Farms"
          eyebrowLeft="2,500+ Organic Garden Roses · Seed to Centerpiece"
          headlineLeft="100% Organic Estate Event Florals."
          statementRight="Grown in living Santa Ynez soils without synthetic chemicals, harvested at peak fragrance for weddings and bespoke installations."
          primaryAction={{ label: 'Inquire for Event Florals', to: '/contact' }}
          secondaryAction={{ label: 'Explore the Rose Fields', to: '/the-farm' }}
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Botanical Artistry"
          statement="Over 2,500 Heirloom & David Austin Rose Bushes · Cut Hours Before Your Ceremony · 100% Foam-Free & Chemical-Free"
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-[#78926E]/25">
            <div>
              <span
                className="italic text-[18px] text-[#78926E] block mb-1"
                style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
              >
                Gathered from Our Fields
              </span>
              <h2 className="refero-heading-lg text-[#3E3E3E]">Estate Rose &amp; Floral Lookbook</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setTagFilter(t)}
                  className={`px-4 py-2 rounded-[100px] text-[13px] border transition-colors ${
                    tagFilter === t
                      ? 'bg-[#78926E] text-[#FAF8F4] border-[#78926E]'
                      : 'bg-[#FAF8F4] text-[#3E3E3E] border-[#78926E]/30 hover:border-[#78926E]'
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
                className={`bg-[#FAF8F4] rounded-[24px] p-5 border border-[#78926E]/20 space-y-3 ${
                  idx % 3 === 1 ? 'md:mt-10' : idx % 3 === 2 ? 'md:mt-20' : ''
                }`}
              >
                <div className="rounded-[20px] overflow-hidden aspect-[4/5]">
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span
                    className="italic text-[15px] text-[#78926E]"
                    style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                  >
                    {item.tag}
                  </span>
                </div>
                <p className="text-[13.5px] text-[#66625B] font-light">{item.alt}</p>
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
