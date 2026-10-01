import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Town of Elgin | Broadstreet",
    description:
      "Explore Broadstreet’s work with Town of Elgin: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/town-elgin/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/town-elgin/#webpage",
        url: "https://broadstreet.net/portfolio/town-elgin/",
        name: "Town of Elgin | Broadstreet",
        description:
          "Explore Broadstreet’s work with Town of Elgin: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Town of Elgin",
            item: "https://broadstreet.net/portfolio/town-elgin/",
          },
        ],
      },
    ],
  });

export default function PortfolioTownElgin() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Town of Elgin
          </nav>
          <h1>Town of Elgin</h1>
          <p className="lead">
            Explore Broadstreet’s work with Town of Elgin: website design, online presence, and a
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
                    id="node-portfolio-473"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-mary odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="https://townofelginsc.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="Town of Elgin"
                                src="/assets/media/958bcf317be06c4b.png"
                                loading="lazy"
                                decoding="async"
                                width="1366"
                                height="2099"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              When the{" "}
                              <a href="https://townofelginsc.com/">
                                <strong>Town of Elgin</strong>
                              </a>{" "}
                              partnered with Broadstreet.net, they came to us looking for a complete
                              website transformation. As a new client transitioning from another
                              provider, the Town’s existing website had become outdated in both
                              design and functionality. It was not mobile-friendly, difficult to
                              navigate, and no longer provided the user experience residents and
                              visitors expect from a modern municipal website.
                            </p>
                            <p>
                              The goal was clear: create a website that was easy to use, visually
                              appealing, and designed to make important town information accessible
                              to everyone.
                            </p>
                            <p>
                              The Town of Elgin provided our team with examples of other municipal
                              websites they admired, giving us insight into the look, feel, and
                              functionality they wanted to achieve. Using those examples as
                              inspiration, Broadstreet developed a fresh, modern website tailored
                              specifically to the needs of the community.
                            </p>
                            <p>
                              Our team focused on creating a clean design, intuitive navigation, and
                              a responsive layout that works seamlessly across desktops, tablets,
                              and mobile devices. We also helped organize the town’s information in
                              a way that makes it easier for residents, businesses, and visitors to
                              quickly find what they need — from town services and announcements to
                              community resources and important updates.
                            </p>
                            <p>
                              The result is a modern digital home for the Town of Elgin that better
                              reflects the community it serves. The new website provides a more
                              engaging experience, improved accessibility, and a stronger platform
                              for sharing information with residents.
                            </p>
                            <p>
                              Broadstreet helped transform the Town of Elgin’s online presence into
                              a website that is not only more attractive but also more functional,
                              user-friendly, and ready to serve the community for years to come.
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
