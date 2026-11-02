import { Link } from "react-router";
import CaseStudy, { caseStudyMeta } from "../../components/CaseStudy";

export const meta = () => caseStudyMeta("cotdoc");

export default function PortfolioCotdoc() {
  return (
    <CaseStudy slug="cotdoc">
      <p>
                              Cot Care / Chair Care has been in business for over 20 years and
                              finally decided it was time to sell online. What started out as a
                              repair service business has transformed into a marketplace for parts
                              for Stryker Stretcher Parts, Ferno Stretcher Parts, and other parts
                              related to stretchers, cots, and wheel chairs.
                            </p>
                            <blockquote>
                              <p>Sales growth is strong! - Larry Parker, CotDoc Partner</p>
                            </blockquote>
                            <p>
                              Broadstreet helped CotDoc to build a Total Online Presence, step by
                              step over many years, and that investment is now paying dividends in
                              the form of increasing sales and greater profits. Here are a few of
                              the ways that Broadstreet has helped CotDoc:
                            </p>
                            <h2>Mobile Friendly Web Development</h2>
                            <p>
                              We started with a simple Drupal Website with plenty of content, and
                              very soon found ourselves #1 on Google for a number of organic
                              results.
                            </p>
                            <h2>Search Engine Optimization</h2>
                            <p>
                              Building a content rich site, creating backlinks, and making sure all
                              metadata makes Google happy, and soon we are #1 for even more terms,
                              and Website traffic soars.
                            </p>
                            <p>
                              <Link to="/book-now/">
                                <img
                                  alt="CotDoc"
                                  src="/assets/media/db774a7d6c7f30b6.png"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </Link>{" "}
                              <a href="tel:8034227629">
                                <img
                                  alt="CotDoc"
                                  src="/assets/media/b3ccdf69bf19baf6.jpg"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </a>
                            </p>
                            <h2>eCommerce Development</h2>
                            <p>We added Drupal Commerce and began selling online.</p>
                            <h2>eMail Marketing</h2>
                            <p>
                              We built a mailing last and started communicating with our customers
                              and prospects on a regular basis.
                            </p>
                            <h2>Search Marketing with Google AdWords</h2>
                            <p>
                              <iframe
                                src="https://www.youtube.com/embed/a4c_eEWVzoU"
                                title="CotDoc video"
                                loading="lazy"
                                allowFullScreen
                              ></iframe>
                            </p>
    </CaseStudy>
  );
}
