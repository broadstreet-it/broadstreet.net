import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

export const NAV = [
  { to: "/services/", label: "Services" },
  { to: "/portfolio/", label: "Our Work" },
  { to: "/about-broadstreet-consulting-camden-scs-trusted-digital-marketing-partner/", label: "About" },
  { to: "/staff/", label: "Our Team" },
  { to: "/what-our-clients-are-saying/", label: "Reviews" },
  { to: "/blogs/", label: "Blog" },
  { to: "/contact/", label: "Contact" },
];

// The Services dropdown: every service links to its own page, grouped under headings.
// The "Services" link itself goes to the landing page.
export const SERVICE_MENU = [
  {
    title: "Get Found", to: "/services/get-found/", c: "var(--g-blue)",
    items: [
      ["Search engine optimization", "/services/search-engine-optimization-seo/"],
      ["Google Business Profile", "/services/google-business-profile/"],
      ["Google Ads management", "/services/google-adwords-ppc-search-engine-marketing-consulting/"],
      ["Ranking & results reports", "/services/reporting/"],
    ],
  },
  {
    title: "Websites", to: "/services/websites/", c: "var(--g-red)",
    items: [
      ["Website design", "/services/mobile-friendly-website-design-development/"],
      ["Online stores", "/services/ecommerce-website-development/"],
      ["Drupal development", "/open-source-development-services/"],
      ["Inventory & accounting", "/services/inventory-accounting-integration/"],
      ["Logo design", "/services/logo-design/"],
      ["Content development", "/services/content-management-development/"],
    ],
  },
  {
    title: "Stay Connected", to: "/services/stay-connected/", c: "var(--gold)",
    items: [
      ["Social media marketing", "/services/social-media-marketing/"],
      ["Email marketing", "/services/email-marketing/"],
      ["Video & content", "/services/video-production/"],
      ["Social advertising", "/services/social-advertising/"],
    ],
  },
  {
    title: "Grow", to: "/services/grow/", c: "var(--g-green)",
    items: [
      ["Monthly support plans", "/services/digital-marketing-strategy-and-support/"],
      ["Lead generation", "/lead-generation-services/"],
      ["Strategy reviews & training", "/services/strategy-training/"],
      ["Hosting & support", "/services/secure-hosting-technical-support/"],
    ],
  },
  {
    title: "More", c: "var(--g-yellow)",
    items: [
      ["App development", "/services/web-mobile-app-development/", true],
      ["Bridges CRM", "/services/bridges-crm/", true],
      ["Web Success (free)", "/web-success/"],
    ],
  },
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
        <div className="nav-dd-cols">
          {SERVICE_MENU.map((g) => (
            <div className="nav-dd-col" key={g.title} style={{ "--c": g.c }}>
              {g.to ? <Link className="nav-dd-head" to={g.to}>{g.title}</Link> : <span className="nav-dd-head">{g.title}</span>}
              <ul>
                {g.items.map(([label, to, isNew]) => (
                  <li key={to}>
                    <Link to={to}>
                      {label}
                      {isNew && <span className="new">New</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
              {SERVICE_MENU.map((g) => (
                <div className="mobile-group" key={g.title} style={{ "--c": g.c }}>
                  <span className="mobile-group-head">{g.title}</span>
                  {g.items.map(([label, to]) => (
                    <Link key={to} to={to}>{label}</Link>
                  ))}
                </div>
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
