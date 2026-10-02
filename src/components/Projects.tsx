"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Globe,
  Activity,
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
    img: "./beadnbloom.png",
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
    img: "./indiaplanner.png",
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
    img: "./careerdisha.png",
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
    img: "./vogueai.png",
    accent: "from-rose-500 to-orange-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" data-section="projects" className="relative py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto overflow-visible">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[400px] bg-gradient-to-bl from-rose-400/10 via-orange-400/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col items-start mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-3xl sm:rounded-full bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_4px_16px_-4px_rgba(244,63,94,0.12)] text-[10px] sm:text-xs font-semibold text-slate-700 ring-1 ring-slate-900/5 mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-spin shrink-0" style={{ animationDuration: "10s" }} />
          <span className="text-center">Curated Portfolio Archive</span>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300 shrink-0" />
          <span className="text-rose-600 font-bold text-center">2026 Deployments</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight"
        >
          Engineered{" "}
          <span className="bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
            Digital Flagships
          </span>
        </motion.h2>
      </div>

      {/* Sticky Stack Portfolio Feed */}
      <div className="flex flex-col gap-8 sm:gap-16 relative">
        {PROJECTS.map((proj, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            key={proj.id}
            className="lg:sticky lg:h-[calc(100vh-160px)] overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-900/10 border border-slate-200 flex flex-col lg:flex-row group"
            style={{
              top: `calc(100px + ${idx * 20}px)`,
              zIndex: idx
            }}
          >
            {/* Image Section (Top on mobile, Left on desktop) */}
            <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 bg-slate-50 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-auto lg:h-full object-contain rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-slate-900/5 transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content Section (Bottom on mobile, Right on desktop) */}
            <div className="lg:w-1/2 p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-white lg:overflow-y-auto no-scrollbar">
              <div className="flex items-center gap-3">
                <span className="text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200">
                  {proj.category}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-slate-400">
                  REF // {proj.number}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2">
                {proj.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-rose-500 tracking-wide uppercase">
                {proj.tagline}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {proj.description}
              </p>

              {/* Metrics block */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-xs font-medium text-slate-700 w-full">
                <Activity className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="font-semibold text-slate-900 leading-relaxed">{proj.metrics}</span>
              </div>

              {/* Technologies */}
              <div className="mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-3 block">
                  Core Technologies Deployed
                </span>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-[10px] sm:text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Launch Button */}
              <a
                href={proj.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden w-full sm:w-max active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Launch Live Site</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
