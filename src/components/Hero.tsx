"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Copy,
  Check,
  Compass,
  Code2,
  Cpu,
  Layers
} from "lucide-react";
import { scrollToSection } from "@/utils/navigation";

const ROTATING_WORDS = [
  "Immersive 3D Experiences",
  "High-Converting Web Apps",
  "Interactive WebGL Scenes",
  "Scalable Full-Stack Products",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Rotate headline words every 2.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("joshihitesh940@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="hero" className="relative pt-32 sm:pt-40 pb-20 px-6 max-w-6xl mx-auto">

      {/* Soft Ambient Light Glow on the left */}
      <div className="absolute top-20 left-0 w-[420px] h-[360px] bg-gradient-to-tr from-rose-400/10 via-orange-400/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        {/* Left Column: Clean Left-Aligned Content (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Availability Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-xl border border-white/80 shadow-[0_4px_16px_-4px_rgba(244,63,94,0.12)] text-xs font-semibold text-slate-700 ring-1 ring-slate-900/5 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Freelance Projects</span>


          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.08] mb-4"
          >
            Crafting <br />
            <span className="relative inline-block text-slate-900">
              <span className="relative z-10">Sensory</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 bottom-1 sm:bottom-2 w-full h-3 sm:h-4 bg-rose-200/50 -z-10 rounded-sm origin-left"
              />
            </span>{" "}
            <span className="bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </motion.h1>

            {/* Dynamic Rotating Role */}
            <div className="min-h-10 flex flex-wrap items-center text-sm sm:text-xl font-bold text-slate-700 mb-6">
              <span className="text-slate-400 font-normal mr-2">Specializing in</span>
              <div className="relative overflow-hidden inline-flex items-center min-w-[200px] sm:min-w-[320px] h-8 sm:h-10">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_WORDS[wordIndex]}
                    initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute font-extrabold text-slate-900 flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 shrink-0" />
                    <span className="bg-gradient-to-r from-rose-600 to-orange-500 bg-clip-text text-transparent">
                      {ROTATING_WORDS[wordIndex]}
                    </span>
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Bio / Value Prop */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed font-normal"
            >
              I bridge the gap between creative <strong className="text-slate-900 font-semibold">3D WebGL graphics</strong> and robust <strong className="text-slate-900 font-semibold">Full-Stack architecture</strong>. Helping startups and visionary brands ship high-converting web apps.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10"
            >
              {/* Primary Work CTA */}
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="group relative px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-[0_8px_20px_-4px_rgba(15,23,42,0.3)] hover:shadow-[0_12px_25px_-4px_rgba(244,63,94,0.35)] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-rose-400 group-hover:rotate-12 transition-transform duration-300" />
                  Explore Projects
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Quick Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-5 py-3.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-xl border border-white/80 text-slate-800 font-semibold text-xs sm:text-sm shadow-[0_4px_16px_-4px_rgba(0,0,0,0.06)] ring-1 ring-slate-900/5 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500 animate-bounce" />
                    <span className="text-emerald-600 font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              {/* Let's Talk Link */}
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="px-5 py-3.5 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 font-semibold text-xs sm:text-sm transition-colors text-center cursor-pointer"
              >
                Let's Talk
              </button>
            </motion.div>

          {/* Minimal, Decluttered Proof Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/60 text-xs text-slate-500 font-medium"
          >
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-rose-500" />
              <span>15+ Products Shipped</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-orange-500" />
              <span>WebGL & Three.js 60 FPS</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-500" />
              <span>Full-Stack Next.js 16</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Open Space Reserved for the 3D Scene */}
        <div className="lg:col-span-5 relative hidden lg:flex flex-col items-end justify-end min-h-[460px] pointer-events-none">

        </div>

      </div>

    </section>
  );
}

