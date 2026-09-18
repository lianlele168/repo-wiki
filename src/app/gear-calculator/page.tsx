import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GEAR_MODULES } from '@/data/wikiData';
import { Wrench, CheckCircle2, TrendingUp, DollarSign } from 'lucide-react';

export const metadata = {
  alternates: { canonical: 'https://repo.robloxwikihub.com/gear-calculator' },
  title: "Gear & Module Upgrade ROI Guide — R.E.P.O. Wiki",
  description: "Compare equipment upgrades in R.E.P.O., including C.A.R.T. Transport, Exo-Suit Strength Boosts, Stealth Boots, and Valuable Scanners.",
};

export default function GearCalculatorPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full py-10 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl w-fit mx-auto text-amber-400">
            <Wrench className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase font-mono tracking-tight text-slate-100">
            Gear Upgrade <span className="text-amber-400">ROI & Modules</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            Evaluate the financial payback period and survival utility of equipment sold at the Service Station.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GEAR_MODULES.map((gear) => (
            <div key={gear.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 font-mono">{gear.name}</h3>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">{gear.category}</span>
                  </div>
                  <span className="text-lg font-extrabold font-mono text-amber-400">${gear.cost}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{gear.effect}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-500">Payback Timeline:</span>
                  <span className="text-emerald-400 font-bold">{gear.roiPaybackRuns} Run(s)</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-500">Priority Tier:</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                    gear.recommendation === 'Must Buy' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' :
                    gear.recommendation === 'Highly Recommended' ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {gear.recommendation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
