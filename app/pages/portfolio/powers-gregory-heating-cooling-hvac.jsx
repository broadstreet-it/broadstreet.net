import { Link } from "react-router";
import CaseStudy, { caseStudyMeta } from "../../components/CaseStudy";

export const meta = () => caseStudyMeta("powers-gregory-heating-cooling-hvac");

export default function PortfolioPowersGregoryHeatingCoolingHvac() {
  return (
    <CaseStudy slug="powers-gregory-heating-cooling-hvac">
      <p>
                              {
                                "Powers & Gregory Heating & Cooling has been serving Kershaw County for over 35 years. They came to us with an old website that had irrelevant content and wasn't used for much. We worked with them to "
                              }
                              <Link to="/services/mobile-friendly-website-design-development/">
                                design a website
                              </Link>{" "}
                              that is modern, mobile-friendly and serves a purpose. People can now
                              visit this website and see what type of products and services they
                              offer, who their service techs are, learn more about the company and
                              schedule appointment or request a quote. We also did some
                              customization to help the company have online chat as an option for
                              their customers.
                            </p>
                            <p>
                              We then got the company on a{" "}
                              <Link to="/services/digital-marketing-strategy-and-support/">
                                support plan that fits their needs
                              </Link>
                              . We now{" "}
                              <Link to="/services/social-media-marketing/">
                                post to their social media
                              </Link>{" "}
                              regularly for them, and we maintain and continue to add keyword-rich
                              content to their website. We{" "}
                              <Link to="/services/search-engine-optimization-seo/">
                                monitor their SEO
                              </Link>{" "}
                              and make improvements as necessary. They instantly started seeing
                              contacts coming in from their new website.
                            </p>
    </CaseStudy>
  );
}
