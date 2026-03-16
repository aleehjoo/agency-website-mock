export const BRAND = {
  short: "FFI",
  full: "Five Fold Industries",
  tagline: "Commercial Execution for Growth-Stage Businesses",
  description:
    "We diagnose where growth leaks, then build the positioning, workflows, and software that stop it. For founder-led, high-ticket businesses losing revenue between interest and delivery.",
} as const;

export const LINKS = {
  calendly:
    "https://calendly.com/fivefold/diagnostic-call?fbclid=IwY2xjawQk931leHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeW-1VX4NXS8sRGXyE2RV0GBy90bKWaEKzo3I3Z6T1rObgADSXGtWVV-jZnpE_aem_g2Wn4GkhhYDwHCDtE-PZxg&month=2026-03",
} as const;

export const CONTACT = {
  toEmail: process.env.CONTACT_TO_EMAIL || "umila.alejandro@gmail.com",
} as const;

export const CTA_TEXT = "Book a Meeting" as const;

/* ── Section data ─────────────────────────────────── */

export const PIPELINE_STAGES = [
  { label: "Demand arrives", status: "ok" as const },
  { label: "First touch", status: "leak" as const, leak: "Trust fails" },
  { label: "Qualification", status: "leak" as const, leak: "Wrong leads" },
  { label: "Sales flow", status: "leak" as const, leak: "Deals stall" },
  { label: "Handoff", status: "leak" as const, leak: "Things drop" },
  { label: "Delivery", status: "leak" as const, leak: "Heroics needed" },
  { label: "Revenue", status: "end" as const, lost: "Diminished" },
];

export const LEAK_POINTS = [
  { icon: "eye" as const, title: "Weak first impression", body: "Prospects can\u2019t tell what you do or why they should trust you. They leave in seconds." },
  { icon: "target" as const, title: "Leaky demand capture", body: "Traffic and referrals arrive but inquiries go to inboxes nobody checks. Interest dies quietly." },
  { icon: "clock" as const, title: "Slow lead response", body: "Warm interest cools while your team takes hours \u2014 or days \u2014 to reply." },
  { icon: "filter" as const, title: "Loose qualification", body: "The wrong leads get attention. The right ones fall through the cracks." },
  { icon: "route" as const, title: "Stalled buying path", body: "The process is unclear, slow, or full of friction. Buyers quit mid-process." },
  { icon: "shuffle" as const, title: "Broken handoffs", body: "What sales promises, delivery doesn\u2019t know. Onboarding is improvised. Clients feel it." },
];

export const FIX_CARDS = [
  { icon: "message" as const, title: "Sharpen positioning", body: "Make the right buyer trust you in under 15 seconds." },
  { icon: "target" as const, title: "Tighten demand capture", body: "Every inquiry becomes a conversation. Nothing sits." },
  { icon: "zap" as const, title: "Speed up response", body: "Interest gets met immediately. Not hours later." },
  { icon: "filter" as const, title: "Fix qualification", body: "Right leads get attention. Wrong ones filter out early." },
  { icon: "route" as const, title: "Clear the buying path", body: "Remove friction so deals move at the speed of intent." },
  { icon: "shuffle" as const, title: "Clean up handoffs", body: "What sales promises, delivery knows. Every time." },
  { icon: "gear" as const, title: "Systemize delivery", body: "Execution scales without burning your team down." },
  { icon: "wrench" as const, title: "Build what holds", body: "Software, tools, and automations that lock the fix in place." },
];

export const COMPARE_COLS = [
  { name: "Dev Shop", desc: "Builds what you spec", items: [false, false, false, true, false] },
  { name: "Consultant", desc: "Gives advice", items: ["partial", "partial", false, false, false] as const },
  { name: "Internal Ops", desc: "Patches the gaps", items: [false, false, "partial", "partial", "partial"] as const },
  { name: BRAND.short, desc: "Fixes the full commercial path", items: [true, true, true, true, true], highlight: true },
];

export const COMPARE_ROWS = [
  "Diagnoses the leak",
  "Fixes positioning",
  "Redesigns workflow",
  "Builds software",
  "Owns the outcome",
];

export const PROCESS_STEPS = [
  { icon: "search" as const, num: "01", title: "Diagnose", body: "Map your full commercial path. Identify the primary leak.", chip: "Leak Map" },
  { icon: "message" as const, num: "02", title: "Clarify", body: "Fix positioning, sharpen qualification, remove buying friction.", chip: "Message Correction" },
  { icon: "compass" as const, num: "03", title: "Redesign", body: "Rebuild handoffs, sequencing, and team responsibilities.", chip: "Workflow Map" },
  { icon: "wrench" as const, num: "04", title: "Build", body: "Build the tool, interface, or automation that makes the fix permanent.", chip: "Execution Layer" },
];

export const FIT_YES = [
  "Founder-led or operator-led with real revenue",
  "High-ticket \u2014 deals worth protecting",
  "Trust is central to the buying process",
  "Demand exists but conversion is weak",
  "Friction between interest and signed deal",
  "Ready to fix the system, not add tools",
  "Outgrown duct-tape operations",
];

export const FIT_NO = [
  "Pre-revenue or still finding product-market fit",
  "Looking for a dev shop to build a spec",
  "Need a brand refresh without commercial intent",
  "Want a dashboard, not a fix",
  "Low-ticket, commodity margins",
  "Looking for the cheapest option",
];

export const FAQS = [
  { q: "Are you a dev shop?", a: "No. We build software when the fix requires it, but we start with the commercial problem \u2014 not a feature list. Often the first fix isn\u2019t software at all." },
  { q: "Do you only build internal tools?", a: "No. We build whatever the commercial system needs: customer-facing interfaces, automations, integrations, booking flows, client portals. The format follows the problem." },
  { q: "Can you help with messaging and positioning?", a: "Yes. Positioning is often the first leak we find. If the right buyer can\u2019t understand what you do within seconds, no amount of software fixes that." },
  { q: "What kinds of businesses are the best fit?", a: "High-ticket, trust-sensitive businesses \u2014 typically founder-led \u2014 where missed demand is expensive. Professional services, specialist firms, B2B, and high-value direct-to-consumer." },
  { q: "What happens on the diagnostic call?", a: "We walk through your full commercial path \u2014 how leads arrive, how they\u2019re qualified, how the sale moves, where handoffs happen. You leave with a clear picture of the primary leak and a practical recommendation. It\u2019s a working session, not a sales pitch." },
  { q: "How do you know if the problem is messaging, process, or software?", a: "We follow the revenue. If the right people aren\u2019t showing up, it\u2019s positioning. If they show up but don\u2019t convert, it\u2019s the buying path. If they buy but the experience breaks, it\u2019s workflow. The diagnostic separates them." },
];
