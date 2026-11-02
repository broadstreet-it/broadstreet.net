import { Link } from "react-router";
import CaseStudy, { caseStudyMeta } from "../../components/CaseStudy";

export const meta = () => caseStudyMeta("laureledu");

export default function PortfolioLaureledu() {
  return (
    <CaseStudy slug="laureledu">
      <div>
                              <a href="http://www.laurel.edu/">Laurel</a> is a private Pennsylvania
                              college that was founded in 1985. In 2014 when they first came to us
                              for help, they had a static HTML Website that was difficult to manage
                              and hard to read on a mobile browser. They had tried several low-cost
                              developers and were having a hard time finding the right blend of
                              expertise and economy. We started with a{" "}
                              <Link to="/services/mobile-friendly-website-design-development/">
                                drastic website redesign
                              </Link>{" "}
                              in which we switched them over to a drupal website and moved their
                              site to our server and helped them re-organize the site, effectively
                              merging three separate sites into one cohesive, visually appealing
                              website. Because of the easy functionality of our{" "}
                              <Link to="/open-source-development-services/">
                                Drupal website platform
                              </Link>
                              , the Laurel staff can keep the site up to date. Because they have
                              joined Broadstreet's{" "}
                              <Link to="/services/digital-marketing-strategy-and-support/">
                                ongoing support plan
                              </Link>
                              , we have monthly strategy and review meetings, we perform upgrades,
                              redesigns, and we regularly help with content updates. Since the
                              Website makeover, the Laurel staff has received many positive comments
                              from students and staff. Now more than 60% of the Website's traffic is
                              from mobile devices, search engine results are improved, and the
                              school is now positioned to invest more in promoting and advertising
                              their Website.{" "}
                            </div>
                            <div>
                              <p>
                                In our monthly support with Laurel, we have chosen to focus on{" "}
                                <Link to="/services/search-engine-optimization-seo/">
                                  search engine optimization
                                </Link>
                                ,{" "}
                                <Link to="/services/content-management-development/">
                                  content creation
                                </Link>
                                , and Google AdWords. By aligning these things, we have developed
                                cost-effective Google Ad campaigns helping Laurel capture more of
                                their market online and make{" "}
                                <a href="/search-engine-marketing-services/">Google AdWords</a> its
                                primary source of advertising. Since we began managing their Google
                                AdWords in 2015, they have invested triple the budget they started
                                with and are getting five times the conversions while increasing
                                their CTR from .89% to 4.75%. We've developed custom{" "}
                                <a
                                  href="http://www.busbeetruckparts.com/isuzu-cabs-landing"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  landing pages
                                </a>
                                , created custom display ads, and targeted four separate locations
                                for four separate schools.{" "}
                              </p>
                              <p>
                                Laurel has also invested pretty heavily in social media marketing on{" "}
                                <a
                                  href="https://www.facebook.com/BusbeeTruckParts"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Facebook
                                </a>
                                {
                                  ". For a fraction of his AdWords budget, he has been able to run ads on Instagram & Facebook, which has drastically increased his conversion rate in Google AdWords. We maintain and manage their Facebook ad accounts for four schools, reaching more potential students, and building brand awareness. Once a user has visited the website, we then use AdWords remarketing to show ads to these prospective students continuously. We've created an online marketing strategy that Laurel has found to be worth investing in, and we are looking forward to seeing their online presence continue to improve and grow."
                                }
                              </p>
                            </div>
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
