"use client";

import { useState } from "react";
import MemberDashboardWidget from "@/components/MemberDashboardWidget";
import { Smartphone, Lock, ShieldCheck, Sparkles, UserCheck, Calendar, Activity, Zap, MessageSquare } from "lucide-react";

export default function MemberPortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [memberId, setMemberId] = useState("KX-9948-APEX");

  return (
    <div className="pt-28 pb-20 min-h-screen space-y-12">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <Smartphone className="w-3.5 h-3.5" />
          <span>KINETIX MOBILE APPLICATION PORTAL</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Member <span className="text-gradient-emerald">Dashboard</span>
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base">
          Manage your biometric telemetry, NFC turnstile key, private coaching schedules, and sub-zero cryotherapy reservations in real time.
        </p>
      </div>

      {/* Main Interactive Mobile App Simulator */}
      <MemberDashboardWidget />

      {/* Extended Member Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Upcoming Reservations</h3>
            <div className="space-y-3 text-xs font-mono">
              <div className="bg-black/50 p-3 rounded-xl border border-white/10 flex justify-between">
                <div>
                  <div className="text-white font-bold">Hypertrophy Architecture II</div>
                  <div className="text-zinc-400 text-[10px]">Suite B • Coach Marcus</div>
                </div>
                <div className="text-emerald-400 text-right">TODAY 17:30</div>
              </div>
              <div className="bg-black/50 p-3 rounded-xl border border-white/10 flex justify-between">
                <div>
                  <div className="text-white font-bold">Cryo Cell Pod (-110°C)</div>
                  <div className="text-zinc-400 text-[10px]">Chamber 02</div>
                </div>
                <div className="text-cyan-400 text-right">TODAY 18:45</div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Weekly Biometric Averages</h3>
            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between items-center bg-black/50 p-3 rounded-xl">
                <span className="text-zinc-400">AVERAGE HRV</span>
                <span className="text-emerald-400 font-bold">88 ms (High)</span>
              </div>
              <div className="flex justify-between items-center bg-black/50 p-3 rounded-xl">
                <span className="text-zinc-400">SLEEP RECOVERY</span>
                <span className="text-emerald-400 font-bold">92% Optimal</span>
              </div>
              <div className="flex justify-between items-center bg-black/50 p-3 rounded-xl">
                <span className="text-zinc-400">CALORIC BURN / WK</span>
                <span className="text-amber-400 font-bold">6,420 kcal</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Direct Coach Messaging</h3>
            <p className="text-xs text-zinc-400">Direct encrypted channel to Head Performance Coach Marcus Vance.</p>
            <div className="bg-black/60 p-3 rounded-xl border border-white/10 text-xs text-zinc-300 italic">
              &quot;Alexander, your readiness score is 94%. We will push progressive overload on squats today.&quot;
            </div>
            <button className="w-full bg-emerald-500 text-black font-bold py-2.5 rounded-xl text-xs">
              Send Coach Message
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
