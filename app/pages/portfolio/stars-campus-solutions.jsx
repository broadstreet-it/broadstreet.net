import { Link } from "react-router";
import CaseStudy, { caseStudyMeta } from "../../components/CaseStudy";

export const meta = () => caseStudyMeta("stars-campus-solutions");

export default function PortfolioStarsCampusSolutions() {
  return (
    <CaseStudy slug="stars-campus-solutions">
      <p>
                              In the fall of 2019, we began talking with Bob of STARS Campus
                              Solutions, a CRM and SIS system for postsecondary career colleges and
                              school since 1995. Located in Pennsylvania, Bob was looking for a
                              recommendation from a friend for a company who could help increase his
                              leads through the STARS website. They had an outdated site, with a
                              rather large Google AdWords campaign, but weren't getting as many
                              leads as they thought they should.
                            </p>
                            <p>
                              In January of 2020, Broadstreet designed a completely{" "}
                              <Link to="/services/mobile-friendly-website-design-development/">
                                modern, mobile-friendly website{" "}
                              </Link>
                              with keyword-rich content and a clear call to action. Bob's team
                              worked with Broadstreet to build out the content, and it quickly began
                              ranking higher organically in the search engines and bringing in more
                              leads.
                            </p>
                            <p>
                              Broadstreet also was hired to improve their performance on Google Ads.
                              STARS Campus is now on a monthly support plan for regular{" "}
                              <Link to="/services/search-engine-optimization-seo/">SEO</Link>
                              {" & changes to the website as well as "}
                              <a href="http://t/services/google-adwords-ppc-search-engine-marketing-consulting">
                                Google Ad management
                              </a>
                              .
                            </p>
    </CaseStudy>
  );
}
