import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ChevronDown,
  Instagram,
  Facebook,
  Linkedin,
  Sparkles,
  History,
  ClipboardCheck,
  X,
  AlertTriangle,
  CheckCircle2,
  ArrowUpRight,
  Menu,
  MapPin,
  Phone,
  Mail,
  Layers
} from 'lucide-react';
import { NAVIGATION, PAGE_AUDITS } from '../data/siteContent';

export type DesignMode = 'refero' | 'redesign' | 'original';

interface LayoutProps {
  mode: DesignMode;
  setMode: (m: DesignMode) => void;
  children: React.ReactNode;
}

const ROUTE_LABELS: Record<string, string> = {
  '/': 'Home',
  '/venue': 'Venue Overview',
  '/vignettes': 'Estate Vignettes',
  '/services': 'Services & Packages',
  '/the-farm': 'The Farm',
  '/gatherings': 'Gatherings',
  '/floral': 'Event Floral',
  '/explore': 'Explore & Press',
  '/local-recommendations': 'Local Recommendations',
  '/about': 'About Us',
  '/our-story': 'Our Story',
  '/sustainability': 'Sustainability',
  '/contact': 'Contact Us',
  '/partner-with-us': 'Partner With Us',
  '/privacy-policy': 'Privacy Policy'
};

export const Layout: React.FC<LayoutProps> = ({ mode, setMode, children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const currentPath = location.pathname === '/home' ? '/' : location.pathname;
  const currentAudit = PAGE_AUDITS[currentPath] || PAGE_AUDITS['/'];
  const currentTitle = ROUTE_LABELS[currentPath] || 'Ecomama Farms';
  const allRouteEntries = Object.keys(PAGE_AUDITS);

  // Smooth scroll progress (0 at top -> 1 at 220px scroll)
  const scrollProgress = Math.min(1, Math.max(0, scrollY / 220));
  const isLightTopPage = currentPath === '/privacy-policy';
  const useDarkNavText = isLightTopPage || scrollProgress > 0.35;

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        mode === 'refero'
          ? 'refero-system bg-[#F4F1EE] text-[#3E3E3E]'
          : mode === 'original'
          ? 'bg-[#F4F1EE] text-[#3E3E3E] font-sans'
          : 'bg-[#F6F3EE] text-[#252A26] font-jakarta'
      }`}
    >
      {/* =====================================================================
          STUDIO INSPECTOR BAR / FLOATING PILL DOCK
          In Refero mode, sits as a compact pill dock at bottom-left so top-0
          belongs 100% to the transparent 3-zone Refero menu bar & rose animation.
      ====================================================================== */}
      <div
        className={
          mode === 'refero'
            ? 'fixed bottom-5 left-5 z-50 flex flex-wrap items-center gap-2 bg-[#3E3E3E]/95 backdrop-blur-md text-[#F4F1EE] px-3.5 py-2 rounded-[100px] border border-white/15'
            : 'sticky top-0 z-50 bg-[#1B1F1C] text-[#F6F3EE] border-b border-white/10 px-4 py-2 text-xs'
        }
      >
        <div
          className={
            mode === 'refero'
              ? 'flex flex-wrap items-center gap-2 text-[11px]'
              : 'max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 w-full'
          }
        >
          {/* Mode Switcher Pills */}
          <div className="flex items-center bg-black/40 p-0.5 rounded-[100px] border border-white/10">
            <button
              onClick={() => setMode('refero')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-[100px] font-medium transition-all text-[11px] ${
                mode === 'refero'
                  ? 'bg-[#78926E] text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Organic Refero</span>
            </button>
            <button
              onClick={() => setMode('redesign')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-[100px] font-medium transition-all text-[11px] ${
                mode === 'redesign'
                  ? 'bg-[#4E6745] text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>2026 Editorial</span>
            </button>
            <button
              onClick={() => setMode('original')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-[100px] font-medium transition-all text-[11px] ${
                mode === 'original'
                  ? 'bg-[#78926E] text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <History className="w-3 h-3" />
              <span>1:1 Original</span>
            </button>
          </div>

          {/* 14-Page Route Selector */}
          <div className="flex items-center gap-1.5">
            <select
              aria-label="Jump to page"
              value={currentPath}
              onChange={(e) => navigate(e.target.value)}
              className="bg-black/40 text-white border border-white/15 rounded-[100px] px-3 py-1 text-[11px] focus:outline-none focus:border-[#78926E]"
            >
              {allRouteEntries.map((pathKey) => (
                <option key={pathKey} value={pathKey} className="bg-[#252A26] text-white">
                  {ROUTE_LABELS[pathKey] || pathKey} ({pathKey})
                </option>
              ))}
            </select>

            <button
              onClick={() => setAuditOpen(!auditOpen)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-[100px] font-medium transition-all border text-[11px] ${
                auditOpen
                  ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                  : 'bg-white/10 border-white/15 text-white hover:bg-white/15'
              }`}
            >
              <ClipboardCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Audit ({currentAudit.issues.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          SLIDE-OUT PAGE AUDIT DRAWER
      ====================================================================== */}
      {auditOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
          <div className="w-full max-w-xl bg-[#1E2320] text-[#F4F1EE] h-full overflow-y-auto p-6 md:p-8 border-l border-white/10">
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A3B899] font-semibold">
                  Live Page Audit &amp; Organic Refero Notes
                </span>
                <h2 className="text-2xl font-serif mt-1 text-white">
                  {currentTitle}{' '}
                  <code className="text-sm text-white/50 font-mono">{currentPath}</code>
                </h2>
              </div>
              <button
                onClick={() => setAuditOpen(false)}
                className="p-2 rounded-[100px] bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-[20px] p-4">
                  <div className="text-xs uppercase tracking-wider text-white/50">
                    Original Live Score
                  </div>
                  <div className="text-3xl font-serif text-amber-300 mt-1">
                    {currentAudit.scoreOriginal}/100
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-[20px] p-4">
                  <div className="text-xs uppercase tracking-wider text-white/50">
                    Re-Design Score
                  </div>
                  <div className="text-3xl font-serif text-[#A3B899] mt-1">
                    {currentAudit.scoreRedesign}/100
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.18em] text-amber-300 font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Issues Identified on Live Site ({currentAudit.issues.length})</span>
                </h3>
                <div className="space-y-3">
                  {currentAudit.issues.map((issue) => (
                    <div
                      key={issue.id}
                      className="bg-white/5 border border-white/10 rounded-[20px] p-4 space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-sm text-white">{issue.title}</span>
                        <span
                          className={`text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-[100px] font-semibold ${
                            issue.severity === 'critical'
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                              : issue.severity === 'warning'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                              : 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                          }`}
                        >
                          {issue.category} • {issue.severity}
                        </span>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {issue.originalProblem}
                      </p>
                      <div className="pt-1.5 text-xs text-[#A3B899] flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>
                          <strong>Fix Applied:</strong> {issue.redesignFix}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MAIN NAVIGATION BAR
          - In Refero mode: Implements the 3-zone layout + the custom
            Ecomama Rose Icon scroll animation starting to the left of the
            Ecomama logo at top-of-page, then floating smoothly toward the center
            as the user scrolls down!
      ====================================================================== */}
      {mode === 'refero' ? (
        <>
          <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
            <div
              className="mx-auto transition-all duration-300 ease-out px-4 md:px-8"
              style={{
                maxWidth: `${1440 - scrollProgress * 440}px`,
                paddingTop: `${22 - scrollProgress * 10}px`
              }}
            >
              <nav
                aria-label="Primary Navigation"
                className={`pointer-events-auto relative flex items-center justify-between transition-all duration-300 rounded-[100px] ${
                  scrollProgress > 0.15
                    ? 'bg-[#FAF8F4]/95 backdrop-blur-md border border-[#78926E]/30 px-4 md:px-6 py-2.5 text-[#3E3E3E]'
                    : useDarkNavText
                    ? 'bg-transparent border border-transparent px-2 py-2 text-[#3E3E3E]'
                    : 'bg-transparent border border-transparent px-2 py-2 text-white'
                }`}
              >
                {/* ZONE 1: Left Cluster (Pill Hamburger Trigger + Left Nav Links) */}
                <div className="flex items-center gap-1 md:gap-2 z-10">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle full directory menu"
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-[100px] border transition-colors ${
                      useDarkNavText
                        ? 'border-[#78926E]/35 hover:border-[#78926E] text-[#3E3E3E]'
                        : 'border-white/35 hover:border-white text-white'
                    }`}
                  >
                    {mobileMenuOpen ? (
                      <X className="w-4 h-4 stroke-[1.5]" />
                    ) : (
                      <div className="flex flex-col gap-1.5 w-4">
                        <span className="block h-[1.5px] w-full bg-current" />
                        <span className="block h-[1.5px] w-full bg-current" />
                      </div>
                    )}
                  </button>

                  <div className="hidden lg:flex items-center gap-1">
                    {[
                      { label: 'Venue', path: '/venue' },
                      { label: 'Vignettes', path: '/vignettes' },
                      { label: 'Services', path: '/services' },
                      { label: 'The Farm', path: '/the-farm' }
                    ].map((item) => {
                      const active = currentPath === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`px-3.5 py-1.5 rounded-[100px] text-[13.5px] font-light transition-all ${
                            active
                              ? useDarkNavText
                                ? 'bg-[#E9EFE6] text-[#587050] border border-[#78926E]/35'
                                : 'border border-white/80'
                              : 'border border-transparent hover:opacity-75'
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* ZONE 2: Center Brand Lockup with Ecomama Rose Icon Scroll Animation */}
                <Link
                  to="/"
                  className="relative flex items-center justify-center min-w-[220px] sm:min-w-[260px] h-11 group"
                  title="Ecomama Farms — Return Home"
                >
                  {/* Animated Ecomama Rose Icon */}
                  <div
                    className="absolute left-1/2 top-1/2 flex items-center justify-center will-change-transform"
                    style={{
                      transform: `translate3d(calc(-50% - ${
                        (1 - scrollProgress) * 108
                      }px), -50%, 0) rotate(${scrollProgress * 180}deg) scale(${
                        1 + scrollProgress * 0.08
                      })`,
                      transition: 'transform 60ms linear'
                    }}
                  >
                    <img
                      src="/images/ecomama-rose-icon.png"
                      alt="Ecomama Farms Rose Emblem"
                      className={`w-8 h-8 md:w-9 md:h-9 object-contain transition-all duration-300 ${
                        useDarkNavText ? 'brightness-0 opacity-85' : 'brightness-0 invert'
                      }`}
                    />
                  </div>

                  {/* Ecomama Wordmark / Logo (Visible at top of page, condenses as Rose Icon floats to center) */}
                  <div
                    className="flex flex-col items-center justify-center will-change-transform pl-6"
                    style={{
                      opacity: Math.max(0, 1 - scrollProgress * 1.35),
                      transform: `translate3d(${scrollProgress * 18}px, 0, 0) scale(${
                        1 - scrollProgress * 0.12
                      })`,
                      pointerEvents: scrollProgress > 0.75 ? 'none' : 'auto'
                    }}
                  >
                    <span
                      className="text-[15px] md:text-[16px] tracking-[0.34em] uppercase font-normal whitespace-nowrap"
                      style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                    >
                      ECOMAMA FARMS
                    </span>
                    <span
                      className="italic text-[11px] tracking-[0.08em] opacity-85 -mt-0.5"
                      style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                    >
                      Santa Ynez Valley
                    </span>
                  </div>
                </Link>

                {/* ZONE 3: Right Cluster (Pill Links + Organic Inquiry Action) */}
                <div className="flex items-center gap-1 md:gap-2 z-10">
                  <div className="hidden lg:flex items-center gap-1">
                    {[
                      { label: 'Floral', path: '/floral' },
                      { label: 'Gatherings', path: '/gatherings' },
                      { label: 'Explore', path: '/local-recommendations' },
                      { label: 'Our Story', path: '/our-story' }
                    ].map((item) => {
                      const active = currentPath === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`px-3.5 py-1.5 rounded-[100px] text-[13.5px] font-light transition-all ${
                            active
                              ? useDarkNavText
                                ? 'bg-[#E9EFE6] text-[#587050] border border-[#78926E]/35'
                                : 'border border-white/80'
                              : 'border border-transparent hover:opacity-75'
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setInquiryModalOpen(true)}
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-[100px] text-[13px] md:text-[13.5px] font-light border transition-colors ${
                      useDarkNavText
                        ? 'bg-[#78926E] border-[#78926E] text-[#FAF8F4] hover:bg-[#587050]'
                        : 'bg-white/15 backdrop-blur-xs border-white/60 text-white hover:bg-white hover:text-[#3E3E3E]'
                    }`}
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
                  </button>
                </div>
              </nav>
            </div>
          </header>

          {/* FULL-SCREEN ORGANIC GARDEN MENU OVERLAY (All 14 Pages) */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-30 bg-[#F4F1EE] text-[#3E3E3E] pt-28 pb-16 px-6 md:px-12 overflow-y-auto">
              <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6 border-t border-[#78926E]/25">
                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {NAVIGATION.map((group) => (
                      <div key={group.path} className="space-y-3">
                        <Link
                          to={group.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-[28px] hover:text-[#78926E] transition-colors"
                          style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                        >
                          {group.label}
                        </Link>
                        {group.children && (
                          <div className="flex flex-col gap-2 pl-0.5">
                            {group.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-[14px] font-light text-[#66625B] hover:text-[#78926E] inline-flex items-center gap-1.5"
                              >
                                <span>{child.label}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Framed 24px Linen Preview Card inside Menu */}
                  <div className="lg:col-span-4">
                    <div className="bg-[#FAF8F4] rounded-[24px] p-6 border border-[#78926E]/25">
                      <div className="rounded-[20px] overflow-hidden aspect-[16/10] mb-5">
                        <img
                          src="/images/06-dji-0676-enhanced-nr-copy.jpg"
                          alt="Ecomama Farms Estate"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex items-center gap-2 text-[#78926E] mb-2">
                        <img
                          src="/images/ecomama-rose-icon.png"
                          alt=""
                          className="w-4 h-4 object-contain"
                        />
                        <span
                          className="italic text-[16px]"
                          style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                        >
                          Private Sanctuary &amp; Rose Farm
                        </span>
                      </div>
                      <p className="text-[14px] text-[#66625B] font-light leading-[1.55] mb-4">
                        2550 Calzada Ave, Santa Ynez, CA 93460 · Private estate walks by
                        appointment.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          to="/contact"
                          onClick={() => setMobileMenuOpen(false)}
                          className="refero-pill-btn"
                        >
                          <span>Contact Our Team</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        <a
                          href="tel:+18058941477"
                          className="refero-ghost-link text-[#3E3E3E] py-2"
                        >
                          (805) 894-1477
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        /* =====================================================================
           EXISTING HEADER FOR 2026 EDITORIAL & 1:1 ORIGINAL REBUILD MODES
        ====================================================================== */
        <header
          className={
            mode === 'original'
              ? 'bg-[#F4F1EE] border-b border-black/5 py-6 px-6 md:px-12'
              : 'sticky top-[41px] z-40 bg-[#F6F3EE]/95 backdrop-blur-md border-b border-[#252A26]/10 py-4 px-6 md:px-12'
          }
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <img
                src="/images/ecomama-rose-icon.png"
                alt="Ecomama Farms Rose Emblem"
                className="h-8 w-8 object-contain opacity-85 group-hover:rotate-45 transition-transform duration-500"
              />
              <span
                className="text-lg tracking-[0.28em] uppercase"
                style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
              >
                ECOMAMA FARMS
              </span>
            </Link>

            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-8 text-sm"
            >
              {NAVIGATION.map((item) => {
                const isActive =
                  currentPath === item.path ||
                  item.children?.some((c) => c.path === currentPath);
                return (
                  <div
                    key={item.path}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1 py-2 transition-colors ${
                        mode === 'original'
                          ? 'font-sans font-light text-[15px] text-[#3E3E3E] hover:text-[#78926E]'
                          : `text-[13px] uppercase tracking-[0.16em] font-medium ${
                              isActive
                                ? 'text-[#4E6745]'
                                : 'text-[#252A26]/80 hover:text-[#4E6745]'
                            }`
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                    </Link>

                    {item.children && openDropdown === item.label && (
                      <div className="absolute left-0 top-full pt-1 w-56 z-50">
                        <div
                          className={
                            mode === 'original'
                              ? 'bg-[#F4F1EE] border border-black/10 shadow-md py-2 px-4 space-y-1.5'
                              : 'bg-white border border-[#252A26]/10 shadow-xl rounded-xs py-2.5 px-2 space-y-1'
                          }
                        >
                          {item.children.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className={
                                mode === 'original'
                                  ? 'block py-1 text-sm font-light text-[#3E3E3E] hover:text-[#78926E]'
                                  : 'block px-3 py-2 text-xs uppercase tracking-[0.14em] text-[#252A26]/80 hover:bg-[#F6F3EE] hover:text-[#4E6745] rounded-xs transition-colors'
                              }
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-3 text-[#3E3E3E]/70">
                <a
                  href="https://www.instagram.com/ecomamafarms"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ecomama Farms on Instagram"
                  className="hover:text-[#4E6745] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61559676385869"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ecomama Farms on Facebook"
                  className="hover:text-[#4E6745] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ecomama-farms"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Ecomama Farms on LinkedIn"
                  className="hover:text-[#4E6745] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              {mode === 'redesign' && (
                <button
                  onClick={() => setInquiryModalOpen(true)}
                  className="bg-[#4E6745] hover:bg-[#3D5236] text-white text-xs uppercase tracking-[0.18em] font-medium px-5 py-2.5 transition-all"
                >
                  Book a Private Tour
                </button>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#252A26]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </header>
      )}

      {/* =====================================================================
          MAIN PAGE CONTENT
      ====================================================================== */}
      <main className="flex-1">{children}</main>

      {/* =====================================================================
          GLOBAL FOOTER
      ====================================================================== */}
      {mode === 'refero' ? (
        <footer className="bg-[#F4F1EE] text-[#3E3E3E] pt-[100px] pb-24 px-6 md:px-12 border-t border-[#78926E]/25">
          <div className="max-w-[1440px] mx-auto space-y-16">
            <div className="relative overflow-hidden bg-[#FAF8F4] rounded-[24px] p-8 md:p-14 border border-[#78926E]/25 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <img
                src="/images/ecomama-rose-icon.png"
                alt=""
                className="pointer-events-none absolute -right-8 -bottom-8 w-52 h-52 object-contain opacity-[0.04]"
              />
              <div className="lg:col-span-6 space-y-3 relative z-10">
                <div className="inline-flex items-center gap-2 text-[#78926E]">
                  <img
                    src="/images/ecomama-rose-icon.png"
                    alt=""
                    className="w-4 h-4 object-contain"
                  />
                  <span
                    className="italic text-[17px]"
                    style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                  >
                    Notes from the Rose Fields
                  </span>
                </div>
                <h2
                  className="text-[34px] md:text-[46px] leading-[1.06] text-[#3E3E3E]"
                  style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                >
                  Join the Ecomama Community.
                </h2>
                <p className="text-[15px] text-[#66625B] font-light leading-relaxed">
                  Receive seasonal rose harvest notes, orchard-to-table dinner invitations, and
                  private estate availability.
                </p>
              </div>
              <div className="lg:col-span-6 relative z-10">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you for subscribing to the Ecomama Farms journal!');
                  }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    className="refero-pill-input flex-1"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-[100px] bg-[#78926E] text-[#FAF8F4] hover:bg-[#587050] text-[14px] transition-colors shrink-0"
                  >
                    Join the Garden List →
                  </button>
                </form>
                <p className="text-[12px] text-[#8C877E] mt-3 pl-4 font-light">
                  We respect your privacy and send only occasional seasonal dispatches.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-4">
              <div className="md:col-span-4 space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/ecomama-rose-icon.png"
                    alt="Ecomama Farms Rose Icon"
                    className="w-8 h-8 object-contain"
                  />
                  <span
                    className="text-[20px] tracking-[0.26em] uppercase"
                    style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                  >
                    ECOMAMA FARMS
                  </span>
                </div>
                <p className="text-[14px] text-[#66625B] leading-[1.6] font-light max-w-sm">
                  30+ acre regenerative estate, organic garden rose sanctuary, and bespoke wedding
                  venue in the heart of the Santa Ynez Valley.
                </p>
                <div className="pt-2 space-y-1 text-[14px] text-[#3E3E3E] font-light">
                  <div>2550 Calzada Ave, Santa Ynez, CA 93460</div>
                  <div className="flex items-center gap-4 pt-1">
                    <a href="tel:+18058941477" className="refero-ghost-link">
                      (805) 894-1477
                    </a>
                    <a href="mailto:events@ecomamafarms.com" className="refero-ghost-link">
                      events@ecomamafarms.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 space-y-2.5">
                <div
                  className="italic text-[17px] text-[#78926E] mb-3"
                  style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                >
                  Venue &amp; Celebrations
                </div>
                {[
                  { label: 'Venue Overview', to: '/venue' },
                  { label: 'Estate Vignettes', to: '/vignettes' },
                  { label: 'Services & Offerings', to: '/services' },
                  { label: 'Organic Event Florals', to: '/floral' },
                  { label: 'Gatherings & Workshops', to: '/gatherings' }
                ].map((l) => (
                  <div key={l.to}>
                    <Link to={l.to} className="refero-ghost-link text-[#3E3E3E]">
                      {l.label}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="md:col-span-3 space-y-2.5">
                <div
                  className="italic text-[17px] text-[#78926E] mb-3"
                  style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                >
                  The Living Sanctuary
                </div>
                {[
                  { label: 'The Farm & Animals', to: '/the-farm' },
                  { label: 'About Ecomama', to: '/about' },
                  { label: 'Our Founder Story', to: '/our-story' },
                  { label: 'Sustainability Practices', to: '/sustainability' },
                  { label: 'Santa Ynez Valley Guide', to: '/local-recommendations' }
                ].map((l) => (
                  <div key={l.to}>
                    <Link to={l.to} className="refero-ghost-link text-[#3E3E3E]">
                      {l.label}
                    </Link>
                  </div>
                ))}
              </div>

              <div className="md:col-span-2 space-y-2.5">
                <div
                  className="italic text-[17px] text-[#78926E] mb-3"
                  style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
                >
                  Connect
                </div>
                <div>
                  <Link to="/contact" className="refero-ghost-link text-[#3E3E3E]">
                    Contact Us
                  </Link>
                </div>
                <div>
                  <Link to="/partner-with-us" className="refero-ghost-link text-[#3E3E3E]">
                    Partner With Us
                  </Link>
                </div>
                <div>
                  <Link to="/privacy-policy" className="refero-ghost-link text-[#3E3E3E]">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#78926E]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-[#8C877E] font-light">
              <span>© {new Date().getFullYear()} Ecomama Farms LLC · Santa Ynez, California</span>
              <span
                className="italic text-[14px]"
                style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
              >
                Where Earth’s Beauty &amp; Memorable Gatherings Converge
              </span>
            </div>
          </div>
        </footer>
      ) : (
        <footer
          className={
            mode === 'original'
              ? 'bg-[#78926E] text-[#F4F1EE] py-16 px-6 md:px-12'
              : 'bg-[#252A26] text-[#F6F3EE] pt-20 pb-14 px-6 md:px-12 border-t border-white/10'
          }
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
              <div className="space-y-4">
                <img
                  src="/images/01-ecomama-logo-white-2x.png"
                  alt="Ecomama Farms — Santa Ynez Valley"
                  className="h-14 w-auto object-contain"
                />
                <p className="text-xs text-white/75 leading-relaxed">
                  Private Estate Wedding Venue, Regenerative Farm &amp; Organic Rose Sanctuary in
                  the Santa Ynez Valley.
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex items-start gap-2 text-white/90 font-light">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5 opacity-75" />
                  <span>2550 Calzada Ave, Santa Ynez, CA 93460</span>
                </p>
                <p className="flex items-center gap-2 text-white/90 font-light pt-1">
                  <Phone className="w-4 h-4 shrink-0 opacity-75" />
                  <a href="tel:+18058941477">(805) 894-1477</a>
                </p>
                <p className="flex items-center gap-2 text-white/90 font-light">
                  <Mail className="w-4 h-4 shrink-0 opacity-75" />
                  <a href="mailto:events@ecomamafarms.com">events@ecomamafarms.com</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      )}

      {/* =====================================================================
          PRIVATE TOUR MODAL
      ====================================================================== */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-[#FAF8F4] text-[#3E3E3E] max-w-lg w-full p-8 rounded-[24px] border border-[#78926E]/30 relative">
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-[100px] border border-[#78926E]/30 inline-flex items-center justify-center text-[#3E3E3E]/60 hover:text-[#3E3E3E]"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="inline-flex items-center gap-2 text-[#78926E] mb-2">
              <img src="/images/ecomama-rose-icon.png" alt="" className="w-4 h-4" />
              <span
                className="italic text-[16px]"
                style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
              >
                Santa Ynez Valley Hospitality
              </span>
            </div>
            <h3
              className="text-3xl text-[#3E3E3E]"
              style={{ fontFamily: "'Old Standard TT', Georgia, serif" }}
            >
              Arrange a Private Estate Walk
            </h3>
            <p className="text-sm text-[#66625B] font-light mt-2 leading-relaxed">
              Wander the rose gardens, heritage barns, and orchards with our Santa Ynez events team.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  'Your private tour request has been sent to events@ecomamafarms.com!'
                );
                setInquiryModalOpen(false);
              }}
              className="mt-6 space-y-3"
            >
              <div className="grid grid-cols-2 gap-3">
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
              <input
                type="email"
                required
                placeholder="Email Address *"
                className="refero-pill-input"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Preferred Season / Date"
                  className="refero-pill-input"
                />
                <select className="refero-pill-input">
                  <option>Wedding (up to 180 guests)</option>
                  <option>Intimate Gathering (under 60)</option>
                  <option>Retreat / Workshop</option>
                  <option>Floral / Farm Inquiry</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-[100px] bg-[#78926E] text-[#FAF8F4] hover:bg-[#587050] text-[14px] transition-colors mt-2"
              >
                Request Private Walkthrough →
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
