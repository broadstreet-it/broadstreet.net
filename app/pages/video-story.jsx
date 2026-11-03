import { Link, useLocation } from "react-router";
import { pageSeo } from "../lib/seo";
import { PageHero, SectionHead } from "../components/ui";
import VideoPlayer from "../components/VideoPlayer";
import { VIDEO_REVIEWS } from "../data/reviews";

// One page per video testimonial. app/routes.js maps each VIDEO_REVIEWS `story` path to this file.

const COLORS = ["var(--g-blue)", "var(--g-red)", "#1E8E3E", "var(--orange)"];
const withSlash = (p) => (p.endsWith("/") ? p : `${p}/`);
const storyFor = (pathname) => VIDEO_REVIEWS.find((v) => v.story === withSlash(pathname));

export const meta = ({ location }) => {
  const v = storyFor(location.pathname);
  if (!v) return [];
  return pageSeo({
    path: v.story,
    title: `${v.title} | Broadstreet Client Story`,
    description: `Watch ${v.who}${v.who === v.biz ? "" : ` of ${v.biz}`} talk about working with Broadstreet, a digital marketing and website team in Camden, SC.`,
    crumbs: [{ name: "Reviews", path: "/what-our-clients-are-saying/" }, { name: v.who, path: v.story }],
  });
};

export default function VideoStory() {
  const { pathname } = useLocation();
  const v = storyFor(pathname);
  if (!v) return null;
  const i = VIDEO_REVIEWS.indexOf(v);
  const others = VIDEO_REVIEWS.filter((o) => o !== v);

  return (
    <div style={{ "--accent": COLORS[i % COLORS.length] }}>
      <PageHero
        crumbs={[{ name: "Reviews", to: "/what-our-clients-are-saying/" }, { name: v.who }]}
        label="Client story"
        title={v.who}
        lede={`${v.biz === "Video testimonial" ? "" : `${v.biz}. `}Hear it in their own words.`}
        actions={false}
      />

      <section className="section">
        <div className="wrap story-layout">
          <VideoPlayer id={v.youtube} title={v.title} thumb={v.thumb} />
          <aside className="story-card">
            <span className="label" style={{ "--lc": "var(--accent)" }}>About this client</span>
            <dl>
              <div><dt>Client</dt><dd>{v.who}</dd></div>
              <div><dt>Business</dt><dd>{v.biz}</dd></div>
            </dl>
            {v.portfolio && <Link to={v.portfolio}>See the project →</Link>}
            <Link to="/what-our-clients-are-saying/">Read more client reviews →</Link>
            <Link className="button btn-yellow" to="/contact/" style={{ marginTop: 8 }}>Start your success story</Link>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <SectionHead label="More client stories" labelColor="var(--g-yellow)" title="Hear from other clients" />
          <div className="video-cards">
            {others.map((o) => (
              <Link className="video-card" key={o.youtube} to={o.story} style={{ "--vc": COLORS[VIDEO_REVIEWS.indexOf(o) % COLORS.length] }}>
                <span className="vc-thumb">
                  <img src={o.thumb} alt="" width="960" height="540" loading="lazy" decoding="async" />
                  <span className="vp-play" aria-hidden="true">▶</span>
                </span>
                <span className="vc-body">
                  <small>Client story</small>
                  <b>{o.who}</b>
                  <span>{o.biz}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
