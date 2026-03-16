"use client";
import { useState, useEffect } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [timestamp, setTimestamp] = useState("0");

  useEffect(() => {
    // Set timestamp on mount for anti-spam
    setTimestamp(Date.now().toString());
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting" || status === "success") return;
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      _hp: (form.elements.namedItem("_hp") as HTMLInputElement).value,
      _t: timestamp,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to submit");
      }
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "An error occurred");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="p-8 bg-card border border-edge rounded-lg" data-reveal>
        <h3 className="font-serif text-[22px] text-primary mb-1.5">Received.</h3>
        <p className="text-sm text-secondary leading-relaxed">
          We&rsquo;ll review your information and respond within one business day to schedule your diagnostic.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 text-left" data-reveal>
      {status === "error" && (
        <div className="p-3 bg-leak-subtle border border-[#EAC2B5] text-leak text-[13px] rounded-md font-medium">
          {errorMsg}
        </div>
      )}
      {/* Honeypot field (hidden from assistive tech and visual layout) */}
      <input type="text" name="_hp" tabIndex={-1} aria-hidden="true" className="opacity-0 absolute -left-[9999px] w-0 h-0" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-primary mb-1.5 tracking-[0.02em]">Name</label>
          <input type="text" id="name" name="name" required autoComplete="name" maxLength={100}
            className="w-full px-3.5 py-3 font-sans text-sm text-primary bg-card border border-edge rounded-md transition-shadow outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-subtle)] placeholder:text-muted disabled:opacity-50" />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-primary mb-1.5 tracking-[0.02em]">Company</label>
          <input type="text" id="company" name="company" required autoComplete="organization" maxLength={120}
            className="w-full px-3.5 py-3 font-sans text-sm text-primary bg-card border border-edge rounded-md transition-shadow outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-subtle)] placeholder:text-muted disabled:opacity-50" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-primary mb-1.5 tracking-[0.02em]">Email</label>
        <input type="email" id="email" name="email" required autoComplete="email" maxLength={254}
          className="w-full px-3.5 py-3 font-sans text-sm text-primary bg-card border border-edge rounded-md transition-shadow outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-subtle)] placeholder:text-muted disabled:opacity-50" />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-primary mb-1.5 tracking-[0.02em]">What&rsquo;s breaking?</label>
        <textarea id="message" name="message" rows={3} maxLength={2000}
          placeholder="e.g., Leads come in but deals stall. Handoffs are messy. Our website doesn't convert."
          className="w-full px-3.5 py-3 font-sans text-sm text-primary bg-card border border-edge rounded-md transition-shadow outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-subtle)] placeholder:text-muted disabled:opacity-50 resize-y min-h-[80px]" />
      </div>
      <button type="submit" disabled={status === "submitting"}
        className="self-start mt-1 px-9 py-3.5 text-[15px] font-semibold text-inverse bg-accent rounded-md transition-colors hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed">
        {status === "submitting" ? "Sending..." : "Request Diagnostic"}
      </button>
    </form>
  );
}
