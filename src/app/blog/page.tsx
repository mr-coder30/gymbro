"use client";

import { useState } from "react";
import { BookOpen, Search, Clock, ArrowRight, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
}

const articles: Article[] = [
  {
    id: "b1",
    title: "The Neuro-Endocrine Impact of -110°C Whole-Body Cryotherapy Post Hypertrophy Training",
    category: "BIO-HACKING",
    readTime: "6 MIN READ",
    date: "JULY 24, 2026",
    excerpt: "Examining how sub-zero cryotherapy modulates interleukin-6 systemic markers while suppressing delayed onset muscle soreness without dampening myofibrillar protein synthesis.",
    content: "Cryotherapy at -110°C creates rapid peripheral vasoconstriction followed by hyper-oxygenated blood reperfusion upon exiting the chamber. This process down-regulates inflammatory cytokines while stimulating norepinephrine release, boosting focus and mood for executive decision making.",
    author: "Dr. Elena Rostova, Ph.D.",
  },
  {
    id: "b2",
    title: "Optimizing Zone 2 Aerobic Base Training for C-Suite Longevity",
    category: "SPORTS SCIENCE",
    readTime: "8 MIN READ",
    date: "JULY 18, 2026",
    excerpt: "Why high-intensity interval training alone is insufficient for mitochondrial density. How 150 minutes of dedicated Zone 2 lactate equilibrium work prevents metabolic burnout.",
    content: "Zone 2 training occurs at a heart rate where blood lactate levels remain steady under 2.0 mmol/L. At this exact metabolic threshold, fat oxidation is maximized and mitochondrial biogenesis is stimulated without straining central nervous system reserves.",
    author: "Seraphina Chen",
  },
  {
    id: "b3",
    title: "Periodized Mechanical Tension: The 5x5 Repetition Fallacy",
    category: "STRENGTH & POWER",
    readTime: "5 MIN READ",
    date: "JULY 10, 2026",
    excerpt: "Why fixed rep ranges lead to early strength plateaus in advanced lifters, and how wave-loading periodization optimizes neurological recruitment.",
    content: "Fixed repetition schemes fail to account for daily nervous system fatigue variations. By shifting to undulating wave-loading (e.g., 75% -> 85% -> 92% 1RM across 3-week blocks), we induce maximal neuromuscular recruitment while protecting tendon attachment points.",
    author: "Marcus Vance, M.Sc.",
  },
];

export default function BlogPage() {
  const [selectedCat, setSelectedCat] = useState("ALL");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const filtered = articles.filter(
    (a) => selectedCat === "ALL" || a.category === selectedCat
  );

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KINETIX HUMAN PERFORMANCE JOURNAL</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Research & <span className="text-gradient-emerald">Insights</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base">
            Deep-dive research papers, bio-hacking findings, and sports science analysis written by our master performance faculty.
          </p>

          {/* Category Tabs */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {["ALL", "BIO-HACKING", "SPORTS SCIENCE", "STRENGTH & POWER"].map((cat) => (
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

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((art) => (
            <div
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-3">
                  <span>{art.category}</span>
                  <span className="text-zinc-500">{art.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-3">
                  {art.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">{art.author}</span>
                <span className="text-emerald-400 font-bold flex items-center">
                  Read Article <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        <AnimatePresence>
          {activeArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveArticle(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="relative w-full max-w-3xl glass-card rounded-3xl p-8 border border-white/20 shadow-2xl z-10 space-y-6 max-h-[85vh] overflow-y-auto"
              >
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl glass-pill text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="text-xs font-mono text-emerald-400">{activeArticle.category} • {activeArticle.readTime}</div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{activeArticle.title}</h2>
                <div className="text-xs font-mono text-zinc-400 border-b border-white/10 pb-4">
                  By {activeArticle.author} • Published {activeArticle.date}
                </div>

                <div className="text-sm text-zinc-300 leading-relaxed space-y-4 font-normal">
                  <p className="font-semibold text-white">{activeArticle.excerpt}</p>
                  <p>{activeArticle.content}</p>
                  <p>In conclusion, combining measurable biometrics with recovery modalities creates a compounding physical advantage for executives demanding peak cognitive and endurance output.</p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
