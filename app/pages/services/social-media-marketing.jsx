import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Social Media Marketing | Broadstreet",
    description:
      "It is important to have an online presence within the social media platforms where your customers and prospects live. During our consultations we will help…",
    canonical: "https://broadstreet.net/services/social-media-marketing/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/services/social-media-marketing/#webpage",
        url: "https://broadstreet.net/services/social-media-marketing/",
        name: "Social Media Marketing | Broadstreet",
        description:
          "It is important to have an online presence within the social media platforms where your customers and prospects live. During our consultations we will help…",
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
            name: "Social Media Marketing",
            item: "https://broadstreet.net/services/social-media-marketing/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Social Media Marketing",
        description:
          "It is important to have an online presence within the social media platforms where your customers and prospects live. During our consultations we will help…",
        provider: { "@id": "https://broadstreet.net/#organization" },
        url: "https://broadstreet.net/services/social-media-marketing/",
      },
    ],
  });

export default function ServicesSocialMediaMarketing() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Social Media Marketing
          </nav>
          <h1>Social Media Marketing</h1>
          <p className="lead">
            It is important to have an online presence within the social media platforms where your
            customers and prospects live. During our consultations we will help…
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
                    id="node-service-309"
                    className="ds-1col node node-service view-mode-full node-published node-not-promoted node-not-sticky author-tsliker odd clearfix clearfix"
                  >
                    <div className="field field-name-field-service-image field-type-image field-label-hidden">
                      <div className="field-items">
                        <div className="field-item even">
                          <img
                            className="adaptive-image"
                            alt="Social Media Marketing"
                            src="https://broadstreet.net/sites/broadstreet.net/files/styles/service_adaptive/adaptive-image/public/social-media-marketing_service.jpeg?itok=sbv2RGzm"
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
                            {
                              "It is important to have an online presence within the social media platforms where your customers and prospects live. During our consultations we will help you figure out which social media platforms are best for you & how active you should be on them. Every business is different, but the most common social media sites to have a managed presence in include: Facebook, Twitter, Instagram, LinkedIn, Google+, Google & Yahoo Local."
                            }
                          </p>
                          <p>
                            The — Social Web — provides an opportunity to enhance and extend your
                            relationship with your clients as well as increase SEO through brand
                            awareness, content marketing and link sharing.
                          </p>
                          <p>
                            With our Social Media Marketing services you will have a team of
                            knowledgable professionals helping you build and maintain active social
                            media accounts and relevant social media advertising. Our experienced
                            staff take courses to stay up to date with all of the social media
                            trends and business strategies. We can make social media marketing
                            simple for you, as it should be.
                          </p>
                          <p>
                            If you are new or inexperienced to the social media world, or need help
                            in running your social media sites, this service is perfect for you.
                          </p>
                          <p>Some of our services include:</p>
                          <ul>
                            <li>Creating accounts on multiple social media platforms</li>
                            <li>
                              {
                                "Creating content & graphics to share on your social media profiles "
                              }
                            </li>
                            <li>Updating / Managing social media accounts</li>
                            <li>Scheduling monthly posts for multiple social media accounts</li>
                            <li>Creating relevant social media ads</li>
                          </ul>
                          <div>
                            We offer free consultations to help determine which internet marketing
                            solutions are right for your business and your goals.{" "}
                            <p>
                              <Link className="custombutton" to="/contact/">
                                Schedule A Free Consultation
                              </Link>
                            </p>
                          </div>
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
