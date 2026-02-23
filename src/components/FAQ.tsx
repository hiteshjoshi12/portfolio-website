"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "A standard landing page or portfolio takes about 1-2 weeks. More complex applications, like custom E-commerce storefronts or AI-integrated SaaS platforms, typically take 4-8 weeks depending on the feature set."
  },
  {
    question: "What technologies do you use?",
    answer: "I specialize in the MERN stack (MongoDB, Express, React, Node.js) and Next.js. I also heavily utilize Tailwind CSS for styling and integrate various APIs (like OpenAI) depending on the project's needs."
  },
  {
    question: "Do you design the websites as well?",
    answer: "Yes! I focus on clean, minimalist, and highly functional user interfaces. If you already have a Figma file or a specific brand guideline, I can strictly develop from that as well."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Absolutely. I provide a standard handover period to ensure everything runs smoothly. For businesses that need continuous updates, maintenance, or new features, I offer monthly retainer packages."
  }
];

export default function FAQ() {
  // State to track which question is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-500">
            Everything you need to know about working together.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-colors hover:border-blue-200"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-slate-900 text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              {/* Answer Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}