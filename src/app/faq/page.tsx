"use client";

import FaqAccordion from "@/components/FaqAccordion";
import { HelpCircle } from "lucide-react";

export default function FaqPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>KINETIX KNOWLEDGE BASE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-gradient-emerald">Questions</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base">
            Everything you need to know about our global sanctuary access, sub-zero cryotherapy protocols, mobile app telemetry, and membership privileges.
          </p>
        </div>

        <FaqAccordion />
      </div>
    </div>
  );
}
