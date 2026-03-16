import { ContactForm } from "./contact-form";
import { IconSearch, IconZap, IconClipboard } from "./icons";

export function FinalCTA() {
  return (
    <section className="border-t border-edge pb-20 pt-24 md:pt-28" id="cta">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-[640px]">
          <p className="text-xs font-bold tracking-[0.1em] uppercase text-muted mb-3.5" data-reveal>Next step</p>
          <h2 className="font-serif text-[clamp(28px,4vw,42px)] leading-[1.2] text-primary mb-4 max-w-[580px]" data-reveal>
            If the demand is there but growth still slips,<br />the problem is in the system.
          </h2>
          
          <div className="flex flex-col gap-4 mt-8 mb-10 p-7 bg-card border border-edge rounded-lg shadow-sm" data-reveal>
            <div className="flex items-start gap-3.5">
              <IconSearch className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm font-semibold text-primary leading-tight">Leak identification</strong>
                <span className="text-[13px] text-secondary leading-normal">Where exactly your commercial path breaks</span>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <IconZap className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm font-semibold text-primary leading-tight">Root cause clarity</strong>
                <span className="text-[13px] text-secondary leading-normal">Whether it&rsquo;s messaging, process, or technology</span>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <IconClipboard className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <div>
                <strong className="block text-sm font-semibold text-primary leading-tight">Practical next step</strong>
                <span className="text-[13px] text-secondary leading-normal">What to fix first &mdash; and how</span>
              </div>
            </div>
          </div>
          
          <p className="text-[15px] leading-relaxed text-secondary mb-9 max-w-[480px]" data-reveal>
            Book a meeting. You&rsquo;ll leave with a clear recommendation &mdash; whether or not we&rsquo;re the ones who fix it.
          </p>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
