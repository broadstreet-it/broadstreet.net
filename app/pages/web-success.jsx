import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Web Success | Broadstreet",
    description:
      "Tom Sliker and his team at Broadstreet have a proven record of helping businesses use the Internet to find new customers and increase sales.",
    canonical: "https://broadstreet.net/web-success/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/web-success/#webpage",
        url: "https://broadstreet.net/web-success/",
        name: "Web Success | Broadstreet",
        description:
          "Tom Sliker and his team at Broadstreet have a proven record of helping businesses use the Internet to find new customers and increase sales.",
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
            name: "Web Success",
            item: "https://broadstreet.net/web-success/",
          },
        ],
      },
    ],
  });

export default function WebSuccess() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Web Success
          </nav>
          <h1>Web Success</h1>
          <p className="lead">
            Tom Sliker and his team at Broadstreet have a proven record of helping businesses use
            the Internet to find new customers and increase sales.
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
                    id="node-page-290"
                    className="node node-page node-published node-not-promoted node-not-sticky author-tsliker odd clearfix"
                  >
                    <div className="content clearfix">
                      <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                        <div className="field-items">
                          <div className="field-item even">
                            <div className="grid-18 views-container">
                              <div className="grid-9">
                                <div>
                                  <img
                                    alt="Web Success"
                                    src="/assets/media/10df4bd1ca921a42.png"
                                    loading="lazy"
                                    decoding="async"
                                  />
                                </div>
                              </div>
                              <div className="grid-8">
                                <p>
                                  Tom Sliker and his team at Broadstreet have a proven record of
                                  helping businesses use the Internet to find new customers and
                                  increase sales.
                                </p>
                                <p>
                                  Web Success is a series of ideas and actions, activities and
                                  concepts that can be put together to build a unique Web Strategy
                                  tailored to your business. It is a suite of solutions to solve
                                  digital media challenges. It is about increasing sales and
                                  reaching new customers. It is a path to digital transformation for
                                  your small business. Web Success is a conceptual framework for how
                                  to be successful online.
                                </p>
                                <p>
                                  <Link to="/contact/">
                                    Watch the Nine Essentials of Web Success on YouTube.
                                  </Link>
                                </p>
                                <p>
                                  The Web Success YouTube channel is still in development, but the
                                  Nine Essentials playlist will give a solid overview of how to
                                  manage your online presence. There is no easy answer to being
                                  successful online. While the core principles are consistent across
                                  all industries, every business and every non-profit will have to
                                  find their own unique way of applying these principles.{" "}
                                </p>
                              </div>
                            </div>
                            <div className="grid-18 views-container">
                              <div className="grid-16">
                                <p>
                                  Below playlist for the 9 Essentials of Web Success. You can learn
                                  more about Web Success by watching online seminars or watching
                                  recorded programs, or by{" "}
                                  <Link to="/contact/">joining our email list.</Link>
                                </p>
                                <p>
                                  <a href="https://www.youtube.com/playlist?list=PLkLSq_jWF8x6DnGxJNWZp7-rf9iqAIp4F">
                                    The 9 Essentials Playlist
                                  </a>
                                  :{" "}
                                  <a href="https://www.youtube.com/playlist?list=PLkLSq_jWF8x6DnGxJNWZp7-rf9iqAIp4F">
                                    <img
                                      alt="Web Success"
                                      src="https://broadstreet.net/sites/broadstreet.net/files/web-success-9-essentials-playlist.png"
                                      loading="lazy"
                                      decoding="async"
                                    />
                                  </a>
                                </p>
                                <p>
                                  Below are the key components of Web Success. You can learn more
                                  about Web Success by watching online seminars or watching recorded
                                  programs, or by{" "}
                                  <Link to="/contact/">joining our email list.</Link>
                                </p>
                              </div>
                            </div>
                            <div>
                              <div className="grid-18 views-container">
                                <div className="grid-4">
                                  <div>
                                    <img
                                      alt="Web Success"
                                      src="/assets/media/28309541be6f3e54.png"
                                      loading="lazy"
                                      decoding="async"
                                    />
                                  </div>
                                </div>
                                <div className="grid-12">
                                  <strong>Website Strategy</strong> is about your website, your
                                  homebase from which you broadcast your products and services to
                                  the world.
                                </div>
                              </div>
                              <div className="grid-18 views-container">
                                <div className="grid-4">
                                  <div>
                                    <a
                                      href="/website-strategy/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <img
                                        alt="Web Success"
                                        src="/assets/media/be672ad097985c54.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="grid-12">
                                  <div></div>
                                  <div>
                                    <strong>eCommerce Strategy</strong> is about using your website
                                    to sell your products to your customers through orders from your
                                    online store.
                                  </div>
                                </div>
                              </div>
                              <div className="grid-18 views-container">
                                <div className="grid-4">
                                  <div>
                                    <a
                                      href="/content-strategy/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <img
                                        alt="Web Success"
                                        src="/assets/media/27a797f1aacfe869.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="grid-12">
                                  <div>
                                    <strong>Content Strategy</strong> is about producing content to
                                    reach audiences and draw attention to your site from search
                                    engine results.
                                  </div>
                                </div>
                              </div>
                              <div className="grid-18 views-container">
                                <div className="grid-4">
                                  <div>
                                    <a
                                      href="/social-media-strategy/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <img
                                        alt="Web Success"
                                        src="/assets/media/c7dbd3af3195db76.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="grid-12">
                                  <div>
                                    <strong>Social Media Strategy </strong>is about using social
                                    media to promote your product, services, and/or event(s) to your
                                    potential customers. Use social media to draw attention to your
                                    site.
                                  </div>
                                </div>
                              </div>
                              <div className="grid-18 views-container">
                                <div className="grid-4">
                                  <div>
                                    <a
                                      href="/email-strategy/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <img
                                        alt="Web Success"
                                        src="/assets/media/65554052f5b18d83.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="grid-12">
                                  <div>
                                    <strong>Email Strategy</strong> is about using email and
                                    newsletters to reach your audience and establish a direct line
                                    of communication with your customers.
                                  </div>
                                </div>
                              </div>
                              <div className="grid-18 views-container">
                                <div className="grid-4">
                                  <div>
                                    <a
                                      href="/search-strategy/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <img
                                        alt="Web Success"
                                        src="/assets/media/87786d673470953f.png"
                                        loading="lazy"
                                        decoding="async"
                                      />
                                    </a>
                                  </div>
                                </div>
                                <div className="grid-12">
                                  <div>
                                    <strong>Search Strategy</strong> is about understanding and
                                    utilizing SEO (Search Engine Optimization) to your advantage in
                                    order to bring audiences to your website.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              Web Success is also a Webinar series designed to guide business owners
                              in their digital transformation. The 9 Essentials of Web Success is a
                              ten-part Webinar series that provides business owners with the tools
                              needed to begin their digital transformation. Among other topics you
                              will learn about:
                            </div>
                            <div className="grid-18 views-container">
                              <div className="grid-5">
                                <img
                                  alt="Web Success"
                                  src="/assets/media/1b3e088d6c720291.png"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>
                              <div className="grid-8">
                                <ul>
                                  <li>How to increase online sales</li>
                                  <li>Integrating your online presence with your storefront </li>
                                  <li>
                                    Learn how Google Works — Search Engine Optimization and Search
                                    Engine Marketing
                                  </li>
                                  <li>Social Media Marketing to gain new customers</li>
                                  <li>Using Email Marketing to stay connected with customers</li>
                                  <li>Making the most of Bing, Yahoo, and Google Local Listings</li>
                                  <li>Buying Ads on Google, Facebook, Twitter, Yelp, and more</li>
                                  <li>How to Measure Your Success</li>
                                </ul>
                              </div>
                              <div className="grid-3">
                                <img
                                  alt="Web Success"
                                  src="/assets/media/1b3e088d6c720291.png"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>
                            </div>
                            <div>
                              <Link className="custombutton" to="/web-success-videos/">
                                Watch the Web Success Webinar Videos
                              </Link>
                            </div>
                            <h3>
                              <img
                                alt="Web Success"
                                src="/assets/media/1080bf095b2bb7c1.jpg"
                                loading="lazy"
                                decoding="async"
                              />
                            </h3>
                            <p>
                              Web success is a guide and a playbook for executing your own online
                              business strategy. Web Success is a suite of tools for helping your
                              business to reach new customers, increase sales, and improve your
                              bottom line. Your customized Web Success strategy develops over time
                              to meet your unique business needs. The Broadstreet team will give you
                              the tools, ideas, and insights needed to make the right decisions to
                              grow YOUR BUSINESS.
                            </p>
                            <p>
                              Be #1 on Google. Increase Sales. Reach new customers. Dominate local
                              markets. We have been helping our clients do these things for 10 years
                              using the Web Success method. I hope you will consider sitting in on
                              one of our upcoming Webinars. This program will help you make sense of
                              the current digital landscape and help you position your business
                              long-term sales growth.
                            </p>
                            <p>Tom Sliker</p>
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
