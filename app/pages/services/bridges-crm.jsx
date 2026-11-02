import { faqNode, pageSeo, serviceNode } from "../../lib/seo";
import ServicePage from "../../components/ServicePage";
import { RELATED, SectionHead } from "../../components/ui";

const PATH = "/services/bridges-crm/";
const TITLE = "Bridges CRM | Lead Follow-Up & Customer Management | Broadstreet.net";
const DESCRIPTION =
  "Bridges CRM keeps every call, text, email and booking in one place and follows up automatically, so no lead goes cold. Set up and supported by Broadstreet.net in Camden, SC.";

const FAQ = [
  { q: "Who is Bridges for?", a: "Any business that gets leads by phone, text, website or social media and wants to answer faster and follow up more consistently. It’s especially helpful for service businesses and contractors." },
  { q: "Is it hard to learn?", a: "No. We set everything up for you and train your team, and the mobile app makes it easy to reply from anywhere." },
  { q: "Can I keep my current phone number?", a: "We’ll talk through your current setup during your walkthrough and recommend the simplest option." },
  { q: "Does it work with my website?", a: "Yes. Forms, chat and booking from your website can flow straight into Bridges." },
];

export const meta = () =>
  pageSeo({
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
    crumbs: [{ name: "Services", path: "/services/" }, { name: "Bridges CRM", path: PATH }],
    extra: [serviceNode("Bridges CRM", PATH, DESCRIPTION), faqNode(FAQ)],
  });

// Sample pipeline shown on the page (illustration only).
const PIPELINE = [
  { stage: "New lead", c: "var(--g-blue)", leads: [["Sarah M.", "Website form · Roof estimate", "Auto-text sent"], ["(803) 555-0142", "Missed call", "Text back sent"], ["James R.", "Facebook message", "Reply in inbox"]] },
  { stage: "Contacted", c: "var(--gold)", leads: [["Linda P.", "Google call · AC repair", "Follow-up in 2 days"], ["Marcus T.", "Referral", "Quote sent"]] },
  { stage: "Booked", c: "var(--g-red)", leads: [["Angela W.", "Thu 10:00 AM", "Reminder scheduled"], ["Chris B.", "Fri 2:30 PM", "Reminder scheduled"]] },
  { stage: "Won", c: "var(--g-green)", leads: [["Dana K.", "Job complete", "Review request sent"], ["Robert L.", "Paid invoice", "★★★★★ review"]] },
];

const page = {
  name: "Bridges CRM",
  accent: "var(--g-red)",
  label: "Bridges CRM · New",
  title: <>Never let a lead <span className="c-yellow">go cold again</span></>,
  lede: "Bridges is our customer relationship manager, set up for your business. Every call, text, email, form and booking lands in one place, and follow-ups go out on their own.",
  jump: [["pipeline", "See it"], ["contacts", "Contacts & pipeline"], ["inbox", "One inbox"], ["automation", "Automatic follow-up"], ["booking", "Booking"], ["reviews-tool", "Reviews"], ["faq", "Questions"]],
  facts: [
    ["One inbox", "Texts, emails and social messages"],
    ["Auto follow-up", "Texts and emails sent for you"],
    ["Missed-call text back", "Every caller hears from you"],
    ["More reviews", "Requests sent after every job"],
  ],
  blocksTitle: <>Everything you need to <span className="c-red">follow up</span></>,
  blocks: [
    { id: "contacts", color: "var(--g-blue)", label: "Contacts & pipeline", title: "All your customers in one place", text: "Every lead and customer gets a record with their calls, messages, appointments and notes, so anyone on your team can pick up where someone else left off.", listTitle: "Includes", items: ["Contact records with full history", "A pipeline for every sales process", "Tags, notes and tasks for your team", "Leads from your website added automatically"] },
    { id: "inbox", color: "var(--g-red)", label: "One inbox", title: "Stop checking five apps", text: "Texts, emails, website chat and social messages all arrive in one inbox. Reply from your computer or phone, and the whole conversation stays with the customer’s record.", listTitle: "Includes", items: ["Two-way texting from your business number", "Email and website chat", "Facebook and Instagram messages", "A mobile app for replying on the go"] },
    { id: "automation", color: "var(--gold)", label: "Automatic follow-up", title: "Follow-ups that never forget", text: "When a new lead comes in, Bridges replies right away and keeps following up until they book. Miss a call, and the caller gets a text so they don’t call your competitor next.", listTitle: "Includes", items: ["Instant replies to new leads", "Missed-call text back", "Follow-up texts and emails on a schedule", "Reminders for your team"] },
    { id: "booking", color: "var(--g-green)", label: "Booking & reminders", title: "Fewer no-shows", text: "Customers book from your website or a link you send. Bridges confirms the appointment and sends reminders so they show up.", listTitle: "Includes", items: ["Online booking calendar", "Text and email confirmations", "Automatic reminders"] },
    { id: "reviews-tool", color: "var(--g-blue)", label: "Reviews", title: "More five-star reviews", text: "After a job, Bridges asks happy customers for a Google review with one tap. More reviews help you show up higher in Google Maps.", listTitle: "Includes", items: ["Review requests by text and email", "One-tap link to your Google review page", "See and answer reviews in one place"] },
  ],
  blocksNote: "Draft feature list. Confirm which Bridges features are included for clients before launch.",
  stepsTitle: <>We set it up <span className="c-yellow">for you</span></>,
  steps: [
    ["Walkthrough", "We learn how leads come in today and how you follow up."],
    ["Setup", "We bring in your contacts, connect your website, phone and social accounts, and build your pipeline."],
    ["Automations", "We write your follow-up texts and emails and turn them on."],
    ["Training", "We train your team and stay on call when you have questions."],
  ],
  proof: {
    label: "Client review · Thompson Rental Services",
    quote: "When I text or email they respond almost immediately.",
    cite: "Benji Glover, Thompson Rental Services",
    side: { label: "See it for yourself", title: "Book a free walkthrough", text: "We’ll show you how Bridges would work for your business and what it takes to get started.", to: "/contact/", link: "Book a walkthrough" },
  },
  faq: FAQ,
  related: [RELATED.getFound, RELATED.websites, RELATED.apps],
};

export default function BridgesCrm() {
  return (
    <ServicePage page={page}>
      <section className="section" id="pipeline">
        <div className="wrap">
          <SectionHead
            label="See it"
            title={<>Every lead, <span className="c-red">at a glance</span></>}
            lede="Your pipeline shows where every lead stands, from first contact to paid job. Move a card forward and Bridges sends the right follow-up."
          />
          <div className="board-wrap" tabIndex={0} role="region" aria-label="Sample pipeline board">
            <div className="board">
              <div className="board-bar"><b>Sales pipeline</b><span>Sample data</span></div>
              {PIPELINE.map((col) => (
                <div className="col" key={col.stage} style={{ "--kc": col.c }}>
                  <h4>{col.stage} <span>{col.leads.length}</span></h4>
                  {col.leads.map(([who, what, did]) => (
                    <div className="lead-card" key={who}><b>{who}</b><span>{what}</span><i>{did}</i></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className="board-note">Sample names and data for illustration.</p>
        </div>
      </section>
    </ServicePage>
  );
}
