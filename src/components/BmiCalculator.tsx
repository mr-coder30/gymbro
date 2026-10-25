"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  Flame, 
  Dumbbell, 
  Zap, 
  Sparkles, 
  Activity, 
  CheckCircle2, 
  ShieldAlert 
} from "lucide-react";

export default function BmiCalculator() {
  const [weight, setWeight] = useState<number>(78); // kg
  const [height, setHeight] = useState<number>(180); // cm
  const [age, setAge] = useState<number>(32);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [goal, setGoal] = useState<"hypertrophy" | "fatloss" | "longevity" | "athletic">("hypertrophy");

  // Calculations
  const heightM = height / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);
  const bmiVal = parseFloat(bmi);

  // Basal Metabolic Rate (Mifflin-St Jeor)
  let bmr = gender === "male"
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;

  let multiplier = 1.55; // Active
  if (goal === "hypertrophy") multiplier = 1.7;
  if (goal === "fatloss") multiplier = 1.4;
  if (goal === "athletic") multiplier = 1.8;

  const targetCalories = Math.round(bmr * multiplier);
  const proteinGrams = Math.round(weight * (goal === "hypertrophy" ? 2.2 : 2.0));
  const fatGrams = Math.round((targetCalories * 0.25) / 9);
  const carbGrams = Math.round((targetCalories - (proteinGrams * 4 + fatGrams * 9)) / 4);

  const getBmiCategory = (val: number) => {
    if (val < 18.5) return { label: "Lean / Below Range", color: "text-blue-400" };
    if (val < 25) return { label: "Optimal Biometric Athletic", color: "text-emerald-400" };
    if (val < 30) return { label: "High Muscle Density / Over", color: "text-amber-400" };
    return { label: "High Density", color: "text-red-400" };
  };

  const category = getBmiCategory(bmiVal);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Calculator className="w-3.5 h-3.5" />
            <span>BIOMETRIC MATRIX CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your <span className="text-gradient-emerald">Apex Metabolism</span> & Macros
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Input your physical parameters to compute your baseline metabolic rate, targeted macronutrient distribution, and recommended bio-hacking recovery protocols.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6">
            
            {/* Gender & Goal Selector */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-2">BIOLOGICAL SEX</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setGender("male")}
                    className={`py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      gender === "male"
                        ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                        : "glass-pill text-zinc-400 hover:text-white"
                    }`}
                  >
                    MALE
                  </button>
                  <button
                    onClick={() => setGender("female")}
                    className={`py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      gender === "female"
                        ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                        : "glass-pill text-zinc-400 hover:text-white"
                    }`}
                  >
                    FEMALE
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-2">PRIMARY OBJECTIVE</label>
                <select
                  value={goal}
                  onChange={(e: any) => setGoal(e.target.value)}
                  className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400"
                >
                  <option value="hypertrophy">Maximum Muscle Hypertrophy</option>
                  <option value="fatloss">Aggressive Fat Re-composition</option>
                  <option value="athletic">Peak VO2 & Athletic Output</option>
                  <option value="longevity">Cellular Longevity & Anti-Aging</option>
                </select>
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-5 pt-2">
              {/* Weight */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-zinc-400">BODY WEIGHT</span>
                  <span className="text-emerald-400 font-bold text-sm">{weight} kg ({Math.round(weight * 2.205)} lbs)</span>
                </div>
                <input
                  type="range"
                  min="45"
                  max="140"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-zinc-800 rounded-lg cursor-pointer h-2"
                />
              </div>

              {/* Height */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-zinc-400">STATURE HEIGHT</span>
                  <span className="text-emerald-400 font-bold text-sm">{height} cm ({Math.floor(height / 30.48)}&apos;{Math.round((height % 30.48) / 2.54)}&quot;)</span>
                </div>
                <input
                  type="range"
                  min="140"
                  max="215"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-zinc-800 rounded-lg cursor-pointer h-2"
                />
              </div>

              {/* Age */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-zinc-400">AGE</span>
                  <span className="text-emerald-400 font-bold text-sm">{age} YEARS</span>
                </div>
                <input
                  type="range"
                  min="18"
                  max="75"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-zinc-800 rounded-lg cursor-pointer h-2"
                />
              </div>
            </div>

          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-3xl border border-white/15 bg-gradient-to-br from-zinc-900/90 to-emerald-950/30 space-y-6">
            
            {/* BMI Top Score */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">BODY MASS INDEX</span>
                <div className="text-4xl font-extrabold text-white font-mono mt-1">{bmi}</div>
                <div className={`text-xs font-semibold mt-1 ${category.color}`}>
                  ● {category.label}
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">ESTIMATED BMR</span>
                <div className="text-2xl font-bold text-emerald-400 font-mono mt-1">
                  {bmr} kcal/day
                </div>
                <div className="text-[11px] text-zinc-500">Resting Expenditure</div>
              </div>
            </div>

            {/* Daily Target Energy */}
            <div className="bg-black/60 p-4 rounded-2xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400">TARGET DAILY INTAKE</div>
                  <div className="text-xl font-extrabold text-white font-mono">{targetCalories} KCAL</div>
                </div>
              </div>
              <span className="text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full">
                {goal.toUpperCase()}
              </span>
            </div>

            {/* Macronutrient Split */}
            <div>
              <div className="text-xs font-mono text-zinc-400 mb-3">RECOMMENDED MACRONUTRIENT SPLIT</div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-black/50 p-3 rounded-xl border border-white/10 text-center">
                  <div className="text-[10px] font-mono text-zinc-400">PROTEIN</div>
                  <div className="text-lg font-bold text-emerald-400 font-mono">{proteinGrams}g</div>
                  <div className="text-[10px] text-zinc-500">{proteinGrams * 4} kcal</div>
                </div>
                <div className="bg-black/50 p-3 rounded-xl border border-white/10 text-center">
                  <div className="text-[10px] font-mono text-zinc-400">CARBOHYDRATES</div>
                  <div className="text-lg font-bold text-cyan-400 font-mono">{carbGrams}g</div>
                  <div className="text-[10px] text-zinc-500">{carbGrams * 4} kcal</div>
                </div>
                <div className="bg-black/50 p-3 rounded-xl border border-white/10 text-center">
                  <div className="text-[10px] font-mono text-zinc-400">HEALTHY FATS</div>
                  <div className="text-lg font-bold text-amber-400 font-mono">{fatGrams}g</div>
                  <div className="text-[10px] text-zinc-500">{fatGrams * 9} kcal</div>
                </div>
              </div>
            </div>

            {/* Recommended Protocol */}
            <div className="pt-2">
              <div className="text-[11px] font-mono text-emerald-400 tracking-wider mb-2 flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1 fill-emerald-400" />
                RECOMMENDED KINETIX SANCTUARY PROTOCOL:
              </div>
              <div className="text-xs text-zinc-300 bg-emerald-950/30 border border-emerald-500/30 p-3.5 rounded-xl space-y-1.5">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Hypertrophy Architecture II:</strong> 4x Weekly Progressive Overload</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Cryo Cell Reset:</strong> 3x Weekly Post-Workout (-110°C)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Peptide Bio-Lounge:</strong> BPC-157 & NAD+ IV Infusion</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
