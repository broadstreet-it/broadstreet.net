import { Link } from "react-router";

export function CallToAction() {
  return (
    <section className="cta">
      <div className="wrap">
        <div>
          <h2>Let’s build your next chapter.</h2>
          <p>Tell us where you want to go. We’ll help you get there.</p>
        </div>
        <Link to="/contact/" className="button">
          Schedule a free consultation
        </Link>
      </div>
    </section>
  );
}

export default function Footer() {
  const year = 2026; // keep static so prerendered HTML matches hydration
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h2>Broadstreet.</h2>
            <p>
              Digital marketing. Real relationships.
              <br />
              Over 20 years of helping businesses grow.
            </p>
            <p>
              537 E DeKalb St
              <br />
              Camden, SC 29020
            </p>
            <a href="tel:+18035750564">(803) 575-0564</a>
            <br />
            <a href="mailto:support@sliker.com">support@sliker.com</a>
          </div>
          <div>
            <h3>What we do</h3>
            <ul>
              <li><Link to="/services/mobile-friendly-website-design-development/">Website design</Link></li>
              <li><Link to="/services/search-engine-optimization-seo/">Search optimization</Link></li>
              <li><Link to="/services/google-adwords-ppc-search-engine-marketing-consulting/">Google Ads</Link></li>
              <li><Link to="/services/">All services</Link></li>
            </ul>
          </div>
          <div>
            <h3>Get to know us</h3>
            <ul>
              <li><Link to="/about-broadstreet-consulting-camden-scs-trusted-digital-marketing-partner/">Our company</Link></li>
              <li><Link to="/staff/">Our team</Link></li>
              <li><Link to="/what-our-clients-are-saying/">Client reviews</Link></li>
              <li><Link to="/camden-sc/">Camden</Link></li>
              <li><Link to="/lancaster-sc/">Lancaster</Link></li>
            </ul>
          </div>
          <div>
            <h3>Keep exploring</h3>
            <ul>
              <li><Link to="/blogs/">Insights</Link></li>
              <li><Link to="/downloads/">Downloads</Link></li>
              <li><Link to="/web-success-videos/">Web success videos</Link></li>
              <li><Link to="/search/">Search the site</Link></li>
              <li><Link to="/site-map/">All pages</Link></li>
              <li><a href="https://www.facebook.com/broadstreetconsulting">Facebook</a></li>
              <li><a href="https://www.youtube.com/user/BroadstConsulting">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Broadstreet Consulting, LLC</span>
          <span>Camden, South Carolina · Serving businesses nationwide</span>
        </div>
      </div>
    </footer>
  );
}
