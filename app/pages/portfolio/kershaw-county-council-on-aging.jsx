import { Link } from "react-router";
import CaseStudy, { caseStudyMeta } from "../../components/CaseStudy";

export const meta = () => caseStudyMeta("kershaw-county-council-on-aging");

export default function PortfolioKershawCountyCouncilOnAging() {
  return (
    <CaseStudy slug="kershaw-county-council-on-aging">
      {/* Full story to come from the client. */}
      <p>
        Broadstreet.net built and hosts the website for the Kershaw County Council on Aging, which
        serves seniors across Kershaw County, South Carolina.
      </p>
      <p>
        Hear from Bruce Little about working with Broadstreet:{" "}
        <Link to="/kershaw-county-council-aging-testimonial/">watch his video testimonial</Link>.
      </p>
    </CaseStudy>
  );
}
