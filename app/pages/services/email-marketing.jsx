import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Email Marketing | Broadstreet",
    description:
      "Permission-based email marketing is good for certain business objectives and can be an essential part of successful marketing plan. Email allows you to…",
    canonical: "https://broadstreet.net/services/email-marketing/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/services/email-marketing/#webpage",
        url: "https://broadstreet.net/services/email-marketing/",
        name: "Email Marketing | Broadstreet",
        description:
          "Permission-based email marketing is good for certain business objectives and can be an essential part of successful marketing plan. Email allows you to…",
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
            name: "Email Marketing",
            item: "https://broadstreet.net/services/email-marketing/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Email Marketing",
        description:
          "Permission-based email marketing is good for certain business objectives and can be an essential part of successful marketing plan. Email allows you to…",
        provider: { "@id": "https://broadstreet.net/#organization" },
        url: "https://broadstreet.net/services/email-marketing/",
      },
    ],
  });

export default function ServicesEmailMarketing() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Email Marketing
          </nav>
          <h1>Email Marketing</h1>
          <p className="lead">
            Permission-based email marketing is good for certain business objectives and can be an
            essential part of successful marketing plan. Email allows you to…
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
                    id="node-service-310"
                    className="ds-1col node node-service view-mode-full node-published node-not-promoted node-not-sticky author-tsliker odd clearfix clearfix"
                  >
                    <div className="field field-name-field-service-image field-type-image field-label-hidden">
                      <div className="field-items">
                        <div className="field-item even">
                          <img
                            className="adaptive-image"
                            alt="Email Marketing"
                            title="Email Marketing"
                            src="https://broadstreet.net/sites/broadstreet.net/files/styles/service_adaptive/adaptive-image/public/email-marketing.png?itok=OaCMzVr6"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                      <div className="field-items">
                        <div className="field-item even">
                          <p>
                            Permission-based email marketing is good for certain business objectives
                            and can be an essential part of successful marketing plan. Email allows
                            you to communicate regularly with people who are interested in you and
                            your business, reminding them of who you are, establishing your name as
                            a professional or expert, and giving them a reason to visit your website
                            today.
                          </p>
                          <p>
                            {
                              "Consistent & informative emails are a great way to keep your customers engaged and drive more interactions with them."
                            }
                          </p>
                          <p>
                            {
                              " Relevant emails sent to your cutomers inbox will not only build a connection, it will also increase web traffic, interactions & brand awareness. Broadstreet uses industry-standard platforms such as Constant Contact and MailChimp to professionally deliver your message to prospects & customers. We help you build and manage mulitple email lists to drive business where you want it."
                            }
                          </p>
                          <p>Benefits of Email Marketing</p>
                          <ul>
                            <li>Targeted</li>
                            <li>Easily shareable</li>
                            <li>Measureable</li>
                            <li>Cost-Effective</li>
                            <li>Increases Brand Awareness</li>
                          </ul>
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
