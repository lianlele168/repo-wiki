'use client';

import React, { useState } from 'react';
import { VALUABLE_ITEMS } from '@/data/wikiData';
import { DollarSign, AlertTriangle, Info } from 'lucide-react';

// Honest what-if planner: R.E.P.O. does not publish exact value-decay rates,
// so the per-impact loss is a user-adjustable estimate, not a game constant.
export default function ScrapSalvageCalculator() {
  const [selectedItemId, setSelectedItemId] = useState<string>(VALUABLE_ITEMS[0].id);
  const [itemValue, setItemValue] = useState<number>(20000);
  const [impactCount, setImpactCount] = useState<number>(2);
  const [lossPerHit, setLossPerHit] = useState<number>(10);

  const currentItem = VALUABLE_ITEMS.find(i => i.id === selectedItemId) || VALUABLE_ITEMS[0];

  const handleSelectItem = (id: string) => {
    setSelectedItemId(id);
    const item = VALUABLE_ITEMS.find(i => i.id === id);
    if (!item) return;
    // seed from the documented range midpoint where parseable
    const nums = item.valueNote.match(/\$([\d,]+)/g);
    if (nums && nums.length) {
      const parsed = nums.map(s => Number(s.replace(/[$,]/g, "")));
      const mid = parsed.length >= 2 ? (parsed[0] + parsed[1]) / 2 : parsed[0];
      setItemValue(Math.round(mid));
    }
  };

  const totalLossPct = Math.min(100, impactCount * lossPerHit);
  const finalValue = Math.round(itemValue * (1 - totalLossPct / 100));
  const lostValue = itemValue - finalValue;

  return (
    <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-8">
      <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
        <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/30 text-amber-400">
          <DollarSign className="w-7 h-7" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
            Value Damage Planner
            <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full uppercase tracking-wider">Estimate</span>
          </h2>
          <p className="text-sm text-slate-400">Plan how collisions eat into your haul. The game does not publish exact decay rates, so the per-hit loss below is your own estimate.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Valuable (documented examples)</label>
            <select
              value={selectedItemId}
              onChange={(e) => handleSelectItem(e.target.value)}
              className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
            >
              {VALUABLE_ITEMS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} — {item.valueNote} ({item.tier}-Tier, {item.fragility} fragility)
                </option>
              ))}
            </select>
            <p className="text-[11px] text-slate-500 mt-2">{currentItem.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Item Value ($)</label>
              <input
                type="number"
                value={itemValue}
                onChange={(e) => setItemValue(Math.max(0, Number(e.target.value)))}
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Est. Loss per Hit (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={lossPerHit}
                onChange={(e) => setLossPerHit(Math.min(100, Math.max(0, Number(e.target.value))))}
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-slate-300">Collisions This Haul</label>
              <span className="text-sm font-mono font-bold text-amber-400">{impactCount} hits</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              value={impactCount}
              onChange={(e) => setImpactCount(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 rounded-lg cursor-pointer h-2"
            />
          </div>

          <div className="flex items-start space-x-3 bg-cyan-950/40 p-4 rounded-xl border border-cyan-800/50">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p className="text-xs text-cyan-200/90 leading-relaxed">
              Real rules of thumb: fragile materials (glass, ceramic) lose value much faster per hit than sturdy metal, and doors, stairs and corners are where most hits happen. Judge the per-hit loss by the material of whatever you are carrying.
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Estimated Extraction Yield</h3>
            <div className="bg-slate-900/90 border border-amber-500/40 p-5 rounded-xl text-center space-y-1">
              <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">Estimated Payout</span>
              <div className="text-4xl font-extrabold text-amber-400 font-mono glow-yellow">
                ${finalValue.toLocaleString()}
              </div>
              <p className="text-xs text-slate-500">
                Starting: ${itemValue.toLocaleString()} • Estimated loss: <span className="text-red-400">-${lostValue.toLocaleString()} ({totalLossPct}%)</span>
              </p>
            </div>
          </div>

          <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200/90 leading-relaxed">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                <strong>Reminder:</strong> this is a planning estimate, not a game-accurate simulation. The exact decay rate per collision is not published by the developer — treat every bump as lost money and carry accordingly.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
