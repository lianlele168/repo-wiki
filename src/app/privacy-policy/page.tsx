import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Privacy Policy — R.E.P.O. Wiki",
  description: "Privacy Policy for R.E.P.O. Wiki website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-3xl sm:text-4xl font-black uppercase font-mono text-slate-100">Privacy Policy</h1>
        <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            At R.E.P.O. Wiki, accessible from repo.robloxwikihub.com, your privacy is extremely important to us.
          </p>
          <h2 className="text-base font-bold text-amber-400 font-mono pt-2">Log Files & Cookies</h2>
          <p>
            We follow a standard procedure of using log files and standard cookies to analyze trends, administer the site, track users' movement on the website, and gather demographic information for display ad optimization.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
