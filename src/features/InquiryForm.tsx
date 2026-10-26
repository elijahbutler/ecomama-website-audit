import { useState, type FormEvent } from "react";
import { places, pairings } from "../data/fieldJournal";
import { preferenceSummary, usePreferences } from "./preferences";

export const WEDDING_INQUIRY_URL = "https://crm.ecomamafarms.com/f/wedding-inquiry";
export const CONTACT_EMAIL = "contact@ecomamafarms.com";
export function createMailto(fields: {
  name: string;
  email: string;
  purpose: string;
  date: string;
  message: string;
  preferences: string;
}) {
  const body = `Inquiry: ${fields.purpose}\nName: ${fields.name}\nReply email: ${fields.email}\nRequested date or season: ${fields.date || "Not decided"}\n\n${fields.preferences}\n\n${fields.message}\n\nPreferences only. Availability and access require confirmation.`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Ecomama inquiry: ${fields.purpose}`)}&body=${encodeURIComponent(body)}`;
}
export function InquiryForm() {
  const { preferences, setPreferences } = usePreferences();
  const [draft, setDraft] = useState<{ url: string; text: string } | null>(
    null,
  );
  const [copyStatus, setCopyStatus] = useState("");
  const [error, setError] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      purpose: String(data.get("purpose") ?? ""),
      date: String(data.get("date") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      preferences: preferenceSummary(preferences),
    };
    if (!fields.name || !fields.message) {
      setError(
        "Enter your name and a short message. Spaces alone cannot be sent.",
      );
      return;
    }
    setError("");
    const url = createMailto(fields);
    setDraft({ url, text: decodeURIComponent(url.split("&body=")[1]) });
  }
  function changed() {
    setDraft(null);
    setCopyStatus("");
    setError("");
  }
  return (
    <div className="inquiry-layout">
      <aside>
        <h2>General Inquiries</h2>
        <p>
          Tell us what you have in mind. We’ll prepare an email with your
          preferences for you to review and send in your own email app.
        </p>
        <p>
          This website does not send or store your inquiry. Dates, flowers, and
          private visits need the team’s confirmation.
        </p>
        <a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        <p>
          <a href="tel:+18058941477">(805) 894-1477</a>
        </p>
        <details className="inquiry-routing">
          <summary>Where your inquiry goes</summary>
          <p>This form prepares an email addressed to contact@ecomamafarms.com. Review and send it in your email app, or copy the draft into webmail. No serverless webhook is connected, and this page does not send or store your message.</p>
          <p>Wedding inquiries use the farm's separate CRM form. Your selections here do not transfer automatically.</p>
        </details>
      </aside>
      <form aria-label="General inquiries" onSubmit={submit} onChange={changed}>
        <div className="form-grid">
          <label htmlFor="inquiry-name">
            Your name, required
            <input
              id="inquiry-name"
              name="name"
              autoComplete="name"
              required
              maxLength={100}
            />
          </label>
          <label htmlFor="inquiry-email">
            Email address, required
            <input
              id="inquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={150}
            />
          </label>
          <label htmlFor="inquiry-purpose">
            I’m interested in
            <select id="inquiry-purpose" name="purpose">
              <option>Private gathering</option>
              <option>Wedding</option>
              <option>Farm & flowers</option>
              <option>Private visit</option>
              <option>Partnership</option>
              <option>General question</option>
            </select>
          </label>
          <label htmlFor="inquiry-date">
            Preferred date or season
            <input
              id="inquiry-date"
              name="date"
              maxLength={80}
              placeholder="Optional"
            />
          </label>
        </div>
        <fieldset className="inquiry-preferences">
          <legend>Your preferences, editable before sending</legend>
          <p className="content-note">
            These are references to discuss, not reservations.
          </p>
          <label htmlFor="inquiry-place">
            Estate place
            <select
              id="inquiry-place"
              aria-label="Estate place"
              value={preferences.place}
              onChange={(e) =>
                setPreferences((p) => ({ ...p, place: e.target.value }))
              }
            >
              <option value="">No preference</option>
              {places.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="inquiry-table">
            Table direction
            <select
              id="inquiry-table"
              aria-label="Table direction"
              value={preferences.table}
              onChange={(e) =>
                setPreferences((p) => ({ ...p, table: e.target.value }))
              }
            >
              <option value="">No preference</option>
              {pairings.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>
        </fieldset>
        <label htmlFor="inquiry-message">
          Your message, required
          <textarea
            id="inquiry-message"
            name="message"
            required
            rows={5}
            maxLength={1200}
            aria-describedby="message-help"
          />
        </label>
        <p id="message-help" className="content-note">
          Up to 1,200 characters. Include a guest estimate if you have one.
        </p>
        {error && <p role="alert">{error}</p>}
        <button className="journal-button" type="submit">
          Prepare my email
        </button>
        {draft && (
          <div className="email-draft">
            <p role="status">
              Your draft is ready. Nothing has been sent. Open it in your email
              app, then review and send.
            </p>
            <a className="journal-button" href={draft.url}>
              Open email draft
            </a>
            <p>
              If no email app opens, copy the draft and send it to{" "}
              {CONTACT_EMAIL}.
            </p>
            <label htmlFor="email-draft">
              Email text
              <textarea id="email-draft" readOnly value={draft.text} rows={8} />
            </label>
            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(draft.text);
                  setCopyStatus("Draft copied. Paste it into your email app.");
                } catch {
                  setCopyStatus(
                    "Copy was blocked. Select and copy the email text above.",
                  );
                }
              }}
            >
              Copy email text
            </button>
            <p role="status">{copyStatus}</p>
          </div>
        )}
      </form>
    </div>
  );
}
