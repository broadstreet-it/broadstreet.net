import { Link } from "react-router";
import CaseStudy, { caseStudyMeta } from "../../components/CaseStudy";

export const meta = () => caseStudyMeta("rock-bottom-pond");

export default function PortfolioRockBottomPond() {
  return (
    <CaseStudy slug="rock-bottom-pond">
      <p>
                              Rock bottom pond is a local wedding venue in South Carolina who first
                              heard about Broadstreet through friends. Donna decided to meet with
                              Tom for a free consultation, where they discussed her current website
                              and online presence. Rock Bottom Pond had a website, but it wasn't
                              very modern and it wasn't up to date. She didn't have time to work on
                              it any more, and was ready to give her website more purpose.
                            </p>
                            <p>
                              She decided to let the Broadstreet team completely{" "}
                              <Link to="/services/mobile-friendly-website-design-development/">
                                redesign her website
                              </Link>
                              , create a new logo and joined on a{" "}
                              <Link to="/services/digital-marketing-strategy-and-support/">
                                monthly support plan for SEO
                              </Link>
                              , website changes and social media management. The Broadstreet team is
                              now adding photos to the website as requested, sharing posts on their{" "}
                              <Link to="/services/social-media-marketing/">
                                social media accounts
                              </Link>
                              , tracking her organic position in Google and working on SEO
                              regularly.
                            </p>
    </CaseStudy>
  );
}
