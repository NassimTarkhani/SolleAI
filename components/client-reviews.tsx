"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function ClientReviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Jean Dupont",
      position: "Directeur Technique, TechCorp",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      review:
        "SolleAI a transformé notre approche de l'analyse de données. Leur solution d'IA nous a permis d'identifier des tendances que nous n'aurions jamais pu voir autrement. Notre ROI a augmenté de 35% en seulement six mois.",
      company: "TechCorp",
      companyLogo: "/placeholder.svg?height=50&width=120",
    },
    {
      name: "Marie Laurent",
      position: "CEO, Innovate Solutions",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      review:
        "L'équipe de SolleAI a été exceptionnelle du début à la fin. Leur compréhension de nos besoins et leur expertise en IA ont permis de développer une solution parfaitement adaptée à notre entreprise. Je les recommande vivement.",
      company: "Innovate Solutions",
      companyLogo: "/placeholder.svg?height=50&width=120",
    },
    {
      name: "Thomas Mercier",
      position: "Directeur Marketing, Global Retail",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
      review:
        "Grâce à la plateforme d'analyse prédictive de SolleAI, nous avons pu anticiper les tendances du marché et ajuster notre stratégie en conséquence. Cela nous a donné un avantage concurrentiel significatif.",
      company: "Global Retail",
      companyLogo: "/placeholder.svg?height=50&width=120",
    },
    {
      name: "Sophie Bertrand",
      position: "Responsable Innovation, FinTech Plus",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      review:
        "La solution de chatbot IA développée par SolleAI a révolutionné notre service client. Nous avons réduit nos temps de réponse de 80% tout en améliorant la satisfaction client. Un investissement qui a largement porté ses fruits.",
      company: "FinTech Plus",
      companyLogo: "/placeholder.svg?height=50&width=120",
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-900/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-900/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-white">Avis </span>
            <span className="text-blue-400">Clients</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Découvrez ce que nos clients disent de nos solutions et de notre
            accompagnement
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-blue-900/20 to-black/60 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-blue-500/20"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3 flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-blue-500/30">
                      <Image
                        src={reviews[currentIndex].image || "/placeholder.svg"}
                        alt={reviews[currentIndex].name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {reviews[currentIndex].name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {reviews[currentIndex].position}
                    </p>
                    <div className="flex mb-4">
                      {renderStars(reviews[currentIndex].rating)}
                    </div>
                    <div className="w-24 h-12 flex items-center justify-center bg-white/10 rounded-md p-2">
                      <Image
                        src={
                          reviews[currentIndex].companyLogo ||
                          "/placeholder.svg"
                        }
                        alt={reviews[currentIndex].company}
                        width={120}
                        height={50}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <svg
                      className="w-10 h-10 text-blue-400 mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-300 text-lg italic mb-6">
                      {reviews[currentIndex].review}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 gap-4">
              <motion.button
                onClick={prevReview}
                className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <div className="flex gap-2 items-center">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "bg-blue-500 w-6"
                        : "bg-blue-500/30"
                    }`}
                  />
                ))}
              </div>
              <motion.button
                onClick={nextReview}
                className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
