"use client";
import { useState } from "react";
import Link from "next/link";
import { BRAND, LINKS, CTA_TEXT } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface/92 backdrop-blur-xl border-b border-transparent transition-colors duration-300 supports-[backdrop-filter]:bg-surface/85" id="nav">
      <div className="max-w-[1120px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#" className="font-serif text-[22px] text-primary tracking-tight">{BRAND.short}</Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#leaks" className="text-[13px] font-medium text-secondary hover:text-primary transition-colors">What Breaks</a>
          <a href="#different" className="text-[13px] font-medium text-secondary hover:text-primary transition-colors">Why Us</a>
          <a href="#how" className="text-[13px] font-medium text-secondary hover:text-primary transition-colors">Process</a>
          <a href={LINKS.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2 text-[13px] font-semibold text-inverse bg-accent rounded-md hover:bg-accent-hover transition-colors">{CTA_TEXT}</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-[5px] p-2" aria-label="Toggle menu" aria-expanded={open}>
          <span className={`block w-5 h-0.5 bg-primary rounded transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block w-5 h-0.5 bg-primary rounded transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col px-6 pb-5">
          <a href="#leaks" onClick={() => setOpen(false)} className="text-sm font-medium text-secondary py-3 border-b border-edge-light">What Breaks</a>
          <a href="#different" onClick={() => setOpen(false)} className="text-sm font-medium text-secondary py-3 border-b border-edge-light">Why Us</a>
          <a href="#how" onClick={() => setOpen(false)} className="text-sm font-medium text-secondary py-3 border-b border-edge-light">Process</a>
          <a href={LINKS.calendly} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center px-5 py-3 text-sm font-semibold text-inverse bg-accent rounded-md">{CTA_TEXT}</a>
        </div>
      )}
    </nav>
  );
}
