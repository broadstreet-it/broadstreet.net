import { Link } from "react-router";
import EmailChooser from "./EmailChooser";

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
