import { PROCESS_STEPS } from "@/lib/constants";
import { Icon } from "./icons";

export function ProcessDiagram() {
  return (
    <section className="py-24 md:py-28 bg-surface-alt" id="how">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.1em] uppercase text-muted mb-3.5" data-reveal>How we work</p>
        <h2 className="font-serif text-[clamp(28px,4vw,42px)] leading-[1.2] text-primary mb-4 max-w-[680px]" data-reveal>A straight line from diagnosis to a system that holds.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 relative" data-reveal>
          <div className="process-track hidden md:block" />
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="relative z-10 text-center max-md:flex max-md:items-start max-md:gap-5 max-md:text-left max-md:py-5">
              <div className="w-14 h-14 rounded-full bg-card border-2 border-edge flex items-center justify-center mx-auto mb-4 text-accent transition-colors hover:border-accent hover:shadow-[0_0_0_4px_var(--color-accent-subtle)] max-md:mx-0 max-md:shrink-0">
                <Icon name={step.icon} className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-muted tracking-[0.06em] uppercase">{step.num}</span>
                <h3 className="font-serif text-xl text-primary mt-0.5 mb-1.5">{step.title}</h3>
                <p className="text-[13px] leading-relaxed text-secondary max-w-[220px] mx-auto max-md:mx-0">{step.body}</p>
                <span className="inline-block text-[11px] font-semibold tracking-[0.04em] uppercase px-2.5 py-1 rounded-full bg-accent-subtle text-accent mt-2.5">
                  Output: {step.chip}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
