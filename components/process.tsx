"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const steps = [
    {
      number: "01",
      title: "Consultation Initiale",
      description:
        "Nous commençons par comprendre vos besoins, objectifs et défis spécifiques lors d'une consultation approfondie.",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      number: "02",
      title: "Analyse & Stratégie",
      description:
        "Nos experts analysent votre situation actuelle et élaborent une stratégie personnalisée pour atteindre vos objectifs.",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      number: "03",
      title: "Développement & Implémentation",
      description:
        "Nous développons et implémentons des solutions sur mesure en utilisant les technologies les plus avancées.",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      number: "04",
      title: "Test & Optimisation",
      description: "Chaque solution est rigoureusement testée et optimisée pour garantir des performances optimales.",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      number: "05",
      title: "Déploiement & Formation",
      description: "Nous déployons la solution et formons votre équipe pour assurer une adoption réussie.",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      number: "06",
      title: "Support Continu",
      description:
        "Notre équipe reste à vos côtés pour vous accompagner et faire évoluer votre solution selon vos besoins.",
      icon: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="process" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"
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
            <span className="text-white">Notre </span>
            <span className="text-blue-400">Process</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Une méthodologie éprouvée pour garantir le succès de votre projet
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/30 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"} relative`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {/* Connection dot */}
                <div className="absolute left-1/2 top-8 w-5 h-5 bg-blue-500 rounded-full transform -translate-x-1/2 hidden lg:block" />

                <div className="bg-gradient-to-br from-blue-900/20 to-black/60 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 w-full">
                  <div className="flex items-start gap-6">
                    <motion.div
                      className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/40"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="text-blue-400 font-bold text-xl">{step.number}</span>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

