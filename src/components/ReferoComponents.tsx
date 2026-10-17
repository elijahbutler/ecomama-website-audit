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
}

export const ReferoHeroFrame: React.FC<ReferoHeroFrameProps> = ({
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
      {/* Subtle natural film vignette only at top & bottom edges for white typography legibility */}
      <div className="absolute inset-0 bg-black/28" />

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
              className="text-white font-normal"
              style={{
                fontFamily: "'Old Standard TT', Georgia, serif",
                fontSize: 'clamp(2.85rem, 5.4vw, 4.65rem)',
                lineHeight: 0.98,
                letterSpacing: '-0.045em'
              }}
            >
              {headlineLeft}
            </h1>
          </div>

          {/* Right Edge Counter-Statement & Ghost Text Actions */}
          <div className="lg:col-span-5 lg:pl-8 flex flex-col justify-end items-start lg:items-end lg:text-right">
            <p
              className="text-white/95 font-normal max-w-md mb-6"
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

interface ReferoSageStripProps {
  label?: string;
  statement: string;
  rightLabel?: string;
  rightLink?: { text: string; to: string };
}

export const ReferoSageStrip: React.FC<ReferoSageStripProps> = ({
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
