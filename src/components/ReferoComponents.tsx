import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface ReferoHeroFrameProps {
  image: string;
  imageAlt: string;
  eyebrowLeft?: string;
  headlineLeft: string;
  statementRight: string;
  subcaptionRight?: string;
  primaryAction?: { label: string; to: string };
  secondaryAction?: { label: string; to: string };
  fullHeight?: boolean;
  botanicalIllustration?: string;
}

/* ============================================================================
   1. ORGANIC BRAND KIT REFERO HERO & POTTERY / ROSE FARM STRIP
      Uses Official Ecomama Farms Brand Kit:
      - Palette: #D2CCBE (Stoneware Clay), #A7713F (Terracotta Ochre),
                 #99AAAF (Coastal Slate), #0E2725 (Deep Pine), #A6A26A (Vintage Olive)
      - Fonts:   Sorts Mill Goudy (Headings & Italic Notes) + Kumbh Sans / Europa (Body)
                 + Montserrat (Spaced Apothecary Stamps)
============================================================================ */
export const ReferoHeroFrame: React.FC<ReferoHeroFrameProps> = ({
  image,
  imageAlt,
  eyebrowLeft = 'Santa Ynez Valley · Heirloom Rose Farm & Bespoke Estate',
  headlineLeft,
  statementRight,
  subcaptionRight,
  primaryAction,
  secondaryAction,
  fullHeight = true,
  botanicalIllustration = '/images/brandkit/illustration-04.png'
}) => {
  return (
    <section
      className={`relative w-full ${
        fullHeight ? 'min-h-screen' : 'min-h-[86vh]'
      } rounded-none overflow-hidden flex flex-col justify-between bg-[#0E2725] text-[#F6F2EA] select-none`}
    >
      {/* Full-Bleed Photograph — Completely Unshaded Across the Upper & Middle Canvas */}
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Feather-light top-edge whisper ONLY behind the top 110px navigation bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 hero-top-nav-whisper" />

      {/* Soft Bottom-Half Organic Gradient — Shades ONLY the bottom ~56% behind the hero text */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] hero-bottom-shade" />

      {/* Top Spacer for Transparent 3-Zone Navigation Bar */}
      <div className="h-28 md:h-36 relative z-10" />

      {/* Opposite Viewport Edges Split Headline (Left + Right Compositional Tension) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-12 md:pb-16 flex-1 flex flex-col justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Edge Display Statement */}
          <div className="lg:col-span-7">
            {eyebrowLeft && (
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-[100px] bg-[#0E2725]/55 backdrop-blur-[3px] border border-[#D2CCBE]/40 text-[#EDE8DC] mb-6">
                <img
                  src={botanicalIllustration}
                  alt=""
                  className="w-5 h-5 object-contain opacity-95"
                />
                <span
                  className="italic tracking-[0.02em]"
                  style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif", fontSize: '15.5px' }}
                >
                  {eyebrowLeft}
                </span>
              </div>
            )}
            <h1
              className="text-[#F6F2EA] font-normal drop-shadow-[0_2px_20px_rgba(14,39,37,0.45)]"
              style={{
                fontFamily: "'Sorts Mill Goudy', Georgia, serif",
                fontSize: 'clamp(2.85rem, 5.2vw, 4.55rem)',
                lineHeight: 1.03,
                letterSpacing: '-0.012em',
                color: '#F6F2EA'
              }}
            >
              {headlineLeft}
            </h1>
          </div>

          {/* Right Edge Counter-Statement & Tactile Kiln Terracotta / Linen Actions */}
          <div className="lg:col-span-5 lg:pl-8 flex flex-col justify-end items-start lg:items-end lg:text-right">
            <p
              className="text-[#EDE8DC] font-normal max-w-md mb-5 drop-shadow-[0_2px_14px_rgba(14,39,37,0.4)]"
              style={{
                fontFamily: "'Sorts Mill Goudy', Georgia, serif",
                fontSize: 'clamp(1.45rem, 2.1vw, 2.02rem)',
                lineHeight: 1.22,
                letterSpacing: '-0.008em'
              }}
            >
              {statementRight}
            </p>
            {subcaptionRight && (
              <p
                className="text-[14.5px] leading-[1.6] text-[#D2CCBE] max-w-sm mb-7 font-light"
                style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
              >
                {subcaptionRight}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-5">
              {primaryAction && (
                <Link
                  to={primaryAction.to}
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-[100px] bg-[#A7713F] hover:bg-[#8F5E31] border border-[#D2CCBE]/40 text-[#F6F2EA] text-[13.5px] tracking-[0.04em] transition-all"
                  style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                >
                  <span>{primaryAction.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
                </Link>
              )}
              {secondaryAction && (
                <Link
                  to={secondaryAction.to}
                  className="inline-flex items-center gap-1.5 text-[#F6F2EA] text-[13.5px] tracking-[0.03em] border-b border-[#D2CCBE]/60 hover:border-[#A6A26A] hover:text-[#D2CCBE] pb-0.5 transition-colors"
                  style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                >
                  <span>{secondaryAction.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Soft Botanical Footnote & Scroll Invitation */}
        <div className="mt-10 pt-5 border-t border-[#D2CCBE]/25 flex flex-wrap items-center justify-between gap-4 text-[13px] text-[#D2CCBE]">
          <div className="flex items-center gap-3">
            <span
              className="uppercase text-[10px] tracking-[0.28em] text-[#A6A26A]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              EST. SANTA YNEZ VALLEY
            </span>
            <span className="text-[#D2CCBE]/40">·</span>
            <span
              className="italic text-[15.5px] text-[#F6F2EA]/90"
              style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
            >
              Hand-tended heirloom roses, stoneware tables &amp; bespoke gatherings
            </span>
          </div>
          <a
            href="#content-start"
            className="inline-flex items-center gap-2.5 text-[#F6F2EA] hover:text-[#D2CCBE] transition-colors"
          >
            <span
              className="italic text-[15.5px]"
              style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
            >
              Wander the grounds
            </span>
            <span className="w-7 h-7 rounded-[100px] border border-[#D2CCBE]/45 inline-flex items-center justify-center bg-[#0E2725]/40">
              <ArrowDown className="w-3.5 h-3.5 stroke-[1.5]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

interface ReferoSageStripProps {
  label?: string;
  statement: string;
  rightLabel?: string;
  rightLink?: { text: string; to: string };
  illustration?: string;
}

export const ReferoSageStrip: React.FC<ReferoSageStripProps> = ({
  label = 'Apothecary & Rose Fields',
  statement,
  rightLabel,
  rightLink,
  illustration = '/images/brandkit/illustration-04.png'
}) => {
  return (
    <div className="relative overflow-hidden w-full bg-[#0E2725] text-[#EDE8DC] py-6 px-6 md:px-12 border-y border-[#A7713F]/35">
      {/* Subtle watermark pressed rose from Brand Kit */}
      <img
        src="/images/brandkit/illustration-08.png"
        alt=""
        className="pointer-events-none select-none absolute right-8 -bottom-6 w-28 h-28 object-contain opacity-15 rotate-12"
      />
      <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#D2CCBE]/12 border border-[#A7713F]/45 flex items-center justify-center shrink-0 p-1.5">
            <img
              src={illustration}
              alt="Ecomama Heirloom Rose Specimen"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
            <span
              className="italic text-[18px] text-[#A6A26A] shrink-0"
              style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
            >
              {label} —
            </span>
            <p
              className="text-[14.5px] text-[#EDE8DC]/95 font-light leading-relaxed"
              style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
            >
              {statement}
            </p>
          </div>
        </div>
        {rightLink ? (
          <Link
            to={rightLink.to}
            className="inline-flex items-center gap-1.5 text-[13.5px] text-[#D2CCBE] hover:text-[#A7713F] border-b border-[#A7713F]/65 hover:border-[#A7713F] pb-0.5 self-start md:self-auto shrink-0 transition-colors"
            style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
          >
            <span>{rightLink.text}</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
          </Link>
        ) : rightLabel ? (
          <span
            className="italic text-[16px] text-[#D2CCBE]/90 shrink-0"
            style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
          >
            {rightLabel}
          </span>
        ) : null}
      </div>
    </div>
  );
};

/* ============================================================================
   BRAND KIT BOTANICAL SPECIMEN SEAL / DIVIDER
   Showcases the hand-painted vintage rose & pottery craft feel between sections
============================================================================ */
export const BrandKitBotanicalSeal: React.FC<{
  illustration?: string;
  stamp?: string;
  quote?: string;
}> = ({
  illustration = '/images/brandkit/illustration-09.png',
  stamp = 'H E I R L O O M   R O S E   F A R M   &   A T E L I E R',
  quote = 'Grown in living biodynamic soil, gathered by hand at first light, and arranged in wheel-thrown stoneware.'
}) => {
  return (
    <div className="py-10 px-6 flex flex-col items-center text-center max-w-2xl mx-auto">
      <img
        src={illustration}
        alt="Botanical Rose Specimen"
        className="w-20 h-24 object-contain mb-3 drop-shadow-[0_4px_10px_rgba(14,39,37,0.08)]"
      />
      <div
        className="text-[10.5px] uppercase tracking-[0.28em] text-[#A7713F] mb-2"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {stamp}
      </div>
      <p
        className="italic text-[19px] md:text-[21px] text-[#0E2725]/85 leading-relaxed"
        style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
      >
        “{quote}”
      </p>
    </div>
  );
};

/* ============================================================================
   2. ORIGINAL REFERO (Lightship fdcd4cbb) HERO & SAGE STRIP
      Retains original Refero geometric typography, GPS eyebrow & tight tracking,
      enhanced with the soft bottom-half hero gradient so the upper image is unshaded.
============================================================================ */
export const OriginalReferoHeroFrame: React.FC<ReferoHeroFrameProps> = ({
  image,
  imageAlt,
  eyebrowLeft = '34.6136° N, 120.0797° W — SANTA YNEZ VALLEY',
  headlineLeft,
  statementRight,
  subcaptionRight,
  primaryAction,
  secondaryAction,
  fullHeight = true
}) => {
  return (
    <section
      className={`relative w-full ${
        fullHeight ? 'min-h-screen' : 'min-h-[86vh]'
      } rounded-none overflow-hidden flex flex-col justify-between bg-[#252A26] text-white select-none`}
    >
      {/* Full-Bleed 100vw x 100vh Photograph — Zero Border Radius per Refero Spec */}
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.01]"
      />
      {/* Soft top nav whisper + Bottom-Half Gradient ONLY (keeps upper half of photo unshaded) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 hero-top-nav-whisper" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[56%] hero-bottom-shade" />

      {/* Top Spacer for Transparent 3-Zone Navigation Bar */}
      <div className="h-28 md:h-36 relative z-10" />

      {/* Opposite Viewport Edges Split Headline (Left + Right Compositional Tension) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-12 md:pb-16 flex-1 flex flex-col justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Edge Display Statement */}
          <div className="lg:col-span-7">
            {eyebrowLeft && (
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-[100px] border border-white/35 text-[12px] tracking-[-0.03em] mb-6 text-white/90">
                <img
                  src="/images/ecomama-rose-icon.png"
                  alt=""
                  className="w-3.5 h-3.5 object-contain brightness-0 invert"
                />
                <span>{eyebrowLeft}</span>
              </div>
            )}
            <h1
              className="text-white font-normal drop-shadow-[0_2px_18px_rgba(0,0,0,0.28)]"
              style={{
                fontFamily: "'Old Standard TT', Georgia, serif",
                fontSize: 'clamp(2.85rem, 5.4vw, 4.65rem)',
                lineHeight: 0.98,
                letterSpacing: '-0.045em',
                color: '#FFFFFF'
              }}
            >
              {headlineLeft}
            </h1>
          </div>

          {/* Right Edge Counter-Statement & Ghost Text Actions */}
          <div className="lg:col-span-5 lg:pl-8 flex flex-col justify-end items-start lg:items-end lg:text-right">
            <p
              className="text-white/95 font-normal max-w-md mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
              style={{
                fontFamily: "'Old Standard TT', Georgia, serif",
                fontSize: 'clamp(1.5rem, 2.2vw, 2.125rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em'
              }}
            >
              {statementRight}
            </p>
            {subcaptionRight && (
              <p className="text-[14px] leading-[1.35] tracking-[-0.025em] text-white/80 max-w-sm mb-7 font-light">
                {subcaptionRight}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-6">
              {primaryAction && (
                <Link
                  to={primaryAction.to}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[100px] border border-white/80 text-white text-[14px] tracking-[-0.03em] hover:bg-white hover:text-[#3E3E3E] transition-colors"
                >
                  <span>{primaryAction.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
                </Link>
              )}
              {secondaryAction && (
                <Link
                  to={secondaryAction.to}
                  className="inline-flex items-center gap-1.5 text-white text-[14px] tracking-[-0.03em] border-b border-white/40 hover:border-white pb-0.5 transition-colors"
                >
                  <span>{secondaryAction.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Hairline Bottom Rule & Scroll Indicator */}
        <div className="mt-10 pt-5 border-t border-white/25 flex items-center justify-between text-[12px] tracking-[-0.03em] text-white/80">
          <span>2550 Calzada Ave · Santa Ynez, California</span>
          <a
            href="#content-start"
            className="inline-flex items-center gap-2 text-white hover:opacity-75 transition-opacity"
          >
            <span>Scroll to explore</span>
            <span className="w-6 h-6 rounded-[100px] border border-white/40 inline-flex items-center justify-center">
              <ArrowDown className="w-3 h-3 stroke-[1.5]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export const OriginalReferoSageStrip: React.FC<ReferoSageStripProps> = ({
  label = 'Ecomama Regenerative Standard',
  statement,
  rightLabel,
  rightLink
}) => {
  return (
    <div className="w-full bg-[#78926E] text-[#F4F1EE] py-5 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <img
            src="/images/ecomama-rose-icon.png"
            alt="Ecomama Rose Emblem"
            className="w-5 h-5 object-contain brightness-0 invert opacity-90"
          />
          <span className="text-[12px] uppercase tracking-[0.14em] text-[#F4F1EE]/80">
            {label}
          </span>
          <span className="hidden md:inline text-[#F4F1EE]/40">—</span>
          <p className="text-[14px] md:text-[15px] tracking-[-0.025em] text-[#F4F1EE] font-normal">
            {statement}
          </p>
        </div>
        {rightLink ? (
          <Link
            to={rightLink.to}
            className="inline-flex items-center gap-1.5 text-[13px] tracking-[-0.02em] text-[#F4F1EE] border-b border-[#F4F1EE]/50 hover:border-[#F4F1EE] pb-0.5 self-start md:self-auto shrink-0"
          >
            <span>{rightLink.text}</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
          </Link>
        ) : rightLabel ? (
          <span className="text-[12px] tracking-[-0.02em] text-[#F4F1EE]/85 shrink-0">
            {rightLabel}
          </span>
        ) : null}
      </div>
    </div>
  );
};
