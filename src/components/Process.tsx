"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    description: "We start by defining the core business logic, target audience, and technical requirements before writing a single line of code."
  },
  {
    id: "02",
    title: "Architecture & UI",
    description: "Mapping out the database structure and designing a clean, high-converting user interface that aligns with your brand identity."
  },
  {
    id: "03",
    title: "Development",
    description: "Building the application using the MERN stack and Next.js, focusing on clean code, security, and scalable performance."
  },
  {
    id: "04",
    title: "Launch & Handoff",
    description: "Deploying the live product, running final speed optimizations, and providing you with the training to manage your new digital asset."
  }
];

export default function Process() {
  return (
    <section className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            How I Work
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            A streamlined, transparent process designed to take your project from concept to a fully deployed digital product without the headache.
          </p>
        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
            >
              {/* Large Background Number */}
              <span className="absolute top-4 right-6 text-6xl font-extrabold text-slate-200 group-hover:text-blue-100 transition-colors z-0">
                {step.id}
              </span>
              
              {/* Content */}
              <div className="relative z-10 mt-12">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}