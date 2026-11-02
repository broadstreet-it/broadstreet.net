import { Link } from "react-router";
import CaseStudy, { caseStudyMeta } from "../../components/CaseStudy";

export const meta = () => caseStudyMeta("browns-oil-lube");

export default function PortfolioBrownsOilLube() {
  return (
    <CaseStudy slug="browns-oil-lube">
      <p>
                              {
                                "Brown's Oil & Lube came to Broadstreet with a website that had been built and maintained by \"one of the most trusted providers of websites for the automotive industry.\" He wasn't happy at all with his website. He didn't like that they had stock photos, the content was focused on a whole lot of services he didn't offer, and no one used his website to fill out contact forms. He wanted the website to feel local, and he wanted people to easily get directions to his store front. He had a clear idea of what he wanted his website to be, and he wasn't able to get the help he needed with his current provider."
                              }
                            </p>
                            <p>
                              Broadstreet quickly put together a design based off of his complaints,
                              and{" "}
                              <Link to="/services/mobile-friendly-website-design-development/">
                                designed a modern, mobile-friendly website
                              </Link>{" "}
                              that had{" "}
                              <Link to="/services/search-engine-optimization-seo/">
                                keyword-rich content
                              </Link>{" "}
                              to help him show up locally for the specific services that he offers.
                              We were able to go to his location and take photos for the website and
                              avoid using stock photos. Brown's also signed on with Broadstreet for
                              a{" "}
                              <Link to="/services/social-media-marketing/">
                                monthly social media support package
                              </Link>
                              , so we immiediately began creating and claiming his social media
                              accounts, including Google My Business, and set up a monthly strategy
                              to work with the staff directly and post local, friendly content.
                            </p>
    </CaseStudy>
  );
}
