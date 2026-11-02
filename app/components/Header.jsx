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
            {NAV.map((item) => (
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
            {NAV.map((item) => (
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
