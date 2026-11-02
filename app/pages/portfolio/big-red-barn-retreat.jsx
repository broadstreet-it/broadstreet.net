import { Link } from "react-router";
import CaseStudy, { caseStudyMeta } from "../../components/CaseStudy";

export const meta = () => caseStudyMeta("big-red-barn-retreat");

export default function PortfolioBigRedBarnRetreat() {
  return (
    <CaseStudy slug="big-red-barn-retreat">
      <p>
                              The Big Red Barn Retreat (BRBR) is a non-profit in Blythewood, SC,
                              designed to help our military members find peace and healing when they
                              return to civilian life. They began operation in 2014 to honor the
                              memory of Leon Irons, who served in the Navy on the USS Independence
                              out of high school. When Leon passed away from cancer in 2009, his
                              family purchased land and decided to open BRBR to honor Leon's deep
                              love and respect for his country as well as the brave men and women
                              who serve to protect it.
                            </p>
                            <p>
                              The BRBR sits on 75-acres of beautiful woods and is designed to offer
                              therapeutic services to our service members, both active and veteran,
                              and their immediate families suffering from military or combat-related
                              stress issues in a non-clinical environment. The programs they offer
                              include therapeutic yoga classes, equine-assisted psychotherapy,
                              healing art workshops, peer-to-peer mentorship, and coffee groups that
                              meet weekly, among many other programs. In addition to these programs,
                              the BRBR property is home to over five miles of trails, a fishing
                              pond, an outdoor pavilion with a fire pit, and a large vegetable
                              garden.
                            </p>
                            <p>
                              Broadstreet met with the BRBR in the fall of 2019 to redesign their
                              website and work to develop a{" "}
                              <Link to="/services/digital-marketing-strategy-and-support/">
                                digital marketing strategy
                              </Link>{" "}
                              to reach both the communities in need and the communities in a
                              position to support their work. Through the generous donations of
                              private citizens and grants such as the Dorothy Smith Foundation and
                              The Cheerful Giver, the BRBR can offer these therapeutic services to
                              Veterans and active-duty service members at little to no cost.
                            </p>
                            <p>
                              As BRBR expanded the services they offered, the expectations of their
                              web presence grew significantly, causing them to look for support to
                              craft a professional online presence. Broadstreet was chosen as that
                              professional team willing to join in the cause, and we are excited to
                              see their{" "}
                              <a href="https://www.thebigredbarnretreat.org/">new site take off</a>!
                            </p>
                            <p>
                              Due to existing partnerships and the ability to take donations online
                              through PayPal, BRBR wanted to build their website with Squarespace,
                              with which Broadstreet has experience. Our team worked with BRBR to{" "}
                              <Link to="/services/content-management-development/">
                                curate content
                              </Link>{" "}
                              designed to get the best{" "}
                              <Link to="/services/search-engine-optimization-seo/">
                                search engine optimization (SEO)
                              </Link>{" "}
                              for Squarespace. Making BRBR{" "}
                              <Link to="/services/google-adwords-ppc-search-engine-marketing-consulting/">
                                number one on Google
                              </Link>{" "}
                              is critical to ensure our military family members can easily find
                              their services.
                            </p>
                            <p>
                              <Link to="/services/">Ongoing support</Link> for BRBR looks like
                              continued enhancements to the website as their programs change and
                              grow and{" "}
                              <Link to="/services/social-media-marketing/">
                                social media support
                              </Link>{" "}
                              and technical expertise to help expand their reach and grow in their
                              mission to change lives.
                            </p>
                            <div>
                              We offer free consultations to help determine which internet marketing
                              solutions are right for your business and your goals. <br />
                              <br />
                              <br />
                              <br />
                              <Link className="custombutton" to="/book-now/">
                                Schedule a Free Consultation
                              </Link>
                            </div>
    </CaseStudy>
  );
}
