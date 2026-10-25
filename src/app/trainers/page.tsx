"use client";

import { useState } from "react";
import { Users, Award, ShieldCheck, Sparkles, MessageSquare } from "lucide-react";
import TrainerCard, { TrainerItem } from "@/components/TrainerCard";
import QuickBookingModal from "@/components/QuickBookingModal";

const trainersList: TrainerItem[] = [
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
    name: "Dr. Elena Rostova",
    role: "Bio-Hacking & Longevity Director",
    credentials: "Ph.D. Sports Physiology • BPC Specialist",
    experience: "10+ YRS",
    bio: "Focuses on mitochondrial optimization, peptide nutrition protocols, infrared therapy, and nervous system recovery for high-stress executives.",
    specialties: ["Cryotherapy Protocols", "Recovery Science", "Bloodwork Analysis"],
    avatar: "ER",
    rating: 5.0,
  },
  {
    id: "t3",
    name: "Tariq Al-Mansoor",
    role: "Master Calisthenics & Movement Coach",
    credentials: "Gymnastics Gold Medalist • FRC Mobility",
    experience: "12+ YRS",
    bio: "Specializes in relative bodyweight power, ring muscle-ups, joint longevity, and scapular control for high-output mobility.",
    specialties: ["Calisthenics Levers", "Joint Mobility", "Scapular Control"],
    avatar: "TA",
    rating: 4.9,
  },
  {
    id: "t4",
    name: "Seraphina Chen",
    role: "Endurance & Heart Rate Zone Director",
    credentials: "Ironman Champion • Lactate Threshold Expert",
    experience: "11+ YRS",
    bio: "Pioneers real-time wearable telemetry training to maximize cardiac stroke volume and metabolic efficiency without central nervous fatigue.",
    specialties: ["VO2 Max Expansion", "Zone 2 Base Building", "Race Physiology"],
    avatar: "SC",
    rating: 5.0,
  },
];

export default function TrainersPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-pill border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Users className="w-3.5 h-3.5" />
            <span>WORLD-CLASS PERFORMANCE FACULTY</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Train Under <span className="text-gradient-emerald">Master Coaches</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base">
            Every coach at Kinetix holds master degrees in biomechanics or sports science. Work 1-on-1 in private executive suites or request custom program design.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainersList.map((trainer) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
              onBookConsultation={() => setModalOpen(true)}
            />
          ))}
        </div>

        <QuickBookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
}
