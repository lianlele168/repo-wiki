'use client';

import React, { useState } from 'react';
import { SCRAP_ITEMS, ScrapItem } from '@/data/wikiData';
import { ShieldAlert, DollarSign, Scale, Zap, Truck, AlertTriangle } from 'lucide-react';

export default function ScrapSalvageCalculator() {
  const [selectedItemId, setSelectedItemId] = useState<string>(SCRAP_ITEMS[0].id);
  const [customValue, setCustomValue] = useState<number>(SCRAP_ITEMS[0].baseValue);
  const [customWeight, setCustomWeight] = useState<number>(SCRAP_ITEMS[0].weightKg);
  const [impactCount, setImpactCount] = useState<number>(1);
  const [transportMode, setTransportMode] = useState<'overhead' | 'drag' | 'cart'>('overhead');
  const [hasExoSuit, setHasExoSuit] = useState<boolean>(false);

  const currentItem = SCRAP_ITEMS.find(i => i.id === selectedItemId) || SCRAP_ITEMS[0];

  const handleSelectItem = (id: string) => {
    setSelectedItemId(id);
    const item = SCRAP_ITEMS.find(i => i.id === id);
    if (item) {
      setCustomValue(item.baseValue);
      setCustomWeight(item.weightKg);
    }
  };

  // Durability & Value Calculation
  let fragilityMultiplier = 0.05; // Low
  if (currentItem.fragility === 'Medium') fragilityMultiplier = 0.10;
  if (currentItem.fragility === 'High') fragilityMultiplier = 0.18;
  if (currentItem.fragility === 'Extreme') fragilityMultiplier = 0.30;

  // Impact damage factor
  let damagePercent = impactCount * fragilityMultiplier;
  
  // Dragging penalty
  if (transportMode === 'drag') {
    damagePercent += 0.25; // Dragging incurs 25% extra floor damage
  } else if (transportMode === 'cart') {
    damagePercent = Math.min(damagePercent, 0.05); // CART protects up to 95%
  }

  damagePercent = Math.min(1.0, damagePercent);
  const finalValue = Math.round(customValue * (1 - damagePercent));
  const lostValue = customValue - finalValue;

  // Speed & Noise
  const effectiveWeight = hasExoSuit ? Math.max(0, customWeight - 40) : customWeight;
  let speedPenalty = Math.min(60, Math.round(effectiveWeight * 0.8));
  if (transportMode === 'cart') speedPenalty = 10;

  let noiseRisk = 'Low';
  if (transportMode === 'drag') noiseRisk = 'Critical';
  else if (impactCount > 3 || customWeight > 40) noiseRisk = 'High';
  else if (impactCount > 1 || customWeight > 20) noiseRisk = 'Medium';

  return (
    <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-8">
      <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
        <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/30 text-amber-400">
          <DollarSign className="w-7 h-7" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
            Item Scrap & Durability Calculator
            <span className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full uppercase tracking-wider">Physics Sim</span>
          </h2>
          <p className="text-sm text-slate-400">Calculate extraction value decay based on weight, impacts, and carrying method.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Parameters */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Select Item Blueprint</label>
            <select
              value={selectedItemId}
              onChange={(e) => handleSelectItem(e.target.value)}
              className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-amber-500 transition-colors"
            >
              {SCRAP_ITEMS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} — Base ${item.baseValue} ({item.weightKg}kg - {item.fragility} Risk)
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Base Value ($)</label>
              <input
                type="number"
                value={customValue}
                onChange={(e) => setCustomValue(Math.max(0, Number(e.target.value)))}
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Weight (kg)</label>
              <input
                type="number"
                value={customWeight}
                onChange={(e) => setCustomWeight(Math.max(0, Number(e.target.value)))}
                className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-2 text-slate-200 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-slate-300">Wall & Floor Drops / Impacts</label>
              <span className="text-sm font-mono font-bold text-amber-400">{impactCount} Impacts</span>
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

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Transport & Handling Method</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setTransportMode('overhead')}
                className={`py-3 px-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                  transportMode === 'overhead'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:border-slate-600'
                }`}
              >
                <Zap className="w-4 h-4" /> Overhead Carry
              </button>
              <button
                type="button"
                onClick={() => setTransportMode('drag')}
                className={`py-3 px-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                  transportMode === 'drag'
                    ? 'bg-red-500/20 border-red-500 text-red-300'
                    : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:border-slate-600'
                }`}
              >
                <AlertTriangle className="w-4 h-4" /> Dragged on Floor
              </button>
              <button
                type="button"
                onClick={() => setTransportMode('cart')}
                className={`py-3 px-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1 transition-all ${
                  transportMode === 'cart'
                    ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                    : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:border-slate-600'
                }`}
              >
                <Truck className="w-4 h-4" /> C.A.R.T. Vehicle
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-slate-800/40 p-3 rounded-xl border border-slate-700/60">
            <input
              type="checkbox"
              id="exosuit"
              checked={hasExoSuit}
              onChange={(e) => setHasExoSuit(e.target.checked)}
              className="w-4 h-4 text-amber-500 accent-amber-500 rounded bg-slate-800 border-slate-700"
            />
            <label htmlFor="exosuit" className="text-xs text-slate-300 cursor-pointer">
              Equipped Exo-Suit Strength Upgrade (+40kg Heavy Carrying Capacity)
            </label>
          </div>
        </div>

        {/* Results Panel */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Calculated Extraction Yield</h3>
            <div className="bg-slate-900/90 border border-amber-500/40 p-5 rounded-xl text-center space-y-1">
              <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">Final Salvage Payout</span>
              <div className="text-4xl font-extrabold text-amber-400 font-mono glow-yellow">
                ${finalValue.toLocaleString()}
              </div>
              <p className="text-xs text-slate-500">
                Base: ${customValue.toLocaleString()} • Value Loss: <span className="text-red-400">-${lostValue.toLocaleString()} ({(damagePercent * 100).toFixed(0)}%)</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <Scale className="w-4 h-4 text-cyan-400" /> Movement Penalty
              </div>
              <div className="text-xl font-bold font-mono text-cyan-300">
                -{speedPenalty}% Speed
              </div>
              <p className="text-[10px] text-slate-500 mt-1">Net Weight: {effectiveWeight}kg</p>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <ShieldAlert className="w-4 h-4 text-amber-400" /> Noise Aggro Risk
              </div>
              <div className={`text-xl font-bold font-mono ${
                noiseRisk === 'Critical' ? 'text-red-400' : noiseRisk === 'High' ? 'text-amber-400' : 'text-emerald-400'
              }`}>
                {noiseRisk}
              </div>
              <p className="text-[10px] text-slate-500 mt-1">Sound Perception Level</p>
            </div>
          </div>

          <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200/90 leading-relaxed">
            💡 <strong>Pro Tip:</strong> Carrying items overhead avoids 25% drag damage. Use C.A.R.T. for heavy machine items over 40kg to prevent monster sound aggro.
          </div>
        </div>
      </div>
    </div>
  );
}
