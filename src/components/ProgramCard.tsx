"use client";

import { motion } from "framer-motion";
import { Zap, Clock, ShieldCheck, Flame, ChevronRight, Activity } from "lucide-react";

export interface ProgramItem {
  id: string;
  title: string;
  category: string;
  intensity: number; // 1 - 5
  duration: string;
  description: string;
  focus: string[];
  biohack: string;
  imageBg: string;
}

interface ProgramCardProps {
  program: ProgramItem;
  onSelect?: (program: ProgramItem) => void;
}

export default function ProgramCard({ program, onSelect }: ProgramCardProps) {
  return (
    <div
      onClick={() => onSelect && onSelect(program)}
      className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between cursor-pointer group relative overflow-hidden h-full"
    >
      {/* Top Emerald Accent Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/25 transition-all" />

      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono tracking-widest uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full">
            {program.category}
          </span>
          <div className="flex items-center space-x-1 text-amber-400 text-xs font-mono">
            <Flame className="w-3.5 h-3.5 fill-amber-400" />
            <span>INTENSITY: {program.intensity}/5</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 group-hover:text-emerald-300 transition-colors">
          {program.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
          {program.description}
        </p>

        {/* Focus Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {program.focus.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-mono text-zinc-300 bg-white/[0.05] border border-white/10 px-2.5 py-1 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
          <Clock className="w-3.5 h-3.5 text-emerald-400" />
          <span>{program.duration}</span>
        </div>

        <div className="flex items-center space-x-1 text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
          <span>INSPECT PROTOCOL</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
