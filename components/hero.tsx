import { BRAND, LINKS, CTA_TEXT, PIPELINE_STAGES } from "@/lib/constants";
import { IconDroplet } from "./icons";

export function Hero() {
  return (
    <header className="pt-[150px] pb-24 md:pb-28 text-center" id="hero">
      <div className="max-w-[940px] mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.1em] uppercase text-muted mb-3.5" data-reveal>{BRAND.tagline}</p>
        <h1 className="font-serif text-[clamp(32px,5.5vw,56px)] leading-[1.12] text-primary tracking-tight mb-5" data-reveal>
          Your demand is strong.<br />Your commercial system isn&rsquo;t keeping up.
        </h1>
        <p className="text-[17px] leading-relaxed text-secondary max-w-[580px] mx-auto mb-3.5" data-reveal>
          We diagnose where growth leaks &mdash; then build the positioning, workflows, and software that stop it.
        </p>
        <p className="text-[13px] font-semibold text-muted tracking-wide mb-8" data-reveal>
          Operators and builders. Commercially trained. Technically fluent.
        </p>
        <a href={LINKS.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-9 py-3.5 text-[15px] font-semibold text-inverse bg-accent rounded-md hover:bg-accent-hover hover:-translate-y-px transition-all" data-reveal>
          {CTA_TEXT}
        </a>
        {/* Pipeline diagram */}
        <div className="mt-16 p-8 bg-card border border-edge rounded-lg text-left" data-reveal>
          <p className="text-[13px] font-semibold text-secondary mb-7 text-center">Where most businesses lose growth &mdash; not at the top, but in the gaps:</p>
          <div className="relative flex items-start px-3 max-sm:flex-col max-sm:px-0">
            <div className="pipeline-track" />
            {PIPELINE_STAGES.map((s, i) => (
              <div key={i} className={`flex-1 flex flex-col items-center relative z-10 min-w-0 max-sm:flex-row max-sm:items-center max-sm:gap-3.5 max-sm:py-2.5 ${s.status === "leak" ? "" : ""}`}>
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0
                  ${s.status === "ok" ? "border-fix bg-fix-subtle" : ""}
                  ${s.status === "leak" ? "border-leak bg-leak-subtle" : ""}
                  ${s.status === "end" ? "border-muted bg-surface-alt" : ""}
                `} />
                <span className="text-xs font-semibold text-primary mt-2.5 text-center leading-tight max-sm:mt-0 max-sm:text-[13px] max-sm:text-left">{s.label}</span>
                {s.status === "leak" && s.leak && (
                  <span className="flex items-center gap-1 text-[11px] font-medium text-leak mt-1.5 max-sm:w-full max-sm:pl-[46px] max-sm:mt-0.5">
                    <IconDroplet className="w-3.5 h-3.5 text-leak shrink-0" />{s.leak}
                  </span>
                )}
                {"lost" in s && s.lost && (
                  <span className="text-[11px] font-semibold text-muted mt-1.5 uppercase tracking-wide max-sm:w-full max-sm:pl-[46px]">{s.lost}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
