import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Terminal, Shield, Info } from 'lucide-react';

export const metadata = {
  alternates: { canonical: 'https://repo.robloxwikihub.com/console-commands' },
  title: "Console & Chat Commands — R.E.P.O. Wiki",
  description: "How R.E.P.O. commands actually work: chat commands with the T key, the developer console behind tilde, and why the official command list is short.",
};

export default function ConsoleCommandsPage() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 w-full">
        <div className="border-b border-slate-800 pb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono font-bold mb-3">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>VERIFIED AGAINST THE LIVE GAME — v0.4.x</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            R.E.P.O. Console &amp; Chat Commands
          </h1>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed">
            R.E.P.O. does not have a big console command list — sites claiming commands like an FPS toggle or lobby-size switch are describing commands that do not exist. Here is what is actually in the game.
          </p>
        </div>

        <div className="bg-amber-950/40 border border-amber-700/50 rounded-xl p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-200 leading-relaxed">
            <strong>Honest note:</strong> the official command set revealed by semiwork is small, and it can change between patches. We will not list invented commands to pad this page — anything here is checkable in the live game.
          </p>
        </div>

        <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-400" /> 1. Chat Commands (no setup required)
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            The game ships with a small set of chat commands, mostly used by content creators for cinematics. Press <strong className="text-emerald-400 font-mono">T</strong> to open chat, type a forward slash (<code className="text-emerald-400 font-mono">/</code>) followed by the command name, and confirm. The community wiki documents these as they are discovered — the set is intentionally tiny and does not include money, spawning, or god-mode style cheats.
          </p>
        </section>

        <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" /> 2. The Developer Console
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            A debug console exists behind the tilde key (<code className="text-cyan-400 font-mono">~</code>), but it is <strong>not enabled by default</strong> — you have to turn on developer mode first. It is aimed at modders and debugging, not normal play. Most of the powerful &ldquo;commands&rdquo; you see advertised come from Thunderstore mods (launched via a mod manager), which are separate from anything built into the game.
          </p>
        </section>

        <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-lg font-bold text-white">3. Want an FPS counter? Use Steam&apos;s</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            There is no built-in FPS command. Steam has one: <strong>Steam → Settings → In Game → FPS counter</strong>. It overlays in any game with zero setup.
          </p>
        </section>

        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
          <p className="text-xs text-slate-400 leading-relaxed">
            Looking for real in-game advantages? They come from the service station, not the console: <strong>Stamina</strong> and <strong>Max Health</strong> are the community-agreed first buys. See our <a href="/gear-calculator" className="text-emerald-400 hover:underline">upgrade priority guide</a> and the <a href="/monsters-guide" className="text-emerald-400 hover:underline">monster roster</a> for what actually matters.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
