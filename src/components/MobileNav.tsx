"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Dumbbell, 
  Users, 
  Smartphone, 
  ShieldAlert,
  Sparkles,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

export default function MobileNav() {
  const pathname = usePathname();

  const tabs = [
    { name: "Home", href: "/", icon: Home },
    { name: "Programs", href: "/programs", icon: Dumbbell },
    { name: "App Portal", href: "/portal", icon: Smartphone, highlight: true },
    { name: "Trainers", href: "/trainers", icon: Users },
    { name: "Plans", href: "/membership", icon: Zap },
  ];

  return (
    <div className="fixed bottom-3 left-4 right-4 z-40 md:hidden">
      <div className="glass-card rounded-2xl p-1.5 border border-white/15 bg-black/80 backdrop-blur-xl shadow-2xl flex items-center justify-around relative">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`relative flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-200 ${
                isActive ? "text-emerald-400" : "text-zinc-400 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="mobileNavGlow"
                  className="absolute inset-0 bg-emerald-500/15 border border-emerald-500/30 rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                />
              )}

              {tab.highlight ? (
                <div className="w-10 h-10 -mt-5 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-300 p-0.5 shadow-lg shadow-emerald-500/40 flex items-center justify-center">
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
              ) : (
                <Icon className={`w-5 h-5 mb-0.5 ${isActive ? "text-emerald-400 scale-110" : ""}`} />
              )}

              <span className="text-[10px] font-medium tracking-tight">
                {tab.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
