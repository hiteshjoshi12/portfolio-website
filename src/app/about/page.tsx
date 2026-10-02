"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import { 
  Sparkles, 
  Terminal, 
  Cpu, 
  Code2, 
  ShieldCheck, 
  Layers, 
  Zap, 
  ArrowUpRight, 
  CheckCircle2, 
  Award, 
  Compass, 
  Building2, 
  Bot, 
  Film,
  MapPin,
  Clock,
  Briefcase
} from "lucide-react";

interface Milestone {
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
  icon: any;
  color: string;
}

const MILESTONES: Milestone[] = [
  {
    period: "Enterprise Foundation",
    role: "Full-Stack System Engineer",
    organization: "ITC Hotels",
    description: "Architected and delivered an enterprise-grade Policy & Compliance Management System managing sensitive corporate data, multi-role RBAC security, and scalable React UI integrated with SharePoint and Java microservices.",
    highlights: [
      "Enterprise RBAC user security & zero data leakage",
      "Java + SharePoint + React system orchestration",
      "High-concurrency internal workflows for thousands of staff",
    ],
    icon: Building2,
    color: "from-blue-500 to-indigo-600",
  },
  {
    period: "AI & SaaS Innovation",
    role: "Founder & Lead Architect",
    organization: "Omnicode AI & Digital Products",
    description: "Engineered prompt-driven, multi-language code generation platforms and AI workflow automations. Integrated low-latency LLM streaming APIs, credit monetization, and vector embeddings.",
    highlights: [
      "Sub-400ms inference pipelines via Next.js Server Actions",
      "Dynamic prompt engineering & AST code transformation",
      "End-to-end token billing and user management",
    ],
    icon: Bot,
    color: "from-rose-500 to-orange-500",
  },
  {
    period: "Present Day",
    role: "Independent 3D & Full-Stack Engineer",
    organization: "Global Freelance Consulting",
    description: "Partnering with ambitious founders, funded startups, and agencies worldwide to build category-defining web applications, 3D WebGL flagship portals, and high-converting modern platforms.",
    highlights: [
      "100% on-time milestone delivery record",
      "60 FPS WebGL shader & Three.js canvas optimizations",
      "Full IP, repo ownership and architecture handover",
    ],
    icon: Sparkles,
    color: "from-amber-500 to-orange-500",
  },
];

const PRINCIPLES = [
  {
    number: "01",
    title: "Zero Runtime Bloat",
    description: "Every kilobyte must justify its existence. Strict TypeScript, modern Server Components, and optimized bundles to guarantee 100/100 Lighthouse performance.",
    icon: Zap,
  },
  {
    number: "02",
    title: "Spatial & Kinetic Craft",
    description: "Static pages are forgotten. Interfaces should feel alive with sensory 60 FPS WebGL physics, subtle cursor parallax, and purposeful micro-interactions.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Commercial & Business Focus",
    description: "Code is a commercial asset. We optimize for conversion velocity, frictionless user journeys, and clean maintainable architectures that scale revenue.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Direct Engineer Collaboration",
    description: "No account managers or junior delegation. You collaborate directly with the lead engineer from the initial discovery blueprint to the final production release.",
    icon: Cpu,
  },
];

export default function About() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.025);
    setRotateY(x * 0.025);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <main className="min-h-screen pt-32 bg-transparent text-slate-800">
      
      {/* Ambient background glow */}
      <div className="fixed top-1/4 left-1/4 w-[500px] h-[350px] bg-rose-200/20 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[350px] bg-amber-200/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 pb-24">
        
        {/* Top Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-sm text-xs font-semibold text-slate-700 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Gurugram, India • Independent Full-Stack & 3D Engineer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6"
          >
            Architecting software where speed,{" "}
            <span className="bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              spatial depth & commercial intent
            </span>{" "}
            converge.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal"
          >
            I'm Hitesh Joshi—a freelance full-stack engineer and WebGL specialist. I translate high-level business objectives into high-velocity digital products, combining enterprise architectural rigor with cutting-edge 3D interactive craft.
          </motion.p>
        </div>

        {/* 3D Interactive Dossier Bento Card */}
        <div 
          className="mb-24"
          style={{ perspective: 1200 }}
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="p-8 md:p-12 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient subtle card glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-500/10 via-orange-500/10 to-transparent blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Side: Summary & Tech Snapshot (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-orange-500 text-white flex items-center justify-center shadow-md shadow-rose-500/20">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Engineering Dossier</h2>
                    <p className="text-xs text-slate-500 font-mono">Next.js 16 • React 19 • Three.js WebGL • Python</p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  My engineering background is forged in high-stakes enterprise systems. While building the Policy Management architecture at <strong className="text-slate-900 font-semibold">ITC Hotels</strong>, I mastered secure data governance, zero-latency state synchronization, and scalable role architectures.
                </p>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Today, I bring that enterprise reliability to startups and forward-thinking brands. I also merge technical engineering with visual media mastery—holding hands-on expertise in motion graphics and video editing with <strong className="text-slate-900 font-semibold">Adobe After Effects & Premiere Pro</strong>, ensuring digital products don't just function—they captivate.
                </p>

                {/* Proof Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="text-xs font-mono text-slate-400">Velocity</div>
                    <div className="text-sm font-bold text-slate-900">100/100 LCP</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="text-xs font-mono text-slate-400">Experience</div>
                    <div className="text-sm font-bold text-slate-900">Enterprise & SaaS</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="text-xs font-mono text-slate-400">Client Rating</div>
                    <div className="text-sm font-bold text-slate-900">5.0 ★ Verified</div>
                  </div>
                </div>
              </div>

              {/* Right Side: Interactive Live Telemetry Terminal (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] text-slate-400">hitesh.config.ts</span>
                  </div>

                  <div className="space-y-1.5 text-slate-300">
                    <p><span className="text-rose-400">const</span> developer = &#123;</p>
                    <p className="pl-4">name: <span className="text-amber-300">"Hitesh Joshi"</span>,</p>
                    <p className="pl-4">location: <span className="text-amber-300">"Gurugram, India"</span>,</p>
                    <p className="pl-4">timezone: <span className="text-cyan-400">"IST (UTC+5:30)"</span>,</p>
                    <p className="pl-4">focus: [</p>
                    <p className="pl-8 text-emerald-400">"Interactive 3D WebGL",</p>
                    <p className="pl-8 text-emerald-400">"Next.js 16 Full-Stack",</p>
                    <p className="pl-8 text-emerald-400">"AI Autonomous SaaS"</p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">currentBuilding: <span className="text-rose-400">"Omnicode AI"</span>,</p>
                    <p className="pl-4">availability: <span className="text-emerald-400">"Q2 / Q3 Client Sprints"</span></p>
                    <p>&#125;;</p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Architecture
                    </span>
                    <span>v2.4.0</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Career Milestones Section */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm mb-3">
              <Compass className="w-3.5 h-3.5 text-rose-500" />
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Proven Execution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Engineering Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MILESTONES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-rose-50 text-slate-700 group-hover:text-rose-500 flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {item.role}
                    </h3>
                    <div className="text-xs font-semibold text-rose-500 mb-4">
                      {item.organization}
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engineering Principles Section */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-rose-500" />
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Core Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineering Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPLES.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.number}
                  className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-rose-500">
                      {principle.number}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-2xl text-center relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-1/4 w-72 h-40 bg-rose-500/20 blur-3xl rounded-full pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Have a project in mind? Let's build it right.
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you need a bespoke 3D WebGL flagship, a multi-prompt AI platform, or an enterprise Next.js application, I'm ready to collaborate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 hover:from-rose-600 hover:via-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-xl shadow-rose-500/25 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Schedule Project Brief</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="/#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all border border-white/15 backdrop-blur-md"
            >
              View Selected Works
            </Link>
          </div>
        </div>

      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}