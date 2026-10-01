import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Request a Web Success Webinar or Live Seminar | Broadstreet",
    description:
      "Click the signup form above if you would like Tom to provide a live Webinar or in-person seminar to discuss Web Success.",
    canonical: "https://broadstreet.net/web-success-signup/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/web-success-signup/#webpage",
        url: "https://broadstreet.net/web-success-signup/",
        name: "Request a Web Success Webinar or Live Seminar | Broadstreet",
        description:
          "Click the signup form above if you would like Tom to provide a live Webinar or in-person seminar to discuss Web Success.",
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
            name: "Request a Web Success Webinar or Live Seminar",
            item: "https://broadstreet.net/web-success-signup/",
          },
        ],
      },
    ],
  });

export default function WebSuccessSignup() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Request a Web Success Webinar or Live Seminar
          </nav>
          <h1>Request a Web Success Webinar or Live Seminar</h1>
          <p className="lead">
            Click the signup form above if you would like Tom to provide a live Webinar or in-person
            seminar to discuss Web Success.
          </p>
        </div>
      </section>
      <div className="wrap article-layout">
        <article className="article-content">
          <div className="region-inner region-content-inner">
            <div
              id="block-system-main"
              className="block block-system block-main block-system-main odd block-without-title"
            >
              <div className="block-inner clearfix">
                <div className="content clearfix">
                  <div className="content clearfix">
                    <p>
                      <Link className="button" to="/contact/">
                        Contact Broadstreet
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="block-block-59"
              className="block block-block block-59 block-block-59 even block-without-title"
            >
              <div className="block-inner clearfix">
                <div className="content clearfix">
                  <div>
                    <h3>
                      <em>
                        <strong>The 9 Essentials of Web Success </strong>
                      </em>{" "}
                      Webinar series was produced and broadcast in the summer of 2017.
                    </h3>
                    <p>
                      Click the signup form above if you would like Tom to provide a live Webinar or
                      in-person seminar to discuss Web Success.
                    </p>
                    <ul>
                      <li>The 9 Essentials of Web Success - Intro - Tuesday, June 6, 2017 </li>
                      <li>
                        {"Website Strategy, Content & Search - "}
                        <em>Tuesday, June 13, 2017</em>
                      </li>
                      <li>
                        {"Content Strategy, SEO, & Pay-per-Click - "}
                        <em>Tuesday, June 20, 2017</em>
                      </li>
                      <li>
                        {"Email Strategy, Content, & eCommerce - "}
                        <em>Tuesday, June 27, 2017</em>
                      </li>
                      <li>
                        {"eCommerce Strategy, AdWords & SEO - "}
                        <em>Tuesday, July 11, 2017</em>
                      </li>
                      <li>
                        Paid Search Strategy - AdWords Deep Dive - <em>Tuesday, July 18, 2017</em>
                      </li>
                      <li>
                        {"SEO Strategy, Content & Pay-Per-Click - "}
                        <em>Tuesday, July 25, 2017</em>
                      </li>
                      <li>
                        {"Social Media Strategy, Content & SEO - "}
                        <em>Tuesday, August 1, 2017</em>
                      </li>
                      <li>
                        {"Local Strategy, Storefront & Geo - "}
                        <em>Tuesday, August 8, 2017</em>
                      </li>
                      <li>
                        {"Review & Rebalance, Your Future Web Strategy - "}
                        <em>Tuesday, August 15, 2017</em>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="block-block-57"
              className="block block-block block-57 block-block-57 odd block-without-title"
            >
              <div className="block-inner clearfix">
                <div className="content clearfix">
                  <div>
                    <p>
                      <iframe
                        src="https://www.youtube.com/embed/ggE-94cOZjY"
                        title="Request a Web Success Webinar or Live Seminar video"
                        loading="lazy"
                        allowFullScreen
                      ></iframe>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <aside className="sidebar">
          <p className="eyebrow">Let’s move forward</p>
          <h2>What’s next for your business?</h2>
          <p>
            Start with a conversation about your goals, your customers, and where you want to grow.
          </p>
          <Link className="button" to="/contact/">
            Free consultation
          </Link>
          <a href="tel:+18035750564">(803) 575-0564</a>
          <Link to="/portfolio/">Explore our work</Link>
        </aside>
      </div>
    </>
  );
}
