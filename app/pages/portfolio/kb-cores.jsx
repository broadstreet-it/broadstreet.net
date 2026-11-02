import { Link } from "react-router";
import CaseStudy, { caseStudyMeta } from "../../components/CaseStudy";

export const meta = () => caseStudyMeta("kb-cores");

export default function PortfolioKbCores() {
  return (
    <CaseStudy slug="kb-cores">
      <p>
                              KB Cores was founded in 1993. Their 176,000 square foot headquarters
                              is home to thousands of quality cores and automotive parts. They
                              process over a thousand engines and transmissions every day.
                            </p>
                            <p>
                              KB Cores had a wordpress website that acted as an online bulletin for
                              their business. They came to us when they decided they were ready to
                              plunge into the real world of online marketing by{" "}
                              <Link to="/services/mobile-friendly-website-design-development/">
                                moving their website to drupal
                              </Link>{" "}
                              and focusing on SEO and SEM.
                            </p>
                            <p>
                              KB Cores has joined Broadstreet Consulting's{" "}
                              <Link to="/services/digital-marketing-strategy-and-support/">
                                monthly support for online marketing
                              </Link>
                              . They get weekly website updates,{" "}
                              <Link to="/services/search-engine-optimization-seo/">
                                SEO improvements
                              </Link>
                              , and{" "}
                              <Link to="/services/google-adwords-ppc-search-engine-marketing-consulting/">
                                Google Adwords consulting/management
                              </Link>
                              . We track and manage their organic and paid search results weekly as
                              well as perform regular content updates to the website.
                            </p>
                            <p>
                              With worldwide shipping available, KB Cores is a valued business
                              partner in the core and parts exporting business. They also buy used
                              engine cores, transmission cores and scrap.{" "}
                            </p>
    </CaseStudy>
  );
}
