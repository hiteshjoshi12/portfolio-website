"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Copy,
  Check,
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
    <section id="hero" data-section="hero" className="relative pt-24 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">

      {/* Soft Ambient Light Glow on the left */}
      <div className="absolute top-16 left-0 w-[420px] h-[360px] bg-gradient-to-tr from-rose-400/10 via-orange-400/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

        {/* Content Column: Centered on mobile, Left-Aligned on desktop */}
        <div className="lg:col-span-7 flex flex-col items-center text-center sm:items-start sm:text-left w-full">

          {/* Availability Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white backdrop-blur-xl border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-700 mb-5 sm:mb-6"
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
            className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.08] mb-4 text-center sm:text-left"
          >
            Crafting <br className="hidden sm:block" />
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

          {/* Dynamic Rotating Role - Strictly 1 line on mobile with whitespace-nowrap */}
          <div className="min-h-10 flex flex-wrap items-center justify-center sm:justify-start text-xs sm:text-base md:text-lg font-bold text-slate-700 mb-5 sm:mb-6">
            <span className="text-slate-400 font-normal mr-2">Specializing in</span>
            <div className="relative overflow-hidden inline-flex items-center min-w-[190px] sm:min-w-[280px] h-7 sm:h-9">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_WORDS[wordIndex]}
                  initial={{ y: 16, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -16, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute font-extrabold text-slate-900 flex items-center gap-1.5 whitespace-nowrap"
                >
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 shrink-0" />
                  <span className="bg-gradient-to-r from-rose-600 to-orange-500 bg-clip-text text-transparent text-xs sm:text-base md:text-lg">
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
            className="text-sm sm:text-lg text-slate-600 max-w-xl mb-7 sm:mb-8 leading-relaxed font-normal text-center sm:text-left mx-auto sm:mx-0"
          >
            I bridge the gap between creative <strong className="text-slate-900 font-semibold">3D WebGL graphics</strong> and robust <strong className="text-slate-900 font-semibold">Full-Stack architecture</strong>. Helping startups and visionary brands ship high-converting web apps.
          </motion.p>

          {/* Balanced Mobile Actions Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 w-full sm:w-auto mb-8 sm:mb-10"
          >
            {/* Dual Actions Group */}
            <div className="grid grid-cols-2 gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="group relative px-5 py-3 sm:py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1.5 overflow-hidden cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-rose-400 group-hover:rotate-12 transition-transform duration-300" />
                <span>Explore Work</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="px-5 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 hover:from-rose-600 hover:via-orange-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-rose-500/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Copy Email Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/90 hover:bg-white border border-slate-200/90 text-slate-800 font-semibold text-xs sm:text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500 animate-bounce" />
                  <span className="text-emerald-600 font-bold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Minimal, Decluttered Proof Badges (Symmetrical 3-Col Dock on Mobile) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-3 gap-2 w-full pt-6 border-t border-slate-200/60 text-[11px] sm:text-xs text-slate-600 font-semibold"
          >
            <div className="p-2 sm:p-2.5 rounded-2xl bg-white/80 border border-slate-200/70 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center sm:text-left">
              <Code2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span>15+ Products</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-2xl bg-white/80 border border-slate-200/70 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center sm:text-left">
              <Cpu className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>WebGL 60 FPS</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-2xl bg-white/80 border border-slate-200/70 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center sm:text-left">
              <Layers className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Next.js 16</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Open Space Reserved for the 3D Scene on Desktop */}
        <div className="lg:col-span-5 relative hidden lg:flex flex-col items-end justify-end min-h-[460px] pointer-events-none" />

      </div>

    </section>
  );
}
