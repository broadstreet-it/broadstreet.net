import { Link } from "react-router";
import CaseStudy, { caseStudyMeta } from "../../components/CaseStudy";

export const meta = () => caseStudyMeta("tyler-brothers");

export default function PortfolioTylerBrothers() {
  return (
    <CaseStudy slug="tyler-brothers">
      <p>
                              <a href="http://www.tylerbrothers.net/">
                                Tyler Brothers department store
                              </a>{" "}
                              was founded in 1906 in the town of Wagener, SC. In 2006, the third
                              generation of Tyler Brothers, John and Al Tyler, asked us to help
                              transform their small-town business into one that could extend well
                              beyond the town limits. In 2010, Broadstreet and Tyler Brothers
                              decided to{" "}
                              <Link to="/open-source-development-services/">
                                port the site to Drupal
                              </Link>
                              , using the powerful Ubercart platform to provide Shopping Cart and{" "}
                              <Link to="/sell-your-products-online/">e-Commerce functionality</Link>
                              . With the easy functionality of Drupal, the Tylers are able to
                              maintain the on-line store themselves with regular product updates,
                              while we provide{" "}
                              <Link to="/services/digital-marketing-strategy-and-support/">
                                monthly digital marketing support
                              </Link>
                              , maintaining and updating their website content,{" "}
                              <Link to="/services/social-media-marketing/">social media</Link>{" "}
                              presence, and individualized on-line campaigns through{" "}
                              <Link to="/services/email-marketing/">e-mail marketing</Link>
                              {", Facebook & "}
                              <a href="/search-engine-marketing-services/">Google AdWords</a>. The
                              Tylers say as old as the store is, their customers continue getting
                              younger thanks to their on-line presence.
                            </p>
                            <p>
                              Once Broadstreet launched an e-commerce site to serve as the
                              foundation for the Tyler Brothers brand on-line, the store began to
                              expand their reach selling clothing and boots to new customers across
                              the nation.
                            </p>
                            <p>
                              Tyler Brothers then allowed us to expand their brand on social media
                              platforms such as{" "}
                              <a
                                href="https://www.facebook.com/TylerBros"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Facebook
                              </a>
                              ,{" "}
                              <a
                                href="https://twitter.com/Tylerbrothers"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Twitter
                              </a>
                              {" & "}
                              <a
                                href="https://instagram.com/tylerbrothers1904"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Instagram
                              </a>
                              {
                                ". By posting regular inventory updates and managing contests and giveaways they have generated a buzz in social media, resulting in younger customers and more sales. They continue to expand their social media presence using new platforms such as Snapchat. Social media marketing allows them to build & maintain a relationship with current clients while reaching thousands of fans who are interested in Tyler Brothers and want to do business with them."
                              }
                            </p>
                            <p>
                              {
                                "In addition to a powerful e-Commerce site & social media marketing, Broadstreet provides Tyler Brothers with general on-line and communications expertise that includes"
                              }
                            </p>
                            <ol>
                              <li>
                                <Link to="/services/google-business-profile/">
                                  Showing Up Locally
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/search-engine-optimization-seo/">
                                  Search Engine Optimization
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/content-management-development/">
                                  Content Development (articles, new pages, graphic design)
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/email-marketing/">
                                  Permission-Based Email Marketing
                                </Link>
                              </li>
                              <li>
                                <Link to="/services/google-adwords-ppc-search-engine-marketing-consulting/">
                                  Search Engine Marketing
                                </Link>
                              </li>
                            </ol>
                            <p>
                              Broadstreet implements email marketing campaigns for Tyler Brothers
                              using{" "}
                              <a href="http://www.constantcontact.com/welcomeback">
                                Constant Contact
                              </a>
                              , sending promotional emails with current deals, upcoming sales and
                              supporting print campaigns such as a{" "}
                              <a href="http://archive.constantcontact.com/fs123/1102168756385/archive/1114921198337.html">
                                Carhartt campaign
                              </a>{" "}
                              or the annual Christmas Sale. Together with Constant Contact, we are
                              able to help Tyler Brothers build relationships, drive revenue and
                              track their success with real results.
                            </p>
                            <p>
                              We also are able to use co-op funds from certain brands that they sell
                              to run special AdWords campaigns throughout the year.
                            </p>
                            <p>
                              This business in the small, rural town of Wagener, South Carolina
                              continues to see the power of investing in their on-line presence, and
                              we can't wait to see what the future holds for them.
                            </p>
                            <div>
                              We offer free consultations to help determine which internet marketing
                              solutions are right for your business and your goals. <br />
                              <br />
                              <Link className="custombutton" to="/book-now/">
                                Schedule A Free Consultation
                              </Link>
                            </div>
    </CaseStudy>
  );
}
