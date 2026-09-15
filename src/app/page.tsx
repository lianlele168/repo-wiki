import React from 'react';
import Metadata from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrapSalvageCalculator from '@/components/ScrapSalvageCalculator';
import QuotaCalculator from '@/components/QuotaCalculator';
import AuthorCard from '@/components/AuthorCard';
import { GAME_INFO, SCRAP_ITEMS, MONSTER_ENTITIES, CONSOLE_COMMANDS, FAQ_ITEMS } from '@/data/wikiData';
import { Shield, Sparkles, Flame, Terminal, Database, ArrowRight, ShieldAlert, Cpu, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "R.E.P.O. Wiki — Scrap Durability Calculator & Quota Guide 2026",
  description: "Ultimate R.E.P.O. (Retrieve, Extract & Profit Operation) database. Calculate scrap item impact decay, level quota targets, gear upgrade ROI, monster sound perception, and console commands.",
  keywords: "R.E.P.O. wiki, REPO scrap calculator, REPO quota formula, REPO item values, REPO console commands, REPO monsters guide, REPO game steam",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <Header />

      <main className="flex-1 space-y-16 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* FAQPage JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              dateModified: '2026-09-15',
              author: {
                '@type': 'Person',
                name: 'Commander "Scrapper" Thorne',
                jobTitle: 'Lead Salvage Contractor & Heavy Quota Specialist',
              },
              mainEntity: FAQ_ITEMS.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />

        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden bg-slate-900/60 border border-amber-500/20 p-8 sm:p-12 text-center space-y-8 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Updated for Steam {GAME_INFO.version}</span>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-slate-100 font-mono leading-tight">
              R.E.P.O. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 glow-yellow">Salvage & Quota</span> Database
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Master the physical mechanics of Retrieve, Extract & Profit Operation. Estimate scrap impact durability decay, quota difficulty multipliers, and monster noise aggro thresholds.
            </p>
          </div>

          {/* Stat Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-2">
            {GAME_INFO.stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl text-center">
                <div className="text-xl font-bold font-mono text-amber-400">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Quick CTA Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#scrap-calculator"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center gap-2"
            >
              Scrap Durability Calculator <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#quota-calculator"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/40 font-bold text-sm transition-all flex items-center gap-2"
            >
              Quota Target Formula
            </a>
          </div>
        </section>

        {/* E-E-A-T AUTHOR VERIFICATION */}
        <AuthorCard />

        {/* GAMEPLAY VISUAL SHOWCASE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 font-mono">
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 flex flex-col items-center">
            <Image
              src="/images/repo-header.webp"
              alt="R.E.P.O. Official Semiwork Salvage Facility"
              width={640}
              height={360}
              className="rounded-xl object-cover w-full h-52 border border-slate-800"
              priority
            />
            <p className="text-xs text-slate-400 mt-2 text-center">
              Figure 1: Official Steam R.E.P.O. Environment — Atmospheric salvage facility.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 flex flex-col items-center">
            <Image
              src="/images/repo-gameplay.webp"
              alt="R.E.P.O. Live Extraction Run"
              width={640}
              height={360}
              className="rounded-xl object-contain w-full h-52 bg-black/50 border border-slate-800"
            />
            <p className="text-xs text-slate-400 mt-2 text-center">
              Figure 2: Active Salvage Run — Transporting fragile scrap under sound-stalker threat.
            </p>
          </div>
        </div>

        {/* Flagship Calculator 1: Scrap Durability */}
        <section id="scrap-calculator" className="scroll-mt-24 space-y-4">
          <div className="flex items-center space-x-2">
            <Flame className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-slate-100 font-mono uppercase tracking-wider">Interactive Scrap Calculator</h2>
          </div>
          <ScrapSalvageCalculator />
        </section>

        {/* Flagship Calculator 2: Quota Scaling */}
        <section id="quota-calculator" className="scroll-mt-24 space-y-4">
          <div className="flex items-center space-x-2">
            <Cpu className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-slate-100 font-mono uppercase tracking-wider">Level Quota Target Formula</h2>
          </div>
          <QuotaCalculator />
        </section>

        {/* Top Scrap Items Table */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Database className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-100 font-mono uppercase tracking-wider">High Value Scrap Index</h2>
            </div>
            <Link href="/item-database" className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-mono">
              View All 65+ Items <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-xs font-mono uppercase text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="px-6 py-4">Scrap Blueprint</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Base Value</th>
                    <th className="px-6 py-4">Weight</th>
                    <th className="px-6 py-4">Fragility Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono">
                  {SCRAP_ITEMS.slice(0, 5).map((item) => (
                    <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-100 flex items-center gap-2">
                        {item.name}
                      </td>
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Monster Entity Perception */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <ShieldAlert className="w-6 h-6 text-red-400" />
            <h2 className="text-2xl font-bold text-slate-100 font-mono uppercase tracking-wider">Monster Sound Aggro Guide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MONSTER_ENTITIES.map((monster) => (
              <div key={monster.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-red-500/40 transition-all space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 font-mono">{monster.name}</h3>
                    <span className="text-xs text-slate-400">Noise Sensitivity: <strong className="text-amber-300">{monster.noiseSensitivity}</strong></span>
                  </div>
                  <span className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border ${
                    monster.threatLevel === 'S' ? 'bg-red-500/20 text-red-400 border-red-500/40' : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  }`}>
                    Threat: Class {monster.threatLevel}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{monster.behavior}</p>
                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-emerald-300/90 leading-relaxed">
                  🛡️ <strong>Counter Tactic:</strong> {monster.counterStrategy}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Console Commands */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-slate-100 font-mono uppercase tracking-wider">Popular PC Console Commands</h2>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CONSOLE_COMMANDS.map((cmd, idx) => (
                <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between font-mono">
                  <div>
                    <code className="text-xs text-emerald-400 font-bold">{cmd.command}</code>
                    <p className="text-[11px] text-slate-400 mt-1 font-sans">{cmd.effect}</p>
                  </div>
                  <span className="text-[10px] bg-slate-900 text-slate-400 border border-slate-800 px-2 py-1 rounded">
                    {cmd.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-100 font-mono uppercase tracking-wider">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQ_ITEMS.map((faq, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-2">
                <h3 className="text-sm font-bold text-amber-300 font-mono">{faq.question}</h3>
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
