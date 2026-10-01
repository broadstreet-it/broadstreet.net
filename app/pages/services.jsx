import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Digital Marketing Services in Camden, SC | Broadstreet",
    description:
      "Explore Broadstreet’s web design, SEO, Google Ads, social media, content, and support services. Build a digital marketing plan around your business goals.",
    canonical: "https://broadstreet.net/services/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/services/#webpage",
        url: "https://broadstreet.net/services/",
        name: "Digital Marketing Services in Camden, SC | Broadstreet",
        description:
          "Explore Broadstreet’s web design, SEO, Google Ads, social media, content, and support services. Build a digital marketing plan around your business goals.",
        isPartOf: { "@id": "https://broadstreet.net/#website" },
        about: { "@id": "https://broadstreet.net/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://broadstreet.net/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "The right services. One committed team.",
            item: "https://broadstreet.net/services/",
          },
        ],
      },
    ],
  });

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / The right services. One committed team.
          </nav>
          <h1>The right services. One committed team.</h1>
          <p className="lead">
            Explore Broadstreet’s web design, SEO, Google Ads, social media, content, and support
            services. Build a digital marketing plan around your business goals.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="cards">
            <article className="card">
              <div className="card-content">
                <span className="number">01</span>
                <h3>Website design</h3>
                <p>A better first impression. A clearer path from visitor to customer.</p>
                <Link to="/services/mobile-friendly-website-design-development/">
                  Explore website design
                </Link>
              </div>
            </article>
            <article className="card">
              <div className="card-content">
                <span className="number">02</span>
                <h3>Search engine optimization</h3>
                <p>Help people find your business when they’re searching for what you do.</p>
                <Link to="/services/search-engine-optimization-seo/">
                  Explore search engine optimization
                </Link>
              </div>
            </article>
            <article className="card">
              <div className="card-content">
                <span className="number">03</span>
                <h3>{"Google Ads & paid search"}</h3>
                <p>Connect with the right audience through focused, measurable campaigns.</p>
                <Link to="/services/google-adwords-ppc-search-engine-marketing-consulting/">
                  {"Explore google ads & paid search"}
                </Link>
              </div>
            </article>
            <article className="card">
              <div className="card-content">
                <span className="number">04</span>
                <h3>eCommerce</h3>
                <p>Bring your products online and reach customers beyond your storefront.</p>
                <Link to="/services/ecommerce-website-development/">Explore ecommerce</Link>
              </div>
            </article>
            <article className="card">
              <div className="card-content">
                <span className="number">05</span>
                <h3>{"Content & social media"}</h3>
                <p>
                  Stay visible, share your expertise, and build stronger customer relationships.
                </p>
                <Link to="/services/social-media-marketing/">
                  {"Explore content & social media"}
                </Link>
              </div>
            </article>
            <article className="card">
              <div className="card-content">
                <span className="number">06</span>
                <h3>{"Strategy & ongoing support"}</h3>
                <p>Keep your website current and your marketing focused as your business grows.</p>
                <Link to="/services/digital-marketing-strategy-and-support/">
                  {"Explore strategy & ongoing support"}
                </Link>
              </div>
            </article>
          </div>
          <h2 style={{ marginTop: "65px" }}>Explore every service</h2>
          <ul className="content-index">
            <li>
              <Link to="/services/mobile-friendly-website-design-development/">
                A website that works for your business.
              </Link>
            </li>
            <li>
              <Link to="/services/ecommerce-website-development/">
                Turn your storefront into an online store.
              </Link>
            </li>
            <li>
              <Link to="/services/search-engine-optimization-seo/">
                Help the right customers find you.
              </Link>
            </li>
            <li>
              <Link to="/services/google-adwords-ppc-search-engine-marketing-consulting/">
                Reach customers when they’re ready to act.
              </Link>
            </li>
            <li>
              <Link to="/services/social-media-marketing/">Social Media Marketing</Link>
            </li>
            <li>
              <Link to="/services/email-marketing/">Email Marketing</Link>
            </li>
            <li>
              <Link to="/services/local-online-marketing/">Be found in your local market.</Link>
            </li>
            <li>
              <Link to="/services/content-management-development/">
                {"Content Management & Development"}
              </Link>
            </li>
            <li>
              <Link to="/services/web-mobile-app-development/">
                {"Web & Mobile App Development"}
              </Link>
            </li>
            <li>
              <Link to="/services/digital-marketing-strategy-and-support/">
                A partner for what comes next.
              </Link>
            </li>
            <li>
              <Link to="/services/secure-hosting-technical-support/">
                {"Secure Hosting & Technical Support"}
              </Link>
            </li>
            <li>
              <Link to="/services/logo-design/">Logo Design</Link>
            </li>
            <li>
              <Link to="/services/video-production/">Video Production</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
