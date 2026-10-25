"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Smartphone, 
  Wifi, 
  Battery, 
  Heart, 
  Flame, 
  Calendar, 
  CheckCircle2, 
  Lock, 
  Unlock, 
  Sparkles, 
  ChevronRight, 
  Zap, 
  Dumbbell, 
  ShieldCheck, 
  Clock 
} from "lucide-react";

export default function MemberDashboardWidget() {
  const [nfcUnlocked, setNfcUnlocked] = useState(false);
  const [activeTab, setActiveTab] = useState<"workout" | "biometrics" | "access">("biometrics");

  const handleNfcScan = () => {
    setNfcUnlocked(true);
    setTimeout(() => {
      setNfcUnlocked(false);
    }, 4000);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
            <span>NATIVE MOBILE APP EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Your Sanctuary in <span className="text-gradient-emerald">Your Pocket</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Every Kinetix membership includes full access to our custom iOS and Android mobile platform. Control NFC sanctuary turnstiles, monitor real-time heart rate zones, and reserve bio-hacking pods instantly.
          </p>
        </div>

        {/* Mobile Device Frame Showcase */}
        <div className="max-w-md mx-auto relative">
          
          {/* iOS Phone Chassis Frame */}
          <div className="glass-card rounded-[48px] p-4 sm:p-5 border-4 border-zinc-800/80 shadow-2xl bg-gradient-to-b from-zinc-900 via-black to-zinc-950 relative overflow-hidden">
            
            {/* Phone Notch & Status Bar */}
            <div className="flex items-center justify-between px-6 pt-2 pb-4 text-[11px] font-mono text-zinc-400">
              <span className="font-semibold text-white">9:41</span>
              <div className="w-20 h-4 bg-black rounded-full border border-white/10" />
              <div className="flex items-center space-x-2">
                <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                <Battery className="w-4 h-4 text-emerald-400" />
              </div>
            </div>

            {/* App Screen Content Header */}
            <div className="px-3 pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center font-bold text-white text-sm">
                    AS
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">ALEXANDER STERLING</div>
                    <div className="text-[10px] font-mono text-emerald-400 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1" />
                      BLACK APEX MEMBER
                    </div>
                  </div>
                </div>

                <div className="glass-pill px-2.5 py-1 rounded-full text-[10px] font-mono text-zinc-300">
                  DAY 18 STREAK 🔥
                </div>
              </div>

              {/* App Tab Switcher */}
              <div className="grid grid-cols-3 gap-1 bg-black/60 p-1 rounded-xl border border-white/10 text-[11px] font-mono mb-4">
                <button
                  onClick={() => setActiveTab("biometrics")}
                  className={`py-1.5 rounded-lg transition-all ${
                    activeTab === "biometrics"
                      ? "bg-emerald-500 text-black font-bold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  BIOMETRICS
                </button>
                <button
                  onClick={() => setActiveTab("workout")}
                  className={`py-1.5 rounded-lg transition-all ${
                    activeTab === "workout"
                      ? "bg-emerald-500 text-black font-bold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  TODAY
                </button>
                <button
                  onClick={() => setActiveTab("access")}
                  className={`py-1.5 rounded-lg transition-all ${
                    activeTab === "access"
                      ? "bg-emerald-500 text-black font-bold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  NFC GATE
                </button>
              </div>

              {/* App Tab Content */}
              {activeTab === "biometrics" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  {/* Live Heart Rate Card */}
                  <div className="bg-gradient-to-r from-red-950/40 via-zinc-900 to-black p-4 rounded-2xl border border-red-500/30">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                        <span className="text-xs font-mono text-zinc-300">HEART RATE MONITOR</span>
                      </div>
                      <span className="text-[10px] font-mono bg-red-500/20 text-red-300 px-2 py-0.5 rounded">
                        ZONE 4 HIGH
                      </span>
                    </div>

                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-extrabold text-white font-mono">154</span>
                      <span className="text-xs font-mono text-zinc-400">BPM</span>
                    </div>

                    {/* Simulated Waveform graph */}
                    <div className="flex items-end space-x-1 h-8 mt-3">
                      {[30, 45, 60, 40, 85, 95, 70, 50, 80, 100, 65, 40, 90, 75, 60].map((val, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-red-500/80 rounded-t-sm transition-all"
                          style={{ height: `${val}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Recovery Index & Calories Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-zinc-900/80 p-3.5 rounded-2xl border border-white/10">
                      <div className="text-[10px] font-mono text-zinc-400">RECOVERY SCORE</div>
                      <div className="text-xl font-bold text-emerald-400 font-mono mt-1">94%</div>
                      <div className="text-[9px] text-zinc-500">Ready for Max Output</div>
                    </div>

                    <div className="bg-zinc-900/80 p-3.5 rounded-2xl border border-white/10">
                      <div className="text-[10px] font-mono text-zinc-400">CALORIES BURNED</div>
                      <div className="text-xl font-bold text-amber-400 font-mono mt-1">842 kcal</div>
                      <div className="text-[9px] text-zinc-500">Target: 900 kcal</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "workout" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  <div className="bg-zinc-900/90 p-4 rounded-2xl border border-emerald-500/30">
                    <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-1">
                      <span>SCHEDULED SESSION</span>
                      <span>17:30 PM</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">Hypertrophy Architecture II</h4>
                    <p className="text-[11px] text-zinc-400">Private Suite B • Coach Marcus Vance</p>

                    <div className="mt-3 flex items-center justify-between pt-3 border-t border-white/10">
                      <span className="text-[10px] font-mono text-zinc-400">STATUS: CONFIRMED</span>
                      <button className="bg-emerald-500 text-black text-[10px] font-bold px-3 py-1 rounded-lg">
                        Check In
                      </button>
                    </div>
                  </div>

                  <div className="bg-black/60 p-3 rounded-2xl border border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      <span className="text-zinc-300">Cryotherapy Pod Reserved</span>
                    </div>
                    <span className="font-mono text-cyan-400 text-[11px]">18:45 PM</span>
                  </div>
                </motion.div>
              )}

              {activeTab === "access" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4 text-center py-4"
                >
                  <div className="text-xs font-mono text-zinc-400">SANCTUARY BIOMETRIC NFC KEY</div>
                  
                  <div
                    onClick={handleNfcScan}
                    className={`w-32 h-32 rounded-full mx-auto flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border-2 ${
                      nfcUnlocked
                        ? "bg-emerald-500/20 border-emerald-400 text-emerald-400 shadow-2xl shadow-emerald-500/50 scale-105"
                        : "bg-zinc-900 border-white/20 text-zinc-400 hover:border-emerald-500/40"
                    }`}
                  >
                    {nfcUnlocked ? (
                      <>
                        <Unlock className="w-10 h-10 mb-1 text-emerald-400 animate-bounce" />
                        <span className="text-[10px] font-mono font-bold text-emerald-300">GATE OPEN</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-10 h-10 mb-1 text-zinc-400" />
                        <span className="text-[10px] font-mono text-zinc-400">TAP TO UNLOCK</span>
                      </>
                    )}
                  </div>

                  <p className="text-[11px] text-zinc-400 max-w-xs mx-auto">
                    {nfcUnlocked
                      ? "Access Granted: Brickell Apex Sanctuary turnstile unlocked."
                      : "Hold mobile device within 10cm of turnstile reader to enter."}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Bottom Home Indicator */}
            <div className="w-32 h-1 bg-zinc-700 rounded-full mx-auto mt-2" />
          </div>

        </div>

      </div>
    </section>
  );
}
