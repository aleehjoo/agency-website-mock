import { type SVGProps, type ReactElement } from "react";

type P = SVGProps<SVGSVGElement>;
const D = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function IconEye(p: P) { return <svg viewBox="0 0 24 24" {...D} {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx={12} cy={12} r={3}/></svg>; }
export function IconTarget(p: P) { return <svg viewBox="0 0 24 24" {...D} {...p}><circle cx={12} cy={12} r={10}/><circle cx={12} cy={12} r={6}/><circle cx={12} cy={12} r={2}/></svg>; }
export function IconClock(p: P) { return <svg viewBox="0 0 24 24" {...D} {...p}><circle cx={12} cy={12} r={10}/><path d="M12 6v6l4 2"/></svg>; }
export function IconFilter(p: P) { return <svg viewBox="0 0 24 24" {...D} {...p}><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>; }
export function IconRoute(p: P) { return <svg viewBox="0 0 24 24" {...D} {...p}><path d="M18 6L6 18"/><path d="M6 6h6v6"/><path d="M18 12v6h-6"/></svg>; }
export function IconShuffle(p: P) { return <svg viewBox="0 0 24 24" {...D} {...p}><path d="M16 3h5v5"/><path d="M4 20L21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/></svg>; }
export function IconMessage(p: P) { return <svg viewBox="0 0 24 24" {...D} {...p}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"/></svg>; }
export function IconZap(p: P) { return <svg viewBox="0 0 24 24" {...D} {...p}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>; }
export function IconGear(p: P) { return <svg viewBox="0 0 24 24" {...D} {...p}><circle cx={12} cy={12} r={3}/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>; }
export function IconWrench(p: P) { return <svg viewBox="0 0 24 24" {...D} {...p}><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>; }
export function IconSearch(p: P) { return <svg viewBox="0 0 24 24" {...D} {...p}><circle cx={11} cy={11} r={8}/><path d="M21 21l-4.35-4.35"/></svg>; }
export function IconCompass(p: P) { return <svg viewBox="0 0 24 24" {...D} {...p}><circle cx={12} cy={12} r={10}/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>; }
export function IconCheck(p: P) { return <svg viewBox="0 0 24 24" {...D} strokeWidth={2} {...p}><polyline points="20 6 9 17 4 12"/></svg>; }
export function IconX(p: P) { return <svg viewBox="0 0 24 24" {...D} strokeWidth={2} {...p}><line x1={18} y1={6} x2={6} y2={18}/><line x1={6} y1={6} x2={18} y2={18}/></svg>; }
export function IconMinus(p: P) { return <svg viewBox="0 0 24 24" {...D} strokeWidth={2} {...p}><line x1={5} y1={12} x2={19} y2={12}/></svg>; }
export function IconDroplet(p: P) { return <svg viewBox="0 0 24 24" {...D} {...p}><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z"/></svg>; }
export function IconClipboard(p: P) { return <svg viewBox="0 0 24 24" {...D} {...p}><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x={8} y={2} width={8} height={4} rx={1} ry={1}/></svg>; }

const MAP: Record<string, (p: P) => ReactElement> = {
  eye: IconEye, target: IconTarget, clock: IconClock, filter: IconFilter, route: IconRoute,
  shuffle: IconShuffle, message: IconMessage, zap: IconZap, gear: IconGear, wrench: IconWrench,
  search: IconSearch, compass: IconCompass, check: IconCheck, x: IconX, minus: IconMinus,
  droplet: IconDroplet, clipboard: IconClipboard,
};

export function Icon({ name, ...rest }: { name: string } & P) {
  const Comp = MAP[name];
  return Comp ? <Comp {...rest} /> : null;
}
