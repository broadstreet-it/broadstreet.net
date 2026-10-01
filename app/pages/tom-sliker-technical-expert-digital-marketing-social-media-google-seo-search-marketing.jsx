import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title:
      "Tom Sliker - Technical Expert - Digital Marketing, Social Media, Google, SEO, Search Marketing | Broadstreet",
    description:
      "Tom has been a source for technical information for numerous clients and numerous publications and outlets.",
    canonical:
      "https://broadstreet.net/tom-sliker-technical-expert-digital-marketing-social-media-google-seo-search-marketing/",
    graph: [
      {
        "@type": "WebPage",
        "@id":
          "https://broadstreet.net/tom-sliker-technical-expert-digital-marketing-social-media-google-seo-search-marketing/#webpage",
        url: "https://broadstreet.net/tom-sliker-technical-expert-digital-marketing-social-media-google-seo-search-marketing/",
        name: "Tom Sliker - Technical Expert - Digital Marketing, Social Media, Google, SEO, Search Marketing | Broadstreet",
        description:
          "Tom has been a source for technical information for numerous clients and numerous publications and outlets.",
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
            name: "Tom Sliker - Technical Expert - Digital Marketing, Social Media, Google, SEO, Search Marketing",
            item: "https://broadstreet.net/tom-sliker-technical-expert-digital-marketing-social-media-google-seo-search-marketing/",
          },
        ],
      },
    ],
  });

export default function TomSlikerTechnicalExpertDigitalMarketingSocialMediaGoogleSeoSearchMarketing() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Tom Sliker - Technical Expert - Digital Marketing, Social
            Media, Google, SEO, Search Marketing
          </nav>
          <h1>
            Tom Sliker - Technical Expert - Digital Marketing, Social Media, Google, SEO, Search
            Marketing
          </h1>
          <p className="lead">
            Tom has been a source for technical information for numerous clients and numerous
            publications and outlets.
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
                    id="node-page-389"
                    className="node node-page node-published node-not-promoted node-not-sticky author-tsliker odd clearfix"
                  >
                    <div className="content clearfix">
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              Tom has been a source for technical information for numerous clients
                              and numerous publications and outlets.{" "}
                            </p>
                            <p>Some examples: </p>
                            <ul>
                              <li>
                                08-05-2018 - Interview with Sean Carrigan, Congressional Candidate,
                                regarding Cyber Security. Also includes Tom's story about Russian
                                Hackers, Ransomware, and the FBI.{" "}
                                <a href="https://www.facebook.com/carriganforcongress/videos/253733168577808/">
                                  https://www.facebook.com/carriganforcongress/videos/253733168577808/
                                </a>
                              </li>
                              <li>
                                11-20-2017 - Interview with Dave Lykken for Lykken on Lending
                                Podcast:{" "}
                                <a href="http://lykkenonlending.com/11-20-17-hot-topic-creating-a-comprehensive-digital-marketing-strategy-with-tom-sliker/">
                                  http://lykkenonlending.com/11-20-17-hot-topic-creating-a-comprehensive-d...
                                </a>{" "}
                                MP3 File is also available.
                              </li>
                              <li>
                                11-26-2010 - Interview with Michael Carnell - Social Media Monster
                                Podcast{" "}
                                <a href="http://michaelcarnell.com/podcast-episode-006-wordpress-drupal-and-the-choice-of-web-platforms/">
                                  http://michaelcarnell.com/podcast-episode-006-wordpress-drupal-and-the-c...
                                </a>
                              </li>
                            </ul>
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
