"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Services from "@/components/services";
import Process from "@/components/process";
import HowItWorks from "@/components/how-it-works";
import Statistics from "@/components/statistics";
import ClientReviews from "@/components/client-reviews";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Loader from "@/components/loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <Hero />
            <Services />
            <Process />
            <Statistics />
            <Features />
            <ClientReviews />
            <HowItWorks />
            <Testimonials />

            <FAQ />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
