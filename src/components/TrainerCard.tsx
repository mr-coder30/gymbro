"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Sparkles, MessageSquare, Star } from "lucide-react";

export interface TrainerItem {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  credentials: string;
  experience: string;
  bio: string;
  avatar: string;
  rating: number;
}

interface TrainerCardProps {
  trainer: TrainerItem;
  onBookConsultation?: (trainer: TrainerItem) => void;
}

export default function TrainerCard({ trainer, onBookConsultation }: TrainerCardProps) {
  return (
    <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group relative overflow-hidden h-full">
      {/* Background Glow Accent */}
      <div className="absolute top-0 left-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />

      <div>
        {/* Avatar & Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-600 to-zinc-900 p-0.5 shadow-lg shadow-emerald-500/20 flex-shrink-0">
            <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center font-extrabold text-lg text-white font-mono">
              {trainer.name.split(" ").map((n) => n[0]).join("")}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-1.5 text-amber-400 text-xs font-mono mb-0.5">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{trainer.rating.toFixed(1)} / 5.0 RATING</span>
            </div>
            <h3 className="text-xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
              {trainer.name}
            </h3>
            <p className="text-xs font-mono text-emerald-400">{trainer.role}</p>
          </div>
        </div>

        {/* Credentials Badge */}
        <div className="glass-pill px-3 py-1.5 rounded-xl text-xs font-mono text-zinc-300 mb-4 flex items-center space-x-2">
          <Award className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="truncate">{trainer.credentials}</span>
        </div>

        {/* Bio */}
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
          {trainer.bio}
        </p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 mb-6">
          {trainer.specialties.map((spec, i) => (
            <span
              key={i}
              className="text-[10px] font-mono text-zinc-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md"
            >
              ✓ {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-xs font-mono text-zinc-400">
          EXP: <strong className="text-white">{trainer.experience}</strong>
        </span>

        <button
          onClick={() => onBookConsultation && onBookConsultation(trainer)}
          className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md shadow-emerald-500/20 flex items-center space-x-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-black" />
          <span>Book Consultation</span>
        </button>
      </div>
    </div>
  );
}
