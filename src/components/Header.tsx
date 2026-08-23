'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Calculator, Target, Terminal, Database, Menu, X, Skull, BookOpen, Wrench } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Scrap Calc', href: '/scrap-calculator', icon: Calculator },
    { name: 'Quota Calc', href: '/quota-calculator', icon: Target },
    { name: 'Gear ROI', href: '/gear-calculator', icon: Wrench },
    { name: 'Monsters', href: '/monsters-guide', icon: Skull },
    { name: 'Item Database', href: '/item-database', icon: Database },
    { name: 'Commands', href: '/console-commands', icon: Terminal },
    { name: 'Guide', href: '/beginner-guide', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:scale-105 group-hover:border-amber-400 transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg font-black tracking-wider text-slate-100 uppercase group-hover:text-amber-400 transition-colors font-mono">
                R.E.P.O. <span className="text-amber-400">Wiki</span>
              </span>
              <span className="block text-[10px] text-slate-400 tracking-tight font-mono">Extraction & Salvage Hub</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-amber-400 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 text-amber-400" />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-amber-400 border border-slate-900 transition-all"
              >
                <Icon className="w-5 h-5 text-amber-400" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
