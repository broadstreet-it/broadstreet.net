import { Link } from "react-router";
import { seo } from "../lib/seo";

export const meta = () =>
  seo({
    title: "Digital Marketing Insights & Advice | Broadstreet Blog",
    description:
      "Read practical insights from Broadstreet on website design, local SEO, Google Ads, content, and digital marketing for small businesses.",
    canonical: "https://broadstreet.net/blogs/",
    graph: [
      {
        "@type": "WebPage",
        "@id": "https://broadstreet.net/blogs/#webpage",
        url: "https://broadstreet.net/blogs/",
        name: "Digital Marketing Insights & Advice | Broadstreet Blog",
        description:
          "Read practical insights from Broadstreet on website design, local SEO, Google Ads, content, and digital marketing for small businesses.",
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
            name: "Ideas for your next stage of growth.",
            item: "https://broadstreet.net/blogs/",
          },
        ],
      },
    ],
  });

export default function Blogs() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / Ideas for your next stage of growth.
          </nav>
          <h1>Ideas for your next stage of growth.</h1>
          <p className="lead">
            Read practical insights from Broadstreet on website design, local SEO, Google Ads,
            content, and digital marketing for small businesses.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="cards">
            <article className="card">
              <Link to="/blog/ai-alone-isnt-marketing-strategy/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/blog/ai-alone-isnt-marketing-strategy.webp"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">From the archive</p>
                <h3>
                  <Link to="/blog/ai-alone-isnt-marketing-strategy/">
                    AI Alone Isn't a Marketing Strategy
                  </Link>
                </h3>
                <p>
                  Artificial intelligence is everywhere right now, and for good reason. It can draft
                  an email in seconds, brainstorm a month of post ideas, and crunch numbers…
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/blog/why-your-business-isnt-showing-google-and-how-fix-it/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/blog/why-your-business-isnt-showing-google-and-how-fix-it.webp"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">From the archive</p>
                <h3>
                  <Link to="/blog/why-your-business-isnt-showing-google-and-how-fix-it/">
                    Why Your Business Isn't Showing Up on Google (and How to Fix It)
                  </Link>
                </h3>
                <p>
                  You know your business is good. Your customers know it too. So why does someone
                  searching for exactly what you offer end up finding three competitors before…
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/blog/what-we-love-about-small-towns-and-why-we-never-left/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/blog/what-we-love-about-small-towns-and-why-we-never-left.webp"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">From the archive</p>
                <h3>
                  <Link to="/blog/what-we-love-about-small-towns-and-why-we-never-left/">
                    What We Love About Small Towns (And Why We Never Left)
                  </Link>
                </h3>
                <p>
                  There's a particular kind of quiet you get in Camden on a Sunday morning. The kind
                  where you can hear the birds arguing over a birdfeeder two yards away,…
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/blog/storefront-online-store-guide-ecommerce-camden-and-columbia-sc-retailers/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/blog/storefront-online-store-guide-ecommerce-camden-and-columbia-sc-retailers.webp"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">From the archive</p>
                <h3>
                  <Link to="/blog/storefront-online-store-guide-ecommerce-camden-and-columbia-sc-retailers/">
                    From Storefront to Online Store: A Guide to eCommerce for Camden and Columbia,
                    SC Retailers
                  </Link>
                </h3>
                <p>
                  Running a successful retail business today means meeting customers wherever they
                  want to shop. For many businesses in Camden, Columbia, Lugoff, Elgin, and…
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/blog/google-ads-vs-seo-which-right-your-sumter-or-camden-sc-business/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/blog/google-ads-vs-seo-which-right-your-sumter-or-camden-sc-business.webp"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">From the archive</p>
                <h3>
                  <Link to="/blog/google-ads-vs-seo-which-right-your-sumter-or-camden-sc-business/">
                    Google Ads vs. SEO: Which Is Right for Your Sumter or Camden, SC Business?
                  </Link>
                </h3>
                <p>
                  If you're investing in digital marketing for your business, you've probably asked
                  yourself one important question:
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/blog/local-seo-101-how-columbia-and-camden-sc-businesses-can-rank-higher-google/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/blog/local-seo-101-how-columbia-and-camden-sc-businesses-can-rank-higher-google.webp"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">From the archive</p>
                <h3>
                  <Link to="/blog/local-seo-101-how-columbia-and-camden-sc-businesses-can-rank-higher-google/">
                    Local SEO 101: How Columbia and Camden, SC Businesses Can Rank Higher on Google
                  </Link>
                </h3>
                <p>
                  When someone needs a product or service today, they usually don't flip through a
                  phone book or wait for a recommendation - they pull out their phone and…
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/blog/why-your-camden-sc-small-business-needs-mobile-friendly-website-2026/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/blog/why-your-camden-sc-small-business-needs-mobile-friendly-website-2026.webp"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">From the archive</p>
                <h3>
                  <Link to="/blog/why-your-camden-sc-small-business-needs-mobile-friendly-website-2026/">
                    Why Your Camden, SC Small Business Needs a Mobile-Friendly Website in 2026
                  </Link>
                </h3>
                <p>
                  If you're a small business owner in Camden, Lugoff, Elgin, or anywhere in Kershaw
                  County, your website is often the first impression potential customers…
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/blog/being-google-guide-series-part-1/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/blog/being-google-guide-series-part-1.webp"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">From the archive</p>
                <h3>
                  <Link to="/blog/being-google-guide-series-part-1/">
                    Being A Google Guide Series - Part 1
                  </Link>
                </h3>
                <p>
                  A Google Guide , also known as a Local Guide allows you to contribute to Google
                  Maps. Google Guides are people who write reviews, share photos, answer…
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/blog/your-website-ugly-christmas-sweater/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/blog/your-website-ugly-christmas-sweater.webp"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">From the archive</p>
                <h3>
                  <Link to="/blog/your-website-ugly-christmas-sweater/">
                    Is Your Website Like an Ugly Christmas Sweater?
                  </Link>
                </h3>
                <p>
                  The holiday season is a time for joy, laughter, and warmth. It's also when we
                  bring out our most eccentric fashion choices, including the infamous ugly…
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/blog/celebrating-world-computer-literacy-day-december-2/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/blog/celebrating-world-computer-literacy-day-december-2.webp"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">From the archive</p>
                <h3>
                  <Link to="/blog/celebrating-world-computer-literacy-day-december-2/">
                    Celebrating World Computer Literacy Day on December 2
                  </Link>
                </h3>
                <p>
                  Computer skills are vital today; they empower individuals and communities
                  globally. World Computer Literacy Day , celebrated on December 2nd since 2001,…
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/blog/3-great-simple-ways-increase-your-online-presence/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/blog/3-great-simple-ways-increase-your-online-presence.webp"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">From the archive</p>
                <h3>
                  <Link to="/blog/3-great-simple-ways-increase-your-online-presence/">
                    3 Great, Simple Ways to Increase Your Online Presence
                  </Link>
                </h3>
                <p>
                  I'm tired of the generic terms I see listed as ways to improve your online
                  presence. "SEO, Social Media, Blogs, Link Sharing," etc. These are all very broad…
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/blog/5-key-steps-getting-your-home-business-found-online/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/blog/5-key-steps-getting-your-home-business-found-online.webp"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">From the archive</p>
                <h3>
                  <Link to="/blog/5-key-steps-getting-your-home-business-found-online/">
                    5 Key Steps To Getting Your Home Business Found Online
                  </Link>
                </h3>
                <p>
                  With over 28 million small businesses in the U.S. - more than 52% of these small
                  businesses are home based, according to the Small Business Administration
                </p>
              </div>
            </article>
            <article className="card">
              <Link to="/blog/5-tips-succeeding-google-adwords/" tabIndex="-1" aria-hidden="true">
                <img
                  src="/assets/media/blog/5-tips-succeeding-google-adwords.webp"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">From the archive</p>
                <h3>
                  <Link to="/blog/5-tips-succeeding-google-adwords/">
                    5 Tips for Succeeding in Google AdWords
                  </Link>
                </h3>
                <p>
                  In my 4 years of working with Google AdWords, I’ve had plenty of time to make
                  mistakes and learn from them - over, and over and over again. Through…
                </p>
              </div>
            </article>
            <article className="card">
              <Link
                to="/blog/using-google-street-view-and-360-spherical-camera-showcase-your-small-business/"
                tabIndex="-1"
                aria-hidden="true"
              >
                <img
                  src="/assets/media/blog/using-google-street-view-and-360-spherical-camera-showcase-your-small-business.webp"
                  alt=""
                  loading="lazy"
                  width="640"
                  height="400"
                />
              </Link>
              <div className="card-content">
                <p className="eyebrow">From the archive</p>
                <h3>
                  <Link to="/blog/using-google-street-view-and-360-spherical-camera-showcase-your-small-business/">
                    Using Google Street View and a 360 Spherical Camera to Showcase your Small
                    Business
                  </Link>
                </h3>
                <p>
                  I recently picked up a Ricoh Theta SC 360 Spherical camera from Amazon for around
                  $200. The camera comes with a great app for my Android phone that let's me…
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
