import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Tiffany Massey | Broadstreet",
    description:
      "As a Content Specialist for Broadstreet Consulting, Tiffany Massey enjoys building relationships with clients and enabling them to represent their…",
    canonical: "https://broadstreet.net/tiffany-massey/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/tiffany-massey/#webpage",
        url: "https://broadstreet.net/tiffany-massey/",
        name: "Tiffany Massey | Broadstreet",
        description:
          "As a Content Specialist for Broadstreet Consulting, Tiffany Massey enjoys building relationships with clients and enabling them to represent their…",
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
            name: "Tiffany Massey",
            item: "https://broadstreet.net/tiffany-massey/",
          },
        ],
      },
    ],
  });

export default function TiffanyMassey() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Tiffany Massey
          </nav>
          <h1>Tiffany Massey</h1>
          <p className="lead">
            As a Content Specialist for Broadstreet Consulting, Tiffany Massey enjoys building
            relationships with clients and enabling them to represent their…
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
                    id="node-staff-428"
                    className="ds-2col-stacked node node-staff view-mode-full node-published node-not-promoted node-not-sticky author-tiffany odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-photo-collage field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <img
                              alt="Tiffany Massey"
                              src="/assets/media/dd79c655372a448a.png"
                              loading="lazy"
                              decoding="async"
                              width="400"
                              height="400"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group-right">
                      <div className="field field-name-field-staff-job-title field-type-text field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">Content Specialist</div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              As a Content Specialist for Broadstreet Consulting, Tiffany Massey
                              enjoys building relationships with clients and enabling them to
                              represent their businesses in innovative ways online. Based in Camden,
                              SC, Tiffany graduated from Grand Canyon University with a Bachelor of
                              Arts in Advertising and Public Relations with an Emphasis in
                              Advertisement Design. When she isn — t behind the computer, she enjoys
                              spending time with her husband, Derek, and their toddler, Tucker.
                            </p>
                            <p>
                              <strong>Connect with Tiffany: </strong>
                            </p>
                            <div className="social">
                              <a
                                className="fa fa-facebook-square fa-3x"
                                href="https://www.facebook.com/tiffanymasseyyy"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></a>{" "}
                              <a
                                className="fa fa-instagram  fa-3x"
                                href="https://www.instagram.com/tiffanymasseyyy/"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
