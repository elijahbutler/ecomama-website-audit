import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
export type DesignMode = "organic" | "refero" | "original";
import { SiteNavigation } from "./SiteNavigation";
export function Layout({
  mode,
  setMode,
  children,
}: {
  mode: DesignMode;
  setMode: (mode: DesignMode) => void;
  children: ReactNode;
}) {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const [review] = useState(
    () => new URLSearchParams(window.location.search).get("review") === "1",
  );
  useEffect(() => {
    setMenu(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);
  return (
    <div className={`journal-site mode-${mode}`}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="journal-header">
        <Link to="/" className="farm-wordmark" aria-label="Ecomama Farms home">
          <img
            src="/images/01-ecomama-logo-white-2x.png"
            width="150"
            height="62"
            alt="Ecomama Farms"
          />
        </Link>
        <nav aria-label="Main navigation" className="desktop-navigation">
          <SiteNavigation />
        </nav>
        <Link className="journal-button header-inquiry" to="/contact">
          Contact & Inquire
        </Link>
        <button
          className="mobile-menu-button"
          aria-label={menu ? "Close navigation" : "Open navigation"}
          aria-expanded={menu}
          aria-controls="mobile-navigation"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      {menu && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mobile-navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setMenu(false);
              document
                .querySelector<HTMLButtonElement>(".mobile-menu-button")
                ?.focus();
            }
          }}
        >
          <SiteNavigation mobile onNavigate={() => setMenu(false)} />
          <Link to="/contact" onClick={() => setMenu(false)}>Contact &amp; Inquire</Link>
        </nav>
      )}
      {review && (
        <aside className="review-controls" aria-label="Design review controls">
          <span>Design comparison</span>
          {(["organic", "refero", "original"] satisfies DesignMode[]).map(
            (value) => (
              <button
                key={value}
                aria-pressed={mode === value}
                onClick={() => setMode(value)}
              >
                {value === "organic"
                  ? "Field journal"
                  : value === "refero"
                    ? "Previous design"
                    : "Original recreation"}
              </button>
            ),
          )}
          <span>Historical designs are not release acceptance evidence.</span>
        </aside>
      )}
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <footer className="journal-footer">
        <div>
          <h2>Come with a little curiosity.</h2>
          <p>Leave room for the garden.</p>
          <Link className="journal-button" to="/contact">
            Write to Ecomama
          </Link>
        </div>
        <nav aria-label="Footer navigation">
          {[
            ["The farm", "/the-farm"],
            ["Walk the estate", "/vignettes"],
            ["Gatherings", "/gatherings"],
            ["Services", "/services"],
            ["Roses", "/floral"],
            ["Living soil", "/sustainability"],
            ["Explore", "/explore"],
            ["Our story", "/our-story"],
            ["Partner with us", "/partner-with-us"],
            ["Privacy", "/privacy-policy"],
          ].map(([label, path]) => (
            <Link key={path} to={path}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="footer-bottom">
          <span>Ecomama Farms · Santa Ynez, California</span>
          <a href="mailto:contact@ecomamafarms.com">contact@ecomamafarms.com</a>
          <span>© {new Date().getFullYear()} Ecomama Farms</span>
        </div>
      </footer>
    </div>
  );
}
