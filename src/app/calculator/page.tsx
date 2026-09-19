import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuotaCalculator from '@/components/QuotaCalculator';
import ScrapSalvageCalculator from '@/components/ScrapSalvageCalculator';
import AuthorCard from '@/components/AuthorCard';
import { Calculator, Sparkles, HelpCircle, DollarSign, ShieldAlert } from 'lucide-react';

export const metadata = {
  alternates: { canonical: 'https://repo.robloxwikihub.com/calculator' },
  title: "R.E.P.O. Calculator | Quota & Scrap Salvage Durability Tool",
  description: "Interactive quota and salvage durability calculator for R.E.P.O. Calculate level target earnings, wall impact value loss, and heavy carry penalties.",
};

const CALCULATOR_FAQS = [
  {
    question: "How does wall collision degrade scrap value in R.E.P.O.?",
    answer: "Every physical impact against walls, floors, or doors chips away 5% to 25% of an item's monetary value based on its fragility rating. Fragile crystal and artifact items shatter completely if dropped more than twice.",
  },
  {
    question: "What formula determines the team's extraction quota?",
    answer: "Extraction Quota = (Total Level Map Value) × 0.7 × Difficulty Curve Multiplier. Higher player counts boost total spawned loot, raising target quotas proportionally.",
  },
  {
    question: "How do you transport heavy 85kg generators without damage penalties?",
    answer: "Buy the Strength upgrade so you can carry heavy S-tier items properly instead of dragging them. Every collision knocks value off your haul, and doors, stairs and corners are where most hits happen.",
  },
];

export default function CalculatorPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "R.E.P.O. Quota & Scrap Salvage Calculator",
    applicationCategory: "GameApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    author: {
      "@type": "Person",
      name: 'Commander "Scrapper" Thorne',
      jobTitle: "Lead Salvage Contractor & Heavy Quota Specialist",
    },
    mainEntity: CALCULATOR_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full py-10 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Salvage Logistics Suite</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase font-mono tracking-tight text-slate-100">
            R.E.P.O. Extraction Quota <span className="text-cyan-400">& Scrap Calculator</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Simulate level profit quotas, calculate fragile scrap value decay, and optimize equipment ROI before entering high-threat facility zones.
          </p>
        </div>

        <AuthorCard />

        <div className="space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-mono text-cyan-400 uppercase flex items-center gap-2">
              <DollarSign className="w-6 h-6" /> Level Quota Estimator
            </h2>
            <QuotaCalculator />
          </section>

          <section className="space-y-4 pt-8 border-t border-slate-800">
            <h2 className="text-2xl font-bold font-mono text-amber-400 uppercase flex items-center gap-2">
              <ShieldAlert className="w-6 h-6" /> Scrap Durability & Degradation Tool
            </h2>
            <ScrapSalvageCalculator />
          </section>
        </div>

        {/* FAQs */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold font-mono text-cyan-400 uppercase flex items-center gap-2">
            <HelpCircle className="w-5 h-5" /> Calculator FAQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CALCULATOR_FAQS.map((faq, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <h3 className="text-sm font-bold text-slate-200 font-mono">{faq.question}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
