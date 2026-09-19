'use client';

import React, { useState } from 'react';
import { Target, Users, CheckCircle, Info } from 'lucide-react';

// Honest quota split planner: the quota total is shown in-game per extraction
// point, so the user enters it directly. No invented difficulty formulas.
export default function QuotaCalculator() {
  const [quotaTotal, setQuotaTotal] = useState<number>(17000);
  const [extractionPoints, setExtractionPoints] = useState<number>(3);
  const [playerCount, setPlayerCount] = useState<number>(4);

  const perPoint = Math.round(quotaTotal / Math.max(1, extractionPoints));
  const perPlayer = Math.round(quotaTotal / Math.max(1, playerCount));

  return (
    <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-8">
      <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
        <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/30 text-cyan-400">
          <Target className="w-7 h-7" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
            Quota Split Planner
            <span className="text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded-full uppercase tracking-wider">Team Plan</span>
          </h2>
          <p className="text-sm text-slate-400">Enter the quota shown on your run and see what it means per extraction point and per player.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Total Quota ($)</label>
            <input
              type="number"
              value={quotaTotal}
              onChange={(e) => setQuotaTotal(Math.max(0, Number(e.target.value)))}
              className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500"
            />
            <p className="text-[11px] text-slate-500 mt-2">Community data point: levels 9-10 sit around $17k total across 3 extraction points.</p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-slate-300">Extraction Points This Level</label>
              <span className="text-sm font-mono font-bold text-cyan-400">{extractionPoints}</span>
            </div>
            <input
              type="range"
              min="1"
              max="4"
              value={extractionPoints}
              onChange={(e) => setExtractionPoints(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-800 rounded-lg cursor-pointer h-2"
            />
            <p className="text-[11px] text-slate-500 mt-1">The quota counter is split across points (e.g. 0/2 from level two onward).</p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-slate-300">Squad Size</label>
              <span className="text-sm font-mono font-bold text-cyan-400">{playerCount} players</span>
            </div>
            <input
              type="range"
              min="1"
              max="6"
              value={playerCount}
              onChange={(e) => setPlayerCount(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-800 rounded-lg cursor-pointer h-2"
            />
          </div>

          <div className="flex items-start space-x-3 bg-cyan-950/40 p-4 rounded-xl border border-cyan-800/50">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p className="text-xs text-cyan-200/90 leading-relaxed">
              Failing the quota — or wiping — sends the squad to Disposal and ends the run. Extracting revives downed teammates, and surplus banking earns tax returns.
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-slate-950/80 border border-cyan-500/40 p-6 rounded-xl text-center space-y-2">
            <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">Per Extraction Point</span>
            <div className="text-4xl font-extrabold text-cyan-300 font-mono">
              ${perPoint.toLocaleString()}
            </div>
            <p className="text-xs text-slate-500">Fill each point to {perPoint.toLocaleString()} to clear a {quotaTotal.toLocaleString()} quota.</p>
          </div>

          <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <Users className="w-4 h-4 text-cyan-400" /> Fair Share Per Player
            </div>
            <div className="text-2xl font-bold font-mono text-slate-100">
              ${perPlayer.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Total haul on a map is usually 2-4x the quota — budget surplus for upgrades.</p>
          </div>

          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-200/90 leading-relaxed">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                <strong>Team tip:</strong> carrying a downed teammate to extraction revives them — a failed haul with everyone alive beats a heroic wipe.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
