"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Bot, Database, LineChart, ShieldCheck, Cpu, Workflow } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const services = [
    {
      icon: <Bot className="w-12 h-12" />,
      title: "Intelligence Artificielle",
      description:
        "Solutions d'IA personnalisées pour automatiser vos processus métier et améliorer la prise de décision.",
      features: ["Chatbots intelligents", "Automatisation des processus", "Systèmes de recommandation"],
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Big Data Analytics",
      description: "Transformez vos données en insights stratégiques pour prendre des décisions éclairées.",
      features: ["Analyse prédictive", "Visualisation de données", "Traitement en temps réel"],
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      title: "Business Intelligence",
      description: "Tableaux de bord interactifs et rapports personnalisés pour suivre vos KPIs en temps réel.",
      features: ["Tableaux de bord personnalisés", "Rapports automatisés", "Alertes intelligentes"],
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Cybersécurité",
      description: "Protégez vos données et systèmes avec nos solutions de sécurité avancées basées sur l'IA.",
      features: ["Détection des menaces", "Protection des données", "Conformité réglementaire"],
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Machine Learning",
      description: "Modèles de ML personnalisés pour résoudre vos défis métier spécifiques.",
      features: ["Apprentissage supervisé", "Apprentissage non supervisé", "Apprentissage par renforcement"],
    },
    {
      icon: <Workflow className="w-12 h-12" />,
      title: "Transformation Digitale",
      description: "Accompagnement complet pour votre transition vers le numérique et l'IA.",
      features: ["Conseil stratégique", "Implémentation technique", "Formation des équipes"],
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
    <section id="services" className="py-20 bg-black relative overflow-hidden">
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
            <span className="text-white">Nos </span>
            <span className="text-blue-400">Services</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Des solutions innovantes adaptées à vos besoins spécifiques
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-900/20 to-black/60 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(66, 153, 225, 0.3)" }}
            >
              <motion.div
                className="text-blue-400 mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <div className="mt-auto">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="text-blue-400 font-medium flex items-center hover:text-blue-300 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

