import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthorCard from '@/components/AuthorCard';
import { BookOpen, CheckCircle, ShieldAlert, ArrowRight, HelpCircle, Flame, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Extraction Survival SOP & Beginner Guide — R.E.P.O. Wiki (September 2026)",
  description: "Step-by-step beginner guide for R.E.P.O. Learn overhead scrap transport physics, sound-stalker monster evasion, and team quota optimization.",
};

const BEGINNER_FAQS = [
  {
    question: "Why does scrap lose value when dropped on the floor?",
    answer: "Every item in R.E.P.O. possesses a fragility index. Physical wall or floor impacts apply a permanent 5% to 25% cash value penalty. If an item hits zero durability, it shatters into worthless junk.",
  },
  {
    question: "What gear upgrade should solo runners purchase first?",
    answer: "Prioritize the Exo-Suit Strength Upgrade I ($1,200). It expands your solo overhead carry limit by +40kg, allowing you to carry heavy generators without dragging them across the floor.",
  },
  {
    question: "How do you detect the Scrap Mimic before touching it?",
    answer: "Aim the Valuable Scanner at the suspect object. Authentic scrap emits an encrypted green serial ID code, while mimics return a corrupted red static signal.",
  },
  {
    question: "What should you do when a Screamer Alarm Sentry triggers?",
    answer: "Deploy an EMP disruption grenade immediately to disable the sentry, then retreat into the nearest airlock chamber until the facility security lockdown cycle clears.",
  },
];

export default function BeginnerGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    dateModified: "2026-09-15",
    author: {
      "@type": "Person",
      name: 'Commander "Scrapper" Thorne',
      jobTitle: "Lead Salvage Contractor & Heavy Quota Specialist",
    },
    mainEntity: BEGINNER_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main className="flex-1 max-w-5xl mx-auto w-full py-10 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl w-fit mx-auto text-amber-400">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase font-mono tracking-tight text-slate-100">
            Extraction <span className="text-amber-400">Survival SOP Guide</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The core strategic checklist for solo contractors and multiplayer salvage squads operating inside high-threat abandoned industrial facilities in R.E.P.O.
          </p>
        </div>

        <AuthorCard />

        {/* Visual Media Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 flex flex-col items-center">
            <Image
              src="/images/repo-header.webp"
              alt="R.E.P.O. Official Steam Salvage Arena and Contractors"
              width={640}
              height={360}
              className="rounded-xl object-cover w-full h-56 border border-slate-800"
              priority
            />
            <p className="text-xs text-slate-400 mt-3 text-center font-mono">
              Figure 1: Official Semiwork R.E.P.O. Contractor Facility Environment.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-4 flex flex-col items-center">
            <Image
              src="/images/repo-gameplay.webp"
              alt="R.E.P.O. Live Extraction Run and Scrap Transport"
              width={640}
              height={360}
              className="rounded-xl object-cover w-full h-56 border border-slate-800"
            />
            <p className="text-xs text-slate-400 mt-3 text-center font-mono">
              Figure 2: Active Salvage Haul — Navigating dark industrial corridors with heavy cargo.
            </p>
          </div>
        </div>

        {/* Tactical Rules & Protocols */}
        <div className="space-y-8">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold font-mono text-amber-400 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-amber-400" /> Rule 1: Never Drag Heavy Machinery on Bare Concrete
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Dragging heavy objects like Industrial Generators (85kg) or Vintage Arcade Cabinets (50kg) across unpaved floors induces rapid friction damage. Every second of contact causes a continuous 5% durability decay and emits grinding noise exceeding 65 decibels. This acoustic signature aggros Sound-Stalker Phantoms from up to two zones away. Always carry items overhead or deploy the C.A.R.T. vehicle for silent wheel transport.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold font-mono text-cyan-400 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-cyan-400" /> Rule 2: Prioritize Scanner Pings Over Blind Looting
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Diving deep into unmapped facility wings without sensor equipment is the primary cause of squad wipes. Investing $800 into the Valuable Scanner Tracker allows you to pinpoint high-density loot rooms through concrete walls, enabling your team to chart the shortest extraction path and avoid wandering into patrol routes of Crawler Behemoths.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold font-mono text-emerald-400 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" /> Rule 3: Balance Greed Against Target Quota Thresholds
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Contract penalties for failed extractions can bankrupt your company balance. Once your squad has gathered enough value to exceed the level quota by 15%, call for an immediate tactical extraction. Use our interactive <Link href="/calculator" className="text-cyan-400 font-bold underline font-mono">Quota & Salvage Calculator</Link> to calculate exactly how many items you need before heading toward the exit airlock.
            </p>
          </div>

          {/* FAQ Section */}
          <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold font-mono text-cyan-400 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" /> Beginner Field Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BEGINNER_FAQS.map((faq, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h3 className="font-bold text-slate-200 text-sm font-mono">{faq.question}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
