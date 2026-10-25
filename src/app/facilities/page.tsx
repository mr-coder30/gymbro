"use client";

import { useState } from "react";
import { MapPin, ShieldCheck, Sparkles, Wind, Globe, CheckCircle2, ChevronRight } from "lucide-react";
import QuickBookingModal from "@/components/QuickBookingModal";

const facilitiesList = [
  {
    id: "f1",
    name: "Biometric Gym Floor & Eleiko Racks",
    sanctuary: "All Global Locations",
    description: "Custom Eleiko competition bars, acoustic impact floor dampening, real-time telemetry sensors on every station.",
    metrics: "Air Purity: 99.9% HEPA • Temp: 19.5°C",
    tag: "STRENGTH & POWER",
  },
  {
    id: "f2",
    name: "Whole-Body Sub-Zero Cryo Suite (-110°C)",
    sanctuary: "Miami • NYC • Dubai",
    description: "Medical-grade electric cryotherapy chambers for systemic inflammatory reduction and rapid muscle glycogen replenishment.",
    metrics: "Session Duration: 3 Mins • Temp: -110°C",
    tag: "BIO-HACKING",
  },
  {
    id: "f3",
    name: "Olympic Thermal Contrast & Cold Plunge Pool",
    sanctuary: "Miami • NYC • Tokyo",
    description: "Multi-temperature hydrotherapy circuit with 4°C cold plunge and 40°C thermal contrast jets for nervous system reset.",
    metrics: "Filtration: UV & Ozone Dual-Stage",
    tag: "RECOVERY & HYDRO",
  },
  {
    id: "f4",
    name: "Private Executive Coaching Suites",
    sanctuary: "All Global Locations",
    description: "Fully private 800 sq ft suites equipped with dedicated rack, cable station, recovery couch, and private shower.",
    metrics: "VIP Soundproofing: 55dB Dampened",
    tag: "EXECUTIVE PRIVACY",
  },
  {
    id: "f5",
    name: "Peptide & IV Nutrient Bio-Lounge",
    sanctuary: "Miami Brickell & Dubai DIFC",
    description: "Administered by licensed medical doctors. Tailored NAD+, B12, Glutathione, and hydration infusions.",
    metrics: "Medical Staff: On-Site 24/7",
    tag: "CELLULAR RECOVERY",
  },
];

export default function FacilitiesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLoc, setSelectedLoc] = useState("Miami Brickell Apex");

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Globe className="w-3.5 h-3.5" />
            <span>GLOBAL ARCHITECTURAL SANCTUARIES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Sanctuary <span className="text-gradient-emerald">Architecture</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base">
            Every sanctuary is meticulously engineered to eliminate friction, maintain acoustic privacy, and provide medical-grade bio-hacking recovery.
          </p>

          {/* Sanctuary Selector */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {["Miami Brickell Apex", "NYC Hudson Yards", "Dubai DIFC Vault", "Tokyo Ginza Tower", "London Mayfair"].map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLoc(loc)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  selectedLoc === loc
                    ? "bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/20"
                    : "glass-pill text-zinc-400 hover:text-white"
                }`}
              >
                📍 {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Sanctuary Live Telemetry Metrics */}
        <div className="glass-card p-6 rounded-3xl border border-white/15 bg-gradient-to-r from-zinc-900/90 via-black to-emerald-950/40 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-[10px] font-mono text-zinc-400">ACTIVE OCCUPANCY</div>
            <div className="text-2xl font-bold text-emerald-400 font-mono mt-1">84% Occupied</div>
            <div className="text-[10px] text-zinc-500">Uncrowded Floor Guaranteed</div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-zinc-400">HEPA AIR PURITY</div>
            <div className="text-2xl font-bold text-white font-mono mt-1">99.98% Clean</div>
            <div className="text-[10px] text-zinc-500">Dual-Stage Air Exchange</div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-zinc-400">CRYO POD TEMP</div>
            <div className="text-2xl font-bold text-cyan-400 font-mono mt-1">-110.4 °C</div>
            <div className="text-[10px] text-zinc-500">Ready for Immediate Entry</div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-zinc-400">ACOUSTIC DAMPENING</div>
            <div className="text-2xl font-bold text-white font-mono mt-1">55 dB Silent</div>
            <div className="text-[10px] text-zinc-500">Vibration Isolation Floor</div>
          </div>
        </div>

        {/* Facilities Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilitiesList.map((facility) => (
            <div
              key={facility.id}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full">
                    {facility.tag}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">{facility.sanctuary}</span>
                </div>

                <h3 className="text-xl font-extrabold text-white mb-2">{facility.name}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                  {facility.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400">{facility.metrics}</span>
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold px-4 py-2 rounded-xl transition-all"
                >
                  Book Private Tour
                </button>
              </div>
            </div>
          ))}
        </div>

        <QuickBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
}
