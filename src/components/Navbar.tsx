"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  Menu, 
  X, 
  ChevronRight,
  Globe,
  Sparkles
} from "lucide-react";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", href: "/programs" },
    { name: "Trainers", href: "/trainers" },
    { name: "Membership", href: "/membership" },
    { name: "Transformations", href: "/transformations" },
    { name: "Facilities", href: "/facilities" },
    { name: "Nutrition & Biohack", href: "/nutrition" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Sanctuary Live Bar */}
      <div className="bg-black/90 border-b border-white/[0.05] py-1.5 px-4 text-xs font-mono text-zinc-400 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-2" />
              GLOBAL SANCTUARIES: LIVE ACCESS ACTIVE
            </span>
            <span className="text-zinc-600">|</span>
            <span>MIAMI • NYC • DUBAI • TOKYO</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-zinc-300 flex items-center">
              <Globe className="w-3 h-3 mr-1 text-emerald-400" />
              Capacity: <strong className="text-white ml-1 font-sans">84% Occupied</strong>
            </span>
            <Link href="/faq" className="hover:text-emerald-400 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation */}
      <nav
        className={`transition-all duration-300 ${
          scrolled ? "glass-nav py-3.5" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300 border border-emerald-300/30">
              <Zap className="w-5 h-5 text-black fill-black" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold tracking-widest text-lg text-white font-sans">
                  KINETIX
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                  APEX
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider block -mt-0.5">
                BIO-PERFORMANCE LABS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 bg-zinc-950/60 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 relative ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-emerald-500/20 border border-emerald-500/40 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Member Portal Link */}
            <Link
              href="/portal"
              className="glass-pill px-4 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:border-emerald-500/40 transition-all duration-200 flex items-center space-x-2 group"
            >
              <Smartphone className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Member App</span>
            </Link>

            {/* Book VIP Tour Button */}
            <button
              onClick={onOpenBooking}
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs px-5 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 flex items-center space-x-1.5 hover:shadow-emerald-400/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 fill-black" />
              <span>Book VIP Access</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Link
              href="/portal"
              className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
            >
              <Smartphone className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass-pill text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Expanded Overlay Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-b border-white/10 bg-black/95 backdrop-blur-2xl px-4 py-6"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-emerald-500/10 text-sm font-medium text-zinc-200 hover:text-emerald-400 border border-transparent hover:border-emerald-500/20 transition-all"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-500" />
                  </Link>
                ))}

                <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
                  <Link
                    href="/portal"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full glass-card p-3.5 rounded-xl flex items-center justify-center space-x-2 text-sm font-medium text-white"
                  >
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span>Launch Member Dashboard</span>
                  </Link>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onOpenBooking) onOpenBooking();
                    }}
                    className="w-full bg-emerald-500 text-black py-3.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-2"
                  >
                    <Sparkles className="w-4 h-4 fill-black" />
                    <span>Book VIP Tour & Consultation</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
