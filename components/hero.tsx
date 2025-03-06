"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(64, 162, 255, 0.3), transparent)",
        }}
        animate={{ "--x": ["20%", "80%", "20%"], "--y": ["30%", "70%", "30%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-white tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Votre avenir,{" "}
            <span className="text-[#40A2FF]">propulsé par l'IA</span>.
          </motion.h1>

          <motion.p
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Boostez votre entreprise grâce à des solutions IA sur mesures.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="#services"
              className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-lg font-medium text-sm hover:bg-white/20 transition-colors"
            >
              Nos Services
            </Link>
            <Link
              href="#contact"
              className="bg-[#40A2FF] text-white px-8 py-3 rounded-lg font-medium text-sm hover:bg-[#2E8BE8] transition-colors flex items-center justify-center gap-2 border border-[#40A2FF] shadow-lg"
            >
              Contactez-nous →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
