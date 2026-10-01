import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "CotDoc | Broadstreet",
    description:
      "Explore Broadstreet’s work with CotDoc: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/cotdoc/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/cotdoc/#webpage",
        url: "https://broadstreet.net/portfolio/cotdoc/",
        name: "CotDoc | Broadstreet",
        description:
          "Explore Broadstreet’s work with CotDoc: website design, online presence, and a partnership built around the client’s business.",
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
            name: "CotDoc",
            item: "https://broadstreet.net/portfolio/cotdoc/",
          },
        ],
      },
    ],
  });

export default function PortfolioCotdoc() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / CotDoc
          </nav>
          <h1>CotDoc</h1>
          <p className="lead">
            Explore Broadstreet’s work with CotDoc: website design, online presence, and a
            partnership built around the client’s business.
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
                  <div
                    id="node-portfolio-203"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-tesliker odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="http://www.cotdoc.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="CotDoc"
                                src="/assets/media/408f09f66c11c630.jpg"
                                loading="lazy"
                                decoding="async"
                                width="550"
                                height="449"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              Cot Care / Chair Care has been in business for over 20 years and
                              finally decided it was time to sell online. What started out as a
                              repair service business has transformed into a marketplace for parts
                              for Stryker Stretcher Parts, Ferno Stretcher Parts, and other parts
                              related to stretchers, cots, and wheel chairs.
                            </p>
                            <blockquote>
                              <p>Sales growth is strong! - Larry Parker, CotDoc Partner</p>
                            </blockquote>
                            <p>
                              Broadstreet helped CotDoc to build a Total Online Presence, step by
                              step over many years, and that investment is now paying dividends in
                              the form of increasing sales and greater profits. Here are a few of
                              the ways that Broadstreet has helped CotDoc:
                            </p>
                            <h2>Mobile Friendly Web Development</h2>
                            <p>
                              We started with a simple Drupal Website with plenty of content, and
                              very soon found ourselves #1 on Google for a number of organic
                              results.
                            </p>
                            <h2>Search Engine Optimization</h2>
                            <p>
                              Building a content rich site, creating backlinks, and making sure all
                              metadata makes Google happy, and soon we are #1 for even more terms,
                              and Website traffic soars.
                            </p>
                            <p>
                              <Link to="/book-now/">
                                <img
                                  alt="CotDoc"
                                  src="/assets/media/db774a7d6c7f30b6.png"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </Link>{" "}
                              <a href="tel:8034227629">
                                <img
                                  alt="CotDoc"
                                  src="/assets/media/b3ccdf69bf19baf6.jpg"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </a>
                            </p>
                            <h2>eCommerce Development</h2>
                            <p>We added Drupal Commerce and began selling online.</p>
                            <h2>eMail Marketing</h2>
                            <p>
                              We built a mailing last and started communicating with our customers
                              and prospects on a regular basis.
                            </p>
                            <h2>Search Marketing with Google AdWords</h2>
                            <p>
                              <iframe
                                src="https://www.youtube.com/embed/a4c_eEWVzoU"
                                title="CotDoc video"
                                loading="lazy"
                                allowFullScreen
                              ></iframe>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-right"></div>
                    <div className="group-footer"></div>
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
