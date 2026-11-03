import CaseStudy, { caseStudyMeta } from "../../components/CaseStudy";

export const meta = () => caseStudyMeta("kershaw-county-council-on-aging");

export default function PortfolioKershawCountyCouncilOnAging() {
  return (
    <CaseStudy slug="kershaw-county-council-on-aging">
      {/* TODO: replace with the client story. */}
      <p className="draft">Story coming soon. Content to be provided.</p>
      <p>
        Broadstreet.net built and hosts the website for the Kershaw County Council on Aging, which
        serves seniors across Kershaw County, South Carolina.
      </p>
    </CaseStudy>
  );
}
