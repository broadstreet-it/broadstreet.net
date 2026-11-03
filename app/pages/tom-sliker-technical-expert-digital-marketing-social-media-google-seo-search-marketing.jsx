import { Link } from "react-router";
import { pageSeo } from "../lib/seo";
import { PageHero } from "../components/ui";

const PATH = "/tom-sliker-technical-expert-digital-marketing-social-media-google-seo-search-marketing/";

export const meta = () =>
  pageSeo({
    path: PATH,
    title: "Tom Sliker in the Media: Digital Marketing & Technology Expert | Broadstreet",
    description: "Podcasts, interviews and videos featuring Broadstreet founder Tom Sliker on digital marketing strategy and cyber security.",
    crumbs: [{ name: "Our Team", path: "/staff/" }, { name: "Tom Sliker", path: "/tom-sliker/" }, { name: "In the media", path: PATH }],
  });

const APPEARANCES = [
  {
    date: "Aug 5, 2018",
    kind: "Video interview",
    title: "Cyber security",
    text: "An interview with congressional candidate Sean Carrigan about cyber security, including Tom’s story about Russian hackers, ransomware and the FBI.",
    href: "https://www.facebook.com/carriganforcongress/videos/253733168577808/",
    link: "Watch on Facebook",
    c: "var(--g-blue)",
  },
  {
    date: "Nov 20, 2017",
    kind: "Podcast",
    title: "Lykken on Lending",
    text: "Tom talks with Dave Lykken about creating a comprehensive digital marketing strategy.",
    href: "http://lykkenonlending.com/11-20-17-hot-topic-creating-a-comprehensive-digital-marketing-strategy-with-tom-sliker/",
    link: "Listen to the episode",
    c: "var(--g-red)",
  },
];

export default function TomInTheMedia() {
  return (
    <div style={{ "--accent": "var(--g-blue)" }}>
      <PageHero
        crumbs={[{ name: "Our Team", to: "/staff/" }, { name: "Tom Sliker", to: "/tom-sliker/" }, { name: "In the media" }]}
        label="Tom Sliker in the media"
        title={<>A go-to source on <span className="c-yellow">technology &amp; marketing</span></>}
        lede="Tom has been a source of technical information for clients and for numerous publications and outlets. Here are some examples."
        actions={
          <>
            <Link className="button btn-yellow" to="/tom-sliker/">Meet Tom</Link>
            <Link className="button secondary" to="/contact/">Contact us</Link>
          </>
        }
      />

      <section className="section">
        <div className="wrap">
          <ol className="media-list">
            {APPEARANCES.map((a) => (
              <li key={a.href} style={{ "--mc": a.c }}>
                <time><small>{a.kind}</small>{a.date}</time>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                  <a href={a.href} target="_blank" rel="noopener noreferrer">{a.link} ↗</a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
