import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Meet the Broadstreet Team | Camden, SC Digital Marketing",
    description:
      "Meet the people behind Broadstreet’s website development, design, content, and digital marketing services for businesses in South Carolina and beyond.",
    canonical: "https://broadstreet.net/staff/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/staff/#webpage",
        url: "https://broadstreet.net/staff/",
        name: "Meet the Broadstreet Team | Camden, SC Digital Marketing",
        description:
          "Meet the people behind Broadstreet’s website development, design, content, and digital marketing services for businesses in South Carolina and beyond.",
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
            name: "People you can count on.",
            item: "https://broadstreet.net/staff/",
          },
        ],
      },
    ],
  });

export default function Staff() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / People you can count on.
          </nav>
          <h1>People you can count on.</h1>
          <p className="lead">
            Meet the people behind Broadstreet’s website development, design, content, and digital
            marketing services for businesses in South Carolina and beyond.
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
                  <div className="view view-staff-list view-id-staff_list view-display-id-page_1 view-dom-id-2ef98e083d7e2d97c96c52b41324f608">
                    <div className="view-content">
                      <div className="views-row views-row-1 views-row-odd views-row-first">
                        <div className="views-field views-field-body">
                          <div className="field-content">
                            <div className="grid-18 views-container">
                              <div className="grid-5">
                                <div className="grid-4">
                                  <Link to="/tom-sliker/">
                                    <img
                                      alt="People you can count on."
                                      src="/assets/media/7e4ee0f3f0a6207e.jpg"
                                      loading="lazy"
                                      decoding="async"
                                      width="471"
                                      height="480"
                                    />
                                  </Link>
                                </div>
                                <div className="grid-4">
                                  <h3>
                                    <Link to="/tom-sliker/">Tom Sliker</Link>
                                  </h3>
                                  <h5>President / CEO / Lead Consultant</h5>
                                  <p>@tsliker</p>
                                  <p>www.facebook.com/sliker</p>
                                </div>
                              </div>
                              <div className="grid-">
                                <p>
                                  Tom Sliker serves as the ringleader for the Broadstreet team and
                                  has managed to build a diverse, talented, multi-faceted team that
                                  has performed a wide range of projects. With over 30 years of
                                  software development and integration experience, Tom brings a
                                  wealth of technical and business knowledge to his customers and
                                  his team.
                                </p>
                                <p>
                                  {
                                    "Tom graduated with a B.S. in Computer Science from the University of South Carolina. For ten years, he developed financial software for corporations such as BellSouth and Westinghouse. In the mid-1990’s, Tom began working as a consultant and software project manager throughout SC & served as a manager in two high-tech startups. From 2001-2013, Tom has worked in various roles for AgFirst Farm Credit Bank, located in Columbia, SC, and along the way picked up an MBA from the University of South Carolina, with a focus on International Business. "
                                  }
                                </p>
                                <p>
                                  In May of 2013, Tom left his day job to focus full-time on
                                  Broadstreet Consulting. Besides the work of Broadstreet, Tom also
                                  stays busy promoting Drupal and building the local Drupal
                                  community through meetups and camps.
                                </p>
                                <p>
                                  When he's not on his computer, Tom can be found hiking nearby or
                                  somewhere in the mountains.{" "}
                                  <Link to="/tom-sliker-technical-expert-digital-marketing-social-media-google-seo-search-marketing/">
                                    Podcasts and videos featuring Tom.{" "}
                                  </Link>
                                </p>
                                <p>
                                  <strong>Connect with Tom: </strong>
                                </p>
                                <div className="social">
                                  <a
                                    className="fa fa-linkedin-square  fa-3x"
                                    href="http://www.linkedin.com/pub/tom-sliker/5/532/8a6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  ></a>
                                  <a
                                    className="fa fa-facebook-square fa-3x"
                                    href="https://www.facebook.com/sliker"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  ></a>{" "}
                                  <a
                                    className="fa fa-twitter-square fa-3x"
                                    href="https://www.twitter.com/tsliker"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  ></a>{" "}
                                  <a
                                    className="fa fa-instagram  fa-3x"
                                    href="https://instagram.com/tsliker"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  ></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="views-row views-row-2 views-row-even">
                        <div className="views-field views-field-body">
                          <div className="field-content">
                            <div className="grid-18 views-container">
                              <div className="grid-5">
                                <div className="grid-4">
                                  <Link to="/buster/">
                                    <img
                                      alt="People you can count on."
                                      src="/assets/media/e665ae804fd1c8ea.jpg"
                                      loading="lazy"
                                      decoding="async"
                                      width="480"
                                      height="360"
                                    />
                                  </Link>
                                </div>
                                <div className="grid-4">
                                  <h3>
                                    <Link to="/buster/">Buster</Link>
                                  </h3>
                                  <h5>Employee of the Century - Chief Happiness Officer</h5>
                                </div>
                              </div>
                              <div className="grid-">
                                <h2></h2>
                                <p>
                                  Buster may technically belong to Tom, our owner, but around the
                                  office everyone knows who is really in charge. As Broadstreet’s
                                  unofficial Chief Happiness Officer, Buster keeps the team (and
                                  Tom) on schedule with plenty of tail wags, friendly greetings, and
                                  important supervision.
                                </p>
                                <p>
                                  A familiar face around Camden, Buster is Tom’s loyal sidekick and
                                  can often be found tagging along on adventures throughout the
                                  community. Whether he's riding along for a local outing, exploring
                                  the great outdoors, or simply making new friends, Buster loves
                                  being wherever the action is.
                                </p>
                                <p>
                                  When he's not out adventuring, you can usually find him welcoming
                                  clients at the office door or soaking up the sunshine in his
                                  favorite spot inside the office. His responsibilities include
                                  greeting visitors, providing moral support, and reminding everyone
                                  that a little fresh air and fun are essential parts of a good
                                  workday.
                                </p>
                                <p>
                                  Buster brings a little extra personality to Broadstreet every day,
                                  and we're pretty sure our clients enjoy seeing him just as much as
                                  we enjoy having him here.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="views-row views-row-3 views-row-odd">
                        <div className="views-field views-field-body">
                          <div className="field-content">
                            <div className="grid-18 views-container">
                              <div className="grid-5">
                                <div className="grid-4">
                                  <Link to="/tiffany-massey/">
                                    <img
                                      alt="People you can count on."
                                      src="/assets/media/14b1b5df5288f388.png"
                                      loading="lazy"
                                      decoding="async"
                                      width="480"
                                      height="480"
                                    />
                                  </Link>
                                </div>
                                <div className="grid-4">
                                  <h3>
                                    <Link to="/tiffany-massey/">Tiffany Massey</Link>
                                  </h3>
                                  <h5>Content Specialist</h5>
                                  <p>tiffany@broadstreet.net</p>
                                </div>
                              </div>
                              <div className="grid-">
                                <p>
                                  As a Content Specialist for Broadstreet Consulting, Tiffany Massey
                                  enjoys building relationships with clients and enabling them to
                                  represent their businesses in innovative ways online. Based in
                                  Camden, SC, Tiffany graduated from Grand Canyon University with a
                                  Bachelor of Arts in Advertising and Public Relations with an
                                  Emphasis in Advertisement Design. When she isn — t behind the
                                  computer, she enjoys spending time with her husband, Derek, and
                                  their toddler, Tucker.
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
                      </div>
                      <div className="views-row views-row-4 views-row-even">
                        <div className="views-field views-field-body">
                          <div className="field-content">
                            <div className="grid-18 views-container">
                              <div className="grid-5">
                                <div className="grid-4">
                                  <Link to="/danielle-wolsleben/">
                                    <img
                                      alt="People you can count on."
                                      src="/assets/media/6cd35eb1f422c5f8.jpg"
                                      loading="lazy"
                                      decoding="async"
                                      width="480"
                                      height="480"
                                    />
                                  </Link>
                                </div>
                                <div className="grid-4">
                                  <h3>
                                    <Link to="/danielle-wolsleben/">Danielle Wolsleben</Link>
                                  </h3>
                                  <h5>Content Specialist</h5>
                                  <p>daniellew@broadstreet.net</p>
                                </div>
                              </div>
                              <div className="grid-">
                                <p>
                                  Danielle is a Nebraska native with a B.A. in Graphic Design from
                                  Wayne State College. She joined Broadstreet in 2021 after Air
                                  Force life brought her family to Camden, SC. Since then, Danielle
                                  and Nevin have welcomed two little boys into the family, and their
                                  next adventure has taken them to Texas.
                                  <br />
                                  <br />
                                  <br />
                                  <br /> As a Content Specialist, Danielle helps Broadstreet clients
                                  create strong, consistent online identities through graphic design
                                  and digital content. Her work includes social media content,
                                  website design, logo design, and brand development.
                                  <br />
                                  <br />
                                  <br />
                                  <br /> Outside of work, Danielle embraces the wonderfully busy
                                  life of a boy mom. She enjoys family adventures, home projects,
                                  photography, movies, and relaxing whenever she gets the chance.
                                </p>
                                <p>
                                  <strong>Connect with Danielle: </strong>
                                </p>
                                <div className="social">
                                  <a
                                    className="fa fa-linkedin-square  fa-3x"
                                    href="https://www.linkedin.com/in/daniellerutar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  ></a>
                                  <a
                                    className="fa fa-facebook-square fa-3x"
                                    href="https://www.facebook.com/danielle.rutar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  ></a>{" "}
                                  <a
                                    className="fa fa-instagram  fa-3x"
                                    href="https://www.instagram.com/daniellewolsleben/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  ></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="views-row views-row-5 views-row-odd">
                        <div className="views-field views-field-body">
                          <div className="field-content">
                            <div className="grid-18 views-container">
                              <div className="grid-5">
                                <div className="grid-4">
                                  <Link to="/john-jackson/">
                                    <img
                                      alt="People you can count on."
                                      src="/assets/media/0230f500a11500d2.jpg"
                                      loading="lazy"
                                      decoding="async"
                                      width="269"
                                      height="480"
                                    />
                                  </Link>
                                </div>
                                <div className="grid-4">
                                  <h3>
                                    <Link to="/john-jackson/">John Jackson</Link>
                                  </h3>
                                  <h5>Web Developer</h5>
                                  <p>john@broadstreet.net</p>
                                </div>
                              </div>
                              <div className="grid-">
                                <p>
                                  John Jackson, hailing from Cassatt, SC, brings a passion for
                                  technology and entrepreneurship to his role in sales at
                                  Broadstreet. From his early days tinkering with PlayStation
                                  consoles to diving into coding and digital marketing ventures,
                                  John's diverse background enriches the team’s creative approach.
                                  Under the mentorship of Tom Sliker, founder and president of
                                  Broadstreet, John has quickly embraced his position, demonstrating
                                  remarkable progress and dedication.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="views-row views-row-6 views-row-even">
                        <div className="views-field views-field-body">
                          <div className="field-content">
                            <div className="grid-18 views-container">
                              <div className="grid-5">
                                <div className="grid-4">
                                  <Link to="/mary-souto/">
                                    <img
                                      alt="People you can count on."
                                      src="/assets/media/3fd486d91ad86bbf.jpg"
                                      loading="lazy"
                                      decoding="async"
                                      width="480"
                                      height="477"
                                    />
                                  </Link>
                                </div>
                                <div className="grid-4">
                                  <h3>
                                    <Link to="/mary-souto/">Mary Souto</Link>
                                  </h3>
                                  <h5>Content Specialist - Web Design</h5>
                                  <p>mary@broadstreet.net</p>
                                </div>
                              </div>
                              <div className="grid-">
                                <p>
                                  Mary joins our team from Lugoff, where she shares her home with
                                  her husband, four daughters, and two black labs who have proudly
                                  earned the title of — the best dogs ever. — With a passion for
                                  creativity and storytelling, Mary brings years of experience in
                                  marketing, graphic design, and digital content creation to
                                  Broadstreet.
                                </p>
                                <p>
                                  As a content specialist, Mary helps bring our clients — brands to
                                  life through engaging messaging, thoughtful strategy, and creative
                                  campaigns. She also works as one of our web designers, combining
                                  her eye for design with her understanding of what makes a website
                                  both beautiful and effective.
                                </p>
                                <p>
                                  Whether she's crafting the perfect social media post, creating a
                                  fresh website design, or helping businesses connect with their
                                  customers, Mary brings creativity, attention to detail, and a
                                  genuine passion for helping local businesses grow.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="views-row views-row-7 views-row-odd views-row-last">
                        <div className="views-field views-field-body">
                          <div className="field-content">
                            <div className="grid-18 views-container">
                              <div className="grid-5">
                                <div className="grid-4">
                                  <Link to="/nyia-langley/">
                                    <img
                                      alt="People you can count on."
                                      src="/assets/media/3c9cc6372edded63.png"
                                      loading="lazy"
                                      decoding="async"
                                      width="384"
                                      height="480"
                                    />
                                  </Link>
                                </div>
                                <div className="grid-4">
                                  <h3>
                                    <Link to="/nyia-langley/">Nyia Langley</Link>
                                  </h3>
                                  <h5>Content Specialist</h5>
                                </div>
                              </div>
                              <div className="grid-">
                                <p>
                                  Nyia Langley brings over 7 years of social media strategy and
                                  content experience to the Broadstreet team. She specializes in
                                  helping brands build a consistent, strategic online presence,
                                  creating content that reflects who they are and speaks directly to
                                  the people they want to reach. Nyia believes great content starts
                                  with clarity, and she loves helping businesses find theirs.
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
