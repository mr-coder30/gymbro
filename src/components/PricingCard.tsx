"use client";

import { Check, Sparkles, Zap, ShieldCheck } from "lucide-react";

export interface PricingPlan {
  id: string;
  name: string;
  badge: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
  onSelectPlan?: (plan: PricingPlan) => void;
}

export default function PricingCard({ plan, isAnnual, onSelectPlan }: PricingCardProps) {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  return (
    <div
      className={`glass-card rounded-3xl p-6 sm:p-8 border relative flex flex-col justify-between transition-all duration-300 ${
        plan.popular
          ? "border-emerald-500/60 shadow-2xl shadow-emerald-500/20 bg-gradient-to-br from-zinc-900/90 via-black to-emerald-950/40 scale-[1.02]"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      {/* Popular Highlight Ribbon */}
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-emerald-600 text-black font-extrabold text-[10px] font-mono tracking-widest uppercase px-4 py-1 rounded-full shadow-lg shadow-emerald-500/30 flex items-center space-x-1">
          <Sparkles className="w-3 h-3 fill-black" />
          <span>MOST POPULAR EXECUTIVE TIER</span>
        </div>
      )}

      <div>
        {/* Tier Header */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
            {plan.badge}
          </span>
          <Zap className="w-5 h-5 text-emerald-400" />
        </div>

        <h3 className="text-2xl font-extrabold text-white mb-2">{plan.name}</h3>
        <p className="text-xs text-zinc-400 mb-6 leading-relaxed">{plan.description}</p>

        {/* Price Display */}
        <div className="mb-8 pb-6 border-b border-white/10">
          <div className="flex items-baseline space-x-2">
            <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
              ${price.toLocaleString()}
            </span>
            <span className="text-xs font-mono text-zinc-400">/ MONTH</span>
          </div>
          {isAnnual && (
            <div className="text-[11px] font-mono text-emerald-400 mt-1">
              Billed annually (${(price * 12).toLocaleString()} / yr) • Save 20%
            </div>
          )}
        </div>

        {/* Feature List */}
        <div className="space-y-3 mb-8">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
            PRIVILEGES INCLUDED:
          </div>
          {plan.features.map((feat, idx) => (
            <div key={idx} className="flex items-start space-x-3 text-xs text-zinc-300">
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </div>
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Select CTA Button */}
      <button
        onClick={() => onSelectPlan && onSelectPlan(plan)}
        className={`w-full py-3.5 rounded-xl font-bold text-xs tracking-wider transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 ${
          plan.popular
            ? "bg-emerald-500 hover:bg-emerald-400 text-black shadow-emerald-500/30"
            : "glass-pill hover:bg-white/10 text-white border-white/20"
        }`}
      >
        <span>SELECT {plan.name.toUpperCase()} TIER</span>
      </button>
    </div>
  );
}
