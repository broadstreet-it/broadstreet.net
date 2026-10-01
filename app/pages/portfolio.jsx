import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Website Design Portfolio & Client Stories | Broadstreet",
    description:
      "Explore Broadstreet’s website portfolio and client stories, from local service businesses to online retailers, nonprofits, and community organizations.",
    canonical: "https://broadstreet.net/portfolio/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/portfolio/#webpage",
        url: "https://broadstreet.net/portfolio/",
        name: "Website Design Portfolio & Client Stories | Broadstreet",
        description:
          "Explore Broadstreet’s website portfolio and client stories, from local service businesses to online retailers, nonprofits, and community organizations.",
        isPartOf: { "@id": "https://broadstreet.net/#website" },
        about: { "@id": "https://broadstreet.net/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://broadstreet.net/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Good work. Lasting relationships.",
            item: "https://broadstreet.net/portfolio/",
          },
        ],
      },
    ],
  });

export default function Portfolio() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Good work. Lasting relationships.
          </nav>
          <h1>Good work. Lasting relationships.</h1>
          <p className="lead">
            Explore Broadstreet’s website portfolio and client stories, from local service
            businesses to online retailers, nonprofits, and community organizations.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="cards">
            <article className="card">
              <Link to="/portfolio/glens-import-services-llc/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/be3a932eef5a08a9.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/glens-import-services-llc/">Glen's Import Services LLC</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Glen's Import Services LLC: website design, online
                  presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/carolina-scoop-crew/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/e33bcf8e45df4b05.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/carolina-scoop-crew/">Carolina Scoop Crew</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Carolina Scoop Crew: website design, online
                  presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/palmetto-glass/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/cff38687931332f5.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/palmetto-glass/">Palmetto Glass</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Palmetto Glass: website design, online presence,
                  and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/nature-teacher-preserve/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/fca421e49830ab98.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/nature-teacher-preserve/">Nature As Teacher Preserve</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Nature As Teacher Preserve: website design, online
                  presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/portfolio/commercial-dock-and-door-systems/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/88dacd6e6d0c427a.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/commercial-dock-and-door-systems/">
                    Commercial Dock and Door Systems
                  </Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Commercial Dock and Door Systems: website design,
                  online presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/town-elgin/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/958bcf317be06c4b.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/town-elgin/">Town of Elgin</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Town of Elgin: website design, online presence,
                  and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/portfolio/powers-gregory-heating-cooling-hvac/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/18d95daac4660ac1.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/powers-gregory-heating-cooling-hvac/">
                    {"Powers & Gregory HVAC"}
                  </Link>
                </h3>
                <p>
                  {
                    "Explore Broadstreet’s work with Powers & Gregory HVAC: website design, online presence, and a partnership built around the client’s business."
                  }
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/signs-unlimited-sc/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/ba6779fba2368d52.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/signs-unlimited-sc/">Signs Unlimited SC</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Signs Unlimited SC: website design, online
                  presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/backcountry-beyond/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/e050cfca2f874814.jpg"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/backcountry-beyond/">{"Backcountry & Beyond"}</Link>
                </h3>
                <p>
                  {
                    "Explore Broadstreet’s work with Backcountry & Beyond: website design, online presence, and a partnership built around the client’s business."
                  }
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/torres-law-firm/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/87e7cda7913053a9.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/torres-law-firm/">Torres Law Firm</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Torres Law Firm: website design, online presence,
                  and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/thompson-rental-services/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/b9350e7812813ae6.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/thompson-rental-services/">Thompson Rental Services</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Thompson Rental Services: website design, online
                  presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/fairfield-county-chamber/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/1b8fd661513f4309.jpg"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/fairfield-county-chamber/">Fairfield County Chamber</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Fairfield County Chamber: website design, online
                  presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/big-red-barn-retreat/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/c2325cd1cbb6b73a.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/big-red-barn-retreat/">The Big Red Barn Retreat</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with The Big Red Barn Retreat: website design, online
                  presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/rock-bottom-pond/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/dfbbb84eb8639c21.jpg"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/rock-bottom-pond/">Rock Bottom Pond</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Rock Bottom Pond: website design, online presence,
                  and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/handy-man-purpose-llc/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/8dcf56d15bae13f0.jpg"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/handy-man-purpose-llc/">Handy Man on Purpose, LLC</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Handy Man on Purpose, LLC: website design, online
                  presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/browns-oil-lube/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/5ad9aa02086c7aa4.jpg"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/browns-oil-lube/">{"Browns Oil & Lube"}</Link>
                </h3>
                <p>
                  {
                    "Explore Broadstreet’s work with Browns Oil & Lube: website design, online presence, and a partnership built around the client’s business."
                  }
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/stars-campus-solutions/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/91bed00febd5c3d8.jpg"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/stars-campus-solutions/">STARS Campus Solutions</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with STARS Campus Solutions: website design, online
                  presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/portfolio/air-restoration-heating-cooling/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/93e61448d31b043b.jpg"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/air-restoration-heating-cooling/">
                    {"Air Restoration Heating & Cooling"}
                  </Link>
                </h3>
                <p>
                  {
                    "Explore Broadstreet’s work with Air Restoration Heating & Cooling: website design, online presence, and a partnership built around the client’s business."
                  }
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/busbee-truck-parts/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/43174c6d2a2add50.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/busbee-truck-parts/">Busbee Truck Parts</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Busbee Truck Parts: website design, online
                  presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/laureledu/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/60ea8abdfc1723b2.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/laureledu/">Laurel.edu</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Laurel.edu: website design, online presence, and a
                  partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/cotdoc/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/408f09f66c11c630.jpg"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/cotdoc/">CotDoc</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with CotDoc: website design, online presence, and a
                  partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/tyler-brothers/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/9ad5dc17aa183542.jpg"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/tyler-brothers/">Tyler Brothers</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Tyler Brothers: website design, online presence,
                  and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/kb-cores/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/e6dbb9c3a2ef91d2.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/kb-cores/">KB Cores</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with KB Cores: website design, online presence, and a
                  partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/river-valley-recycling/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/d67fb8e53dc48dae.jpg"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/river-valley-recycling/">River Valley Recycling</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with River Valley Recycling: website design, online
                  presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/als-upstairs-italian-2013/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/8cfbffe07843d360.jpg"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/als-upstairs-italian-2013/">Al's Upstairs Italian</Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Al's Upstairs Italian: website design, online
                  presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/d-t-steel-inc/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/fa71fa13a5351e8c.jpg"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/d-t-steel-inc/">{"D & T Steel, Inc"}</Link>
                </h3>
                <p>
                  {
                    "Explore Broadstreet’s work with D & T Steel, Inc: website design, online presence, and a partnership built around the client’s business."
                  }
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/hannaty-custom-powder-coating/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/724847c8e89ca70b.jpg"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/hannaty-custom-powder-coating/">
                    Hannaty Custom Powder Coating
                  </Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Hannaty Custom Powder Coating: website design,
                  online presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/portfolio/all-around-tampa-pressure-washing/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/3a495cc96a41fd37.jpg"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/all-around-tampa-pressure-washing/">
                    All Around Tampa Pressure Washing
                  </Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with All Around Tampa Pressure Washing: website design,
                  online presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/portfolio/brazell-exterminating-home-repair/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/ceefe855ecb3b0c7.png"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/brazell-exterminating-home-repair/">
                    {"Brazell Exterminating & Home Repair"}
                  </Link>
                </h3>
                <p>
                  {
                    "Explore Broadstreet’s work with Brazell Exterminating & Home Repair: website design, online presence, and a partnership built around the client’s business."
                  }
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/portfolio/banyan-bay-trading-company/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/ba41de6915f9bac6.jpg"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">Our work</p>
                <h3>
                  <Link to="/portfolio/banyan-bay-trading-company/">
                    Banyan Bay Trading Company
                  </Link>
                </h3>
                <p>
                  Explore Broadstreet’s work with Banyan Bay Trading Company: website design, online
                  presence, and a partnership built around the client’s business.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
