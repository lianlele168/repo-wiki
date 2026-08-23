import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONSOLE_COMMANDS } from '@/data/wikiData';
import { Terminal, Shield, Check } from 'lucide-react';

export const metadata = {
  title: "Console Commands & Server Launch Parameters — R.E.P.O. Wiki",
  description: "Working PC console commands for R.E.P.O. Fix FPS stutters, enable 6-player host lobbies, adjust spatial audio HRTF, and toggle developer debug parameters.",
};

export default function ConsoleCommandsPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full py-10 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl w-fit mx-auto text-emerald-400">
            <Terminal className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase font-mono tracking-tight text-slate-100">
            PC Console <span className="text-emerald-400">Commands & Config</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            Open the in-game developer console using <kbd className="bg-slate-800 text-emerald-300 px-2 py-1 rounded border border-slate-700 font-mono text-xs">~ (Tilde)</kbd> to execute performance and host commands.
          </p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONSOLE_COMMANDS.map((cmd, idx) => (
              <div key={idx} className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 space-y-3 font-mono">
                <div className="flex justify-between items-start">
                  <code className="text-sm text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-lg">
                    {cmd.command}
                  </code>
                  <span className="text-[10px] bg-slate-800 text-slate-400 border border-slate-700 px-2 py-0.5 rounded">
                    {cmd.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">{cmd.effect}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
