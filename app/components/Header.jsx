import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

export const NAV = [
  { to: "/services/", label: "Services" },
  { to: "/portfolio/", label: "Our Work" },
  { to: "/about-broadstreet-consulting-camden-scs-trusted-digital-marketing-partner/", label: "About" },
  { to: "/what-our-clients-are-saying/", label: "Reviews" },
  { to: "/blogs/", label: "Blog" },
  { to: "/contact/", label: "Contact" },
];

// Items in the Services dropdown. The "Services" link itself goes to the landing page.
export const SERVICE_MENU = [
  { to: "/services/get-found/", label: "Get Found", text: "SEO, Google Business Profile & Google Ads", c: "var(--g-blue)" },
  { to: "/services/websites/", label: "Websites", text: "Website design & online stores", c: "var(--g-red)" },
  { to: "/services/stay-connected/", label: "Stay Connected", text: "Social media, email & video", c: "var(--g-yellow)" },
  { to: "/services/grow/", label: "Grow", text: "Monthly support & lead generation", c: "var(--g-green)" },
  { to: "/services/web-mobile-app-development/", label: "App Development", text: "Mobile apps, web apps & portals", c: "var(--g-blue)", isNew: true },
  { to: "/services/bridges-crm/", label: "Bridges CRM", text: "One inbox & automatic follow-up", c: "var(--g-red)", isNew: true },
  { to: "/services/#web-success", label: "Web Success", text: "Free videos & guides, no sign-up", c: "var(--g-green)" },
];

function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const btnRef = useRef(null);
  const { pathname, hash } = useLocation();

  useEffect(() => setOpen(false), [pathname, hash]);

  // Close on Escape or a click outside.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    const onClick = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    // Hover opens the panel in CSS; the button opens it for clicks, taps and the keyboard.
    <div className={`nav-dd${open ? " open" : ""}`} ref={wrapRef} onMouseLeave={() => setOpen(false)}>
      <NavLink to="/services/" className="nav-dd-link">Services</NavLink>
      <button
        ref={btnRef}
        type="button"
        className="nav-dd-toggle"
        aria-expanded={open}
        aria-controls="services-menu"
        aria-label="Show services"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
      </button>
      <div className="nav-dd-panel" id="services-menu">
        <ul>
          {SERVICE_MENU.map((s) => (
            <li key={s.to}>
              <Link to={s.to} style={{ "--c": s.c }}>
                <b>
                  {s.label}
                  {s.isNew && <span className="new">New</span>}
                </b>
                <span>{s.text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link className="nav-dd-all" to="/services/">View all services →</Link>
      </div>
    </div>
  );
}

export function GoogleWord() {
  return (
    <span className="g">
      <span>G</span><span>o</span><span>o</span><span>g</span><span>l</span><span>e</span>
    </span>
  );
}

export function LogoMark({ light = false }) {
  return light ? (
    <svg viewBox="0 0 100 80" aria-hidden="true">
      <rect width="100" height="80" fill="#fff" />
      <path d="M18 0C46 14 60 44 58 80H70C72 44 54 14 26 0Z" fill="#DCE4EE" />
    </svg>
  ) : (
    <svg viewBox="0 0 100 80" aria-hidden="true">
      <rect width="100" height="80" fill="#0B3561" />
      <path d="M0 0H18C46 14 60 44 58 80H0Z" fill="#1A66A8" />
      <path d="M18 0C46 14 60 44 58 80H70C72 44 54 14 26 0Z" fill="#fff" />
      <rect width="100" height="80" fill="none" stroke="#1F3D66" strokeWidth="2" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const { pathname } = useLocation();

  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [pathname]);

  // Escape closes the menu and returns focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a className="skip" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <div className="wrap nav-row">
          <Link className="brand" to="/" aria-label="Broadstreet.net home">
            <img
              className="brand-logo"
              src="/assets/media/broadstreet-logo-white.webp"
              alt="Broadstreet.net — Your Local Google Partner"
              width="2000"
              height="335"
              fetchPriority="high"
            />
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            <ServicesDropdown />
            {NAV.slice(1).map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <a className="call" href="tel:+18035750564">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 3h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 5a2 2 0 012-2z" fill="currentColor" />
            </svg>
            <span>(803) 575-0564</span>
          </a>
          <button
            ref={toggleRef}
            className="menu-toggle"
            aria-controls="mobile-nav"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className={`mobile-nav${open ? " open" : ""}`} id="mobile-nav" aria-label="Mobile navigation">
          <div className="wrap">
            <details className="mobile-services">
              <summary>Services</summary>
              <Link to="/services/">All services</Link>
              {SERVICE_MENU.map((s) => (
                <Link key={s.to} to={s.to} style={{ "--c": s.c }}>
                  {s.label}
                </Link>
              ))}
            </details>
            {NAV.slice(1).map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
            <Link to="/#areas">Service Areas</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
