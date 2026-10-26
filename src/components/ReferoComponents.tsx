import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export interface ReferoHeroFrameProps {
  image: string;
  imageAlt: string;
  eyebrowLeft?: string;
  headlineLeft: React.ReactNode;
  statementRight: string;
  subcaptionRight?: string;
  primaryAction?: { label: string; to: string };
  secondaryAction?: { label: string; to: string };
  fullHeight?: boolean;
  botanicalIllustration?: string;
}

/* ============================================================================
   1. ORGANIC REFERO HERO (Refero 21b71be3-78a0-4681-a5b9-64cc4b40eb67)
      "Warm apothecary journal on parchment":
      - Surfaces: Level 0 Parchment (#FEF9EF), Level 3 Terracotta Seal (#8E5D30)
      - Typography: Sorts Mill Goudy Roman + Italic Display Rhythm,
                    Kumbh Sans body with tight -0.023em tracking
      - Controls: 40px radius pill CTA buttons
      - Photography: Full-bleed unshaded upper half, soft bottom-half gradient
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
        fullHeight ? 'min-h-screen' : 'min-h-[45vh]'
      } rounded-none overflow-hidden flex flex-col justify-between bg-[#0E2725] text-[#FEF9EF] select-none`}
    >
      {/* Full-Bleed Photograph — Completely Unshaded Across the Upper & Middle Canvas */}
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Feather-light top-edge whisper ONLY behind the top navigation bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 hero-top-nav-whisper" />

      {/* Soft Bottom-Half Organic Gradient — Shades ONLY the bottom ~56% behind the hero text */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] hero-bottom-shade" />

      {/* Top Spacer for Transparent Navigation Bar */}
      <div className="h-28 md:h-36 relative z-10" />

      {/* Opposite Viewport Edges Split Headline (Left + Right Compositional Tension) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-12 md:pb-16 flex-1 flex flex-col justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Edge Display Statement with Signature Roman + Italic Typography */}
          <div className="lg:col-span-7">
            {eyebrowLeft && (
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-[9999px] bg-[#0E2725]/60 backdrop-blur-[4px] border border-[#D2CCBE]/45 text-[#FEF9EF] mb-6">
                <img
                  src={botanicalIllustration}
                  alt=""
                  className="w-5 h-5 object-contain opacity-95"
                />
                <span
                  className="text-[13px] font-medium tracking-[-0.023em] uppercase text-[#8E5D30] bg-[#FEF9EF] px-2 py-0.5 rounded-full"
                  style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                >
                  EST. 2019
                </span>
                <span
                  className="italic tracking-[0.01em] text-[#FEF9EF]/95"
                  style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif", fontSize: '15px' }}
                >
                  {eyebrowLeft}
                </span>
              </div>
            )}
            <h1
              className="headline-dual text-[#FEF9EF] font-normal drop-shadow-[0_2px_24px_rgba(14,39,37,0.55)]"
              style={{
                fontFamily: "'Sorts Mill Goudy', Georgia, serif",
                fontSize: 'clamp(2.85rem, 5.2vw, 4.65rem)',
                lineHeight: 1.03,
                letterSpacing: '-0.012em',
                color: '#FEF9EF'
              }}
            >
              {headlineLeft}
            </h1>
          </div>

          {/* Right Edge Counter-Statement & 40px Pill Actions per Refero 21b71be3 */}
          <div className="lg:col-span-5 lg:pl-8 flex flex-col justify-end items-start lg:items-end lg:text-right">
            <p
              className="headline-dual text-[#FEF9EF] font-normal max-w-md mb-5 drop-shadow-[0_2px_14px_rgba(14,39,37,0.4)]"
              style={{
                fontFamily: "'Sorts Mill Goudy', Georgia, serif",
                fontSize: 'clamp(1.45rem, 2.1vw, 2.05rem)',
                lineHeight: 1.22,
                letterSpacing: '-0.008em'
              }}
            >
              {statementRight}
            </p>
            {subcaptionRight && (
              <p
                className="text-[15px] leading-[1.65] text-[#D2CCBE] max-w-sm mb-7 font-light tracking-[-0.023em]"
                style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
              >
                {subcaptionRight}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4">
              {primaryAction && (
                <Link
                  to={primaryAction.to}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[40px] bg-[#8E5D30] hover:bg-[#8E5D30] text-[#FEF9EF] text-[15px] font-semibold tracking-[-0.023em] shadow-sm transition-all"
                  style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                >
                  <span>{primaryAction.label}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[1.75]" />
                </Link>
              )}
              {secondaryAction && (
                <Link
                  to={secondaryAction.to}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[40px] border-[1.5px] border-[#D2CCBE]/70 hover:border-[#8E5D30] text-[#FEF9EF] hover:bg-[#8E5D30]/15 text-[14.5px] font-medium tracking-[-0.023em] transition-all"
                  style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
                >
                  <span>{secondaryAction.label}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[1.75]" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Soft Botanical Footnote & Scroll Indicator */}
        <div className="mt-10 pt-5 border-t border-[#D2CCBE]/25 flex flex-wrap items-center justify-between gap-4 text-[13.5px] text-[#D2CCBE]">
          <div className="flex items-center gap-3">
            <span
              className="uppercase text-[11px] tracking-[0.24em] text-[#8E5D30] bg-[#FEF9EF]/10 px-2.5 py-0.5 rounded-full"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              SANTA YNEZ VALLEY · CA
            </span>
            <span className="text-[#D2CCBE]/40">·</span>
            <span
              className="italic text-[16px] text-[#FEF9EF]/90"
              style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
            >
              Living biodynamic soils, hand-tended heirloom roses &amp; unhurried celebrations
            </span>
          </div>
          <a
            href="#content-start"
            className="inline-flex items-center gap-2.5 text-[#FEF9EF] hover:text-[#8E5D30] transition-colors"
          >
            <span
              className="italic text-[15.5px]"
              style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
            >
              Wander the grounds
            </span>
            <span className="w-7 h-7 rounded-[40px] border border-[#D2CCBE]/45 inline-flex items-center justify-center bg-[#0E2725]/40">
              <ArrowDown className="w-3.5 h-3.5 stroke-[1.5]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

/* ============================================================================
   2. NUMBERED STEP CARD (Refero 21b71be3 Spec)
      Role: Feature steps ('01', '02', '03')
      Aged Paper (#F5EEE1) background, 24px border-radius, 40px padding, no harsh shadow.
      Step number in Terracotta (#8E5D30) at 14px 600 weight.
      Title in Sorts Mill Goudy roman + italic pairing.
============================================================================ */
export interface ApothecaryStepCardProps {
  step: string;
  category?: string;
  titleRoman: string;
  titleItalic: string;
  body: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
  link?: { label: string; to: string };
  badge?: string;
}

export const ApothecaryStepCard: React.FC<ApothecaryStepCardProps> = ({
  step,
  category,
  titleRoman,
  titleItalic,
  body,
  image,
  imageAlt,
  tags,
  link,
  badge
}) => {
  return (
    <div className="step-card group relative">
      <div className="space-y-4">
        {/* Step Number & Category Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#D2CCBE]/60">
          <div className="flex items-center gap-2.5">
            <span
              className="text-[14px] font-semibold text-[#8E5D30] tracking-[-0.023em]"
              style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
            >
              {step}
            </span>
            {category && (
              <>
                <span className="text-[#8E5D30]">·</span>
                <span
                  className="text-[11.5px] uppercase tracking-[0.18em] text-[#0E2725]/70"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {category}
                </span>
              </>
            )}
          </div>
          {badge && (
            <span className="px-2.5 py-0.5 rounded-[9999px] bg-[#FEF9EF] border border-[#D2CCBE] text-[11px] font-medium text-[#0E2725]/80 tracking-[-0.023em]">
              {badge}
            </span>
          )}
        </div>

        {/* Display Title with Roman + Italic Signature Pairing */}
        <h3
          className="headline-dual text-[#0E2725] text-[28px] md:text-[32px] leading-[1.12]"
          style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
        >
          <span>{titleRoman} </span>
          <em className="italic font-light text-[#8E5D30]">{titleItalic}</em>
        </h3>

        {/* Body Text in Kumbh Sans with tight -0.023em tracking */}
        <p
          className="text-[15.5px] text-[#333333] leading-[1.65] font-light tracking-[-0.023em]"
          style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
        >
          {body}
        </p>

        {/* Optional Micro-Image or UI preview with 24px radius */}
        {image && (
          <div className="rounded-[20px] overflow-hidden aspect-[16/10] bg-[#FEF9EF] border border-[#D2CCBE]/70 my-3">
            <img
              src={image}
              alt={imageAlt || titleRoman}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}

        {/* Optional Tag List */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-2">
            {tags.map((t, idx) => (
              <React.Fragment key={t}>
                {idx > 0 && <span className="text-[#8E5D30] text-[12px]">·</span>}
                <span className="text-[13px] text-[#4E5852] font-normal tracking-[-0.023em]">
                  {t}
                </span>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Action Footer */}
      {link && (
        <div className="pt-6 mt-6 border-t border-[#D2CCBE]/50 flex items-center justify-between">
          <Link
            to={link.to}
            className="refero-ghost-link text-[14.5px] font-medium text-[#0E2725] group-hover:text-[#8E5D30]"
          >
            <span>{link.label}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
};

/* ============================================================================
   3. BOTANICAL OFFERING TAG LIST (Refero 21b71be3 Spec)
      Role: Inline items separated by a terracotta bullet '·' with 16px horizontal spacing
============================================================================ */
export const BotanicalTagList: React.FC<{
  items: string[];
  className?: string;
}> = ({ items, className = '' }) => {
  return (
    <div
      className={`flex flex-wrap items-center gap-y-2.5 gap-x-4 ${className}`}
      style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
    >
      {items.map((item, i) => (
        <React.Fragment key={item}>
          {i > 0 && (
            <span className="text-[#8E5D30] font-semibold select-none text-[13px]">·</span>
          )}
          <span className="text-[14.5px] text-[#333333] tracking-[-0.023em] font-normal">
            {item}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

/* ============================================================================
   4. ESTATE METRIC / STAT GRID (Refero 21b71be3 Spec)
      Role: Large metric in Sorts Mill Goudy (36-45px), sub-label in Kumbh Sans 14px,
            separated by 1px vertical Warm Taupe divider.
============================================================================ */
export interface StatItem {
  val: string;
  lbl: string;
  notes?: string;
}

export const EstateStatGrid: React.FC<{
  stats: StatItem[];
  className?: string;
  dark?: boolean;
}> = ({ stats, className = '', dark = false }) => {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 rounded-[24px] p-6 md:p-8 border ${
        dark
          ? 'bg-[#0E2725] border-[#8E5D30]/40 text-[#FEF9EF]'
          : 'bg-[#F5EEE1] border-[#D2CCBE] text-[#0E2725]'
      } ${className}`}
    >
      {stats.map((s, idx) => (
        <div
          key={s.lbl}
          className={`flex flex-col justify-center px-4 md:px-6 py-2 ${
            idx < stats.length - 1 ? 'md:border-r border-[#D2CCBE]/70' : ''
          }`}
        >
          <div
            className={`text-[36px] md:text-[44px] leading-tight font-normal ${
              dark ? 'text-[#FEF9EF]' : 'text-[#8E5D30]'
            }`}
            style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
          >
            {s.val}
          </div>
          <div
            className={`text-[14px] font-medium tracking-[-0.023em] mt-1 ${
              dark ? 'text-[#D2CCBE]' : 'text-[#333333]'
            }`}
            style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
          >
            {s.lbl}
          </div>
          {s.notes && (
            <div
              className={`text-[12px] font-light mt-0.5 ${
                dark ? 'text-[#D2CCBE]/70' : 'text-[#7A7467]'
              }`}
            >
              {s.notes}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

/* ============================================================================
   5. FOUNDER / EDITORIAL TESTIMONIAL ROW (Refero 21b71be3 Spec)
      Role: Social proof without heavy card chrome, sitting directly on parchment canvas.
      Circular seal/avatar 48-56px, quote in 20-24px italic serif, attribution + credentials.
============================================================================ */
export const EditorialTestimonialRow: React.FC<{
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  illustration?: string;
  stamp?: string;
}> = ({
  quote,
  author,
  role,
  avatar = '/images/03-james-and-jess-at-ecomama-farms.jpg',
  illustration = '/images/brandkit/illustration-09.png',
  stamp = 'HEIRLOOM ROSE SANCTUARY'
}) => {
  return (
    <div className="py-12 px-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
      {/* 52px Circular Stamped Avatar */}
      <div className="relative shrink-0">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#8E5D30]/60 p-0.5 bg-[#F5EEE1]">
          <img src={avatar} alt={author} className="w-full h-full object-cover rounded-full" />
        </div>
        <img
          src={illustration}
          alt=""
          className="w-6 h-6 object-contain absolute -bottom-1 -right-1 drop-shadow-sm"
        />
      </div>

      <div className="space-y-3 text-center md:text-left">
        {stamp && (
          <div
            className="text-[11px] uppercase tracking-[0.22em] text-[#8E5D30] font-semibold"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {stamp}
          </div>
        )}
        <p
          className="text-[21px] md:text-[23px] text-[#0E2725] italic leading-[1.38]"
          style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
        >
          “{quote}”
        </p>
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 justify-center md:justify-start">
          <span
            className="text-[15px] font-semibold text-[#0E2725] tracking-[-0.023em]"
            style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
          >
            {author}
          </span>
          <span className="hidden sm:inline text-[#D2CCBE]">·</span>
          <span
            className="text-[14px] text-[#515151] font-light tracking-[-0.023em]"
            style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
          >
            {role}
          </span>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   6. APOTHECARY & ROSE FIELDS STRIP
============================================================================ */
export interface ReferoSageStripProps {
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
    <div className="relative overflow-hidden w-full bg-[#0E2725] text-[#FEF9EF] py-6 px-6 md:px-12 border-y border-[#8E5D30]/35">
      {/* Subtle watermark pressed rose from Brand Kit */}
      <img
        src="/images/brandkit/illustration-08.png"
        alt=""
        className="pointer-events-none select-none absolute right-8 -bottom-6 w-28 h-28 object-contain opacity-15 rotate-12"
      />
      <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#D2CCBE]/12 border border-[#8E5D30]/45 flex items-center justify-center shrink-0 p-1.5">
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
              className="text-[14.5px] text-[#FEF9EF]/95 font-light leading-relaxed tracking-[-0.023em]"
              style={{ fontFamily: "'Kumbh Sans', sans-serif" }}
            >
              {statement}
            </p>
          </div>
        </div>
        {rightLink ? (
          <Link
            to={rightLink.to}
            className="inline-flex items-center gap-1.5 text-[13.5px] text-[#D2CCBE] hover:text-[#8E5D30] border-b border-[#8E5D30]/65 hover:border-[#8E5D30] pb-0.5 self-start md:self-auto shrink-0 transition-colors"
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
   7. BRAND KIT BOTANICAL SPECIMEN SEAL / DIVIDER
============================================================================ */
export const BrandKitBotanicalSeal: React.FC<{
  illustration?: string;
  stamp?: string;
  quote?: string;
}> = ({
  illustration = '/images/brandkit/illustration-09.png',
  stamp = 'H E I R L O O M   R O S E   F A R M   &   A T E L I E R',
  quote = 'Grown in living biodynamic soil, gathered by hand at first light, and arranged in seasonal arrangements.'
}) => {
  return (
    <div className="py-12 px-6 flex flex-col items-center text-center max-w-2xl mx-auto">
      <img
        src={illustration}
        alt="Botanical Rose Specimen"
        className="w-20 h-24 object-contain mb-3 drop-shadow-[0_4px_10px_rgba(14,39,37,0.08)]"
      />
      <div
        className="text-[11px] uppercase tracking-[0.28em] text-[#8E5D30] mb-2 font-medium"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {stamp}
      </div>
      <p
        className="italic text-[19px] md:text-[22px] text-[#0E2725]/85 leading-relaxed"
        style={{ fontFamily: "'Sorts Mill Goudy', Georgia, serif" }}
      >
        “{quote}”
      </p>
    </div>
  );
};

/* ============================================================================
   8. ORIGINAL REFERO (Lightship fdcd4cbb) HERO & SAGE STRIP
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
        fullHeight ? 'min-h-screen' : 'min-h-[45vh]'
      } rounded-none overflow-hidden flex flex-col justify-between bg-[#252A26] text-white select-none`}
    >
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.01]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 hero-top-nav-whisper" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[56%] hero-bottom-shade" />

      <div className="h-28 md:h-36 relative z-10" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-12 md:pb-16 flex-1 flex flex-col justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
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
