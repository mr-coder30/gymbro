"use client";

import Link from "next/link";
import { 
  Zap, 
  ArrowUpRight, 
  Shield, 
  Globe2, 
  Mail, 
  CheckCircle2, 
  Share2,
  Globe,
  MessageSquare
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-12 overflow-hidden text-zinc-400">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top VIP Newsletter & Sanctuary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Zap className="w-5 h-5 text-black fill-black" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-widest text-xl text-white font-sans">
                  KINETIX APEX
                </span>
                <span className="text-[10px] font-mono text-emerald-400 tracking-wider">
                  ELITE HUMAN PERFORMANCE SANCTUARIES
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Designed at the intersection of elite sports science, bio-hacking technology, and uncompromising architectural luxury. Reserved for individuals who demand peak physical output.
            </p>

            {/* Live Infrastructure Badge */}
            <div className="glass-pill inline-flex items-center space-x-3 px-4 py-2 rounded-xl text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Biometric Infrastructure: 99.98% Operational</span>
            </div>
          </div>

          {/* VIP Dispatch Form */}
          <div className="lg:col-span-7 space-y-4">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono mb-2">
                <Mail className="w-4 h-4" />
                <span>EXECUTIVE DISPATCH</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Subscribe to Bio-Performance Research & Insider Openings
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Receive confidential biometric reports, workout protocols, and priority access to new sanctuary openings.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter executive email address..."
                  className="bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400 flex-1"
                />
                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 whitespace-nowrap"
                >
                  Request Dispatch
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 border-b border-white/10 text-xs">
          <div>
            <h4 className="font-mono text-white tracking-widest uppercase mb-4 text-[11px] text-emerald-400">
              Sanctuaries
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/facilities" className="hover:text-white transition-colors">Miami Brickell Apex</Link></li>
              <li><Link href="/facilities" className="hover:text-white transition-colors">NYC Hudson Yards</Link></li>
              <li><Link href="/facilities" className="hover:text-white transition-colors">Dubai DIFC Vault</Link></li>
              <li><Link href="/facilities" className="hover:text-white transition-colors">Tokyo Ginza Tower</Link></li>
              <li><Link href="/facilities" className="hover:text-white transition-colors">London Mayfair</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-white tracking-widest uppercase mb-4 text-[11px] text-emerald-400">
              Programs
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/programs" className="hover:text-white transition-colors">Hypertrophy Architecture</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">V02 Max Athleticism</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Cryo Recovery & Cell Reset</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Executive Longevity</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Olympic Calisthenics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-white tracking-widest uppercase mb-4 text-[11px] text-emerald-400">
              Bio-Hacking
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/nutrition" className="hover:text-white transition-colors">Peptide & IV Lounge</Link></li>
              <li><Link href="/nutrition" className="hover:text-white transition-colors">Macro Calculator</Link></li>
              <li><Link href="/nutrition" className="hover:text-white transition-colors">Bloodwork Analysis</Link></li>
              <li><Link href="/nutrition" className="hover:text-white transition-colors">Hyperbaric Oxygen</Link></li>
              <li><Link href="/nutrition" className="hover:text-white transition-colors">Custom Meal Delivery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-white tracking-widest uppercase mb-4 text-[11px] text-emerald-400">
              Member App
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/portal" className="hover:text-white transition-colors flex items-center">Member Dashboard <ArrowUpRight className="w-3 h-3 ml-1 text-emerald-400" /></Link></li>
              <li><Link href="/portal" className="hover:text-white transition-colors">NFC Biometric Badge</Link></li>
              <li><Link href="/portal" className="hover:text-white transition-colors">Live Heart Rate Zone</Link></li>
              <li><Link href="/portal" className="hover:text-white transition-colors">Workout Log & Metrics</Link></li>
              <li><Link href="/portal" className="hover:text-white transition-colors">Trainer Direct Messaging</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-mono text-white tracking-widest uppercase mb-4 text-[11px] text-emerald-400">
              Connect
            </h4>
            <div className="flex space-x-3 mb-6">
              <a href="#" className="p-2 rounded-xl glass-pill text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-xl glass-pill text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-xl glass-pill text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-xl glass-pill text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
            </div>
            <div className="text-[11px] text-zinc-500 leading-relaxed">
              <Shield className="w-3.5 h-3.5 inline mr-1 text-emerald-400" />
              Strict Non-Disclosure & Private Access Standards Enforced Across All Sanctuaries.
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} KINETIX APEX LABS INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0 font-mono text-[11px]">
            <Link href="/faq" className="hover:text-zinc-300">PRIVACY POLICY</Link>
            <Link href="/faq" className="hover:text-zinc-300">TERMS OF SERVICE</Link>
            <Link href="/faq" className="hover:text-zinc-300">SECURITY PROTOCOLS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
