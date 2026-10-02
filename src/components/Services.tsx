"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Box, 
  Bot, 
  Cpu, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Terminal,
  Activity
} from "lucide-react";
import { scrollToSection } from "@/utils/navigation";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: any;
  gradient: string;
  deliverables: string[];
  metrics: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "3d-webgl",
    number: "01",
    title: "Interactive 3D & WebGL",
    tagline: "High-Craft Digital Worlds & Shader Magic",
    description: "Transforming standard web layouts into sensory, award-winning interactive experiences. Leveraging Three.js, WebGL, and custom GLSL shaders to craft fluid physics, 3D product visualizers, and brand showcases.",
    icon: Box,
    gradient: "from-rose-500 to-orange-500",
    deliverables: [
      "Custom GLSL Vertex & Fragment Shaders",
      "Interactive 3D Canvas with Real-Time Physics",
      "60 FPS Hardware Acceleration on Mobile",
      "PBR Glass & Dielectric Lighting Setups",
    ],
    metrics: "60 FPS Render Loop • WebGL 2.0",
  },
  {
    id: "ai-saas",
    number: "02",
    title: "AI & Autonomous SaaS",
    tagline: "Agentic Logic & Machine Vision Pipelines",
    description: "Architecting intelligent digital products that solve high-value problems. From multi-prompt AI mockup generators to autonomous agents, vector embeddings, and low-latency API orchestrations.",
    icon: Bot,
    gradient: "from-amber-500 to-orange-500",
    deliverables: [
      "OpenAI & Vision Model Integration",
      "Dynamic Vector Embeddings & Semantic Search",
      "Agentic Tools & Structured Output Pipelines",
      "Token & Credit Monetization Dashboards",
    ],
    metrics: "< 350ms Inference Latency",
  },
  {
    id: "fullstack",
    number: "03",
    title: "Full-Stack Web Architecture",
    tagline: "High-Converting Flagships & Next.js 16",
    description: "Production-grade, end-to-end web applications built for speed, conversion, and effortless scale. Engineering modular TypeScript backends, fluid React 19 UI, and frictionless checkout flows.",
    icon: Zap,
    gradient: "from-slate-900 to-slate-700",
    deliverables: [
      "Next.js 16 App Router & Server Actions",
      "Strict TypeScript & Schema Validation",
      "Scalable REST & WebSocket Backends",
      "High-Converting Checkout & Stripe Integrations",
    ],
    metrics: "100/100 Lighthouse Performance",
  },
];

// Single 3D Service Card with Interactive Parallax Tilt
function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
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

  const Icon = service.icon;

  return (
    <div style={{ perspective: "1200px" }}>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12, duration: 0.6 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="group relative p-8 rounded-3xl bg-white/80 hover:bg-white/95 backdrop-blur-2xl border border-white/80 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_-12px_rgba(244,63,94,0.18)] ring-1 ring-slate-900/5 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer"
      >
        {/* Ambient Top Glow on Hover */}
        <span className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-rose-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div>
          {/* Top Row: 3D Holographic Icon & Index Number */}
          <div 
            className="flex items-center justify-between mb-8"
            style={{ transform: "translateZ(25px)" }}
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.gradient} flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
              <Icon className="w-7 h-7" />
            </div>

            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100/90 text-slate-500 border border-slate-200/60 shadow-sm">
              SPEC // 0{service.number}
            </span>
          </div>

          {/* Title & Tagline */}
          <div style={{ transform: "translateZ(30px)" }}>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2 group-hover:text-rose-600 transition-colors">
              {service.title}
            </h3>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-4">
              {service.tagline}
            </p>
            <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
              {service.description}
            </p>
          </div>

          {/* Benchmark Pill */}
          <div 
            className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs font-mono text-slate-800"
            style={{ transform: "translateZ(20px)" }}
          >
            <Activity className="w-3.5 h-3.5 text-orange-500" />
            <span className="font-semibold">{service.metrics}</span>
          </div>

          {/* Deliverables Checklist */}
          <div 
            className="pt-5 border-t border-slate-100 flex flex-col gap-2.5 mb-8"
            style={{ transform: "translateZ(25px)" }}
          >
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
              // Included Deliverables
            </span>
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Action Link */}
        <div 
          className="pt-4 border-t border-slate-100 flex items-center justify-between"
          style={{ transform: "translateZ(20px)" }}
        >
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="text-xs font-bold text-slate-900 hover:text-rose-600 flex items-center gap-1.5 transition-colors group/btn cursor-pointer"
          >
            <span>Initiate Project Scope</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/btn:text-rose-600 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
          </button>
          <span className="text-[10px] font-mono text-slate-400">Available</span>
        </div>

      </motion.div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" data-section="services" className="relative py-28 px-6 max-w-6xl mx-auto overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[380px] bg-gradient-to-tr from-rose-400/10 via-orange-400/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_4px_16px_-4px_rgba(244,63,94,0.12)] text-xs font-semibold text-slate-700 ring-1 ring-slate-900/5 mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-spin" style={{ animationDuration: "10s" }} />
          <span>Bespoke Engineering Capabilities</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-orange-500 font-bold">End-to-End</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
        >
          Tailored Engineering for{" "}
          <span className="bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
            Top-Tier Brands
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed"
        >
          Whether you need a mind-bending 3D WebGL showcase, an autonomous AI pipeline, or a high-converting full-stack platform, every line of code is bespoke and performance-optimized.
        </motion.p>

      </div>

      {/* 3D Dimensional Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

    </section>
  );
}