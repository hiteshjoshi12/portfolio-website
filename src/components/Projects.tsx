"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Globe,
  Lock,
  Layers,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Activity,
  CheckCircle2
} from "lucide-react";

interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  metrics: string;
  tech: string[];
  liveLink: string;
  img: string;
  accent: string;
}

const PROJECTS: Project[] = [
  {
    id: "beadsnbloom",
    number: "01",
    title: "Beads & Bloom",
    category: "Luxury E-Commerce",
    tagline: "Minimalist High-Conversion Digital Flagship",
    description: "A luxury lifestyle storefront designed with an editorial aesthetic. Built with sub-second page transitions, dynamic cart state management, and frictionless checkout paths to maximize conversion rate.",
    metrics: "< 0.8s Global LCP • 99.9% Uptime",
    tech: ["Next.js", "Tailwind CSS", "Express REST", "MongoDB"],
    liveLink: "https://beadsandbloom.in/",
    img: "/beadnbloom.png",
    accent: "from-rose-600 to-pink-500",
  },
  {
    id: "indiaplanner",
    number: "02",
    title: "IndiaPlanner",
    category: "AI Travel Intelligence",
    tagline: "Algorithmic Route Optimization & Day-by-Day Logistics",
    description: "An intelligent travel orchestration platform eliminating manual trip planning. Evaluates user constraints, geographical distances, and seasonal weather data to generate optimal multi-city itinerary routes in seconds.",
    metrics: "100+ Curated Destinations • Dynamic Route Graph",
    tech: ["React 19", "Node.js", "MongoDB", "OpenAI API"],
    liveLink: "https://indiaplanners.com/",
    img: "/indiaplanner.png",
    accent: "from-amber-500 to-orange-500",
  },
  {
    id: "careerdisha",
    number: "03",
    title: "CareerDisha Academy",
    category: "EdTech Dashboard",
    tagline: "Interactive Academic Analytics & Career Roadmap",
    description: "An intuitive learning dashboard translating complex student performance trajectories and career pathways into interactive, digestible visualization telemetry for accelerated student success.",
    metrics: "MERN Stack Architecture • Real-Time Analytics",
    tech: ["MERN Stack", "Redux Toolkit", "RESTful APIs", "Chart.js"],
    liveLink: "https://careerdisha.academy/",
    img: "/careerdisha.png",
    accent: "from-sky-500 to-indigo-600",
  },
  {
    id: "vogueai",
    number: "04",
    title: "VogueAI Studio",
    category: "AI SaaS Platform",
    tagline: "Dynamic AI Mockup Generation & Vision Pipeline",
    description: "An advanced computer vision studio engineered for fashion and product brands. Features multi-prompt synthesis, client-side dynamic compression, and a Redux-managed credit architecture for high-throughput generation.",
    metrics: "Sub-400ms Vision Pipeline • 10k+ Generative Renders",
    tech: ["Next.js 16", "Vision APIs", "Redux Toolkit", "Tailwind CSS v4"],
    liveLink: "https://vogueai-phi.vercel.app/",
    img: "/vogueai.png",
    accent: "from-rose-500 to-orange-500",
  },



];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = PROJECTS[activeIndex];

  // Mouse tilt state for the 3D stage
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.035);
    setRotateY(x * 0.035);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <section id="projects" data-section="projects" className="relative py-28 px-6 max-w-6xl mx-auto overflow-hidden">

      {/* Background Soft Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-rose-400/10 via-orange-400/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_4px_16px_-4px_rgba(244,63,94,0.12)] text-xs font-semibold text-slate-700 ring-1 ring-slate-900/5 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-spin" style={{ animationDuration: "10s" }} />
            <span>Curated Portfolio Archive</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="text-rose-600 font-bold">2026 Deployments</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Engineered{" "}
            <span className="bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Digital Flagships
            </span>
          </motion.h2>
        </div>

        {/* Navigation arrows for fast switching */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-white/80 hover:bg-white backdrop-blur-xl border border-white/80 shadow-sm ring-1 ring-slate-900/5 flex items-center justify-center text-slate-700 hover:text-rose-600 transition-all active:scale-95 cursor-pointer"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-mono font-bold text-slate-400">
            {activeProject.number} / 0{PROJECTS.length}
          </span>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-white/80 hover:bg-white backdrop-blur-xl border border-white/80 shadow-sm ring-1 ring-slate-900/5 flex items-center justify-center text-slate-700 hover:text-rose-600 transition-all active:scale-95 cursor-pointer"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Project Selector Rail */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {PROJECTS.map((proj, idx) => {
          const isSelected = activeIndex === idx;
          return (
            <button
              key={proj.id}
              onClick={() => setActiveIndex(idx)}
              className={`group relative px-5 py-3 rounded-2xl text-left whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-3 ${isSelected
                  ? "bg-slate-900 text-white shadow-xl shadow-slate-900/15 scale-[1.02]"
                  : "bg-white/70 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/60 shadow-sm"
                }`}
            >
              <span className={`text-xs font-mono font-bold ${isSelected ? "text-rose-400" : "text-slate-400"}`}>
                {proj.number}
              </span>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold leading-tight tracking-tight">
                  {proj.title}
                </span>
                <span className={`text-[10px] ${isSelected ? "text-slate-300" : "text-slate-400"}`}>
                  {proj.category}
                </span>
              </div>

              {isSelected && (
                <motion.div
                  layoutId="active-project-indicator"
                  className="absolute -bottom-1 left-4 right-4 h-1 rounded-full bg-gradient-to-r from-rose-500 to-orange-400"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* 3D Dimensional Showcase Theater */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        {/* Left Column: 3D Interactive Floating Mockup Viewport (7 Cols) */}
        <div
          className="lg:col-span-7"
          style={{ perspective: "1400px" }}
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
              rotateX,
              rotateY,
            }}
            transition={{ type: "spring", stiffness: 220, damping: 25 }}
            style={{ transformStyle: "preserve-3d" }}
            className="group relative rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] ring-1 ring-slate-900/5 p-2 sm:p-3 overflow-hidden cursor-pointer"
          >
            {/* macOS Browser Chrome Bar */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-100/80 backdrop-blur-md rounded-xl sm:rounded-2xl mb-2 sm:mb-3 border border-slate-200/50">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-400" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white text-[9px] sm:text-[11px] font-mono text-slate-500 border border-slate-200 shadow-inner max-w-[120px] sm:max-w-[240px] truncate">
                <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-500 shrink-0" />
                <span className="truncate">{activeProject.liveLink.replace("https://", "")}</span>
              </div>
              <a
                href={activeProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-900 transition-colors"
                aria-label="Open live link in new window"
              >
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>

            {/* Product Mockup Viewport */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 aspect-video sm:aspect-[16/10] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProject.id}
                  src={activeProject.img}
                  alt={activeProject.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-contain sm:object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </AnimatePresence>

              {/* Ambient Glass Glare Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating 3D HUD Badge (Top Right) */}
              <div
                className="absolute top-4 right-4 pointer-events-none"
                style={{ transform: "translateZ(35px)" }}
              >
                <div className="px-3 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-xl border border-white/20 text-white text-[11px] font-semibold flex items-center gap-2 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Production Live</span>
                </div>
              </div>

              {/* Hover Prompt */}
              <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">
                <a
                  href={activeProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white text-slate-900 font-bold text-xs shadow-2xl flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <span>Open Live Application</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Right Column: Project Architectural Context & Specifications (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-6"
            >
              {/* Category & Number Tag */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200">
                  {activeProject.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  REF // 0{activeProject.number}
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2">
                  {activeProject.title}
                </h3>
                <p className="text-sm font-semibold text-rose-500 tracking-wide uppercase">
                  {activeProject.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-base leading-relaxed font-normal">
                {activeProject.description}
              </p>

              {/* Performance Metric Telemetry */}
              <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/80 shadow-sm flex items-center gap-3 text-xs font-medium text-slate-700 ring-1 ring-slate-900/5">
                <Activity className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="font-semibold text-slate-900">{activeProject.metrics}</span>
              </div>

              {/* Technology Stack Pills */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5 block">
                  Core Technologies Deployed
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/60 text-slate-700 text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60">
                <a
                  href={activeProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide shadow-[0_10px_25px_-5px_rgba(15,23,42,0.3)] hover:shadow-[0_12px_25px_-4px_rgba(244,63,94,0.35)] transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-rose-400" />
                    Launch Live Site
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <button
                  onClick={handleNext}
                  className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Next Showcase</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}
