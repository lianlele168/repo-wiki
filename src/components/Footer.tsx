import React from 'react';
import Link from 'next/link';
import { Shield, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div className="space-y-3 md:col-span-2">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-base font-bold text-slate-200 uppercase tracking-wider font-mono">
              R.E.P.O. <span className="text-amber-400">Database & Tools</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-md leading-relaxed">
            The ultimate community-maintained Wiki, Scrap Durability Calculator, and Quota Planner for R.E.P.O. (Retrieve, Extract & Profit Operation). Built for solo runners and 4-player coop extraction squads.
          </p>
        </div>

        {/* Core Utilities */}
        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 font-mono">Simulators & Tools</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/scrap-calculator" className="hover:text-amber-400 transition-colors">Scrap Durability Calculator</Link></li>
            <li><Link href="/quota-calculator" className="hover:text-amber-400 transition-colors">Quota Target Formula</Link></li>
            <li><Link href="/gear-calculator" className="hover:text-amber-400 transition-colors">Gear ROI & C.A.R.T. Modules</Link></li>
            <li><Link href="/item-database" className="hover:text-amber-400 transition-colors">Valuables & Relics Index</Link></li>
          </ul>
        </div>

        {/* Information & Compliance */}
        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 font-mono">Guides & Policy</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/monsters-guide" className="hover:text-amber-400 transition-colors">Entity Sound Perception</Link></li>
            <li><Link href="/console-commands" className="hover:text-amber-400 transition-colors">PC Console Commands</Link></li>
            <li><Link href="/beginner-guide" className="hover:text-amber-400 transition-colors">Extraction Survival SOP</Link></li>
            <li><Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 space-y-4 sm:space-y-0">
        <p>© 2026 R.E.P.O. Wiki Network. Not affiliated with or endorsed by Semiwork Studios.</p>
        <p className="flex items-center gap-1">
          Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for the Extraction Community
        </p>
      </div>
    </footer>
  );
}
