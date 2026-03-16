import { COMPARE_COLS, COMPARE_ROWS } from "@/lib/constants";
import { IconCheck, IconX, IconMinus } from "./icons";

function StatusIcon({ val }: { val: boolean | "partial" }) {
  if (val === true) return <IconCheck className="w-[18px] h-[18px] text-fix shrink-0" />;
  if (val === "partial") return <IconMinus className="w-[18px] h-[18px] text-muted/70 shrink-0" />;
  return <IconX className="w-[18px] h-[18px] text-muted/50 shrink-0" />;
}

export function ComparisonStrip() {
  return (
    <section className="py-24 md:py-28" id="different">
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-xs font-bold tracking-[0.1em] uppercase text-muted mb-3.5" data-reveal>Why this is different</p>
        <h2 className="font-serif text-[clamp(28px,4vw,42px)] leading-[1.2] text-primary mb-4 max-w-[680px]" data-reveal>We&rsquo;re not a dev shop. We&rsquo;re not just consultants.</h2>
        <p className="text-base text-secondary max-w-[560px] mb-12" data-reveal>Most firms fix one layer of the problem. We fix the full commercial path.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COMPARE_COLS.map((col, ci) => (
            <div key={ci} className={`bg-card border rounded-lg p-6 transition-shadow ${col.highlight ? "border-accent border-2 shadow-md" : "border-edge"}`} data-reveal style={{ "--delay": ci } as React.CSSProperties}>
              <h3 className={`font-serif text-xl mb-1 ${col.highlight ? "text-accent" : "text-primary"}`}>{col.name}</h3>
              <p className="text-[13px] text-muted mb-5 pb-4 border-b border-edge-light">{col.desc}</p>
              <ul className="flex flex-col gap-2.5">
                {COMPARE_ROWS.map((row, ri) => {
                  const val = col.items[ri];
                  const color = val === true ? "text-fix" : "text-muted";
                  return (
                    <li key={ri} className={`flex items-center gap-2 text-[13px] font-medium ${color}`}>
                      <StatusIcon val={val} />{row}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
