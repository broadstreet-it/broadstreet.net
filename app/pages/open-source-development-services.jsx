import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Open Source Development Services | Broadstreet",
    description:
      "Our software development expertise mostly revolves around the Drupal Open Source (free) Content Management System (CMS). Our primary mission is to provide…",
    canonical: "https://broadstreet.net/open-source-development-services/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/open-source-development-services/#webpage",
        url: "https://broadstreet.net/open-source-development-services/",
        name: "Open Source Development Services | Broadstreet",
        description:
          "Our software development expertise mostly revolves around the Drupal Open Source (free) Content Management System (CMS). Our primary mission is to provide…",
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
            name: "Open Source Development Services",
            item: "https://broadstreet.net/open-source-development-services/",
          },
        ],
      },
    ],
  });

export default function OpenSourceDevelopmentServices() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Open Source Development Services
          </nav>
          <h1>Open Source Development Services</h1>
          <p className="lead">
            Our software development expertise mostly revolves around the Drupal Open Source (free)
            Content Management System (CMS). Our primary mission is to provide…
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
                    id="node-page-313"
                    className="node node-page node-published node-not-promoted node-not-sticky author-slikerm odd clearfix"
                  >
                    <div className="content clearfix">
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <p>
                              Our software development expertise mostly revolves around the Drupal
                              Open Source (free) Content Management System (CMS). Our primary
                              mission is to provide you with a reliable and secure Website that
                              serves as the centerpiece of your online marketing strategy.
                            </p>
                            <p>
                              Let us help you develop a plan to use our Web Success strategies to
                              reach new prospects and new leads for your business.
                            </p>
                            <h2>
                              <strong>Open Source Development with Drupal</strong>
                            </h2>
                            <p>
                              Broadstreet has established expertise with Drupal, an open-source
                              content management system used to power many globally-known websites
                              including WhiteHouse.gov, Economist.com, nbc.com, and many more. Our
                              standard platform is the Open Source — LAMP, — which consists of
                              Linux, Apache, MySQL, and PHP. Get a jump start by taking advantage of
                              Broadstreet's Drupal experience.{" "}
                            </p>
                            <p>
                              Broadstreet uses an agile development methodology and can put together
                              the right team to meet your needs. Drupal, along with Drupal Commerce,
                              allows us to develop a fully functional eCommerce system, complete
                              with back-end integrations when needed. Read more about{" "}
                              <a href="/drupal/">Drupal and Drupal Commerce</a>.
                            </p>
                            <h2>
                              <strong>Open Source Development with Wordpress</strong>
                            </h2>
                            <p>
                              Broadstreet has the expertise to build and support WordPress websites.
                              Our team is well-versed in helping you get the most of your WordPress
                              site, including technical support, content development, and search
                              engine optimization.
                            </p>
                            <p>
                              Broadstreet uses an agile development methodology and can put together
                              the right team to meet your needs.
                            </p>
                            <h2>
                              <strong>Mobile-friendly Website Development</strong>
                            </h2>
                            <p>
                              A reliable and secure website provides a central point for clients and
                              prospects to learn about you, your services, and your values. All
                              other client communications, including social media and email
                              marketing, revolve around your Website. Currently, over 55% of website
                              visitors use mobile devices, and that percentage is growing rapidly.
                              It is critical that your site is mobile-friendly.{" "}
                            </p>
                            <p>Benefits of Mobile-Friendly Drupal Websites:</p>
                            <ul>
                              <li>Adapt to any screen</li>
                              <li>Look great on any device</li>
                              <li>Reliable and secure website</li>
                              <li>
                                Create a central point for clients and prospects to learn about you,
                                your services and values
                              </li>
                              <li>Built-in Search Engine Optimization (SEO)</li>
                            </ul>
                            <h2>
                              <strong>Drupal eCommerce Development</strong>
                            </h2>
                            <p>
                              Drupal is Broadstreet's primary approach for building eCommerce
                              solutions, along with Ubercart, an open-source shopping cart solution.
                              A
                              <a
                                href="https://drupalcommerce.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {" "}
                                Drupal Commerce
                              </a>{" "}
                              solution will allow for much more flexibility - the ability to easily
                              add a blog, a calendar, a discussion board, or numerous other features
                              to your site. This type of site will take a little more effort to
                              build and will be a little more costly to maintain.{" "}
                            </p>
                            <ul>
                              <li>
                                <a href="/drupal/">Check out Drupal</a>
                              </li>
                              <li>
                                <Link to="/portfolio/">Check out our portfolio</Link>
                              </li>
                            </ul>
                            <h2>
                              <strong>Web Development Solutions For You</strong>
                            </h2>
                            <p>
                              {
                                "We offer free consultations to help determine which web development solutions are right for your business goals. We know it's not a one-size-fits-all service. We want to get to know you and your business, your budget, your vision and everything else there is to know. Once we determine which service fits you best, we provide monthly support in which we help develop & maintain your website."
                              }
                            </p>
                            <p>
                              <Link className="custombutton" to="/contact/">
                                Schedule A Free Consultation
                              </Link>
                            </p>
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
