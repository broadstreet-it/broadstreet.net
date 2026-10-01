import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "All Pages & Resources | Broadstreet",
    description:
      "Find Broadstreet services, client stories, team profiles, location information, and the full digital marketing article archive.",
    canonical: "https://broadstreet.net/site-map/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/site-map/#webpage",
        url: "https://broadstreet.net/site-map/",
        name: "All Pages & Resources | Broadstreet",
        description:
          "Find Broadstreet services, client stories, team profiles, location information, and the full digital marketing article archive.",
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
            name: "Explore the Broadstreet website",
            item: "https://broadstreet.net/site-map/",
          },
        ],
      },
    ],
  });

export default function SiteMap() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Explore the Broadstreet website
          </nav>
          <h1>Explore the Broadstreet website</h1>
          <p className="lead">
            Find Broadstreet services, client stories, team profiles, location information, and the
            full digital marketing article archive.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <ul className="content-index">
            <li>
              <Link to="/">Digital marketing built around your business.</Link>
            </li>
            <li>
              <Link to="/downloads/">Downloads</Link>
            </li>
            <li>
              <Link to="/web-success-signup/">Request a Web Success Webinar or Live Seminar</Link>
            </li>
            <li>
              <Link to="/web-success-videos/">Web Success Videos</Link>
            </li>
            <li>
              <Link to="/portfolio/">Good work. Lasting relationships.</Link>
            </li>
            <li>
              <Link to="/about-broadstreet-consulting-camden-scs-trusted-digital-marketing-partner/">
                Local roots. A wider perspective.
              </Link>
            </li>
            <li>
              <Link to="/staff/">People you can count on.</Link>
            </li>
            <li>
              <Link to="/services/">The right services. One committed team.</Link>
            </li>
            <li>
              <Link to="/blogs/">Ideas for your next stage of growth.</Link>
            </li>
            <li>
              <Link to="/contact/">Let’s talk about your business.</Link>
            </li>
            <li>
              <Link to="/camden-sc/">Your digital marketing team in Camden, SC.</Link>
            </li>
            <li>
              <Link to="/lancaster-sc/">Helping Lancaster businesses grow online.</Link>
            </li>
            <li>
              <Link to="/what-our-clients-are-saying/">Our clients tell the story best.</Link>
            </li>
            <li>
              <Link to="/be-number-1-on-google/">Make your business easier to find on Google.</Link>
            </li>
            <li>
              <Link to="/stay-connected-your-customers/">
                Staying Connected With Your Customers
              </Link>
            </li>
            <li>
              <Link to="/sell-your-products-online/">
                Sell Your Products Online with Custom eCommerce Solutions
              </Link>
            </li>
            <li>
              <Link to="/reach-your-next-generation-customers-online-marketing/">
                Reach Your Next Generation of Customers with Online Marketing
              </Link>
            </li>
            <li>
              <Link to="/dominate-local-markets-online/">Dominate Local Markets Online</Link>
            </li>
            <li>
              <Link to="/kershaw-county-council-aging-testimonial/">
                Kershaw County Council on Aging Testimonial
              </Link>
            </li>
            <li>
              <Link to="/fj-rabon-testimonial/">FJ Rabon Testimonial</Link>
            </li>
            <li>
              <Link to="/wings-international-adventures/">Wings: International Adventures</Link>
            </li>
            <li>
              <Link to="/powers-gregory-staying-connected-customers/">
                {"Powers & Gregory: Staying Connected to Customers"}
              </Link>
            </li>
            <li>
              <Link to="/als-upstairs-online-visibility-capability/">
                {"Al's Upstairs: Online Visibility & Capability"}
              </Link>
            </li>
            <li>
              <Link to="/busbee-truck-parts-worldwide-reach/">
                Busbee Truck Parts: Worldwide Reach
              </Link>
            </li>
            <li>
              <Link to="/cotdoc-increasing-sales/">CotDoc: Increasing Sales</Link>
            </li>
            <li>
              <Link to="/services/mobile-friendly-website-design-development/">
                A website that works for your business.
              </Link>
            </li>
            <li>
              <Link to="/services/ecommerce-website-development/">
                Turn your storefront into an online store.
              </Link>
            </li>
            <li>
              <Link to="/services/search-engine-optimization-seo/">
                Help the right customers find you.
              </Link>
            </li>
            <li>
              <Link to="/adwords-consultant-services/">
                Certified Adwords Consultant Services From Broadstreet Consulting
              </Link>
            </li>
            <li>
              <Link to="/services/google-adwords-ppc-search-engine-marketing-consulting/">
                Reach customers when they’re ready to act.
              </Link>
            </li>
            <li>
              <Link to="/services/social-media-marketing/">Social Media Marketing</Link>
            </li>
            <li>
              <Link to="/services/email-marketing/">Email Marketing</Link>
            </li>
            <li>
              <Link to="/portfolio/glens-import-services-llc/">Glen's Import Services LLC</Link>
            </li>
            <li>
              <Link to="/portfolio/carolina-scoop-crew/">Carolina Scoop Crew</Link>
            </li>
            <li>
              <Link to="/portfolio/palmetto-glass/">Palmetto Glass</Link>
            </li>
            <li>
              <Link to="/portfolio/nature-teacher-preserve/">Nature As Teacher Preserve</Link>
            </li>
            <li>
              <Link to="/portfolio/commercial-dock-and-door-systems/">
                Commercial Dock and Door Systems
              </Link>
            </li>
            <li>
              <Link to="/portfolio/town-elgin/">Town of Elgin</Link>
            </li>
            <li>
              <Link to="/portfolio/powers-gregory-heating-cooling-hvac/">
                {"Powers & Gregory HVAC"}
              </Link>
            </li>
            <li>
              <Link to="/portfolio/signs-unlimited-sc/">Signs Unlimited SC</Link>
            </li>
            <li>
              <Link to="/portfolio/backcountry-beyond/">{"Backcountry & Beyond"}</Link>
            </li>
            <li>
              <Link to="/portfolio/torres-law-firm/">Torres Law Firm</Link>
            </li>
            <li>
              <Link to="/portfolio/thompson-rental-services/">Thompson Rental Services</Link>
            </li>
            <li>
              <Link to="/portfolio/fairfield-county-chamber/">Fairfield County Chamber</Link>
            </li>
            <li>
              <Link to="/portfolio/big-red-barn-retreat/">The Big Red Barn Retreat</Link>
            </li>
            <li>
              <Link to="/portfolio/rock-bottom-pond/">Rock Bottom Pond</Link>
            </li>
            <li>
              <Link to="/portfolio/handy-man-purpose-llc/">Handy Man on Purpose, LLC</Link>
            </li>
            <li>
              <Link to="/portfolio/browns-oil-lube/">{"Browns Oil & Lube"}</Link>
            </li>
            <li>
              <Link to="/portfolio/stars-campus-solutions/">STARS Campus Solutions</Link>
            </li>
            <li>
              <Link to="/portfolio/air-restoration-heating-cooling/">
                {"Air Restoration Heating & Cooling"}
              </Link>
            </li>
            <li>
              <Link to="/portfolio/busbee-truck-parts/">Busbee Truck Parts</Link>
            </li>
            <li>
              <Link to="/portfolio/laureledu/">Laurel.edu</Link>
            </li>
            <li>
              <Link to="/portfolio/cotdoc/">CotDoc</Link>
            </li>
            <li>
              <Link to="/portfolio/tyler-brothers/">Tyler Brothers</Link>
            </li>
            <li>
              <Link to="/portfolio/kb-cores/">KB Cores</Link>
            </li>
            <li>
              <Link to="/portfolio/river-valley-recycling/">River Valley Recycling</Link>
            </li>
            <li>
              <Link to="/portfolio/als-upstairs-italian-2013/">Al's Upstairs Italian</Link>
            </li>
            <li>
              <Link to="/portfolio/d-t-steel-inc/">{"D & T Steel, Inc"}</Link>
            </li>
            <li>
              <Link to="/portfolio/hannaty-custom-powder-coating/">
                Hannaty Custom Powder Coating
              </Link>
            </li>
            <li>
              <Link to="/portfolio/all-around-tampa-pressure-washing/">
                All Around Tampa Pressure Washing
              </Link>
            </li>
            <li>
              <Link to="/portfolio/brazell-exterminating-home-repair/">
                {"Brazell Exterminating & Home Repair"}
              </Link>
            </li>
            <li>
              <Link to="/portfolio/banyan-bay-trading-company/">Banyan Bay Trading Company</Link>
            </li>
            <li>
              <Link to="/blog/ai-alone-isnt-marketing-strategy/">
                AI Alone Isn't a Marketing Strategy
              </Link>
            </li>
            <li>
              <Link to="/blog/why-your-business-isnt-showing-google-and-how-fix-it/">
                Why Your Business Isn't Showing Up on Google (and How to Fix It)
              </Link>
            </li>
            <li>
              <Link to="/blog/what-we-love-about-small-towns-and-why-we-never-left/">
                What We Love About Small Towns (And Why We Never Left)
              </Link>
            </li>
            <li>
              <Link to="/lead-generation-services/">Lead Generation Services</Link>
            </li>
            <li>
              <Link to="/open-source-development-services/">Open Source Development Services</Link>
            </li>
            <li>
              <Link to="/broadstreet-consulting-google-partners-google-adwords-certified/">
                {"Broadstreet Consulting - Google Partner & Adwords Certified Agency"}
              </Link>
            </li>
            <li>
              <Link to="/services/local-online-marketing/">Be found in your local market.</Link>
            </li>
            <li>
              <Link to="/services/content-management-development/">
                {"Content Management & Development"}
              </Link>
            </li>
            <li>
              <Link to="/services/web-mobile-app-development/">
                {"Web & Mobile App Development"}
              </Link>
            </li>
            <li>
              <Link to="/services/digital-marketing-strategy-and-support/">
                A partner for what comes next.
              </Link>
            </li>
            <li>
              <Link to="/web-success/">Web Success</Link>
            </li>
            <li>
              <Link to="/tom-sliker/">Tom Sliker</Link>
            </li>
            <li>
              <Link to="/tom-sliker-technical-expert-digital-marketing-social-media-google-seo-search-marketing/">
                Tom Sliker - Technical Expert - Digital Marketing, Social Media, Google, SEO, Search
                Marketing
              </Link>
            </li>
            <li>
              <Link to="/buster/">Buster</Link>
            </li>
            <li>
              <Link to="/tiffany-massey/">Tiffany Massey</Link>
            </li>
            <li>
              <Link to="/danielle-wolsleben/">Danielle Wolsleben</Link>
            </li>
            <li>
              <Link to="/john-jackson/">John Jackson</Link>
            </li>
            <li>
              <Link to="/mary-souto/">Mary Souto</Link>
            </li>
            <li>
              <Link to="/nyia-langley/">Nyia Langley</Link>
            </li>
            <li>
              <Link to="/services/secure-hosting-technical-support/">
                {"Secure Hosting & Technical Support"}
              </Link>
            </li>
            <li>
              <Link to="/services/logo-design/">Logo Design</Link>
            </li>
            <li>
              <Link to="/services/video-production/">Video Production</Link>
            </li>
            <li>
              <Link to="/blog/storefront-online-store-guide-ecommerce-camden-and-columbia-sc-retailers/">
                From Storefront to Online Store: A Guide to eCommerce for Camden and Columbia, SC
                Retailers
              </Link>
            </li>
            <li>
              <Link to="/blog/google-ads-vs-seo-which-right-your-sumter-or-camden-sc-business/">
                Google Ads vs. SEO: Which Is Right for Your Sumter or Camden, SC Business?
              </Link>
            </li>
            <li>
              <Link to="/blog/local-seo-101-how-columbia-and-camden-sc-businesses-can-rank-higher-google/">
                Local SEO 101: How Columbia and Camden, SC Businesses Can Rank Higher on Google
              </Link>
            </li>
            <li>
              <Link to="/blog/why-your-camden-sc-small-business-needs-mobile-friendly-website-2026/">
                Why Your Camden, SC Small Business Needs a Mobile-Friendly Website in 2026
              </Link>
            </li>
            <li>
              <Link to="/blog/being-google-guide-series-part-1/">
                Being A Google Guide Series - Part 1
              </Link>
            </li>
            <li>
              <Link to="/blog/your-website-ugly-christmas-sweater/">
                Is Your Website Like an Ugly Christmas Sweater?
              </Link>
            </li>
            <li>
              <Link to="/blog/celebrating-world-computer-literacy-day-december-2/">
                Celebrating World Computer Literacy Day on December 2
              </Link>
            </li>
            <li>
              <Link to="/measured-results/">Measured Results</Link>
            </li>
            <li>
              <Link to="/blog/3-great-simple-ways-increase-your-online-presence/">
                3 Great, Simple Ways to Increase Your Online Presence
              </Link>
            </li>
            <li>
              <Link to="/blog/5-key-steps-getting-your-home-business-found-online/">
                5 Key Steps To Getting Your Home Business Found Online
              </Link>
            </li>
            <li>
              <Link to="/blog/5-tips-succeeding-google-adwords/">
                5 Tips for Succeeding in Google AdWords
              </Link>
            </li>
            <li>
              <Link to="/blog/using-google-street-view-and-360-spherical-camera-showcase-your-small-business/">
                Using Google Street View and a 360 Spherical Camera to Showcase your Small Business
              </Link>
            </li>
            <li>
              <Link to="/book-now/">Book Now</Link>
            </li>
            <li>
              <Link to="/blog/nyia/">nyia's blog</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
