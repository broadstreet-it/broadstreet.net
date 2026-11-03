import { Link } from "react-router";
import EmailChooser from "./EmailChooser";

const SOCIAL = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/broadstreetconsulting",
    bg: "#1877F2",
    icon: <path fill="#fff" d="M14 8h3V4h-3c-2.8 0-4.5 1.7-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V8.9c0-.6.3-.9.9-.9z" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/broadstreet-consulting/",
    bg: "#0A66C2",
    icon: <path fill="#fff" d="M5 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 10h4v11H3zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z" />,
  },
  {
    label: "Google Business Profile",
    href: "https://share.google/1NhuaGRKBP359VyvA",
    bg: "#fff",
    icon: (
      <>
        <path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z" />
        <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z" />
        <path fill="#FBBC05" d="M6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1a10 10 0 0 0 0 9.2z" />
        <path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.4L6.4 10C7.2 7.7 9.4 6 12 6z" />
      </>
    ),
  },
];

export function CallToAction() {
  return (
    <section className="cta-band" aria-label="Contact us">
      <div className="wrap cta solo">
        <div>
          <h2>
            Let’s get your <span className="c-yellow">phone ringing</span>
          </h2>
          <p>
            Book a free, no-pressure consultation. We’ll review your website and Google presence and
            show you where you can grow.
          </p>
          <div className="actions">
            <Link className="button btn-yellow" to="/contact/">
              Book a free consultation
            </Link>
            <a className="button secondary" href="tel:+18035750564">
              Call (803) 575-0564
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  const year = 2026; // keep static so prerendered HTML matches hydration
  return (
    <>
      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <Link className="brand" to="/" aria-label="Broadstreet.net home">
                <img
                  className="brand-logo"
                  src="/assets/media/broadstreet-logo-white.webp"
                  alt="Broadstreet.net — Your Local Google Partner"
                  width="2000"
                  height="335"
                  loading="lazy"
                />
              </Link>
              <address>
                <span>Broadstreet Consulting, LLC</span>
                <span>537 E DeKalb St, Camden, SC 29020</span>
                <span>PO Box 515, Camden, SC 29021</span>
                <a href="tel:+18035750564">(803) 575-0564</a>
                <EmailChooser email="support@sliker.com">support@sliker.com</EmailChooser>
              </address>
              <ul className="footer-social" aria-label="Broadstreet on social media">
                {SOCIAL.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Broadstreet on ${s.label}`} title={s.label} style={{ background: s.bg }}>
                      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">{s.icon}</svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Services</h3>
              <ul>
                <li><Link to="/services/get-found/">Get Found</Link></li>
                <li><Link to="/services/websites/">Websites</Link></li>
                <li><Link to="/services/stay-connected/">Stay Connected</Link></li>
                <li><Link to="/services/grow/">Grow</Link></li>
                <li><Link to="/services/web-mobile-app-development/">App Development</Link></li>
                <li><Link to="/services/bridges-crm/">Bridges CRM</Link></li>
                <li><Link to="/web-success/">Web Success</Link></li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                <li><Link to="/about-broadstreet-consulting-camden-scs-trusted-digital-marketing-partner/">About us</Link></li>
                <li><Link to="/staff/">Our team</Link></li>
                <li><Link to="/portfolio/">Our work</Link></li>
                <li><Link to="/what-our-clients-are-saying/">Reviews</Link></li>
                <li><Link to="/blogs/">Blog</Link></li>
                <li><Link to="/contact/">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3>Service areas</h3>
              <ul>
                <li><Link to="/camden-sc/">Camden</Link></li>
                <li><Link to="/lancaster-sc/">Lancaster</Link></li>
                <li><Link to="/web-design-columbia-sc/">Columbia</Link></li>
                <li><Link to="/web-design-sumter-sc/">Sumter</Link></li>
                <li><Link to="/web-design-charlotte-nc/">Charlotte</Link></li>
                <li><Link to="/#areas">All service areas</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {year} Broadstreet Consulting, LLC</span>
            <span>
              <a href="https://www.facebook.com/broadstreetconsulting">Facebook</a> ·{" "}
              <a href="https://www.youtube.com/user/BroadstConsulting">YouTube</a> ·{" "}
              <Link to="/site-map/">Site map</Link>
            </span>
            <span className="bar4" aria-hidden="true">
              <i style={{ background: "var(--g-blue)" }}></i>
              <i style={{ background: "var(--g-red)" }}></i>
              <i style={{ background: "var(--g-yellow)" }}></i>
              <i style={{ background: "var(--g-green)" }}></i>
            </span>
          </div>
        </div>
      </footer>
      <div className="callbar">
        <a href="tel:+18035750564">Call now</a>
        <Link to="/contact/">Free consult</Link>
      </div>
    </>
  );
}
