"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, Zap } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marcus Vance",
    role: "Founder & CEO, Apex Capital",
    location: "Miami Brickell Sanctuary",
    quote: "Kinetix is not a gym; it is an elite biometric performance laboratory. The combination of hyper-personalized strength programming, cold plunge cryotherapy, and real-time app metrics keeps my energy and focus at absolute peak levels.",
    rating: 5,
    tier: "BLACK APEX VIP",
  },
  {
    id: 2,
    name: "Dr. Elena Rostova",
    role: "Neuroscientist & Performance Consultant",
    location: "NYC Hudson Yards",
    quote: "As someone who studies human performance, Kinetix has mastered the sports science framework. The recovery suites and hyperbaric oxygen chambers accelerate recovery time by at least 40%.",
    rating: 5,
    tier: "ONYX ELITE",
  },
  {
    id: 3,
    name: "Tariq Al-Mansoor",
    role: "Venture Partner & Triathlete",
    location: "Dubai DIFC Vault",
    quote: "The private executive suites and seamless NFC mobile access make training effortless amidst an intense global travel schedule. Unmatched architectural luxury.",
    rating: 5,
    tier: "BLACK APEX VIP",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const item = testimonials[current];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Quote className="w-3.5 h-3.5 text-emerald-400" />
            <span>MEMBER TESTIMONIALS & REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Endorsed by <span className="text-gradient-emerald">High Performers</span>
          </h2>
        </div>

        {/* Carousel Box */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/15 bg-gradient-to-br from-zinc-900/90 to-black relative">
          <Quote className="w-16 h-16 text-emerald-500/10 absolute top-6 right-8 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Stars */}
              <div className="flex space-x-1 text-amber-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-base sm:text-xl text-zinc-200 leading-relaxed font-normal italic">
                &quot;{item.quote}&quot;
              </blockquote>

              {/* Member details */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-zinc-400 font-mono">{item.role} • <span className="text-emerald-400">{item.location}</span></p>
                </div>

                <div className="glass-pill px-3 py-1 rounded-full text-[11px] font-mono text-emerald-300 border-emerald-500/30 w-fit">
                  {item.tier}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-end space-x-3 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full glass-pill text-zinc-400 hover:text-white hover:border-emerald-500/40 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full glass-pill text-zinc-400 hover:text-white hover:border-emerald-500/40 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
