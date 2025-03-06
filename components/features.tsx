"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, BarChart3, Zap, Shield, Users, Layers } from "lucide-react"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const features = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Advanced AI",
      description:
        "Leverage cutting-edge machine learning algorithms to automate complex tasks and gain valuable insights.",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Powerful Analytics",
      description: "Transform raw data into actionable intelligence with our comprehensive analytics dashboard.",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Lightning Fast",
      description: "Experience unparalleled speed with our optimized infrastructure designed for real-time processing.",
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Enterprise Security",
      description: "Rest easy knowing your data is protected by military-grade encryption and security protocols.",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Team Collaboration",
      description: "Enhance teamwork with collaborative features that keep everyone aligned and productive.",
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "Seamless Integration",
      description: "Connect with your existing tools through our extensive API and pre-built integrations.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="features" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-900/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-900/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-white">Powerful </span>
            <span className="text-blue-400">Features</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our platform offers a comprehensive suite of tools designed to transform your business operations.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-900/20 to-black/60 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(66, 153, 225, 0.3)" }}
            >
              <motion.div
                className="text-blue-400 mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

