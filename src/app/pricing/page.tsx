"use client";

import { useState } from "react";
import PricingCard, { PricingPlan } from "@/components/PricingCard";
import QuickBookingModal from "@/components/QuickBookingModal";
import { Zap, Sparkles, TrendingUp, Calculator, ShieldCheck } from "lucide-react";

const pricingPlans: PricingPlan[] = [
  {
    id: "p1",
    name: "Apex Executive",
    badge: "TIER I ACCESS",
    monthlyPrice: 750,
    annualPrice: 600,
    description: "Designed for dedicated high-performers seeking access to state-of-the-art gym floors and essential recovery amenities.",
    features: [
      "Access to Single Home Sanctuary Floor",
      "Unlimited Biometric Gym Floor Access",
      "Kinetix iOS / Android Member App",
      "2x Monthly Whole-Body Cryotherapy",
      "Locker Room & Infrared Sauna Suite",
    ],
    color: "from-zinc-900 to-black",
  },
  {
    id: "p2",
    name: "Onyx Elite",
    badge: "TIER II PRIVILEGE",
    monthlyPrice: 1450,
    annualPrice: 1150,
    popular: true,
    description: "Our signature executive tier with reciprocal access to global sanctuaries, private coaching sessions, and full bio-hacking suite.",
    features: [
      "Reciprocal Access to All Global Sanctuaries",
      "4x Monthly Private Master Trainer Sessions",
      "Unlimited Whole-Body Cryotherapy (-110°C)",
      "Hyperbaric Oxygen Chamber Access",
      "Peptide & IV Drip Lounge Privileges",
      "Complimentary Guest Pass (2x / Mo)",
    ],
    color: "from-emerald-950 to-black",
  },
  {
    id: "p3",
    name: "Black Velvet VIP",
    badge: "TIER III UNLIMITED",
    monthlyPrice: 2850,
    annualPrice: 2280,
    description: "The ultimate invitation-only luxury membership. Includes private executive suites, dedicated concierge, and bespoke bio-hacking.",
    features: [
      "24/7 Unlimited Access to All Sanctuaries",
      "Unlimited Private Master Coaching",
      "Dedicated Private Executive Locker & Suite",
      "Unlimited Whole-Body Cryo & Hyperbaric",
      "Weekly Peptide IV Infusions Included",
      "Unlimited Guest Privileges & Parking VIP",
      "Direct 24/7 Line to Founder Concierge",
    ],
    color: "from-amber-950 to-black",
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [executiveRate, setExecutiveRate] = useState(250); // $ / hr

  const hoursSavedPerMonth = 12; // saved via cryo recovery & zero waiting time
  const productiveGain = executiveRate * hoursSavedPerMonth;

  return (
    <div className="pt-28 pb-20 min-h-screen space-y-16">
      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <Zap className="w-3.5 h-3.5" />
          <span>TRANSPARENT EXECUTIVE PRICING</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Invest in Your <span className="text-gradient-emerald">Human Capital</span>
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base">
          Capped membership guarantee ensures zero waiting for equipment and immediate access to recovery lounges.
        </p>

        {/* Toggle */}
        <div className="pt-4 flex justify-center">
          <div className="glass-card p-1.5 rounded-full border border-white/10 flex items-center space-x-2">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs font-mono transition-all ${
                !isAnnual ? "bg-emerald-500 text-black font-bold" : "text-zinc-400 hover:text-white"
              }`}
            >
              MONTHLY BILLING
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs font-mono transition-all flex items-center space-x-1.5 ${
                isAnnual ? "bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/20" : "text-zinc-400 hover:text-white"
              }`}
            >
              <span>ANNUAL BILLING</span>
              <span className="text-[10px] bg-black text-emerald-300 px-2 py-0.5 rounded-full font-sans">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            isAnnual={isAnnual}
            onSelectPlan={() => setModalOpen(true)}
          />
        ))}
      </div>

      {/* Interactive Executive Productivity ROI Calculator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 rounded-3xl border border-white/15 bg-gradient-to-br from-zinc-900 to-black space-y-6">
          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono">
            <Calculator className="w-4 h-4" />
            <span>EXECUTIVE PRODUCTIVITY ROI CALCULATOR</span>
          </div>
          <h3 className="text-2xl font-bold text-white">Calculate Your Time & Recovery Dividend</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            By eliminating gym congestion wait time and accelerating muscle soreness recovery via whole-body cryotherapy, executives gain an estimated 12 hours of high-cognition productivity per month.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-zinc-300">YOUR HOURLY EXECUTIVE VALUE</span>
              <span className="text-emerald-400 font-bold text-sm">${executiveRate} / HR</span>
            </div>
            <input
              type="range"
              min="100"
              max="1500"
              step="50"
              value={executiveRate}
              onChange={(e) => setExecutiveRate(Number(e.target.value))}
              className="w-full accent-emerald-400 bg-zinc-800 rounded-lg cursor-pointer h-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 bg-black/60 p-4 rounded-2xl border border-white/10 text-center font-mono">
            <div>
              <div className="text-[10px] text-zinc-400">ESTIMATED HOURS SAVED / MO</div>
              <div className="text-xl font-bold text-white mt-1">12.0 HOURS</div>
            </div>
            <div>
              <div className="text-[10px] text-zinc-400">PRODUCTIVE RETURN VALUE</div>
              <div className="text-xl font-bold text-emerald-400 mt-1">${productiveGain.toLocaleString()} / MO</div>
            </div>
          </div>
        </div>
      </div>

      <QuickBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
