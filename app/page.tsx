import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProblemMap } from "@/components/problem-map";
import { WhatWeFixGrid } from "@/components/what-we-fix-grid";
import { ComparisonStrip } from "@/components/comparison-strip";
import { ProcessDiagram } from "@/components/process-diagram";
import { FitFilter } from "@/components/fit-filter";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative isolate pt-16 selection:bg-accent-subtle selection:text-accent">
      <Navbar />
      <main>
        <Hero />
        <ProblemMap />
        <WhatWeFixGrid />
        <ComparisonStrip />
        <ProcessDiagram />
        <FitFilter />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
