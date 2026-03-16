"use client";
import { useState } from "react";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  return (
    <section className="py-24 md:py-28 bg-surface-alt" id="faq">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.1em] uppercase text-muted mb-3.5" data-reveal>Common questions</p>
        <h2 className="font-serif text-[clamp(28px,4vw,42px)] leading-[1.2] text-primary mb-4 max-w-[680px]" data-reveal>A few things worth clarifying.</h2>
        <div className="max-w-[720px] mt-12">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-edge group" data-reveal style={{ "--delay": index } as React.CSSProperties}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-[15px] font-medium text-primary text-left group-hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        aria-expanded={open}
      >
        <span>{faq.q}</span>
        <div className="relative w-4 h-4 shrink-0 ml-5">
          <span className="absolute top-[7px] left-0 w-4 h-0.5 bg-muted rounded-[1px]" />
          <span className={`absolute top-0 left-[7px] w-0.5 h-4 bg-muted rounded-[1px] transition-transform duration-300 ${open ? "rotate-90" : ""}`} />
        </div>
      </button>
      <div className={`overflow-hidden transition-[max-height,opacity] duration-400 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-sm leading-relaxed text-secondary pb-5 max-w-[600px]">{faq.a}</p>
      </div>
    </div>
  );
}
