import { InquiryForm, WEDDING_INQUIRY_URL } from '../features/InquiryForm';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { DesignMode } from '../components/Layout';
import {
  ReferoHeroFrame,
  ReferoSageStrip,
  OriginalReferoHeroFrame,
  OriginalReferoSageStrip
} from '../components/ReferoComponents';

/* ============================================================================
   13. CONTACT PAGE (/contact)
============================================================================ */
export const ContactPage: React.FC<{ mode: DesignMode }> = () => <div className="journal-page"><header className="compact-heading"><h1>Begin a conversation</h1><p>A private gathering, a visit to the farm, or flowers for your table.</p></header><section className="wedding-inquiry-intro" aria-labelledby="wedding-inquiry-title"><div><h2 id="wedding-inquiry-title">Planning your wedding?</h2><p>Tell the Ecomama team about your date, guest count, and plans through our dedicated wedding inquiry form.</p></div><a className="journal-button" href={WEDDING_INQUIRY_URL} target="_blank" rel="noopener noreferrer">Wedding CRM Inquiry, opens a new tab</a></section><InquiryForm /></div>;

/* ============================================================================
   14. PARTNER WITH US PAGE (/partner-with-us)
============================================================================ */
export const PartnerWithUsPage: React.FC<{ mode: DesignMode }> = ({ mode }) => {
  if (mode === 'organic') {
    return (
      <div className="text-[#0E2725]">
        <ReferoHeroFrame
          image="/images/94-screenshot-2024-07-16-at-5-37-18-pm.png"
          imageAlt="Partner With Ecomama Farms"
          eyebrowLeft="Planners, Florists, Ceramicists, Chefs & Educators"
          headlineLeft={
            <>
              Partner With{' '}
              <em className="italic font-light text-[#E4DDD0]">Ecomama Farms.</em>
            </>
          }
          statementRight="Collaborate with our Santa Ynez sanctuary on bespoke weddings, private gatherings by arrangement, orchard dinners, and restorative retreats."
          primaryAction={{ label: 'Connect With Our Team', to: '/contact' }}
          botanicalIllustration="/images/brandkit/illustration-06.png"
          fullHeight={false}
        />

        <section
          id="content-start"
          className="py-[100px] px-6 md:px-12 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              stamp: 'B E S P O K E   C E L E B R A T I O N S',
              botanical: '/images/brandkit/illustration-01.png',
              title: 'Wedding Planners & Designers',
              desc: 'Join our preferred planner circle for private estate previews, custom garden layouts, and full-weekend buyout access.'
            },
            {
              stamp: 'F I E L D - G R O W N   B O T A N I C A L S',
              botanical: '/images/brandkit/illustration-04.png',
              title: 'Floral Designers & Ceramic Studios',
              desc: 'Source freshly harvested, 100% organic garden roses and collaborate on bespoke floral arrangements from our 2,500+ bush sanctuary.'
            },
            {
              stamp: 'S E A S O N A L   G A T H E R I N G S',
              botanical: '/images/brandkit/illustration-08.png',
              title: 'Chefs, Educators & Retreat Hosts',
              desc: 'Co-host seasonal farm-to-table dinners, private gatherings by arrangement, and regenerative agriculture immersions.'
            }
          ].map((card, i) => (
            <div
              key={card.title}
              className={`step-card relative overflow-hidden space-y-4 ${
                i === 1 ? 'md:mt-10' : i === 2 ? 'md:mt-20' : ''
              }`}
            >
              <img
                src={card.botanical}
                alt=""
                className="pointer-events-none absolute -right-4 -bottom-4 w-28 h-28 object-contain opacity-15"
              />
              <div className="flex items-center justify-between pb-3 border-b border-[#D2CCBE]/60">
                <span className="brandkit-stamp">{card.stamp}</span>
                <img src={card.botanical} alt="" className="w-6 h-6 object-contain" />
              </div>
              <h2 className="refero-heading text-[#0E2725]">{card.title}</h2>
              <p
                className="text-[14.5px] text-[#333333] leading-[1.65] font-light tracking-[-0.023em]"
                style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
              >
                {card.desc}
              </p>
              <div className="pt-2">
                <Link to="/contact" className="refero-ghost-link text-[#0E2725]">
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

  if (mode === 'refero') {
    return (
      <div className="bg-[#F4F1EE] text-[#3E3E3E]">
        <OriginalReferoHeroFrame
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
      <div className="step-card space-y-6">
        {mode === 'organic' ? (
          <div className="brandkit-stamp">
            E C O M A M A   F A R M S   S A N C T U A R Y   S T E W A R D S H I P
          </div>
        ) : (
          <div className="text-[12px] uppercase tracking-[0.14em] text-[#78926E]">
            Legal &amp; Privacy Notice
          </div>
        )}
        <h1 className="refero-heading-lg text-[#0E2725]">Privacy Policy</h1>
        <p
          className="text-[15px] text-[#333333] leading-[1.7] font-light tracking-[-0.023em]"
          style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
        >
          Ecomama Farms LLC (“we,” “our,” or “us”) respects your privacy and is committed to
          protecting the personal information you share with us through our website, inquiry forms,
          and newsletter dispatches.
        </p>
        <div className="pt-4 border-t border-[#D2CCBE]/70 text-[14px] text-[#0E2725] space-y-1 font-light tracking-[-0.023em]">
          <div>
            <strong className="font-semibold text-[#0E2725]">Address:</strong> 2550 Calzada Ave,
            Santa Ynez, CA 93460
          </div>
          <div>
            <strong className="font-semibold text-[#0E2725]">Phone:</strong>{' '}
            <a href="tel:+18058941477" className="underline">
              (805) 894-1477
            </a>
          </div>
          <div>
            <strong className="font-semibold text-[#0E2725]">Email:</strong>{' '}
            <a href="mailto:contact@ecomamafarms.com" className="underline">
              contact@ecomamafarms.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
