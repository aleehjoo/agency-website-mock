import { FIT_YES, FIT_NO } from "@/lib/constants";
import { IconCheck, IconX } from "./icons";

export function FitFilter() {
  return (
    <section className="py-24 md:py-28" id="fit">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.1em] uppercase text-muted mb-3.5" data-reveal>Who we work best with</p>
        <h2 className="font-serif text-[clamp(28px,4vw,42px)] leading-[1.2] text-primary mb-4 max-w-[680px]" data-reveal>This is for businesses where missed demand is expensive.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          <div className="bg-card border border-edge rounded-lg p-7 md:p-8" data-reveal style={{ "--delay": 0 } as React.CSSProperties}>
            <h3 className="font-serif text-xl text-primary mb-5 pb-3.5 border-b border-edge-light">Strong fit</h3>
            <ul className="flex flex-col gap-3">
              {FIT_YES.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-secondary rounded-sm">
                  <IconCheck className="w-[18px] h-[18px] text-fix shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-edge rounded-lg p-7 md:p-8" data-reveal style={{ "--delay": 1 } as React.CSSProperties}>
            <h3 className="font-serif text-xl text-primary mb-5 pb-3.5 border-b border-edge-light">Not the right fit</h3>
            <ul className="flex flex-col gap-3">
              {FIT_NO.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-secondary rounded-sm">
                  <IconX className="w-[18px] h-[18px] text-muted/50 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
