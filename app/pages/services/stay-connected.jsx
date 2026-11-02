import { faqNode, pageSeo, serviceNode } from "../../lib/seo";
import ServicePage from "../../components/ServicePage";
import { RELATED } from "../../components/ui";

const PATH = "/services/stay-connected/";
const TITLE = "Social Media & Email Marketing in Camden, SC | Broadstreet.net";
const DESCRIPTION =
  "Social media marketing, email marketing, video and social ads for Carolina small businesses. Broadstreet.net builds and manages your accounts so customers keep coming back.";

const FAQ = [
  { q: "Which social networks should my business be on?", a: "It depends on your customers. Most local businesses do best on Facebook and Instagram. We’ll recommend where your time and budget go furthest." },
  { q: "Do I have to come up with the posts?", a: "No. We plan, write and design your posts. You can review them and send us photos whenever you have them." },
  { q: "How often will you post?", a: "We’ll agree on a schedule that fits your plan and keep it steady, because consistency matters more than volume." },
];

export const meta = () =>
  pageSeo({
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
    crumbs: [{ name: "Services", path: "/services/" }, { name: "Stay Connected", path: PATH }],
    extra: [serviceNode("Social media and email marketing", PATH, DESCRIPTION), faqNode(FAQ)],
  });

const page = {
  name: "Stay Connected",
  accent: "var(--g-yellow)",
  label: "Stay Connected · Social media, email & video",
  title: <>Stay in front of <span className="c-yellow">your customers</span></>,
  lede: "Most customers don’t buy the first time they find you. Social media, email and video keep your business on their mind until they’re ready, and bring them back after.",
  cards: true,
  facts: [
    ["Facebook", "Pages, posts and ads"],
    ["Instagram", "Posts and stories"],
    ["LinkedIn & X", "For B2B businesses"],
    ["Email", "Lists and campaigns"],
  ],
  blocksTitle: <>Four ways to <span className="c-yellow">keep them coming back</span></>,
  blocks: [
    { id: "social", color: "var(--g-blue)", label: "Social media marketing", title: "Active accounts, without the time drain", text: "We build and maintain your accounts on Facebook, Instagram, LinkedIn and X, posting regularly so customers see a business that’s open and active.", items: ["Account setup and profile cleanup", "A posting calendar for your business", "Graphics and captions written for you", "Monthly results you can understand"], link: { to: "/services/social-media-marketing/", text: "More about social media" } },
    { id: "email", color: "var(--g-red)", label: "Email marketing", title: "Your best customers, one click away", text: "We manage your email list and send targeted messages, like specials, reminders and news, to the people most likely to buy again.", items: ["List setup and management", "Branded email templates", "Campaigns written and scheduled", "Open and click reporting"], link: { to: "/services/email-marketing/", text: "More about email marketing" } },
    { id: "video", color: "var(--gold)", label: "Video & content creation", title: "Show customers who you are", text: "Short videos, photos and helpful articles give customers a reason to choose you, and give Google more to show when they search.", items: ["Short videos for social and your website", "Blog posts that answer customer questions", "Photos of your team and work"], link: { to: "/services/video-production/", text: "More about video production" } },
    { id: "ads", color: "var(--g-green)", label: "Social advertising", title: "Reach the right people nearby", text: "Ads on Facebook and Instagram put your offer in front of people in your area who match your best customers.", items: ["Audience targeting by area and interest", "Ad design and copy", "Budget management and reporting"], link: { to: "/services/social-advertising/", text: "More about social ads" } },
  ],
  blocksNote: "Checklist items are suggestions. Confirm they match what the team offers before launch.",
  stepsTitle: "How we get you posting",
  steps: [
    ["Free review", "We look at your accounts, your customers and what your competitors are doing."],
    ["Plan", "You get a simple calendar of posts, emails and videos."],
    ["Create", "We write, design and schedule everything for your approval."],
    ["Report", "Monthly results show what’s working and what we’ll try next."],
  ],
  proof: {
    label: "Client review · Powers & Gregory",
    color: "#1E8E3E",
    quote: "We are more than impressed with his ongoing assistance to keep us up to date.",
    cite: "RWS, Powers & Gregory",
    side: { label: "Our team", title: "Meet the people who post for you", text: "Our content specialists know social media, design and writing, and they know small-town Carolina businesses.", to: "/staff/", link: "Meet the team" },
  },
  faq: FAQ,
  related: [RELATED.getFound, RELATED.websites, RELATED.bridges],
};

export default function StayConnected() {
  return <ServicePage page={page} />;
}
