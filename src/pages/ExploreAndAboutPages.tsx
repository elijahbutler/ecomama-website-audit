import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { DesignMode } from '../components/Layout';
import { LOCAL_RECOMMENDATIONS_DATA } from '../data/siteContent';
import { ReferoHeroFrame, ReferoSageStrip } from '../components/ReferoComponents';

const SUSTAINABILITY_PILLARS_LIST = [
  {
    title: 'Biodynamic Soil & Composting',
    metric: '100% Organic Inputs',
    description:
      'We build living topsoil through on-site thermal composting, vermicompost, cover cropping, and biodynamic preparations—never synthetic fertilizers or herbicides.'
  },
  {
    title: 'Rotational Animal Integration',
    metric: 'Holistic Grazing',
    description:
      'Our rescue and heritage farm animals help manage pasture growth, aerate the earth naturally, and contribute to our closed-loop fertility cycle.'
  },
  {
    title: 'Water Stewardship & Native Habitat',
    metric: 'Drip & Mulch Retention',
    description:
      'Deep organic wood-chip mulching, drought-adapted heirloom rootstocks, and native pollinator hedgerows conserve precious Santa Ynez Valley groundwater.'
  }
];

/* ============================================================================
   8. EXPLORE PAGE (/explore)
============================================================================ */
export const ExplorePage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <ReferoHeroFrame
          image="/images/72-jt-ally-808.jpg"
          imageAlt="Explore the Santa Ynez Valley & Ecomama Press"
          eyebrowLeft="SANTA YNEZ VALLEY CONCIERGE & PRESS"
          headlineLeft="Explore Wine Country Around Ecomama."
          statementRight="Read love notes from couples who celebrated on the estate and discover our curated guide to Santa Ynez, Los Olivos, Solvang, and Los Alamos."
          primaryAction={{ label: 'Open Curated Guide (58 Spots)', to: '/local-recommendations' }}
          secondaryAction={{ label: 'Book a Farm Tour', to: '/contact' }}
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Destination Wedding Weekend"
          statement="Featured in Green Wedding Shoes, Santa Barbara Wedding Style & Santa Ynez Valley Country Life"
          rightLink={{ text: 'Browse All 58 Recommendations', to: '/local-recommendations' }}
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto space-y-16">
          <div className="bg-white rounded-[20px] p-10 md:p-14 border border-[#D9D4CC] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="text-[12px] uppercase tracking-[0.14em] text-[#78926E]">
                Curated Guest Itinerary
              </div>
              <h2 className="refero-heading-lg text-[#3E3E3E]">
                Eat, Drink, Stay &amp; Explore in the Santa Ynez Valley
              </h2>
              <p className="text-[15px] text-[#78756F]">
                Planning a multi-day wedding weekend or retreat? Browse our filterable concierge
                directory of 58 handpicked local restaurants, biodynamic wineries, inns, and trails.
              </p>
            </div>
            <Link to="/local-recommendations" className="refero-pill-btn shrink-0">
              <span>View Local Recommendations</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-10">
      <h1 className="font-serif text-4xl md:text-6xl">Explore Santa Ynez</h1>
      <img src="/images/72-jt-ally-808.jpg" alt="Explore Santa Ynez" className="w-full h-96 object-cover" />
      <Link
        to="/local-recommendations"
        className="inline-block px-7 py-3.5 bg-[#78926E] text-white text-xs uppercase tracking-widest"
      >
        Local Recommendations
      </Link>
    </div>
  );
};

/* ============================================================================
   9. LOCAL RECOMMENDATIONS PAGE (/local-recommendations)
============================================================================ */
export const LocalRecommendationsPage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...LOCAL_RECOMMENDATIONS_DATA.map((c) => c.category)];
  const visibleGroups =
    selectedCategory === 'All'
      ? LOCAL_RECOMMENDATIONS_DATA
      : LOCAL_RECOMMENDATIONS_DATA.filter((g) => g.category === selectedCategory);

  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <ReferoHeroFrame
          image="/images/80-the-laras-sb6-65.jpg"
          imageAlt="Local Recommendations in the Santa Ynez Valley"
          eyebrowLeft="58 CURATED VALLEY FAVORITES"
          headlineLeft="The Santa Ynez Valley Field Guide."
          statementRight="Handpicked by the Ecomama Farms team across Santa Ynez, Los Olivos, Solvang, Los Alamos, and Buellton."
          primaryAction={{ label: 'Inquire for Group Stays', to: '/contact' }}
          fullHeight={false}
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-[#D9D4CC]">
            <h2 className="refero-heading-lg text-[#3E3E3E]">58 Curated Recommendations</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-4 py-2 rounded-[100px] text-[13px] border transition-colors ${
                    selectedCategory === c
                      ? 'bg-[#3E3E3E] text-[#F4F1EE] border-[#3E3E3E]'
                      : 'bg-white text-[#3E3E3E] border-[#D9D4CC]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-14">
            {visibleGroups.map((group) => (
              <div key={group.category} className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#D9D4CC] pb-3">
                  <h3 className="refero-heading text-[#3E3E3E]">{group.category}</h3>
                  <span className="text-[12px] text-[#78926E]">{group.items.length} places</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.items.map((item) => (
                    <div
                      key={item.raw}
                      className="bg-white rounded-[20px] p-5 border border-[#D9D4CC] flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="text-[15px] font-medium text-[#3E3E3E]">{item.name}</div>
                        <div className="text-[12px] text-[#78756F] mt-0.5">{item.town}</div>
                      </div>
                      <span className="px-3 py-1 rounded-[100px] border border-[#D9D4CC] text-[11px] text-[#78926E] shrink-0">
                        {group.category}
                      </span>
                    </div>
                  ))}
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
      <h1 className="font-serif text-4xl md:text-6xl">Local Recommendations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {LOCAL_RECOMMENDATIONS_DATA.map((group) => (
          <div key={group.category} className="bg-white p-6 border border-black/10 space-y-3">
            <h2 className="font-serif text-2xl">{group.category}</h2>
            <ul className="space-y-1 text-sm opacity-80">
              {group.items.map((item) => (
                <li key={item.raw}>• {item.raw}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ============================================================================
   10. ABOUT PAGE (/about)
============================================================================ */
export const AboutPage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <ReferoHeroFrame
          image="/images/82-ecomama-farms-james-and-jess-7.jpg"
          imageAlt="About Ecomama Farms"
          eyebrowLeft="OUR STORY & SUSTAINABILITY"
          headlineLeft="Rooted in Regenerative Stewardship."
          statementRight="Discover how Ecomama Farms grew from a family dream into a 30+ acre biodynamic rose sanctuary and gathering place."
          primaryAction={{ label: 'Read Our Story', to: '/our-story' }}
          secondaryAction={{ label: 'Sustainability Practices', to: '/sustainability' }}
          fullHeight={false}
        />

        <section
          id="content-start"
          className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-[20px] p-8 border border-[#D9D4CC] space-y-5">
            <div className="rounded-[20px] overflow-hidden aspect-[16/10]">
              <img
                src="/images/85-dji-0676-enhanced-nr.jpg"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="refero-heading text-[#3E3E3E]">Our Story</h2>
            <p className="text-[14px] text-[#78756F]">
              Born from a deep reverence for Mother Earth, Ecomama Farms was founded in 2019 by
              Tamie Posnick to restore the land while bringing people together in beauty.
            </p>
            <Link to="/our-story" className="refero-pill-btn">
              <span>Read Founder Story</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-[20px] p-8 border border-[#D9D4CC] space-y-5 md:mt-12">
            <div className="rounded-[20px] overflow-hidden aspect-[16/10]">
              <img
                src="/images/88-3870-baseline-ave-37-copy.jpg"
                alt="Sustainability"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="refero-heading text-[#3E3E3E]">Sustainability</h2>
            <p className="text-[14px] text-[#78756F]">
              From closed-loop composting to 100% organic soil biology, explore our regenerative
              farming practices.
            </p>
            <Link to="/sustainability" className="refero-pill-btn">
              <span>Explore Sustainability</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      <h1 className="font-serif text-4xl md:text-6xl">About Ecomama Farms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link to="/our-story" className="bg-white p-6 border border-black/10 block">
          <img
            src="/images/85-dji-0676-enhanced-nr.jpg"
            alt="Our Story"
            className="w-full h-64 object-cover mb-4"
          />
          <h2 className="font-serif text-3xl">Our Story</h2>
        </Link>
        <Link to="/sustainability" className="bg-white p-6 border border-black/10 block">
          <img
            src="/images/88-3870-baseline-ave-37-copy.jpg"
            alt="Sustainability"
            className="w-full h-64 object-cover mb-4"
          />
          <h2 className="font-serif text-3xl">Sustainability</h2>
        </Link>
      </div>
    </div>
  );
};

/* ============================================================================
   11. OUR STORY PAGE (/our-story)
============================================================================ */
export const OurStoryPage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <ReferoHeroFrame
          image="/images/85-dji-0676-enhanced-nr.jpg"
          imageAlt="Our Story at Ecomama Farms"
          eyebrowLeft="FOUNDED IN 2019 · SANTA YNEZ, CALIFORNIA"
          headlineLeft="A Love Letter to the Land."
          statementRight="What began in 2019 as Tamie Posnick’s vision to heal the soil became a 30+ acre sanctuary of 2,500+ organic garden roses, heritage orchards, and timeless celebrations."
          primaryAction={{ label: 'Explore Sustainability', to: '/sustainability' }}
          secondaryAction={{ label: 'Visit the Estate', to: '/contact' }}
          fullHeight={false}
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 bg-white rounded-[20px] p-8 md:p-12 border border-[#D9D4CC] space-y-6">
              <div className="text-[12px] uppercase tracking-[0.14em] text-[#78926E]">
                Chronological Narrative (2019 → Present)
              </div>
              <h2 className="refero-heading-lg text-[#3E3E3E]">
                Healing the earth while celebrating life’s milestones.
              </h2>
              <p className="text-[15px] text-[#78756F] leading-[1.55]">
                In 2019, founder Tamie Posnick purchased a sun-drenched property in the Santa Ynez
                Valley with a clear mission: to transform depleted conventional ground into a
                thriving biodynamic sanctuary.
              </p>
              <p className="text-[15px] text-[#78756F] leading-[1.55]">
                Today, over 2,500 organic heirloom rose bushes bloom alongside olive groves,
                stone-fruit orchards, and pastures—creating an authentic, unhurried sanctuary for
                weddings and community gatherings.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-12 gap-6 items-start">
              <div className="col-span-7 rounded-[20px] overflow-hidden aspect-[4/5]">
                <img
                  src="/images/86-ecomamasocials-june-11.jpg"
                  alt="Ecomama Farms Landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-5 mt-16 rounded-[20px] overflow-hidden aspect-square">
                <img
                  src="/images/87-sb5-50.jpg"
                  alt="Heirloom Roses"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto space-y-8">
      <h1 className="font-serif text-4xl md:text-6xl">Our Story</h1>
      <img
        src="/images/85-dji-0676-enhanced-nr.jpg"
        alt="Our Story"
        className="w-full h-96 object-cover"
      />
      <p className="text-base leading-relaxed opacity-85">
        At Ecomama Farms, we believe the most unforgettable gatherings happen when people connect
        directly with living nature in the heart of the Santa Ynez Valley.
      </p>
    </div>
  );
};

/* ============================================================================
   12. SUSTAINABILITY PAGE (/sustainability)
============================================================================ */
export const SustainabilityPage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <ReferoHeroFrame
          image="/images/88-3870-baseline-ave-37-copy.jpg"
          imageAlt="Regenerative Sustainability at Ecomama Farms"
          eyebrowLeft="BIODYNAMIC & REGENERATIVE PRINCIPLES"
          headlineLeft="Farming for Future Generations."
          statementRight="Every rose, orchard tree, and pasture at Ecomama Farms is tended without synthetic pesticides—building living topsoil and biodiversity."
          primaryAction={{ label: 'Explore the Farm', to: '/the-farm' }}
          secondaryAction={{ label: 'Partner With Us', to: '/partner-with-us' }}
          fullHeight={false}
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SUSTAINABILITY_PILLARS_LIST.map((p, idx) => (
              <div
                key={p.title}
                className={`bg-white rounded-[20px] p-8 border border-[#D9D4CC] space-y-4 ${
                  idx % 3 === 1 ? 'md:mt-10' : idx % 3 === 2 ? 'md:mt-20' : ''
                }`}
              >
                <div className="flex items-center justify-between text-[12px] text-[#78926E]">
                  <span>0{idx + 1} / Regenerative Pillar</span>
                  <span className="px-3 py-0.5 rounded-[100px] border border-[#D9D4CC] text-[#3E3E3E]">
                    {p.metric}
                  </span>
                </div>
                <h2 className="refero-heading text-[#3E3E3E]">{p.title}</h2>
                <p className="text-[14px] text-[#78756F] leading-[1.45]">{p.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      <h1 className="font-serif text-4xl md:text-6xl">Sustainability</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SUSTAINABILITY_PILLARS_LIST.map((p) => (
          <div key={p.title} className="bg-white p-6 border border-black/10 space-y-3">
            <div className="text-xs uppercase text-[#78926E]">{p.metric}</div>
            <h2 className="font-serif text-2xl">{p.title}</h2>
            <p className="text-sm opacity-80">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
