"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Search, ShieldCheck } from "lucide-react";

export interface FaqItem {
  id: string;
  category: "access" | "biohack" | "pricing" | "tech";
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "1",
    category: "access",
    question: "How do I access sanctuaries around the globe?",
    answer: "All Black Apex VIP and Onyx Elite members receive reciprocal access across all global locations (Miami, New York, Dubai, Tokyo, London). Simply scan your NFC digital pass via the mobile app at any turnstile.",
  },
  {
    id: "2",
    category: "biohack",
    question: "What bio-hacking facilities are included with membership?",
    answer: "Our bio-hacking suites feature Whole-Body Cryotherapy (-110°C), Hyperbaric Oxygen Therapy Pods, Red Light Photobiomodulation, Cold Plunge / Thermal Contrast Pools, and Peptide & IV Drip Lounges.",
  },
  {
    id: "3",
    category: "pricing",
    question: "Is there a initiation fee or multi-year commitment?",
    answer: "We offer both monthly flexible memberships and discounted annual contracts. Initial biometric baseline testing and physical health assessment ($500 value) are complimentary for all new members.",
  },
  {
    id: "4",
    category: "tech",
    question: "How does the Kinetix iOS / Android mobile application integrate with workouts?",
    answer: "The app pairs automatically with your wearable chest strap or smartwatch to stream live heart rate zones, calories burned, and recovery indices to gym floor monitors during your workout.",
  },
  {
    id: "5",
    category: "access",
    question: "Can I bring guests to private executive suites?",
    answer: "Black Apex VIP members receive 4 monthly complimentary guest passes for private executive suites and bio-hacking lounge access.",
  },
];

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("1");
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState<string>("all");

  const filtered = faqData.filter((item) => {
    const matchesCat = selectedCat === "all" || item.category === selectedCat;
    const matchesQuery =
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE & FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-gradient-emerald">Questions</span>
          </h2>
        </div>

        {/* Search Bar & Category Filter */}
        <div className="space-y-4 mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions or keywords (e.g. cryotherapy, access, guests)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-950 border border-white/15 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: "all", label: "ALL QUESTIONS" },
              { id: "access", label: "SANCTUARY ACCESS" },
              { id: "biohack", label: "BIO-HACKING & CRYOGRAPHY" },
              { id: "pricing", label: "MEMBERSHIP & FEES" },
              { id: "tech", label: "MOBILE APP & DATA" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedCat === cat.id
                    ? "bg-emerald-500 text-black font-bold"
                    : "glass-pill text-zinc-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 text-sm">
              No matching questions found. Contact VIP concierge for direct support.
            </div>
          ) : (
            filtered.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-white text-sm sm:text-base hover:text-emerald-300 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
}
