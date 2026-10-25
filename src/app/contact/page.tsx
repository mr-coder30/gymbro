"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Sparkles, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sanctuary: "Miami Brickell Apex",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>EXECUTIVE CONCIERGE DISPATCH</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            VIP <span className="text-gradient-emerald">Concierge</span> Contact
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base">
            Request private sanctuary tours, corporate executive membership packages, or private suite reservations. All inquiries strictly confidential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/15">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Concierge Dispatch Received</h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. An assigned Executive Concierge for <strong className="text-emerald-400">{formData.sanctuary}</strong> will reach out via phone within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-emerald-500 text-black font-bold px-6 py-2.5 rounded-xl text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-2">FULL NAME</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Alexander Sterling"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-2">EXECUTIVE EMAIL</label>
                    <input
                      required
                      type="email"
                      placeholder="sterling@executive.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-2">PHONE NUMBER</label>
                    <input
                      required
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-2">PREFERRED SANCTUARY</label>
                  <select
                    value={formData.sanctuary}
                    onChange={(e) => setFormData({ ...formData, sanctuary: e.target.value })}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="Miami Brickell Apex">Miami Brickell Apex (1420 Brickell Ave)</option>
                    <option value="NYC Hudson Yards">NYC Hudson Yards (500 W 33rd St)</option>
                    <option value="Dubai DIFC Vault">Dubai DIFC Vault (Gate Village 04)</option>
                    <option value="Tokyo Ginza Tower">Tokyo Ginza Tower (6-10-1 Ginza)</option>
                    <option value="London Mayfair">London Mayfair (18 Berkeley St)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 mb-2">MESSAGE & REQUIREMENTS</label>
                  <textarea
                    rows={4}
                    placeholder="Specify target goals, private suite requirements, or corporate team access requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-black font-extrabold py-4 rounded-xl text-sm shadow-xl shadow-emerald-500/25 flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 fill-black" />
                  <span>TRANSMIT DISPATCH TO VIP CONCIERGE</span>
                </button>
              </form>
            )}
          </div>

          {/* Locations Roster */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white">Global Sanctuary Addresses</h3>

            {[
              { city: "MIAMI BRICKELL APEX", addr: "1420 Brickell Ave, Miami, FL 33131", phone: "+1 (305) 994-8800" },
              { city: "NYC HUDSON YARDS", addr: "500 W 33rd St, New York, NY 10001", phone: "+1 (212) 880-9940" },
              { city: "DUBAI DIFC VAULT", addr: "Gate Village 04, DIFC, Dubai, UAE", phone: "+971 4 889 0044" },
            ].map((loc, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs">
                  <MapPin className="w-4 h-4" />
                  <span>{loc.city}</span>
                </div>
                <p className="text-xs text-zinc-300">{loc.addr}</p>
                <div className="text-[11px] font-mono text-zinc-400">{loc.phone}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
