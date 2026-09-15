import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, Lock, Eye, Mail, Scale, ExternalLink, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy & Trust Center | R.E.P.O. Wiki',
  description: 'Privacy policy, COPPA child safety disclosures, and data protection guidelines for R.E.P.O. fans.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-amber-400 font-mono">
            <Link href="/" className="hover:text-amber-300">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Privacy Policy</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ROBLOX FAN NETWORK TRUST CENTER</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-slate-100 uppercase">
            Privacy Policy &amp; Trust Disclosures
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Last updated: 2026 • Compliant with COPPA, GDPR, and Google AdSense
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex items-center gap-3 text-xs">
            <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
            <div>
              <p className="font-bold text-white font-mono">COPPA Compliant</p>
              <p className="text-slate-400 text-[11px]">Safe for under 13</p>
            </div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex items-center gap-3 text-xs">
            <Lock className="h-5 w-5 shrink-0 text-amber-400" />
            <div>
              <p className="font-bold text-white font-mono">Zero Account Needed</p>
              <p className="text-slate-400 text-[11px]">No passwords or Robux</p>
            </div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex items-center gap-3 text-xs">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
            <div>
              <p className="font-bold text-white font-mono">100% Client-Side</p>
              <p className="text-slate-400 text-[11px]">Calculators run in browser</p>
            </div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex items-center gap-3 text-xs">
            <Mail className="h-5 w-5 shrink-0 text-amber-400" />
            <div>
              <p className="font-bold text-white font-mono">Verified Contact</p>
              <p className="text-slate-400 text-[11px]">48h response SLA</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-amber-400 font-mono flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              <span>1. Zero Personal Data &amp; No Roblox Credentials</span>
            </h2>
            <p>
              R.E.P.O. Wiki does not require registration or account logins. We will <strong className="text-white">NEVER</strong> ask for your Roblox password, credentials, or Robux. All quota calculators, scrap value evaluators, and gear planning tools execute locally in your web browser.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-amber-400 font-mono flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>2. COPPA &amp; Children&apos;s Online Privacy Compliance</span>
            </h2>
            <p>
              In strict accordance with COPPA, this website does not knowingly collect personal identifiable information from children under the age of 13.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-amber-400 font-mono flex items-center gap-2">
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>3. Telemetry, Cookies &amp; Advertising</span>
            </h2>
            <p>
              We process standard anonymous server logs (such as page response time and browser engine) solely to ensure high site performance. Third-party advertising partners (such as Google AdSense) may use cookies to serve gaming ads based on prior visits. Opt out anytime at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline hover:text-amber-300">Google Ads Settings</a>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-amber-400 font-mono flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-blue-400" />
              <span>4. External Platform Hyperlinks</span>
            </h2>
            <p>
              Our site contains links to Roblox.com and community gaming servers. We have no control over the privacy policies or practices of third-party domains.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-amber-400 font-mono flex items-center gap-2">
              <Scale className="w-4 h-4 text-purple-400" />
              <span>5. Intellectual Property &amp; Fair Use Disclaimer</span>
            </h2>
            <p>
              Roblox is a registered trademark of Roblox Corporation. R.E.P.O. and all game assets belong to their respective developers. This wiki is an independent fan community guide created for educational purposes under Fair Use.
            </p>
          </section>

          <section className="space-y-2 border-t border-slate-800 pt-6">
            <h2 className="text-base font-bold text-amber-400 font-mono flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>6. Editorial &amp; Privacy Contact</span>
            </h2>
            <p>
              For privacy inquiries, DMCA notices, or correction requests, reach our editorial team directly at:
            </p>
            <div className="inline-block rounded-xl border border-amber-500/30 bg-amber-950/40 p-3 font-mono text-sm font-bold text-amber-300">
              contact@robloxwikihub.com
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Inquiries are acknowledged and resolved within 48 business hours.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
