import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Secure Hosting & Technical Support | Broadstreet",
    description:
      "At our most basic monthly support, we offer secure website hosting & technical support. We can host your website and offer technical support whether we have…",
    canonical: "https://broadstreet.net/services/secure-hosting-technical-support/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/services/secure-hosting-technical-support/#webpage",
        url: "https://broadstreet.net/services/secure-hosting-technical-support/",
        name: "Secure Hosting & Technical Support | Broadstreet",
        description:
          "At our most basic monthly support, we offer secure website hosting & technical support. We can host your website and offer technical support whether we have…",
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
            name: "Secure Hosting & Technical Support",
            item: "https://broadstreet.net/services/secure-hosting-technical-support/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Secure Hosting & Technical Support",
        description:
          "At our most basic monthly support, we offer secure website hosting & technical support. We can host your website and offer technical support whether we have…",
        provider: { "@id": "https://broadstreet.net/#organization" },
        url: "https://broadstreet.net/services/secure-hosting-technical-support/",
      },
    ],
  });

export default function ServicesSecureHostingTechnicalSupport() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {" / Secure Hosting & Technical Support"}
          </nav>
          <h1>{"Secure Hosting & Technical Support"}</h1>
          <p className="lead">
            {
              "At our most basic monthly support, we offer secure website hosting & technical support. We can host your website and offer technical support whether we have…"
            }
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
                    id="node-service-396"
                    className="ds-1col node node-service view-mode-full node-published node-not-promoted node-not-sticky author-slikerm odd clearfix clearfix"
                  >
                    <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                      <div className="field-items">
                        <div className="field-item even">
                          <p>
                            {
                              "At our most basic monthly support, we offer secure website hosting & technical support. We can host your website and offer technical support whether we have designed and built your website or not. If you are looking for "
                            }
                            <Link to="/services/mobile-friendly-website-design-development/">
                              web design services as well, read more about that here
                            </Link>
                            .{" "}
                          </p>
                          <p>
                            Once your website is secure on our server, we have a few different{" "}
                            <Link to="/services/digital-marketing-strategy-and-support/">
                              support packages available
                            </Link>{" "}
                            that we will have discussed during the creation of our agreement. At our
                            most basic package, we offer secure website hosting and technical
                            support, in which we can help you with any technical issues you may come
                            across during your time hosting with us. At our highest level, we offer
                            custom digital marketing strategies, regular content creations, social
                            media sharing and more. Our most successful customers have joined our
                            monthly support plans.{" "}
                            <Link to="/services/">See our list of services here</Link>.
                          </p>
                        </div>
                      </div>
                    </div>
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
