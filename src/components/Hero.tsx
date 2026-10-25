"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Zap, 
  Sparkles, 
  Activity, 
  Flame, 
  Heart, 
  Trophy, 
  ArrowRight, 
  ShieldCheck, 
  Smartphone,
  ChevronDown
} from "lucide-react";

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [cardFlipped, setCardFlipped] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 fill-emerald-400 animate-pulse" />
              <span>RE-ENGINEERING HUMAN PHYSICAL LIMITS</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]"
            >
              LUXURY. <br className="hidden sm:inline" />
              <span className="text-gradient-emerald">BIOMETRIC POWER.</span> <br />
              PURE DISCIPLINE.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Welcome to <strong className="text-white">KINETIX APEX LABS</strong>. An elite human performance sanctuary combining Olympic sports science, bio-hacking recovery suites, and private architectural luxury.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300 hover:from-emerald-400 hover:to-emerald-300 text-black font-extrabold text-sm px-8 py-4 rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>CLAIM VIP SANCTUARY PASS</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <Link
                href="/programs"
                className="w-full sm:w-auto glass-card hover:bg-white/[0.08] text-white font-semibold text-sm px-8 py-4 rounded-2xl border border-white/15 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>EXPLORE PROGRAMS</span>
              </Link>
            </motion.div>

            {/* Key Stat Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">4</div>
                <div className="text-xs text-zinc-400 mt-0.5">Global Sanctuaries</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">99.4%</div>
                <div className="text-xs text-zinc-400 mt-0.5">Goal Achievement Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">150+</div>
                <div className="text-xs text-zinc-400 mt-0.5">Bio-Hacking Pods</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Mobile-App Card Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Background Glow Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Floating Top Biometric Widget (Heart Rate & Calories) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card p-4 rounded-2xl border border-white/15 shadow-2xl mb-4 flex items-center justify-between backdrop-blur-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
                  <Heart className="w-5 h-5 fill-red-500 animate-pulse" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400">LIVE HEART RATE</div>
                  <div className="text-lg font-bold text-white font-mono flex items-center space-x-1.5">
                    <span>148 BPM</span>
                    <span className="text-[10px] bg-red-500/20 text-red-300 px-1.5 py-0.5 rounded font-sans">
                      ZONE 4
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 border-l border-white/10 pl-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Flame className="w-5 h-5 fill-amber-500" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400">ACTIVE BURN</div>
                  <div className="text-lg font-bold text-white font-mono">840 kcal</div>
                </div>
              </div>
            </motion.div>

            {/* Glass Digital Membership Pass (Interactive 3D Card) */}
            <div
              onClick={() => setCardFlipped(!cardFlipped)}
              className="relative cursor-pointer group perspective-1000"
            >
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl bg-gradient-to-br from-zinc-900/90 via-black to-emerald-950/40 hover:border-emerald-500/50 transition-all duration-500 transform group-hover:scale-[1.01]">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-6 h-6 text-emerald-400 fill-emerald-400" />
                    <span className="font-extrabold text-white tracking-widest text-lg">
                      KINETIX
                    </span>
                  </div>
                  <span className="text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-full">
                    BLACK APEX VIP
                  </span>
                </div>

                {/* Chip & NFC Indicator */}
                <div className="flex items-center justify-between mb-10">
                  <div className="w-11 h-8 bg-gradient-to-r from-amber-200 to-amber-400 rounded-md shadow-inner flex items-center justify-center">
                    <div className="w-7 h-5 border border-amber-600/40 rounded-sm" />
                  </div>
                  <Activity className="w-6 h-6 text-emerald-400/80 animate-pulse" />
                </div>

                {/* Member Details */}
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                      MEMBER ID
                    </div>
                    <div className="text-sm font-mono text-white tracking-widest font-bold">
                      KX-9948-APEX
                    </div>
                    <div className="text-xs text-zinc-300 font-semibold mt-1">
                      ALEXANDER R. STERLING
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                      SANCTUARY ACCESS
                    </div>
                    <div className="text-xs font-mono text-emerald-400 font-bold">
                      ALL GLOBAL LOCATIONS
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Bottom App Metric Widget */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card p-4 rounded-2xl border border-white/15 shadow-2xl mt-4 flex items-center justify-between backdrop-blur-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400">RECOVERY INDEX</div>
                  <div className="text-base font-bold text-emerald-400 font-mono">
                    96% OPTIMAL
                  </div>
                </div>
              </div>

              <div className="glass-pill px-3 py-1.5 rounded-xl text-[11px] font-mono text-zinc-300 flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Bio-Log Ready</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
