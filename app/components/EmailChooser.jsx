import { useEffect, useId, useRef, useState } from "react";

// Email links normally open whatever mail app the computer has set as default (often Outlook,
// even when it isn't set up). This shows a small chooser instead: Gmail, Outlook.com, Yahoo,
// the default mail app, or copy the address.
const PROVIDERS = [
  ["Gmail", (to) => `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`],
  ["Outlook.com", (to) => `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(to)}`],
  ["Yahoo Mail", (to) => `https://compose.mail.yahoo.com/?to=${encodeURIComponent(to)}`],
];

export default function EmailChooser({ email, className, children }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: select the address so it can be copied by hand.
      const el = dialogRef.current?.querySelector(".email-address");
      if (el) window.getSelection()?.selectAllChildren(el);
    }
  };

  return (
    <>
      {/* Real mailto link so it still works without JavaScript; the click opens the chooser. */}
      <a
        className={className}
        href={`mailto:${email}`}
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        {children}
      </a>
      <dialog
        ref={dialogRef}
        className="email-dialog"
        aria-labelledby={titleId}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setOpen(false); // click on the backdrop
        }}
      >
        <div className="email-dialog-inner">
          <h2 id={titleId}>Send an email</h2>
          <p className="email-address">{email}</p>
          <div className="email-options">
            {PROVIDERS.map(([label, url]) => (
              <a key={label} href={url(email)} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                {label} ↗
              </a>
            ))}
            <a href={`mailto:${email}`} onClick={() => setOpen(false)}>Default email app</a>
            <button type="button" onClick={copy}>{copied ? "Copied!" : "Copy email address"}</button>
          </div>
          <button type="button" className="email-close" onClick={() => setOpen(false)} aria-label="Close">
            ×
          </button>
        </div>
      </dialog>
    </>
  );
}
