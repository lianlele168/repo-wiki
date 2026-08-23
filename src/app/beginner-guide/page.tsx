import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, CheckCircle, ShieldAlert, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Extraction Survival SOP & Beginner Guide — R.E.P.O. Wiki",
  description: "Step-by-step beginner guide for R.E.P.O. Learn how to carry scrap overhead, avoid Sound-Stalker aggro, and maximize profit margins.",
};

export default function BeginnerGuidePage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto w-full py-10 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl w-fit mx-auto text-amber-400">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase font-mono tracking-tight text-slate-100">
            Extraction <span className="text-amber-400">Survival SOP Guide</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            The core strategic checklist for solo and squad runners in R.E.P.O.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold font-mono text-amber-400 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-amber-400" /> Rule 1: Never Drag Heavy Items on Floors
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Dragging items like Heavy Industrial Generators (85kg) across unpaved floors causes immediate 25% floor impact damage penalty and emits noise loud enough to aggro Class S Sound-Stalkers from 50 meters away. Always lift items overhead or use the C.A.R.T. vehicle.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold font-mono text-cyan-400 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" /> Rule 2: Prioritize Valuable Scanner Early
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Purchasing the Valuable Tracker for $800 pays for itself in a single run by revealing hidden Gold Stacks and Quantum Cores trapped inside vault walls.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold font-mono text-emerald-400 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" /> Rule 3: Calculate Quotas Before Vault Push
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Check your level quota target before diving into high-danger lower sub-basements. Once your squad has extracted enough value to pass the level quota, extract immediately to secure your bank account.
            </p>
            <div className="pt-2">
              <Link href="/quota-calculator" className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:underline">
                Use Level Quota Calculator <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
