"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const steps = [
    {
      number: "01",
      title: "Connect Your Data",
      description: "Easily integrate your existing data sources with our secure API connectors.",
    },
    {
      number: "02",
      title: "Configure AI Models",
      description: "Select and customize pre-built AI models to match your specific business needs.",
    },
    {
      number: "03",
      title: "Generate Insights",
      description: "Our AI analyzes your data to produce actionable insights and recommendations.",
    },
    {
      number: "04",
      title: "Implement Solutions",
      description: "Apply AI-driven solutions to optimize operations and drive business growth.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"
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
            <span className="text-white">How It </span>
            <span className="text-blue-400">Works</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our streamlined process makes implementing AI solutions simple and effective.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/30 hidden md:block" />

          <div className="space-y-16 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-16`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="md:w-1/2 flex justify-center">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500/20 backdrop-blur-sm flex items-center justify-center border border-blue-500/40 relative z-10">
                      <span className="text-blue-400 font-bold text-xl md:text-2xl">{step.number}</span>
                    </div>
                    <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl" />
                  </motion.div>
                </div>

                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-300 text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

