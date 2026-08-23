import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: "About Us — R.E.P.O. Wiki",
  description: "Learn about the R.E.P.O. Wiki community database project.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-3xl sm:text-4xl font-black uppercase font-mono text-slate-100">About R.E.P.O. Wiki</h1>
        <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            R.E.P.O. Wiki is a dedicated fan-operated resource hub and interactive tool set created for players of Retrieve, Extract & Profit Operation.
          </p>
          <p>
            Our mission is to provide accurate, real-time calculators for scrap durability loss, level quota difficulty scaling, monster aggro perception, and gear ROI models to empower players worldwide.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
