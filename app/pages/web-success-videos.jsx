import { Link } from "react-router";
import { pageSeo } from "../lib/seo";
import { PageHero, SectionHead } from "../components/ui";
import VideoPlayer from "../components/VideoPlayer";

const PATH = "/web-success-videos/";

export const meta = () =>
  pageSeo({
    path: PATH,
    title: "Web Success Videos: The 9 Essentials of Web Success | Broadstreet",
    description: "Watch The 9 Essentials of Web Success, Broadstreet’s free video series on website strategy, SEO, paid search, email, social media and local marketing.",
    crumbs: [{ name: "Web Success", path: "/web-success/" }, { name: "Videos", path: PATH }],
  });

const thumb = (id) => `/assets/media/web-success/${id}.webp`;

const WELCOME = { id: "ggE-94cOZjY", title: "Welcome to Web Success" };
const VIDEOS = [
  ["bSsQH5qshnE", "How to Build an Online Presence"],
  ["LNmK_P9UVy0", "Website Strategy, Content & Search"],
  ["ccFjEoXCCus", "Content Strategy, SEO & Pay-Per-Click"],
  ["UYSAPmWYWVw", "Email Strategy, Content & eCommerce"],
  ["i5ch6hTqAUo", "eCommerce Strategy, AdWords & SEO"],
  ["UUZRSYTBAO0", "AdWords Deep Dive"],
  ["KY1_hPKVAdw", "SEO Strategy, Google Analytics & Search Console"],
  ["z3H4Iwgn2Zc", "Social Media Strategy & Local Targeting"],
  ["a5Z9ljhLdRg", "Local & Storefront Strategies"],
  ["uMC50bTMcik", "Measure, Review & Rebalance Your Web Strategy"],
];

export default function WebSuccessVideos() {
  return (
    <div style={{ "--accent": "var(--g-yellow)" }}>
      <PageHero
        crumbs={[{ name: "Web Success", to: "/web-success/" }, { name: "Videos" }]}
        label="Web Success videos"
        title={<>The 9 Essentials of <span className="c-yellow">Web Success</span></>}
        lede="Our free video series on building a business online: website strategy, SEO, paid search, email, social media and local marketing. No sign-up needed. Recorded in 2017; Google AdWords is now called Google Ads."
        actions={
          <>
            <Link className="button btn-yellow" to="/downloads/">Download the worksheets</Link>
            <Link className="button secondary" to="/web-success/">About Web Success</Link>
          </>
        }
      />

      <section className="section">
        <div className="wrap ws-video-grid">
          <article className="ws-video featured">
            <VideoPlayer id={WELCOME.id} title={WELCOME.title} thumb={thumb(WELCOME.id)} />
            <h3>{WELCOME.title}</h3>
          </article>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="The series" labelColor="var(--g-yellow)" title="Ten short lessons" />
          <div className="ws-video-grid">
            {VIDEOS.map(([id, title], i) => (
              <article className="ws-video" key={id}>
                <VideoPlayer id={id} title={`Web Success #${i + 1}: ${title}`} thumb={thumb(id)} />
                <h3><span className="ws-num">#{i + 1}</span>{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
