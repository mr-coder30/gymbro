"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2, Calendar, ShieldCheck, Clock, MapPin } from "lucide-react";
import confetti from "canvas-confetti";

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickBookingModal({ isOpen, onClose }: QuickBookingModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "Miami Brickell",
    goal: "Hypertrophy & VO2 Max",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10b981", "#34d399", "#a7f3d0", "#ffffff"],
      });
    } catch {
      // fallback
    }
  };

  const handleReset = () => {
    setStep("form");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg glass-card rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl z-10 overflow-hidden"
          >
            {/* Emerald glow ambient background */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl glass-pill text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {step === "form" ? (
              <div>
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono mb-2">
                  <Sparkles className="w-4 h-4 fill-emerald-400" />
                  <span>EXCLUSIVE VIP SANCTUARY PASS</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Schedule Private Sanctuary Tour
                </h2>
                <p className="text-xs text-zinc-400 mb-6">
                  Experience our biometric gym floors, cryo lounges, and executive performance suites with a dedicated concierge.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">FULL NAME</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Marcus Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">EMAIL ADDRESS</label>
                      <input
                        required
                        type="email"
                        placeholder="vance@executive.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">PHONE NUMBER</label>
                      <input
                        required
                        type="tel"
                        placeholder="+1 (555) 019-2834"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">PREFERRED LOCATION</label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                      >
                        <option value="Miami Brickell">Miami Brickell Apex</option>
                        <option value="NYC Hudson Yards">NYC Hudson Yards</option>
                        <option value="Dubai DIFC Vault">Dubai DIFC Vault</option>
                        <option value="Tokyo Ginza">Tokyo Ginza Tower</option>
                        <option value="London Mayfair">London Mayfair</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">PRIMARY OBJECTIVE</label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                      >
                        <option value="Hypertrophy & VO2 Max">Hypertrophy & VO2 Max</option>
                        <option value="Executive Longevity">Executive Longevity & Bio-Hack</option>
                        <option value="Olympic Conditioning">Olympic Conditioning</option>
                        <option value="Body Composition Overhaul">Body Composition Overhaul</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-black font-extrabold py-3.5 rounded-xl text-sm transition-all duration-200 shadow-xl shadow-emerald-500/25 flex items-center justify-center space-x-2"
                    >
                      <Sparkles className="w-4 h-4 fill-black" />
                      <span>REQUEST CONFIDENTIAL CONCIERGE TOUR</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-center space-x-4 text-[11px] text-zinc-400 pt-2 font-mono">
                    <span className="flex items-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1" /> Private & Confidential
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 text-emerald-400 mr-1" /> 2-Hour Response Time
                    </span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto mb-4 text-emerald-400 shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
                  CONFIRMATION #KP-88294
                </span>
                <h2 className="text-2xl font-extrabold text-white mt-1 mb-2">
                  VIP Sanctuary Tour Requested
                </h2>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto mb-6 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. An Apex Executive Concierge has been assigned to your profile and will contact you via phone within 2 hours to confirm your private access pass for <strong className="text-emerald-400">{formData.location}</strong>.
                </p>

                <button
                  onClick={handleReset}
                  className="bg-emerald-500 text-black font-bold px-8 py-3 rounded-xl text-sm hover:bg-emerald-400 transition-colors"
                >
                  Return to Sanctuary
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
