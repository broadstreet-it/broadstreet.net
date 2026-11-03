import { Link } from "react-router";

const POINTS = [
  ["Certified in Google Ads", "Certified staff who follow Google’s best practices.", "var(--g-blue)"],
  ["Verified by Google", "Listed on Google’s official Partner Search.", "var(--g-red)"],
  ["Ahead of the changes", "Exclusive Google training, product updates and research.", "var(--g-yellow)", true],
];

/** Google Partner badge with the three things Partner status means. Links to the Partner page unless `link={false}`. */
export default function PartnerCard({ link = true }) {
  const badge = <img src="/assets/media/google-partner-badge.png" alt="Google Partner" width="603" height="205" loading="lazy" decoding="async" />;
  return (
    <div className="partner-card">
      {link ? (
        <Link to="/broadstreet-consulting-google-partners-google-adwords-certified/" className="partner-badge">{badge}</Link>
      ) : (
        <span className="partner-badge">{badge}</span>
      )}
      <ul className="partner-points">
        {POINTS.map(([title, text, c, dark]) => (
          <li key={title} style={{ "--pc": c, "--pt": dark ? "#06182E" : "#fff" }}>
            <b>{title}</b>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
