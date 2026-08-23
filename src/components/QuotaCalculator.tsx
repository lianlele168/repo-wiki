'use client';

import React, { useState } from 'react';
import { Target, Users, TrendingUp, Award, CheckCircle } from 'lucide-react';

export default function QuotaCalculator() {
  const [levelNumber, setLevelNumber] = useState<number>(5);
  const [playerCount, setPlayerCount] = useState<number>(4);
  const [estimatedLoot, setEstimatedLoot] = useState<number>(12000);

  // Formula: Quota = Total Loot * 0.7 * Difficulty Curve
  // Difficulty curve scales from 0.4 at level 1 to 1.0 at level 20+
  const difficultyCurve = Math.min(1.0, 0.4 + (levelNumber - 1) * 0.0315);
  const calculatedQuota = Math.round(estimatedLoot * 0.7 * difficultyCurve);
  const perPlayerShare = Math.round(calculatedQuota / playerCount);

  return (
    <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-8">
      <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
        <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/30 text-cyan-400">
          <Target className="w-7 h-7" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
            Extraction Quota & Difficulty Scaling
            <span className="text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded-full uppercase tracking-wider">Level Formula</span>
          </h2>
          <p className="text-sm text-slate-400">Calculate required profit targets for level survival and team member extraction shares.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-slate-300">Level Progression Stage</label>
              <span className="text-sm font-mono font-bold text-cyan-400">Level {levelNumber}</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              value={levelNumber}
              onChange={(e) => setLevelNumber(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-800 rounded-lg cursor-pointer h-2"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
              <span>Lvl 1 (Diff: 0.4x)</span>
              <span>Lvl 10 (Diff: 0.68x)</span>
              <span>Lvl 20+ (Diff: 1.0x Cap)</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Extraction Team Size</label>
            <div className="grid grid-cols-6 gap-2">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setPlayerCount(num)}
                  className={`py-2.5 rounded-xl border text-sm font-mono font-bold transition-all ${
                    playerCount === num
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                      : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:border-slate-600'
                  }`}
                >
                  {num}P
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Estimated Total Map Loot Value ($)</label>
            <input
              type="number"
              step="500"
              value={estimatedLoot}
              onChange={(e) => setEstimatedLoot(Math.max(1000, Number(e.target.value)))}
              className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
            />
            <p className="text-xs text-slate-500 mt-1">Average Map Loot: $10,000 (Small Map) to $35,000+ (High Threat Vaults)</p>
          </div>
        </div>

        {/* Output Card */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Target Level Quota Required</h3>
            <div className="bg-slate-900/90 border border-cyan-500/40 p-5 rounded-xl text-center space-y-1">
              <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">Quota Target to Pass Level</span>
              <div className="text-4xl font-extrabold text-cyan-400 font-mono glow-cyan">
                ${calculatedQuota.toLocaleString()}
              </div>
              <p className="text-xs text-slate-500">
                Formula: Total Map (${estimatedLoot.toLocaleString()}) × 0.7 × Multiplier ({difficultyCurve.toFixed(2)}x)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <Users className="w-4 h-4 text-amber-400" /> Per-Player Quota
              </div>
              <div className="text-xl font-bold font-mono text-amber-300">
                ${perPlayerShare.toLocaleString()}
              </div>
              <p className="text-[10px] text-slate-500 mt-1">Split across {playerCount} players</p>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <TrendingUp className="w-4 h-4 text-emerald-400" /> Difficulty Rating
              </div>
              <div className="text-xl font-bold font-mono text-emerald-300">
                {(difficultyCurve * 100).toFixed(0)}% Intensity
              </div>
              <p className="text-[10px] text-slate-500 mt-1">Level {levelNumber} Difficulty Curve</p>
            </div>
          </div>

          <div className="flex items-start gap-2 text-xs text-slate-400 bg-slate-900/40 p-3 rounded-lg border border-slate-800">
            <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>Exceeding the quota target banking excess cash rolls over to future runs and gear upgrades at the Service Station.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
