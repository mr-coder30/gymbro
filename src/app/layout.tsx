import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "KINETIX APEX LABS | Elite Luxury Gym & Bio-Performance Sanctuary",
  description: "Experience the pinnacle of human physical optimization. Combining sports science, whole-body cryotherapy, peptide bio-lounges, and architectural luxury.",
  keywords: ["Luxury Gym", "Biohacking Fitness", "Executive Performance", "Cryotherapy", "Personal Trainers", "Miami Gym", "NYC Gym", "Dubai Gym"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${mono.variable}`}>
      <body className="bg-black text-zinc-100 antialiased selection:bg-emerald-500 selection:text-black">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
