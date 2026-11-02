import { Link } from "react-router";
import CaseStudy, { caseStudyMeta } from "../../components/CaseStudy";

export const meta = () => caseStudyMeta("handy-man-purpose-llc");

export default function PortfolioHandyManPurposeLlc() {
  return (
    <CaseStudy slug="handy-man-purpose-llc">
      <p>
                              Handy Man on Purpose, LLC came to us in early 2020 with a Squarespace
                              website they had built themselves. It was using the theme originally
                              designed for a lawyer, it was a very dark and serious theme with
                              little room for creativity and customization. After scheduling a free
                              consultation with Broadstreet, Joey, the owner, decided to work with
                              Broadstreet to enhance the current website through Search Engine
                              Optimization (SEO) and design. Joey also joined Broadstreet for a
                              monthly support plan in which we provide ongoing updates to the
                              Website and manage their{" "}
                              <Link to="/services/social-media-marketing/">
                                Social Media (Facebook and Instagram)
                              </Link>
                              .
                            </p>
    </CaseStudy>
  );
}
