import { LEAK_POINTS } from "@/lib/constants";
import { Icon } from "./icons";

export function ProblemMap() {
  return (
    <section className="py-24 md:py-28" id="leaks">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.1em] uppercase text-muted mb-3.5" data-reveal>Where growth leaks</p>
        <h2 className="font-serif text-[clamp(28px,4vw,42px)] leading-[1.2] text-primary mb-4 max-w-[680px]" data-reveal>The gaps are specific. So are the costs.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {LEAK_POINTS.map((lp, i) => (
            <article key={i} className="bg-card border border-edge rounded-lg p-7 hover:border-[#D0CEC8] hover:shadow-md transition-all" data-reveal style={{ "--delay": i } as React.CSSProperties}>
              <div className="w-10 h-10 rounded-[10px] bg-leak-subtle flex items-center justify-center mb-4 text-leak">
                <Icon name={lp.icon} className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg text-primary mb-1.5">{lp.title}</h3>
              <p className="text-sm leading-relaxed text-secondary">{lp.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
