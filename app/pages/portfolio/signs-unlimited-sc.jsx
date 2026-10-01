import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Signs Unlimited SC | Broadstreet",
    description:
      "Explore Broadstreet’s work with Signs Unlimited SC: website design, online presence, and a partnership built around the client’s business.",
    canonical: "https://broadstreet.net/portfolio/signs-unlimited-sc/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/signs-unlimited-sc/#webpage",
        url: "https://broadstreet.net/portfolio/signs-unlimited-sc/",
        name: "Signs Unlimited SC | Broadstreet",
        description:
          "Explore Broadstreet’s work with Signs Unlimited SC: website design, online presence, and a partnership built around the client’s business.",
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
            name: "Signs Unlimited SC",
            item: "https://broadstreet.net/portfolio/signs-unlimited-sc/",
          },
        ],
      },
    ],
  });

export default function PortfolioSignsUnlimitedSc() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Signs Unlimited SC
          </nav>
          <h1>Signs Unlimited SC</h1>
          <p className="lead">
            Explore Broadstreet’s work with Signs Unlimited SC: website design, online presence, and
            a partnership built around the client’s business.
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
                    id="node-portfolio-476"
                    className="ds-2col-stacked node node-portfolio view-mode-full node-published node-not-promoted node-not-sticky author-nyia odd clearfix clearfix"
                  >
                    <div className="group-header"></div>
                    <div className="group-left">
                      <div className="field field-name-field-image-page-view field-type-image field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <a
                              href="https://signsunlimitedsc.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                alt="Signs Unlimited SC"
                                src="/assets/media/ba6779fba2368d52.png"
                                loading="lazy"
                                decoding="async"
                                width="1366"
                                height="2426"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              When <a href="http://signsunlimitedsc.com/">Signs Unlimited SC </a>
                              partnered with Broadstreet.net, they already had a website — but it no
                              longer reflected the quality of their business or the innovative
                              digital LED signage solutions they provide. The existing site was
                              outdated, difficult to navigate, lacked a cohesive visual identity,
                              and offered very little search engine optimization, making it
                              difficult for potential customers to find them online.
                            </p>
                            <p>
                              After discussing the client's goals, they gave our team the creative
                              freedom to completely reimagine their online presence. We began by
                              researching competitors, identifying opportunities to improve the user
                              experience, strengthen the site's structure, and build a solid SEO
                              foundation. Every page was rewritten with search visibility in mind
                              while organizing information into a clear, intuitive navigation that
                              helps visitors quickly find the products and services they need.
                            </p>
                            <p>
                              The finished website delivers a modern, professional experience that
                              better represents the Signs Unlimited SC brand. Bold visuals, clean
                              layouts, strategic calls to action, and improved functionality
                              showcase the company's expertise in digital LED message displays while
                              creating a seamless experience across desktop and mobile devices. The
                              result is a website that not only looks the part of an industry leader
                              but also works harder to attract, engage, and convert new customers.
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
