import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { DesignMode } from '../components/Layout';
import { ReferoHeroFrame, ReferoSageStrip } from '../components/ReferoComponents';

/* ============================================================================
   13. CONTACT PAGE (/contact)
============================================================================ */
export const ContactPage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  const [submitted, setSubmitted] = useState(false);

  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <ReferoHeroFrame
          image="/images/92-sunkissed-hair-2021-finals.jpg"
          imageAlt="Contact Ecomama Farms in Santa Ynez"
          eyebrowLeft="2550 CALZADA AVE · SANTA YNEZ, CA 93460"
          headlineLeft="Begin Your Ecomama Conversation."
          statementRight="Schedule a private estate walkthrough, inquire about 2026–2027 wedding dates, or reserve seasonal organic garden roses."
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Direct Concierge"
          statement="Phone: (805) 894-1477 · Events: events@ecomamafarms.com · General: info@ecomamafarms.com"
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-[20px] p-8 border border-[#D9D4CC] space-y-5">
                <div className="text-[12px] uppercase tracking-[0.14em] text-[#78926E]">
                  Estate Concierge
                </div>
                <h2 className="refero-heading-lg text-[#3E3E3E]">Visit Us in Santa Ynez</h2>
                <p className="text-[14px] text-[#78756F] leading-[1.5]">
                  Private estate tours are available by appointment for couples, event planners,
                  florists, and retreat hosts.
                </p>
                <div className="pt-4 border-t border-[#D9D4CC] space-y-2 text-[14px]">
                  <div>
                    <strong className="font-medium">Address:</strong> 2550 Calzada Ave, Santa Ynez,
                    CA 93460
                  </div>
                  <div>
                    <strong className="font-medium">Phone:</strong>{' '}
                    <a href="tel:+18058941477" className="refero-ghost-link">
                      (805) 894-1477
                    </a>
                  </div>
                  <div>
                    <strong className="font-medium">Weddings &amp; Events:</strong>{' '}
                    <a href="mailto:events@ecomamafarms.com" className="refero-ghost-link">
                      events@ecomamafarms.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-[20px] p-8 md:p-12 border border-[#D9D4CC]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#78926E] mx-auto" />
                  <h3 className="refero-heading-lg text-[#3E3E3E]">Thank You for Reaching Out</h3>
                  <p className="text-[15px] text-[#78756F] max-w-md mx-auto">
                    Our Santa Ynez concierge team has received your inquiry and will respond within
                    24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-[#D9D4CC]">
                    <h3 className="refero-heading text-[#3E3E3E]">Event &amp; Estate Inquiry</h3>
                    <span className="text-[12px] text-[#999690]">100px Pill Input Geometry</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <input
                      type="text"
                      required
                      placeholder="First Name *"
                      className="refero-pill-input"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Last Name *"
                      className="refero-pill-input"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      className="refero-pill-input"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="refero-pill-input"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select className="refero-pill-input">
                      <option>Wedding Celebration (Up to 180 Guests)</option>
                      <option>Intimate Gathering / Elopement</option>
                      <option>Organic Event Florals</option>
                      <option>Workshop / Farm Tour</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Desired Season / Date (e.g. Autumn 2026)"
                      className="refero-pill-input"
                    />
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your celebration, estimated guest count, and vision..."
                    className="w-full rounded-[20px] border border-[#D9D4CC] bg-white p-5 text-[15px] text-[#3E3E3E] focus:outline-none focus:border-[#3E3E3E]"
                  />
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-[100px] border border-[#3E3E3E] text-[#3E3E3E] hover:bg-[#3E3E3E] hover:text-[#F4F1EE] text-[14px] tracking-[-0.02em] transition-colors"
                    >
                      Submit Inquiry →
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto space-y-10">
      <h1 className="font-serif text-4xl md:text-6xl">Contact Us</h1>
      <p className="text-base opacity-80">
        2550 Calzada Ave, Santa Ynez, CA 93460 · (805) 894-1477 · events@ecomamafarms.com
      </p>
    </div>
  );
};

/* ============================================================================
   14. PARTNER WITH US PAGE (/partner-with-us)
============================================================================ */
export const PartnerWithUsPage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <ReferoHeroFrame
          image="/images/94-screenshot-2024-07-16-at-5-37-18-pm.png"
          imageAlt="Partner With Ecomama Farms"
          eyebrowLeft="PLANNERS, FLORISTS, CHEFS & EDUCATORS"
          headlineLeft="Partner With Ecomama Farms."
          statementRight="Collaborate with our Santa Ynez estate on bespoke weddings, floral workshops, culinary dinners, and wellness retreats."
          primaryAction={{ label: 'Apply to Partner', to: '/contact' }}
          fullHeight={false}
        />

        <section
          id="content-start"
          className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Wedding Planners & Designers',
              desc: 'Join our preferred planner circle for private estate previews, custom site maps, and full-weekend buyout access.'
            },
            {
              title: 'Floral Designers & Studios',
              desc: 'Source freshly harvested, 100% organic garden roses and seasonal botanicals directly from our 2,500+ bush sanctuary.'
            },
            {
              title: 'Chefs, Educators & Retreat Hosts',
              desc: 'Co-host seasonal farm-to-table dinners, botanical workshops, and regenerative agriculture immersions.'
            }
          ].map((card, i) => (
            <div
              key={card.title}
              className={`bg-white rounded-[20px] p-8 border border-[#D9D4CC] space-y-4 ${
                i === 1 ? 'md:mt-10' : i === 2 ? 'md:mt-20' : ''
              }`}
            >
              <div className="text-[12px] text-[#78926E]">0{i + 1} / Collaboration</div>
              <h2 className="refero-heading text-[#3E3E3E]">{card.title}</h2>
              <p className="text-[14px] text-[#78756F] leading-[1.45]">{card.desc}</p>
              <div>
                <Link to="/contact" className="refero-ghost-link text-[#3E3E3E]">
                  <span>Connect with our team</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 px-6 md:px-12 max-w-5xl mx-auto space-y-8">
      <h1 className="font-serif text-4xl md:text-6xl">Partner With Us</h1>
      <img
        src="/images/94-screenshot-2024-07-16-at-5-37-18-pm.png"
        alt="Partner With Us"
        className="w-full h-96 object-cover"
      />
    </div>
  );
};

/* ============================================================================
   15. PRIVACY POLICY PAGE (/privacy-policy)
============================================================================ */
export const PrivacyPolicyPage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  return (
    <div className="pt-32 pb-[100px] px-6 md:px-12 max-w-4xl mx-auto">
      <div className="bg-white rounded-[20px] p-8 md:p-12 border border-[#D9D4CC] space-y-6">
        <div className="text-[12px] uppercase tracking-[0.14em] text-[#78926E]">
          Legal &amp; Privacy Notice
        </div>
        <h1 className="refero-heading-lg text-[#3E3E3E]">Privacy Policy</h1>
        <p className="text-[14px] text-[#78756F] leading-[1.6]">
          Ecomama Farms LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your
          privacy and is committed to protecting the personal information you share with us through
          our website, inquiry forms, and newsletter signups.
        </p>
        <div className="pt-4 border-t border-[#D9D4CC] text-[14px] text-[#3E3E3E] space-y-1">
          <div>
            <strong>Address:</strong> 2550 Calzada Ave, Santa Ynez, CA 93460
          </div>
          <div>
            <strong>Phone:</strong>{' '}
            <a href="tel:+18058941477" className="underline">
              {mode === 'original' ? '805-350-0073 (Original Live Site Value)' : '(805) 894-1477'}
            </a>
          </div>
          <div>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@ecomamafarms.com" className="underline">
              info@ecomamafarms.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
