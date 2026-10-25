"use client";

import { useState, ReactNode } from "react";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import QuickBookingModal from "@/components/QuickBookingModal";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-black flex flex-col justify-between overflow-hidden">
        {/* Dynamic Background Effects */}
        <BackgroundCanvas />

        {/* Global Navigation */}
        <Navbar onOpenBooking={() => setBookingOpen(true)} />

        {/* Page Content */}
        <main className="relative z-10 flex-grow">{children}</main>

        {/* Global Footer & Mobile Navigation */}
        <Footer />
        <MobileNav />

        {/* Global VIP Booking Modal */}
        <QuickBookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
        />
      </div>
    </SmoothScrollProvider>
  );
}
