"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, BarChart2, Award, Globe } from "lucide-react";

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const stats = [
    {
      icon: <Users className="w-10 h-10" />,
      value: "500+",
      label: "Clients Satisfaits",
      description: "Entreprises qui nous font confiance",
    },
    {
      icon: <BarChart2 className="w-10 h-10" />,
      value: "98%",
      label: "Taux de Satisfaction",
      description: "Clients qui recommandent nos services",
    },
    {
      icon: <Award className="w-10 h-10" />,
      value: "25+",
      label: "Prix d'Innovation",
      description: "Reconnaissances dans l'industrie",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      value: "15+",
      label: "Pays Desservis",
      description: "Présence internationale",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
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
            <span className="text-white">Nos </span>
            <span className="text-blue-400">Statistiques</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Des résultats concrets qui témoignent de notre expertise et de notre
            engagement
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-900/20 to-black/60 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 text-center"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(66, 153, 225, 0.3)",
              }}
            >
              <motion.div
                className="text-blue-400 mb-4 mx-auto"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="mb-2"
              >
                <span className="text-4xl font-bold text-white">
                  {stat.value}
                </span>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {stat.label}
              </h3>
              <p className="text-gray-300">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
