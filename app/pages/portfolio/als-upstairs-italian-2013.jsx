import { Link } from "react-router";
import CaseStudy, { caseStudyMeta } from "../../components/CaseStudy";

export const meta = () => caseStudyMeta("als-upstairs-italian-2013");

export default function PortfolioAlsUpstairsItalian2013() {
  return (
    <CaseStudy slug="als-upstairs-italian-2013">
      <p>
                              Al's Upstairs is one of the finest{" "}
                              <a
                                href="http://www.alsupstairsitalian.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Italian restaurants in Columbia, SC
                              </a>
                              . While they had a basic Website in place for a number of years, they
                              realized that today's marketplace is changing, and they needed a new
                              design, better content, and a mobile-friendly website.{" "}
                            </p>
                            <p>
                              Broadstreet implemented a new responsive design using the
                              <a
                                href="https://drupal.org/project/omega"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {" "}
                                Drupal Omega
                              </a>{" "}
                              base theme. According to Tracy at Al's Upstairs, the improve search
                              results on Google Search and Google Maps, along with a sleek
                              mobile-friendly design, has greatly increased the number of travelers
                              "passing through" who will now stop in Columbia to visit{" "}
                              <a
                                href="http://www.alsupstairsitalian.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Al's Upstairs
                              </a>
                              .{" "}
                            </p>
                            <p>
                              We sent in our photographic team to get some nice photos of their
                              delicious food, making for a mouth-watering slideshow on the front
                              page.{" "}
                            </p>
                            <p>
                              <iframe
                                src="https://www.youtube.com/embed/WLp6wXpZ_ZQ"
                                title="Al's Upstairs Italian video"
                                loading="lazy"
                                allowFullScreen
                              ></iframe>
                            </p>
                            <p>
                              Along with these dramatic changes, Broadstreet helped to evaluate
                              restaurant reservation systems and assisted with the selection of{" "}
                              <a
                                href={
                                  "http://rez.urbanspoon.com/reservation/start/6098?source=selfhost&widget_type=multiday&day=20130916&seating_time=1020&commit=Go"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Urban Spoon
                              </a>
                              .{" "}
                            </p>
                            <p>
                              On an ongoing basis, Broadstreet helps Al's Upstairs with social media
                              marketing and online reputation management. Check out the many fine{" "}
                              <a
                                href="http://www.urbanspoon.com/r/117/880398/restaurant/Columbia/Als-Upstairs-Italian-Restaurant-West-Columbia"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                reviews at Urban Spoon{" "}
                              </a>
                              and{" "}
                              <a
                                href="http://www.tripadvisor.com/Restaurant_Review-g54494-d819131-Reviews-Al_s_Upstairs_Italian_Restaurant-West_Columbia_South_Carolina.html"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Trip Advisor
                              </a>
                              .
                            </p>
                            <p>
                              <Link to="/book-now/">
                                <img
                                  alt="Al's Upstairs Italian"
                                  src="/assets/media/db774a7d6c7f30b6.png"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </Link>{" "}
                              <a href="tel:8034227629">
                                <img
                                  alt="Al's Upstairs Italian"
                                  src="/assets/media/b3ccdf69bf19baf6.jpg"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </a>
                            </p>
    </CaseStudy>
  );
}
