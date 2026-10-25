"use client";

import { useState } from "react";
import BmiCalculator from "@/components/BmiCalculator";
import QuickBookingModal from "@/components/QuickBookingModal";
import { Sparkles, ShieldCheck, Zap, Flame, CheckCircle2, Heart } from "lucide-react";

const peptideIvMenu = [
  {
    name: "Cellular NAD+ Mitochondrial Reset",
    dose: "250mg - 500mg IV Infusion",
    benefit: "Accelerates ATP energy production, repairs DNA, and clears brain fog for ultra-high executive mental clarity.",
    time: "45 MINS",
    tag: "LONGEVITY & BRAIN FOG",
  },
  {
    name: "BPC-157 & TB-500 Joint Repair Drip",
    dose: "Subcutaneous Peptide Infusion",
    benefit: "Promotes rapid tendon, ligament, and gut lining healing post heavy strength training or joint strain.",
    time: "20 MINS",
    tag: "TENDON & RECOVERY",
  },
  {
    name: "Glutathione & Vitamin C Immunity Flush",
    dose: "2000mg Master Antioxidant",
    benefit: "Clears metabolic waste products, flushes liver toxins, and supports radiant skin elasticity.",
    time: "30 MINS",
    tag: "DETOX & IMMUNITY",
  },
];

export default function NutritionPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-28 pb-20 min-h-screen space-y-16">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CELLULAR & NUTRITIONAL OPTIMIZATION</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Bio-Hacking <span className="text-gradient-emerald">Nutrition</span> & Lounge
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base">
          Combine hyper-personalized macro design with medical-grade IV therapy infusions, peptide formulations, and bio-identical metabolic support.
        </p>
      </div>

      {/* Macro Calculator Section */}
      <BmiCalculator />

      {/* Peptide & IV Infusion Lounge Menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono text-emerald-400">MEDICAL-GRADE INFUSIONS</span>
          <h2 className="text-3xl font-extrabold text-white">Peptide & IV Lounge Menu</h2>
          <p className="text-xs text-zinc-400">Administered on-site in private lounge suites by board-certified physicians.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {peptideIvMenu.map((item, idx) => (
            <div key={idx} className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold text-white mt-4 mb-2">{item.name}</h3>
                <p className="text-xs text-zinc-400 mb-4 leading-relaxed">{item.benefit}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">{item.time} • {item.dose}</span>
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-3 py-1.5 rounded-lg text-xs"
                >
                  Reserve Drip
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <QuickBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
