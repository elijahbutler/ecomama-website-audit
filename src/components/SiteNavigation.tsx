import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { NAVIGATION } from "../data/siteContent";

export function SiteNavigation({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const location = useLocation();
  useEffect(() => setExpanded(null), [location.pathname]);
  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setExpanded(null);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);
  return <div ref={root} className={`nav-groups ${mobile ? "nav-accordions" : "nav-dropdowns"}`} onBlur={(event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(null);
  }} onKeyDown={(event) => {
    if (event.key === "Escape" && expanded) {
      event.stopPropagation();
      root.current?.querySelector<HTMLButtonElement>(`button[aria-expanded="true"]`)?.focus();
      setExpanded(null);
    }
  }}>
    {NAVIGATION.filter(item => item.path !== "/contact").map(item => {
      const open = expanded === item.path;
      const id = `${mobile ? "mobile" : "desktop"}-${item.path.slice(1)}`;
      return item.children ? <div className="nav-group" key={item.path}>
        <button type="button" className={item.children.some(child => child.path === location.pathname) ? "nav-group-trigger current" : "nav-group-trigger"} aria-expanded={open} aria-controls={id} onClick={() => setExpanded(open ? null : item.path)}>
          {item.label}<ChevronDown size={15} aria-hidden="true" />
        </button>
        <div id={id} className="nav-submenu" hidden={!open}>
          {item.children.map(child => <NavLink key={child.path} to={child.path} onClick={() => { setExpanded(null); onNavigate?.(); }}>
            <span>{child.label}</span><small>{child.subtitle}</small>
          </NavLink>)}
        </div>
      </div> : <NavLink key={item.path} to={item.path} onClick={onNavigate}>{item.label}</NavLink>;
    })}
  </div>;
}
