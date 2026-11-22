"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Contact form. Messages are delivered to Jesse's inbox by FormSubmit (formsubmit.co),
 * a free form-to-email service that needs no account or API key.
 * The very first message triggers a one-time confirmation email to that inbox.
 */
export default function ContactForm({ email, topics }: { email: string; topics: string[] }) {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data._honey) return; // bots fill the hidden field
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `Portfolio inquiry from ${data.name || "a visitor"}`,
          _replyto: data.email,
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === "false" || json.success === false) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="cform cform--done" role="status">
        <p className="cform-done-title">Thanks — message sent.</p>
        <p>I&apos;ll get back to you soon. In the meantime, feel free to connect on LinkedIn.</p>
        <button type="button" className="cform-again" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={onSubmit}>
      <div className="cform-row">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        <span>
          Company <em>(optional)</em>
        </span>
        <input name="company" type="text" autoComplete="organization" />
      </label>
      <label>
        <span>What brings you here?</span>
        <select name="topic" defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </select>
      </label>
      <label>
        <span>Tell me about it</span>
        <textarea name="message" rows={4} required placeholder="What are you working on, and where could I help?" />
      </label>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="cform-honey" aria-hidden="true" />
      <button type="submit" className="cform-submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message →"}
      </button>
      {status === "error" ? (
        <p className="cform-error" role="alert">
          Something went wrong. Please email me directly at <a href={`mailto:${email}`}>{email}</a>.
        </p>
      ) : null}
    </form>
  );
}
