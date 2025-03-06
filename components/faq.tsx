"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is SolleAI?",
      answer:
        "SolleAI is a cutting-edge AI platform designed to help businesses automate processes, gain valuable insights from data, and enhance decision-making through advanced machine learning algorithms.",
    },
    {
      question: "How can AI benefit my business?",
      answer:
        "AI can benefit your business in numerous ways, including automating repetitive tasks, identifying patterns in large datasets, predicting customer behavior, optimizing operations, reducing costs, and enabling more informed strategic decisions.",
    },
    {
      question: "Do I need technical expertise to use your platform?",
      answer:
        "No, our platform is designed with a user-friendly interface that requires no coding or technical expertise. We also provide comprehensive onboarding and support to ensure you can maximize the value of our AI solutions.",
    },
    {
      question: "How secure is my data on your platform?",
      answer:
        "We take data security extremely seriously. Our platform employs enterprise-grade encryption, regular security audits, and complies with industry standards like GDPR, HIPAA, and SOC 2. Your data is always yours, and we never use it for training our models without explicit permission.",
    },
    {
      question: "Can I integrate SolleAI with my existing systems?",
      answer:
        "Yes, our platform offers extensive API capabilities and pre-built integrations with popular business tools and systems. Our team can also develop custom integrations for your specific needs.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide multiple tiers of support depending on your plan, ranging from email support to dedicated account managers. All customers have access to our comprehensive documentation, tutorials, and knowledge base.",
    },
  ];

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
    <section id="faq" className="py-20 bg-black relative overflow-hidden">
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
            <span className="text-white">Frequently Asked </span>
            <span className="text-blue-400">Questions</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find answers to common questions about our AI platform and services.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border border-blue-500/20 rounded-xl overflow-hidden"
              variants={itemVariants}
            >
              <motion.button
                className="w-full p-6 text-left bg-gradient-to-r from-blue-900/20 to-black/60 backdrop-blur-sm flex justify-between items-center"
                onClick={() => toggleQuestion(index)}
                whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-black/60 border-t border-blue-500/20">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
