import { Link } from "react-router";
import CaseStudy, { caseStudyMeta } from "../../components/CaseStudy";

export const meta = () => caseStudyMeta("brazell-exterminating-home-repair");

export default function PortfolioBrazellExterminatingHomeRepair() {
  return (
    <CaseStudy slug="brazell-exterminating-home-repair">
      <p>
                              {
                                "Brazell Exterminating & Home Repair is small, local company based out of Camden, SC. Richard Brazell had been in the Pest Control industry for over 20 years when he came to us for help growing his business through the use of"
                              }
                              <Link to="/reach-your-next-generation-customers-online-marketing/">
                                {" "}
                                online marketing
                              </Link>
                              .{" "}
                            </p>
                            <p>
                              We set him up on a payment and{" "}
                              <Link to="/services/digital-marketing-strategy-and-support/">
                                support plan
                              </Link>{" "}
                              that included a mobile-friendly website that is
                              <Link to="/services/search-engine-optimization-seo/">
                                {" "}
                                optimized for the search engine.
                              </Link>{" "}
                              We worked with Richard to create a welcoming front page that lays out
                              clearly his top services, as well as keyword-rich pages. Through his
                              support plan, he will continue to get help maintaining the website and
                              building keyword-rich content.
                            </p>
    </CaseStudy>
  );
}
