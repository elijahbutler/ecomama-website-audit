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
          eyebrowLeft="2550 Calzada Ave · Santa Ynez, California"
          headlineLeft="Begin Your Ecomama Conversation."
          statementRight="Arrange a private estate walkthrough, inquire about 2026–2027 celebration dates, or reserve seasonal organic garden roses."
          fullHeight={false}
        />

        <ReferoSageStrip
          label="Personal Hospitality"
          statement="Phone: (805) 894-1477 · Weddings & Gatherings: events@ecomamafarms.com · Farm & Florals: info@ecomamafarms.com"
        />

        <section id="content-start" className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FAF8F4] rounded-[24px] p-8 md:p-10 border border-[#78926E]/25 space-y-5">
                <span
                  className="italic text-[18px] text-[#78926E] block"
                  style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                >
                  Private Walkthroughs by Appointment
                </span>
                <h2 className="refero-heading-lg text-[#3E3E3E]">Visit Us in Santa Ynez</h2>
                <p className="text-[14.5px] text-[#66625B] leading-[1.65] font-light">
                  We welcome couples, wedding planners, floral designers, and retreat hosts for
                  private, unhurried walks through the rose gardens, orchards, and barns.
                </p>
                <div className="pt-4 border-t border-[#78926E]/20 space-y-2.5 text-[14px] font-light">
                  <div>
                    <strong className="font-normal">Estate Address:</strong> 2550 Calzada Ave, Santa
                    Ynez, CA 93460
                  </div>
                  <div>
                    <strong className="font-normal">Telephone:</strong>{' '}
                    <a href="tel:+18058941477" className="refero-ghost-link">
                      (805) 894-1477
                    </a>
                  </div>
                  <div>
                    <strong className="font-normal">Weddings &amp; Events:</strong>{' '}
                    <a href="mailto:events@ecomamafarms.com" className="refero-ghost-link">
                      events@ecomamafarms.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#FAF8F4] rounded-[24px] p-8 md:p-12 border border-[#78926E]/25">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#78926E] mx-auto" />
                  <h3 className="refero-heading-lg text-[#3E3E3E]">Thank You for Reaching Out</h3>
                  <p className="text-[15px] text-[#66625B] max-w-md mx-auto font-light">
                    Our Santa Ynez estate team has received your note and will be in touch within
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
                  <div className="flex items-center justify-between pb-4 border-b border-[#78926E]/20">
                    <div>
                      <span
                        className="italic text-[16px] text-[#78926E] block"
                        style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                      >
                        Share Your Vision
                      </span>
                      <h3 className="refero-heading text-[#3E3E3E]">
                        Celebration &amp; Farm Inquiry
                      </h3>
                    </div>
                    <img
                      src="/images/ecomama-rose-icon.png"
                      alt=""
                      className="w-7 h-7 object-contain opacity-65"
                    />
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
                      <option>Workshop / Private Farm Tour</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Desired Season or Date"
                      className="refero-pill-input"
                    />
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your celebration, estimated guest count, and vision..."
                    className="w-full rounded-[24px] border border-[#78926E]/30 bg-white/80 p-5 text-[14.5px] font-light text-[#3E3E3E] focus:outline-none focus:border-[#78926E]"
                  />
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-[100px] bg-[#78926E] text-[#FAF8F4] hover:bg-[#587050] text-[14px] transition-colors"
                    >
                      Send Note to Ecomama →
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
          eyebrowLeft="Planners, Florists, Chefs & Educators"
          headlineLeft="Partner With Ecomama Farms."
          statementRight="Collaborate with our Santa Ynez sanctuary on bespoke weddings, botanical workshops, orchard dinners, and restorative retreats."
          primaryAction={{ label: 'Connect With Our Team', to: '/contact' }}
          fullHeight={false}
        />

        <section
          id="content-start"
          className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              tag: 'Bespoke Celebrations',
              title: 'Wedding Planners & Designers',
              desc: 'Join our preferred planner circle for private estate previews, custom garden layouts, and full-weekend buyout access.'
            },
            {
              tag: 'Field-Grown Botanicals',
              title: 'Floral Designers & Studios',
              desc: 'Source freshly harvested, 100% organic garden roses and seasonal botanicals directly from our 2,500+ bush sanctuary.'
            },
            {
              tag: 'Seasonal Gatherings',
              title: 'Chefs, Educators & Retreat Hosts',
              desc: 'Co-host seasonal farm-to-table dinners, botanical workshops, and regenerative agriculture immersions.'
            }
          ].map((card, i) => (
            <div
              key={card.title}
              className={`bg-[#FAF8F4] rounded-[24px] p-8 border border-[#78926E]/25 space-y-4 ${
                i === 1 ? 'md:mt-10' : i === 2 ? 'md:mt-20' : ''
              }`}
            >
              <div
                className="italic text-[16px] text-[#78926E]"
                style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
              >
                {card.tag}
              </div>
              <h2 className="refero-heading text-[#3E3E3E]">{card.title}</h2>
              <p className="text-[14.5px] text-[#66625B] leading-[1.6] font-light">{card.desc}</p>
              <div>
                <Link to="/contact" className="refero-ghost-link text-[#3E3E3E]">
                  <span>Begin a collaboration</span>
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
      <div className="bg-[#FAF8F4] rounded-[24px] p-8 md:p-12 border border-[#78926E]/25 space-y-6">
        <div
          className="italic text-[17px] text-[#78926E]"
          style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
        >
          Ecomama Farms Sanctuary Stewardship
        </div>
        <h1 className="refero-heading-lg text-[#3E3E3E]">Privacy Policy</h1>
        <p className="text-[14.5px] text-[#66625B] leading-[1.65] font-light">
          Ecomama Farms LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your
          privacy and is committed to protecting the personal information you share with us through
          our website, inquiry forms, and newsletter dispatches.
        </p>
        <div className="pt-4 border-t border-[#78926E]/20 text-[14px] text-[#3E3E3E] space-y-1 font-light">
          <div>
            <strong className="font-normal">Address:</strong> 2550 Calzada Ave, Santa Ynez, CA 93460
          </div>
          <div>
            <strong className="font-normal">Phone:</strong>{' '}
            <a href="tel:+18058941477" className="underline">
              {mode === 'original' ? '805-350-0073 (Original Live Site Value)' : '(805) 894-1477'}
            </a>
          </div>
          <div>
            <strong className="font-normal">Email:</strong>{' '}
            <a href="mailto:info@ecomamafarms.com" className="underline">
              info@ecomamafarms.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
