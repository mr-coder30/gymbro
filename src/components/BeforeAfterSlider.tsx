"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Activity, 
  ArrowLeftRight, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles 
} from "lucide-react";

const transformations = [
  {
    id: 1,
    name: "VICTOR H. STERLING",
    role: "Hedge Fund Managing Partner",
    duration: "16 WEEKS PROTOCOL",
    metrics: [
      { label: "BODY FAT", before: "24.8%", after: "9.2%", change: "-15.6%" },
      { label: "LEAN MUSCLE", before: "71.5 kg", after: "78.4 kg", change: "+6.9 kg" },
      { label: "VO2 MAX", before: "41.2", after: "59.8", change: "+45.1%" },
    ],
    quote: "Kinetix completely re-engineered my physique while increasing my executive stamina. The combination of bio-hacking cryo recovery and high-output strength coaching is unmatched.",
    program: "Apex Executive Re-Composition",
    trainer: "Coach Elena Rostova",
    color: "from-emerald-900/40 via-zinc-900 to-black",
  },
  {
    id: 2,
    name: "SERAPHINA CHEN",
    role: "Tech Founder & Venture Capitalist",
    duration: "12 WEEKS PROTOCOL",
    metrics: [
      { label: "BODY FAT", before: "28.1%", after: "15.4%", change: "-12.7%" },
      { label: "SQUAT 1RM", before: "65 kg", after: "125 kg", change: "+92.3%" },
      { label: "RECOVERY INDEX", before: "64%", after: "96%", change: "+32.0%" },
    ],
    quote: "The biometric tracking makes every single workout measurable. I reached my lifetime peak physical condition without burning out.",
    program: "Olympic Calisthenics & Bio-Reset",
    trainer: "Coach Marcus Thorne",
    color: "from-teal-900/40 via-zinc-900 to-black",
  },
];

export default function BeforeAfterSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPos, setSliderPos] = useState(50); // percentage

  const current = transformations[activeTab];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5" />
            <span>MEASURABLE BIOMETRIC TRANSFORMATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Real Humans. <span className="text-gradient-emerald">Apex Results.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Inspect verified case studies of high-performance executives and athletes who underwent our signature 12-to-16 week human optimization protocols.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-1.5 rounded-full border border-white/10 flex space-x-2">
            {transformations.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/25"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.name} ({item.duration})
              </button>
            ))}
          </div>
        </div>

        {/* Transformation Showcase */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/15 bg-gradient-to-br from-zinc-900/90 to-black grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Split Visualizer */}
          <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 select-none group">
            {/* Before Side */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-950 flex flex-col justify-between p-8 text-zinc-400">
              <div className="glass-pill px-3 py-1 rounded-md text-xs font-mono w-fit bg-red-500/20 text-red-300 border-red-500/30">
                BEFORE PROTOCOL (DAY 1)
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-extrabold text-zinc-600 font-mono">
                  {current.metrics[0].before}
                </div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                  BASELINE BODY FAT %
                </div>
              </div>
            </div>

            {/* After Side (Clipped by slider) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-zinc-900 to-black flex flex-col justify-between p-8 text-white border-r border-emerald-400"
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
              <div className="glass-pill px-3 py-1 rounded-md text-xs font-mono w-fit bg-emerald-500/20 text-emerald-300 border-emerald-500/40">
                AFTER APEX PROTOCOL
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-extrabold text-emerald-400 font-mono">
                  {current.metrics[0].after}
                </div>
                <div className="text-xs font-mono text-emerald-300 uppercase tracking-widest flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1" /> OPTIMIZED BODY FAT %
                </div>
              </div>
            </div>

            {/* Range Drag Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-emerald-400 cursor-ew-resize z-20 shadow-xl"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-emerald-400 text-black flex items-center justify-center shadow-lg shadow-emerald-500/50">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

            {/* Interactive Range Input Overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>

          {/* Metrics & Testimonial Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-mono text-emerald-400 tracking-wider">
                MEMBER CASE STUDY #0{current.id}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                {current.name}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-0.5">
                {current.role} • <span className="text-emerald-400">{current.duration}</span>
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 py-4 border-y border-white/10">
              {current.metrics.map((m, idx) => (
                <div key={idx} className="bg-black/50 p-3 rounded-xl border border-white/10">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">{m.label}</div>
                  <div className="text-base font-bold text-white font-mono mt-1">{m.after}</div>
                  <div className="text-[10px] font-mono text-emerald-400 font-semibold flex items-center mt-0.5">
                    <TrendingUp className="w-3 h-3 mr-0.5 inline" /> {m.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-sm text-zinc-300 italic border-l-2 border-emerald-400 pl-4 leading-relaxed">
              &quot;{current.quote}&quot;
            </blockquote>

            {/* Program Details */}
            <div className="flex flex-wrap gap-4 text-xs font-mono pt-2">
              <div className="glass-pill px-3 py-1.5 rounded-lg text-zinc-300">
                PROGRAM: <strong className="text-white">{current.program}</strong>
              </div>
              <div className="glass-pill px-3 py-1.5 rounded-lg text-zinc-300">
                COACH: <strong className="text-emerald-400">{current.trainer}</strong>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
