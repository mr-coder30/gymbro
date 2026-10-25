"use client";

import { useState } from "react";
import { Zap, Sparkles, Check, X, ShieldCheck, ArrowRight } from "lucide-react";
import PricingCard, { PricingPlan } from "@/components/PricingCard";
import QuickBookingModal from "@/components/QuickBookingModal";

const membershipPlans: PricingPlan[] = [
  {
    id: "apex-tier1",
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
    id: "onyx-tier2",
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
    id: "black-tier3",
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

export default function MembershipPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>EXECUTIVE MEMBERSHIP PRIVILEGES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Invest in Your <span className="text-gradient-emerald">Peak Existence</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base">
            Memberships strictly capped per sanctuary to maintain uncrowded floors, zero wait times, and maximum privacy.
          </p>

          {/* Billing Switcher */}
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

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {membershipPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isAnnual={isAnnual}
              onSelectPlan={() => setModalOpen(true)}
            />
          ))}
        </div>

        {/* Comparison Matrix Table */}
        <div className="pt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Full Privileges Comparison Matrix</h2>
          </div>

          <div className="glass-card rounded-3xl border border-white/15 overflow-x-auto p-6">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 text-emerald-400">
                  <th className="py-4 px-4 font-bold">PRIVILEGE / AMENITY</th>
                  <th className="py-4 px-4 text-center">APEX EXECUTIVE</th>
                  <th className="py-4 px-4 text-center text-white">ONYX ELITE</th>
                  <th className="py-4 px-4 text-center text-emerald-400">BLACK VELVET VIP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                <tr>
                  <td className="py-4 px-4 font-sans font-semibold">Global Sanctuary Reciprocal Access</td>
                  <td className="py-4 px-4 text-center text-zinc-500">Home Location Only</td>
                  <td className="py-4 px-4 text-center text-emerald-400">✓ Included</td>
                  <td className="py-4 px-4 text-center text-emerald-400">✓ 24/7 VIP Access</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-sans font-semibold">Whole-Body Cryotherapy (-110°C)</td>
                  <td className="py-4 px-4 text-center">2x / Month</td>
                  <td className="py-4 px-4 text-center text-emerald-400">✓ Unlimited</td>
                  <td className="py-4 px-4 text-center text-emerald-400">✓ Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-sans font-semibold">1-on-1 Master Performance Coaching</td>
                  <td className="py-4 px-4 text-center text-zinc-500">—</td>
                  <td className="py-4 px-4 text-center">4x / Month</td>
                  <td className="py-4 px-4 text-center text-emerald-400">✓ Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-sans font-semibold">Private Executive Locker & Suite</td>
                  <td className="py-4 px-4 text-center text-zinc-500">—</td>
                  <td className="py-4 px-4 text-center text-zinc-500">—</td>
                  <td className="py-4 px-4 text-center text-emerald-400">✓ Reserved Suite</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-sans font-semibold">Peptide & IV Drip Lounge Infusions</td>
                  <td className="py-4 px-4 text-center text-zinc-500">—</td>
                  <td className="py-4 px-4 text-center">Discounted Rate</td>
                  <td className="py-4 px-4 text-center text-emerald-400">✓ Weekly Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <QuickBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
}
