import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { BRAND } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BRAND.full} \u2014 ${BRAND.tagline}`,
  description: BRAND.description,
  metadataBase: new URL("https://fivefoldindustries.com"),
  openGraph: {
    title: `${BRAND.full} \u2014 Commercial Execution`,
    description: BRAND.description,
    url: "https://fivefoldindustries.com",
    siteName: BRAND.full,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.full,
    description: BRAND.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <body>
        {children}
        {/* Intersection Observer for reveal animations (small enough to inline safely without hydration issues) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var obs = new IntersectionObserver(function(entries) {
                  entries.forEach(function(e) {
                    if (e.isIntersecting) {
                      e.target.classList.add('revealed');
                      obs.unobserve(e.target);
                    }
                  });
                }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
                document.querySelectorAll('[data-reveal]').forEach(function(el) { obs.observe(el); });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
