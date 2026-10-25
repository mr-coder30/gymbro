"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Dumbbell, 
  Flame, 
  Clock, 
  Sparkles, 
  Search, 
  CheckCircle2, 
  Zap, 
  ArrowRight, 
  X, 
  ShieldCheck 
} from "lucide-react";
import ProgramCard, { ProgramItem } from "@/components/ProgramCard";

const allPrograms: ProgramItem[] = [
  {
    id: "p1",
    title: "Hypertrophy Architecture II",
    category: "STRENGTH & HYPERTROPHY",
    intensity: 5,
    duration: "12 WEEKS • 4X/WK",
    description: "Scientific progressive overload system designed for maximum muscle tissue hypertrophy, density, and athletic symmetry.",
    focus: ["Myofibrillar Growth", "Periodized Overload", "Vascularity"],
    biohack: "Post-workout Red Light Photobiomodulation",
    imageBg: "",
  },
  {
    id: "p2",
    title: "Cryo Cell Recovery & Reset",
    category: "BIO-HACKING",
    intensity: 3,
    duration: "RECURRING • DAILY",
    description: "Accelerate cellular repair using whole-body cryotherapy (-110°C), hyperbaric oxygen chambers, and infrared thermogenesis.",
    focus: ["Mitochondrial Health", "Systemic Inflammation", "ATP Synthesis"],
    biohack: "-110°C Cryo Pod + Hyperbaric O2",
    imageBg: "",
  },
  {
    id: "p3",
    title: "VO2 Max Athleticism & Output",
    category: "CARDIOVASCULAR",
    intensity: 5,
    duration: "8 WEEKS • 3X/WK",
    description: "Elevate lactate threshold and peak aerobic capacity through high-intensity zone 4/5 conditioning monitored in real time.",
    focus: ["Lactate Threshold", "Cardiac Output", "Endurance"],
    biohack: "Live Heart Rate Zone Telemetry",
    imageBg: "",
  },
  {
    id: "p4",
    title: "Olympic Calisthenics & Lever Control",
    category: "CALISTHENICS & MOBILITY",
    intensity: 4,
    duration: "10 WEEKS • 4X/WK",
    description: "Master bodyweight lever mechanics, handstand push-ups, muscle-ups, and mobility joint durability.",
    focus: ["Relative Strength", "Joint Durability", "Scapular Stability"],
    biohack: "Targeted Percussive Muscle Therapy",
    imageBg: "",
  },
  {
    id: "p5",
    title: "Executive Longevity & Anti-Aging",
    category: "BIO-HACKING",
    intensity: 3,
    duration: "ONGOING • 3X/WK",
    description: "Designed specifically for busy corporate founders to optimize HRV, cortisol regulation, muscle retention, and deep sleep.",
    focus: ["HRV Elevation", "Cortisol Dampening", "Bone Density"],
    biohack: "Peptide IV Infusions & Sauna Contrast",
    imageBg: "",
  },
  {
    id: "p6",
    title: "Raw Power & Neuromuscular 1RM",
    category: "STRENGTH & HYPERTROPHY",
    intensity: 5,
    duration: "12 WEEKS • 3X/WK",
    description: "Low-rep, high-load neurological recruitment protocol for peak squat, bench press, and deadlift absolute strength.",
    focus: ["CNS Recruitment", "Compound Mechanics", "Tendonal Stiffness"],
    biohack: "Cryo Nerve Stimulation + Creatine Loading",
    imageBg: "",
  },
];

export default function ProgramsPage() {
  const [selectedCat, setSelectedCat] = useState("ALL");
  const [search, setSearch] = useState("");
  const [activeModalProgram, setActiveModalProgram] = useState<ProgramItem | null>(null);

  const filtered = allPrograms.filter((p) => {
    const matchesCat = selectedCat === "ALL" || p.category === selectedCat;
    const matchesQuery =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>ELITE HUMAN OPTIMIZATION PROTOCOLS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Designed for <span className="text-gradient-emerald">Maximum Output</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base">
            Every program at Kinetix is grounded in peer-reviewed sports science, periodized load progression, and bio-hacking recovery integrations.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="glass-card p-4 sm:p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search programs by keyword (e.g., hypertrophy, cryo, VO2 max)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black/60 border border-white/15 rounded-2xl pl-11 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "ALL",
              "STRENGTH & HYPERTROPHY",
              "BIO-HACKING",
              "CARDIOVASCULAR",
              "CALISTHENICS & MOBILITY",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  selectedCat === cat
                    ? "bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/20"
                    : "glass-pill text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onSelect={(p) => setActiveModalProgram(p)}
            />
          ))}
        </div>

        {/* Program Detail Modal */}
        <AnimatePresence>
          {activeModalProgram && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalProgram(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-2xl glass-card rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl z-10 space-y-6"
              >
                <button
                  onClick={() => setActiveModalProgram(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl glass-pill text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono">
                  <Zap className="w-4 h-4" />
                  <span>{activeModalProgram.category} PROTOCOL</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeModalProgram.title}
                </h2>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {activeModalProgram.description}
                </p>

                <div className="grid grid-cols-2 gap-4 bg-black/50 p-4 rounded-2xl border border-white/10 text-xs font-mono">
                  <div>
                    <span className="text-zinc-400">DURATION & FREQUENCY</span>
                    <div className="text-white font-bold mt-1">{activeModalProgram.duration}</div>
                  </div>
                  <div>
                    <span className="text-zinc-400">INTENSITY RATING</span>
                    <div className="text-amber-400 font-bold mt-1">{activeModalProgram.intensity} / 5 (Extreme)</div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-mono text-emerald-400 mb-2">INTEGRATED BIO-HACK RECOVERY</div>
                  <div className="glass-pill p-3.5 rounded-xl text-xs text-white flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{activeModalProgram.biohack}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setActiveModalProgram(null)}
                    className="w-full bg-emerald-500 text-black font-extrabold py-3.5 rounded-xl text-sm hover:bg-emerald-400 transition-colors"
                  >
                    ENROLL IN PROTOCOL WITH MASTER COACH
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
