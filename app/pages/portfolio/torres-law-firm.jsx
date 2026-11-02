import { Link } from "react-router";
import CaseStudy, { caseStudyMeta } from "../../components/CaseStudy";

export const meta = () => caseStudyMeta("torres-law-firm");

export default function PortfolioTorresLawFirm() {
  return (
    <CaseStudy slug="torres-law-firm">
      <p>
                              Torres Law Firm came to us in 2018 when they decided it was time to
                              invest in{" "}
                              <Link to="/be-number-1-on-google/">
                                improving their presence on Google
                              </Link>
                              . We worked with them to{" "}
                              <a href="https://services/mobile-friendly-website-design-development">
                                design a beautiful, mobile-friendly website
                              </a>{" "}
                              optimized for the search engines. We developed keyword rich content
                              throughout the website. We also helped claim their Google Business
                              Listing and dress it up to show all the correct information, look
                              professional and truly represent the business better.
                            </p>
    </CaseStudy>
  );
}
