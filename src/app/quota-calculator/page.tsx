import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuotaCalculator from '@/components/QuotaCalculator';
import { Target, Sparkles } from 'lucide-react';

export const metadata = {
  alternates: { canonical: 'https://repo.robloxwikihub.com/quota-calculator' },
  title: "Level Quota & Difficulty Formula Calculator — R.E.P.O. Wiki",
  description: "Calculate level profit target quotas in R.E.P.O. based on map loot pool size, player count, and level difficulty curve scaling.",
};

export default function QuotaCalculatorPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full py-10 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Profit Algorithm</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase font-mono tracking-tight text-slate-100">
            Extraction Quota <span className="text-cyan-400">& Level Formula</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            Plan your team's extraction quotas. Avoid squad wiping by calculating required target earnings per player for small and high-threat maps.
          </p>
        </div>

        <QuotaCalculator />
      </main>
      <Footer />
    </div>
  );
}
