"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "SolleAI", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Processus", href: "#process" },
    { name: "Équipe", href: "#team" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 py-4 flex justify-center items-center relative">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center">
          <div className="bg-[#1a1a1a] rounded-lg px-6 py-2 flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              className="text-[#40A2FF] hover:text-white transition-colors text-sm flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              Contactez-nous
              <span className="text-lg">→</span>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Menu Button (Right-Aligned) */}
        <motion.button
          className="md:hidden text-white bg-[#1a1a1a] p-2 rounded-lg absolute right-4"
          onClick={() => setMobileMenuOpen(true)}
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={24} />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-30 pt-16 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button Inside Menu */}
            <motion.button
              className="absolute top-4 right-6 text-white bg-[#1a1a1a] p-2 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
              whileTap={{ scale: 0.9 }}
            >
              <X size={28} />
            </motion.button>

            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white text-xl font-medium block py-2 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              className="text-[#40A2FF] hover:text-white text-xl font-medium py-2 flex items-center gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contactez-nous
              <span className="text-lg">→</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
