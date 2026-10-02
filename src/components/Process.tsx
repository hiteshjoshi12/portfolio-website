"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Compass, 
  Layers, 
  Code2, 
  Rocket, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Activity
} from "lucide-react";
import { scrollToSection } from "@/utils/navigation";

interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  tagline: string;
  duration: string;
  description: string;
  icon: any;
  color: string;
  artifacts: string[];
}

const STEPS: StepItem[] = [
  {
    id: "discovery",
    stepNumber: "01",
    title: "Discovery & Blueprint",
    tagline: "Architecture, Data Models & Scope",
    duration: "Week 01",
    description: "We align on commercial objectives, target conversion metrics, and system architecture. Before writing code, we map database schemas, API contracts, and user interaction flows.",
    icon: Compass,
    color: "from-rose-500 to-orange-500",
    artifacts: [
      "Technical Architecture Specification",
      "Database Schema & Entity Relationship Map",
      "Performance Benchmark Agreement",
      "Interactive Wireframe Flows",
    ],
  },
  {
    id: "design",
    stepNumber: "02",
    title: "3D Spatial & UI Prototyping",
    tagline: "WebGL Shaders & Kinetic Interfaces",
    duration: "Week 02",
    description: "Designing the visual language and interactive 3D elements. We prototype custom GLSL shaders, camera orbital movements, and micro-interactions for a fluid 60 FPS mobile experience.",
    icon: Layers,
    color: "from-orange-500 to-amber-500",
    artifacts: [
      "Figma Component Design System",
      "Interactive 3D WebGL Proof of Concept",
      "Typography & Color Hierarchy Tokens",
      "Responsive Layout Blueprints",
    ],
  },
  {
    id: "development",
    stepNumber: "03",
    title: "High-Velocity Sprint",
    tagline: "Next.js 16 + Clean TypeScript",
    duration: "Weeks 03 - 04",
    description: "Transforming prototypes into production-grade reality. Writing modular TypeScript code, integrating AI models or payment gateways, and implementing SEO & OpenGraph optimization.",
    icon: Code2,
    color: "from-rose-600 to-pink-500",
    artifacts: [
      "Clean Git Monorepo with Strict Linting",
      "Fully Integrated API & Database Logic",
      "Sub-Second LCP Performance Tuning",
      "End-to-End Responsive Mobile Polish",
    ],
  },
  {
    id: "launch",
    stepNumber: "04",
    title: "Zero-Downtime Launch",
    tagline: "Speed Audit, CI/CD & Handoff",
    duration: "Week 05",
    description: "Running final security audits, cross-browser compatibility tests, and lighthouse speed verification before deploying to global Edge CDNs. Complete client walk-through and documentation.",
    icon: Rocket,
    color: "from-emerald-500 to-teal-500",
    artifacts: [
      "100/100 Lighthouse Performance Report",
      "Automated CI/CD Deployment Pipeline",
      "Admin Training & Video Documentation",
      "30-Day Post-Launch Support & Warranty",
    ],
  },
];

// Single 3D Step Card with Mouse Parallax Tilt
function ProcessCard({ step, index, isSelected, onSelect }: { 
  step: StepItem; 
  index: number; 
  isSelected: boolean; 
  onSelect: () => void;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.04);
    setRotateY(x * 0.04);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const Icon = step.icon;

  return (
    <div style={{ perspective: "1200px" }}>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        onClick={onSelect}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        style={{ transformStyle: "preserve-3d" }}
        className={`group relative p-7 rounded-3xl backdrop-blur-2xl border transition-all duration-300 flex flex-col justify-between h-full cursor-pointer ${
          isSelected
            ? "bg-white/95 border-rose-300 shadow-[0_20px_50px_-10px_rgba(244,63,94,0.22)] ring-2 ring-rose-500/20 scale-[1.02]"
            : "bg-white/75 hover:bg-white/90 border-white/80 shadow-[0_10px_35px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.1)] ring-1 ring-slate-900/5"
        }`}
      >
        {/* Step Number Background Watermark */}
        <span 
          className="absolute top-4 right-6 text-5xl font-black text-slate-100 group-hover:text-rose-100/80 transition-colors pointer-events-none select-none -z-10"
          style={{ transform: "translateZ(10px)" }}
        >
          {step.stepNumber}
        </span>

        <div>
          {/* Top Row: Icon & Timeline Pill */}
          <div 
            className="flex items-center justify-between mb-6"
            style={{ transform: "translateZ(25px)" }}
          >
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${step.color} flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/60 text-slate-600 text-xs font-mono font-semibold">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{step.duration}</span>
            </div>
          </div>

          {/* Title & Tagline */}
          <div style={{ transform: "translateZ(30px)" }}>
            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-1 group-hover:text-rose-600 transition-colors">
              {step.title}
            </h3>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-3">
              {step.tagline}
            </p>
            <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
              {step.description}
            </p>
          </div>

          {/* Key Output Artifacts */}
          <div 
            className="pt-4 border-t border-slate-100 flex flex-col gap-2"
            style={{ transform: "translateZ(20px)" }}
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
              // Key Artifacts
            </span>
            {step.artifacts.map((art, i) => (
              <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="truncate">{art}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Interactive Status Bar */}
        <div 
          className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium mt-6"
          style={{ transform: "translateZ(15px)" }}
        >
          <span className="text-[11px] font-mono">Stage 0{index + 1} of 04</span>
          <span className={`text-[11px] font-bold ${isSelected ? "text-rose-500" : "text-slate-400 group-hover:text-slate-700"}`}>
            {isSelected ? "● Selected" : "Click to focus"}
          </span>
        </div>

      </motion.div>
    </div>
  );
}

export default function Process() {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section id="process" data-section="process" className="relative py-28 px-6 max-w-6xl mx-auto overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-gradient-to-tr from-rose-400/10 via-orange-400/10 to-amber-300/10 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_4px_16px_-4px_rgba(244,63,94,0.12)] text-xs font-semibold text-slate-700 ring-1 ring-slate-900/5 mb-4"
        >
          <Activity className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
          <span>Execution Protocol</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-orange-500 font-bold">Transparent Delivery</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
        >
          From Concept to{" "}
          <span className="bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
            Deployed Reality
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed"
        >
          A battle-tested 4-stage engineering sprint designed to launch your web application on time, within budget, and with zero guesswork.
        </motion.p>

      </div>

      {/* 3D Dimensional Process Pipeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step, index) => (
          <ProcessCard
            key={step.id}
            step={step}
            index={index}
            isSelected={selectedStep === index}
            onSelect={() => setSelectedStep(index)}
          />
        ))}
      </div>

      {/* Bottom Guarantee Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-14 p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm ring-1 ring-slate-900/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-sm font-bold text-slate-900 block">
              100% Milestone Transparency
            </span>
            <span className="text-xs text-slate-500">
              Weekly staging demos, private Slack/Discord channel & direct code access.
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-all shadow-md shrink-0 cursor-pointer"
        >
          Schedule Discovery Call →
        </button>
      </motion.div>

    </section>
  );
}