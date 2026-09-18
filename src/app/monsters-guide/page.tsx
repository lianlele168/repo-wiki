import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MONSTER_ENTITIES } from '@/data/wikiData';
import { Skull, Volume2, ShieldAlert } from 'lucide-react';

export const metadata = {
  alternates: { canonical: 'https://repo.robloxwikihub.com/monsters-guide' },
  title: "Monster Entities & Noise Perception Guide — R.E.P.O. Wiki",
  description: "Complete list of monsters in R.E.P.O. Learn noise sensitivity dB thresholds, movement patterns, and squad survival counter tactics.",
};

export default function MonstersGuidePage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-red-500 selection:text-slate-950">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full py-10 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-2xl w-fit mx-auto text-red-400">
            <Skull className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase font-mono tracking-tight text-slate-100">
            Monster Entities & <span className="text-red-400">Sound Aggro</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            Learn monster perception radiuses, footsteps triggers, and defensive counter strategies to survive high-threat levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MONSTER_ENTITIES.map((monster) => (
            <div key={monster.id} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 backdrop-blur-xl">
              <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                <h3 className="text-xl font-bold font-mono text-slate-100">{monster.name}</h3>
                <span className="bg-red-500/20 text-red-300 border border-red-500/40 px-3 py-1 rounded-lg text-xs font-mono font-bold">
                  Class {monster.threatLevel} Threat
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Noise Perception Threshold:</span>
                  <strong className="text-amber-400 font-mono">{monster.noiseSensitivity}</strong>
                </div>
                <p className="text-slate-400 leading-relaxed pt-2">{monster.behavior}</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 text-xs text-emerald-300 leading-relaxed">
                🛡️ <strong>Survival Counter:</strong> {monster.counterStrategy}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
