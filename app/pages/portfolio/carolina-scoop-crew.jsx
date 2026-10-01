import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Carolina Scoop Crew | Broadstreet",
    description:
      "Explore Broadstreet’s work with Carolina Scoop Crew: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/carolina-scoop-crew/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/carolina-scoop-crew/#webpage",
        url: "https://broadstreet.net/portfolio/carolina-scoop-crew/",
        name: "Carolina Scoop Crew | Broadstreet",
        description:
          "Explore Broadstreet’s work with Carolina Scoop Crew: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Carolina Scoop Crew",
            item: "https://broadstreet.net/portfolio/carolina-scoop-crew/",
          },
        ],
      },
    ],
  });

export default function PortfolioCarolinaScoopCrew() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Carolina Scoop Crew
          </nav>
          <h1>Carolina Scoop Crew</h1>
          <p className="lead">
            Explore Broadstreet’s work with Carolina Scoop Crew: website design, online presence,
            and a partnership built around the client’s business.
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
                    id="node-portfolio-474"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-mary odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="https://carolinascoopcrew.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="Carolina Scoop Crew"
                                src="/assets/media/e33bcf8e45df4b05.png"
                                loading="lazy"
                                decoding="async"
                                width="1366"
                                height="2123"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              When{" "}
                              <a href="https://carolinascoopcrew.com/">
                                <strong>Carolina Scoop Crew</strong>
                              </a>{" "}
                              partnered with Broadstreet.net, they came to us with an existing
                              website that had been created using a do-it-yourself website builder.
                              The client had done a great job getting their business online and
                              creating a foundation for their digital presence, but as the business
                              continued to grow, the website needed additional strategy, structure,
                              and optimization to reach its full potential.
                            </p>
                            <p>
                              While the existing website provided important information, there were
                              opportunities to improve areas such as search engine optimization
                              (SEO), internal linking, content organization, and the overall user
                              experience. The goal was to create a website that not only looked
                              better but also helped more visitors find the business, understand
                              their services, and take the next step.
                            </p>
                            <p>
                              The client trusted our team with a simple direction:{" "}
                              <strong> — Go for it and surprise me. — </strong>
                            </p>
                            <p>
                              From there, Broadstreet developed a strategy by researching
                              competitors, analyzing what was working in the industry, and
                              identifying opportunities to create a website that would stand out
                              while better serving potential customers.
                            </p>
                            <p>
                              Our team completely redesigned the website with a focus on bright,
                              engaging visuals, clear messaging, and a user-friendly layout. We
                              incorporated SEO improvements throughout the site, strengthened the
                              internal structure, and created a mobile-friendly experience that
                              makes it easy for customers to learn about services and request
                              information from any device.
                            </p>
                            <p>
                              The result is a vibrant, modern website that captures the personality
                              of Carolina Scoop Crew while functioning as a powerful marketing tool
                              for the business.
                            </p>
                            <p>
                              By combining creative design, strategic SEO, and conversion-focused
                              development, Broadstreet helped transform their website from a basic
                              online presence into a digital experience designed to turn clicks into
                              customers.
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
