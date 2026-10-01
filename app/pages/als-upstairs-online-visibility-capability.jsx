import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Al's Upstairs: Online Visibility & Capability | Broadstreet",
    description:
      "Explore Al's Upstairs: Online Visibility & Capability from Broadstreet, a digital marketing and website development team based in Camden, South Carolina.",
    canonical: "https://broadstreet.net/als-upstairs-online-visibility-capability/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/als-upstairs-online-visibility-capability/#webpage",
        url: "https://broadstreet.net/als-upstairs-online-visibility-capability/",
        name: "Al's Upstairs: Online Visibility & Capability | Broadstreet",
        description:
          "Explore Al's Upstairs: Online Visibility & Capability from Broadstreet, a digital marketing and website development team based in Camden, South Carolina.",
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
            name: "Al's Upstairs: Online Visibility & Capability",
            item: "https://broadstreet.net/als-upstairs-online-visibility-capability/",
          },
        ],
      },
    ],
  });

export default function AlsUpstairsOnlineVisibilityCapability() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {" / Al's Upstairs: Online Visibility & Capability"}
          </nav>
          <h1>{"Al's Upstairs: Online Visibility & Capability"}</h1>
          <p className="lead">
            {
              "Explore Al's Upstairs: Online Visibility & Capability from Broadstreet, a digital marketing and website development team based in Camden, South Carolina."
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
                  <article
                    id="node-videos-235"
                    className="node node-videos node-published node-not-promoted node-not-sticky author-tesliker odd clearfix"
                  >
                    <div className="content clearfix">
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <div>
                              <iframe
                                src="https://www.youtube.com/embed/WLp6wXpZ_ZQ"
                                title={"Al's Upstairs: Online Visibility & Capability video"}
                                loading="lazy"
                                allowFullScreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix">
                      <nav className="links node-links clearfix"></nav>
                    </div>
                  </article>
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
