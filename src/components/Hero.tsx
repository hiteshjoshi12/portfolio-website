"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  // We define a standard transition to keep the easing consistent
  const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };

  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center md:items-start md:text-left">
      
      {/* Availability Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.1 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-8 border border-blue-100"
      >
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
        Available for Freelance Projects
      </motion.div>

      {/* Main Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.2 }}
        className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
      >
        Building digital <br className="hidden md:block" />
        products that <span className="text-blue-600">scale.</span>
      </motion.h1>
      
      {/* Sub-headline / Bio */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.3 }}
        className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed"
      >
        I'm a Full-Stack Developer based in Gurugram. From AI-driven platforms to high-converting e-commerce, I turn complex business logic into clean, user-friendly web applications using the MERN stack and Next.js.
      </motion.p>

      {/* Call to Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto"
      >
        <Link 
          href="#projects" 
          className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
        >
          View My Work
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
        <Link 
          href="#contact" 
          className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 shadow-sm transition-colors flex items-center justify-center"
        >
          Let's Talk
        </Link>
      </motion.div>

    </section>
  );
}