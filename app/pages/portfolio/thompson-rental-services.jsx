import { Link } from "react-router";
import CaseStudy, { caseStudyMeta } from "../../components/CaseStudy";

export const meta = () => caseStudyMeta("thompson-rental-services");

export default function PortfolioThompsonRentalServices() {
  return (
    <CaseStudy slug="thompson-rental-services">
      <p>
                              <a
                                href="http://www.thompsonrentalservices.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Thompson Rental Services
                              </a>
                              {
                                " is a large rental company in Columbia, South Carolina. They have 4 locations and offer a wide variety of rentals including portajohns, special event rentals, construction equipment & more. The manager of the company came to Broadstreet in 2010 with a familiar story - some guy started building their website but never finished. After a while it was hard to get in touch with him. They wanted to keep costs down, so we built a small & "
                              }
                              <Link to="/open-source-development-services/">
                                simple Drupal website
                              </Link>
                              , gave them a couple hours of training and they were able to load
                              their own products and build their own pages as needed. Since building
                              this site, they've continued to increase their services with
                              Broadstreet and increase their revenue each year. We — ve helped
                              Thompson grow their market online with{" "}
                              <Link to="/services/digital-marketing-strategy-and-support/">
                                monthly digital marketing support
                              </Link>
                              , maintaining and updating their website,{" "}
                              <Link to="/services/social-media-marketing/">social media</Link>{" "}
                              presence,{" "}
                              <Link to="/services/email-marketing/">e-mail campaigns</Link> and
                              investing in{" "}
                              <a href="/services/google-adwords-ppc-search-engine-marketing-consulting/">Google AdWords</a>.
                            </p>
                            <p>
                              {
                                "We now manage search & display Google AdWords campaigns for Thompson Rental Services, developing custom "
                              }
                              landing pages
                              {
                                ", creating custom graphics, and defining specific audiences using geo-targeting, remarketing, targeted keywords & more. We focus on "
                              }
                              <Link to="/services/search-engine-optimization-seo/">
                                search engine optimization
                              </Link>
                              {", social media, e-mail marketing & Google AdWords."}
                            </p>
                            <p>
                              Broadstreet manages and maintains their social media presence,
                              building customer relationships and establishing trust. Soon after
                              developing the website, Broadstreet began{" "}
                              <Link to="/services/email-marketing/">email marketing</Link>
                              {
                                " for Thompson Rentals using Constant Contact. We have established a significant mailing list of thousands of construction company's, wedding planners & organizations. We send out seasonal reminders of the products available for rent through Thompson Rental Services, maintaining a customer relationship with those who have shown interest in them or made purchases with them before."
                              }
                            </p>
                            <p>
                              Thompson Rentals continues to grow their customer-base and evolve into
                              a well-known, trusted rental company in South Carolina. We are looking
                              forward to a long relationship and helping them move forward with
                              their online marketing.
                            </p>
                            <div>
                              We offer free consultations to help determine which internet marketing
                              solutions are right for your business and your goals. <br />
                              <br />
                              <Link className="custombutton" to="/contact/">
                                Schedule A Free Consultation
                              </Link>
                            </div>
    </CaseStudy>
  );
}
