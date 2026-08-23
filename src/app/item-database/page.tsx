import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SCRAP_ITEMS } from '@/data/wikiData';
import { Database, Search } from 'lucide-react';

export const metadata = {
  title: "Scrap Item Database & Weight Table — R.E.P.O. Wiki",
  description: "Complete database of Valuables, Relics, Heavy Machinery, and Electronics in R.E.P.O. Filter by weight, base monetary value, and fragility level.",
};

export default function ItemDatabasePage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full py-10 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl w-fit mx-auto text-amber-400">
            <Database className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase font-mono tracking-tight text-slate-100">
            Valuables & <span className="text-amber-400">Scrap Index</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            Comprehensive blueprint specs for all lootable items, scrap artifacts, and electronics across R.E.P.O. levels.
          </p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950/80 text-xs font-mono uppercase text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="px-6 py-4">Item Name</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Base Value</th>
                  <th className="px-6 py-4">Weight (kg)</th>
                  <th className="px-6 py-4">Fragility Risk</th>
                  <th className="px-6 py-4">Solo Carryable</th>
                  <th className="px-6 py-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {SCRAP_ITEMS.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-100">{item.name}</td>
                    <td className="px-6 py-4 text-xs">
                      <span className="bg-slate-800 text-slate-400 border border-slate-700 px-2 py-1 rounded-md">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-amber-400 font-bold">${item.baseValue.toLocaleString()}</td>
                    <td className="px-6 py-4 text-cyan-300">{item.weightKg} kg</td>
                    <td className="px-6 py-4 text-xs">
                      <span className={`px-2 py-0.5 rounded-full border ${
                        item.fragility === 'Extreme' ? 'bg-red-500/10 border-red-500/40 text-red-400' :
                        item.fragility === 'High' ? 'bg-amber-500/10 border-amber-500/40 text-amber-400' :
                        'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                      }`}>
                        {item.fragility}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs">
                      {item.soloCarryable ? (
                        <span className="text-emerald-400">Yes</span>
                      ) : (
                        <span className="text-red-400">Requires 2P / C.A.R.T.</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-xs font-sans text-slate-400 max-w-xs">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
