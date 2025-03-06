"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for small businesses just getting started with AI.",
      features: ["Basic AI analytics", "5 AI models", "10,000 API calls/month", "Email support", "Basic reporting"],
      highlighted: false,
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Ideal for growing businesses looking to scale their AI capabilities.",
      features: [
        "Advanced AI analytics",
        "20 AI models",
        "100,000 API calls/month",
        "Priority support",
        "Advanced reporting",
        "Custom integrations",
        "Team collaboration",
      ],
      highlighted: true,
      buttonText: "Get Started",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "tailored pricing",
      description: "For organizations requiring enterprise-grade AI solutions.",
      features: [
        "Full AI suite access",
        "Unlimited AI models",
        "Unlimited API calls",
        "24/7 dedicated support",
        "Custom AI model development",
        "On-premise deployment option",
        "Advanced security features",
        "Dedicated account manager",
      ],
      highlighted: false,
      buttonText: "Contact Sales",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="pricing" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"
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
            <span className="text-white">Simple </span>
            <span className="text-blue-400">Pricing</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the plan that best fits your business needs and scale as you grow.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl border ${
                plan.highlighted
                  ? "border-blue-500 bg-gradient-to-br from-blue-900/30 to-black/80"
                  : "border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-black/60"
              } backdrop-blur-sm p-8 relative`}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(66, 153, 225, 0.3)" }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2 text-white">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <Check className="text-blue-400 mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <motion.button
                className={`w-full py-3 rounded-full font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/40"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

