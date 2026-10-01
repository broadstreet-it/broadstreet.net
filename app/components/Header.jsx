import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";

const NAV = [
  { to: "/services/", label: "Services" },
  { to: "/portfolio/", label: "Our work" },
  { to: "/about-broadstreet-consulting-camden-scs-trusted-digital-marketing-partner/", label: "Company" },
  { to: "/blogs/", label: "Insights" },
];

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
      <div className="topbar">
        <div className="wrap">
          <span>Rooted in South Carolina. Working wherever you are.</span>
          <a href="tel:+18035750564">Let’s talk: (803) 575-0564</a>
        </div>
      </div>
      <header className="site-header">
        <div className="wrap nav-row">
          <Link className="brand" to="/" aria-label="Broadstreet home">
            <img
              src="/assets/media/17ef7f579089c28c.png"
              alt="Broadstreet — Your Local Google Partner"
              width="245"
              height="68"
            />
          </Link>
          <button
            ref={toggleRef}
            className="menu-toggle"
            aria-controls="primary-nav"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
          <nav className={`main-nav${open ? " open" : ""}`} id="primary-nav" aria-label="Main navigation">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact/" className="button">
              Let’s talk
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
