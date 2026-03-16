import { FIX_CARDS } from "@/lib/constants";
import { Icon } from "./icons";

export function WhatWeFixGrid() {
  return (
    <section className="py-24 md:py-28 bg-surface-alt" id="fix">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.1em] uppercase text-muted mb-3.5" data-reveal>What we fix</p>
        <h2 className="font-serif text-[clamp(28px,4vw,42px)] leading-[1.2] text-primary mb-4 max-w-[680px]" data-reveal>We close the gaps between interest and revenue.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {FIX_CARDS.map((c, i) => (
            <article key={i} className="bg-card border border-edge rounded-lg p-5 hover:border-[#D0CEC8] hover:shadow-md transition-all" data-reveal style={{ "--delay": i } as React.CSSProperties}>
              <Icon name={c.icon} className="w-6 h-6 text-fix mb-3.5" />
              <h3 className="text-[15px] font-semibold text-primary mb-1 leading-tight">{c.title}</h3>
              <p className="text-[13px] leading-relaxed text-secondary">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
