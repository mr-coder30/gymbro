"use client";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { Trophy, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

export default function TransformationsPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen space-y-12">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <Trophy className="w-3.5 h-3.5" />
          <span>VERIFIED BIOMETRIC CASE STUDIES</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Human Potential <span className="text-gradient-emerald">Realized</span>
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base">
          Every transformation at Kinetix is verified using DEXA body scans, VO2 max treadmill testing, and continuous heart rate telemetry.
        </p>
      </div>

      {/* Interactive Before/After Component */}
      <BeforeAfterSlider />

      {/* Grid of Verified Case Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-extrabold text-white mb-8 text-center">Verified Executive Profiles</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400">12 WEEK RE-COMP</span>
              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">VERIFIED DEXA</span>
            </div>
            <h3 className="text-lg font-bold text-white">Jonathan K. • Founder</h3>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-black/50 p-3 rounded-xl">
              <div>
                <span className="text-zinc-400">BODY FAT</span>
                <div className="text-emerald-400 font-bold">22.4% → 11.1%</div>
              </div>
              <div>
                <span className="text-zinc-400">LEAN MASS</span>
                <div className="text-emerald-400 font-bold">+5.4 kg</div>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              &quot;The data-driven approach changed how I view fitness. I have more energy for 14-hour board days than I had in my 20s.&quot;
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400">16 WEEK ATHLETIC</span>
              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">VERIFIED DEXA</span>
            </div>
            <h3 className="text-lg font-bold text-white">Camilla S. • Venture Partner</h3>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-black/50 p-3 rounded-xl">
              <div>
                <span className="text-zinc-400">VO2 MAX</span>
                <div className="text-emerald-400 font-bold">38.5 → 54.2</div>
              </div>
              <div>
                <span className="text-zinc-400">RECOVERY</span>
                <div className="text-emerald-400 font-bold">+38% HRV</div>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              &quot;Cryo recovery and zone 2 training allowed me to double my aerobic output without suffering joint inflammation.&quot;
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400">8 WEEK HYPERTROPHY</span>
              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">VERIFIED DEXA</span>
            </div>
            <h3 className="text-lg font-bold text-white">David L. • Managing Director</h3>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-black/50 p-3 rounded-xl">
              <div>
                <span className="text-zinc-400">DEADLIFT 1RM</span>
                <div className="text-emerald-400 font-bold">140kg → 220kg</div>
              </div>
              <div>
                <span className="text-zinc-400">MUSCLE MASS</span>
                <div className="text-emerald-400 font-bold">+4.1 kg</div>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              &quot;Under Coach Marcus&apos; supervision, my strength exploded while keeping injury risk at zero.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
