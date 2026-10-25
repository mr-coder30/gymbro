"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Flame, 
  Trophy, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Dumbbell, 
  Layers, 
  HeartHandshake 
} from "lucide-react";

import Hero from "@/components/Hero";
import BmiCalculator from "@/components/BmiCalculator";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import MemberDashboardWidget from "@/components/MemberDashboardWidget";
import ProgramCard, { ProgramItem } from "@/components/ProgramCard";
import TrainerCard, { TrainerItem } from "@/components/TrainerCard";
import PricingCard, { PricingPlan } from "@/components/PricingCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FaqAccordion from "@/components/FaqAccordion";
import QuickBookingModal from "@/components/QuickBookingModal";

// Sample Data for Home
const samplePrograms: ProgramItem[] = [
  {
    id: "p1",
    title: "Hypertrophy Architecture II",
    category: "STRENGTH & MUSCLE",
    intensity: 5,
    duration: "12 WEEKS • 4X/WK",
    description: "Scientific progressive overload system designed for maximum muscle tissue hypertrophy, density, and athletic symmetry.",
    focus: ["Myofibrillar Growth", "Periodized Overload", "Vascularity"],
    biohack: "Post-workout Red Light Photobiomodulation",
    imageBg: "",
  },
  {
    id: "p2",
    title: "Cryo Cell Recovery & Reset",
    category: "BIO-HACKING",
    intensity: 3,
    duration: "RECURRING • DAILY",
    description: "Accelerate cellular repair using whole-body cryotherapy (-110°C), hyperbaric oxygen chambers, and infrared thermogenesis.",
    focus: ["Mitochondrial Health", "Systemic Inflammation", "ATP Synthesis"],
    biohack: "-110°C Cryo Pod + Hyperbaric O2",
    imageBg: "",
  },
  {
    id: "p3",
    title: "VO2 Max Athleticism & Output",
    category: "CARDIOVASCULAR",
    intensity: 5,
    duration: "8 WEEKS • 3X/WK",
    description: "Elevate lactate threshold and peak aerobic capacity through high-intensity zone 4/5 conditioning monitored in real time.",
    focus: ["Lactate Threshold", "Cardiac Output", "Endurance"],
    biohack: "Live Heart Rate Zone Telemetry",
    imageBg: "",
  },
];

const sampleTrainers: TrainerItem[] = [
  {
    id: "t1",
    name: "Marcus Vance",
    role: "Head Performance Director",
    credentials: "M.Sc. Kinesiology • CSCS Master",
    experience: "14+ YRS",
    bio: "Former Olympic strength coach specializing in executive body re-composition, heavy compound lifting mechanics, and VO2 max expansion.",
    specialties: ["Powerlifting", "Hypertrophy", "Metabolic Conditioning"],
    avatar: "MV",
    rating: 5.0,
  },
  {
    id: "t2",
    name: "Elena Rostova",
    role: "Bio-Hacking & Longevity Director",
    credentials: "Ph.D. Sports Physiology • BPC Specialist",
    experience: "10+ YRS",
    bio: "Focuses on mitochondrial optimization, peptide nutrition protocols, infrared therapy, and nervous system recovery for high-stress executives.",
    specialties: ["Cryotherapy Protocols", "Recovery Science", "Bloodwork Analysis"],
    avatar: "ER",
    rating: 5.0,
  },
];

const samplePricing: PricingPlan[] = [
  {
    id: "tier-1",
    name: "Apex Executive",
    badge: "TIER I ACCESS",
    monthlyPrice: 750,
    annualPrice: 600,
    description: "Designed for dedicated high-performers seeking access to state-of-the-art gym floors and essential recovery amenities.",
    features: [
      "Access to Single Home Sanctuary Floor",
      "Unlimited Biometric Gym Floor Access",
      "Kinetix iOS / Android Member App",
      "2x Monthly Whole-Body Cryotherapy",
      "Locker Room & Infrared Sauna Suite",
    ],
    color: "from-zinc-900 to-black",
  },
  {
    id: "tier-2",
    name: "Onyx Elite",
    badge: "TIER II PRIVILEGE",
    monthlyPrice: 1450,
    annualPrice: 1150,
    popular: true,
    description: "Our signature executive tier with reciprocal access to global sanctuaries, private coaching sessions, and full bio-hacking suite.",
    features: [
      "Reciprocal Access to All Global Sanctuaries",
      "4x Monthly Private Master Trainer Sessions",
      "Unlimited Whole-Body Cryotherapy (-110°C)",
      "Hyperbaric Oxygen Chamber Access",
      "Peptide & IV Drip Lounge Privileges",
      "Complimentary Guest Pass (2x / Mo)",
    ],
    color: "from-emerald-950 to-black",
  },
];

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <Hero onOpenBooking={() => setModalOpen(true)} />

      {/* Why Choose Us: The Apex Standard */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE KINETIX ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Why Elite Performers <span className="text-gradient-emerald">Train With Us</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Traditional commercial gyms focus on volume. We focus on bio-metric engineering, architectural privacy, and compounding physical longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Real-Time Biometric Telemetry</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Every rack, dumbbell suite, and recovery pod streams live oxygenation, heart rate zones, and muscle fatigue indicators directly to your iOS / Android app.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Sub-Zero Bio-Hacking Lounges</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Step into medical-grade -110°C electric cryotherapy pods, 100% hyperbaric oxygen chambers, and peptide nutrient lounges to cut soreness time in half.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Uncompromising Architectural Luxury</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Acoustically dampened private executive suites, high-flow HEPA air filtration, custom Eleiko equipment, and strict cap on total active memberships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="text-xs font-mono text-emerald-400 tracking-wider mb-2">CURATED PROTOCOLS</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Featured Performance Programs</h2>
            </div>
            <Link
              href="/programs"
              className="mt-4 md:mt-0 text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center space-x-1"
            >
              <span>VIEW ALL 12 PROTOCOLS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {samplePrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Mobile App Preview */}
      <MemberDashboardWidget />

      {/* Biometric Calculator */}
      <BmiCalculator />

      {/* Master Performance Coaches */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="text-xs font-mono text-emerald-400 tracking-wider mb-2">WORLD-CLASS FACULTY</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Master Performance Coaches</h2>
            </div>
            <Link
              href="/trainers"
              className="mt-4 md:mt-0 text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center space-x-1"
            >
              <span>MEET ALL COACHES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sampleTrainers.map((trainer) => (
              <TrainerCard
                key={trainer.id}
                trainer={trainer}
                onBookConsultation={() => setModalOpen(true)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Transformations Slider */}
      <BeforeAfterSlider />

      {/* Pricing Privileges Preview */}
      <section className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Membership Privileges</h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Limited to 250 active members per sanctuary to guarantee zero waiting time and private facility access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {samplePricing.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                isAnnual={false}
                onSelectPlan={() => setModalOpen(true)}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/pricing"
              className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 hover:underline"
            >
              <span>COMPARE DETAILED MEMBERSHIP MATRIX & PRIVILEGES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* FAQ */}
      <FaqAccordion />

      {/* Quick Booking Modal */}
      <QuickBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
