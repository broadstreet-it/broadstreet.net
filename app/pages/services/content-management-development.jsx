import { Link } from "react-router";
import { seo } from "../../lib/seo";

export const meta = () =>
  seo({
    title: "Content Management & Development | Broadstreet",
    description:
      "These days, a content-rich website is critical for getting noticed and being remembered. It gives people more opportunity to find your website on search…",
    canonical: "https://broadstreet.net/services/content-management-development/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/services/content-management-development/#webpage",
        url: "https://broadstreet.net/services/content-management-development/",
        name: "Content Management & Development | Broadstreet",
        description:
          "These days, a content-rich website is critical for getting noticed and being remembered. It gives people more opportunity to find your website on search…",
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
            name: "Content Management & Development",
            item: "https://broadstreet.net/services/content-management-development/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Content Management & Development",
        description:
          "These days, a content-rich website is critical for getting noticed and being remembered. It gives people more opportunity to find your website on search…",
        provider: { "@id": "https://broadstreet.net/#organization" },
        url: "https://broadstreet.net/services/content-management-development/",
      },
    ],
  });

export default function ServicesContentManagementDevelopment() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {" / Content Management & Development"}
          </nav>
          <h1>{"Content Management & Development"}</h1>
          <p className="lead">
            These days, a content-rich website is critical for getting noticed and being remembered.
            It gives people more opportunity to find your website on search…
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
                    id="node-service-259"
                    className="ds-1col node node-service view-mode-full node-published node-not-promoted node-not-sticky author-tsliker odd clearfix clearfix"
                  >
                    <div className="field field-name-field-service-image field-type-image field-label-hidden">
                      <div className="field-items">
                        <div className="field-item even">
                          <img
                            className="adaptive-image"
                            alt={"Content Management & Development"}
                            src="/assets/media/893dc15a3f22ef31.jpeg"
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
                            These days, a content-rich website is critical for getting noticed and
                            being remembered. It gives people more opportunity to find your website
                            on search engines, more reason to share your website links with others,
                            and sets yourself up as an industry expert.
                          </p>
                          <p>
                            Broadstreet will help you build a content-rich website. Our content
                            marketing experts and digital design professionals come together to
                            create beautiful, professional content to put on your website, share on
                            social media, post on youtube, etc.
                          </p>
                          <p>
                            <strong>
                              Benefits of Broadstreet Consulting website content development and
                              management services:
                            </strong>
                          </p>
                          <p>1. Easily edit your own content </p>
                          <p>
                            Behind the complex design of our websites, we create a back-end system
                            specific to your needs that will be easy enough for you or your
                            employees to update and manage your website and its content with ease.
                            We will train any administrators to use the website and update any
                            products or content that you want done in-house.
                          </p>
                          <p>2. Collaborate</p>
                          <p>
                            Our websites allow for multiple users and different levels of
                            administration access, allowing your entire team to collaborate on a
                            website and edit content at the same time. Once updated, the content can
                            be saved for review, modified, and published live to the website by one
                            or more authorized users. This also refers to collaboration with
                            Broadstreet Consulting. If you want your team doing minimal updates to
                            the website, we offer support plans to include content creation and
                            content marketing so that you can leave that part up to us.
                          </p>
                          <p>3. Improve Search Engine Optimization (SEO)</p>
                          <p>
                            Having a content management system can also be a great asset to your
                            website when it comes to SEO. Publishing fresh and updated content
                            regularly will greatly increase the number of visitors and traffic
                            generated to your site. When clients take advantage of our content
                            management system, we see their website jump higher in the search
                            results for targeted keywords and phrases much fast than those who
                            don't.
                          </p>
                          <p>Some content that we can help you develop for your site includes:</p>
                          <ul>
                            <li>Logo</li>
                            <li>
                              <a href="/sales-marketing-graphics/">{"Sale & Marketing Graphics"}</a>
                            </li>
                            <li>Landing pages</li>
                            <li>Blogs</li>
                            <li>Videos</li>
                            <li>Social Media Posts</li>
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
