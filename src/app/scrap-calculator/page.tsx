import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrapSalvageCalculator from '@/components/ScrapSalvageCalculator';
import { Shield, Sparkles } from 'lucide-react';

export const metadata = {
  title: "Scrap Durability & Impact Value Calculator — R.E.P.O. Wiki",
  description: "Calculate item value decay from wall hits, floor drops, and dragging penalties in R.E.P.O. Optimize your solo carry and C.A.R.T. extraction profits.",
};

export default function ScrapCalculatorPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full py-10 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Physics Mechanics Simulator</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase font-mono tracking-tight text-slate-100">
            Scrap Impact & <span className="text-amber-400">Durability Calculator</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            Every item in R.E.P.O. suffers monetary value loss upon wall impacts and floor dragging. Use this tool to prevent 100% item destruction before extraction.
          </p>
        </div>

        <ScrapSalvageCalculator />
      </main>
      <Footer />
    </div>
  );
}
