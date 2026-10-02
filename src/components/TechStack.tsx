"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Box, 
  Cpu, 
  Sparkles, 
  Database, 
  Code2, 
  Zap, 
  Bot, 
  Workflow, 
  Terminal,
  Activity,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

interface TechNode {
  id: string;
  name: string;
  layer: "Spatial & 3D" | "Intelligence & AI" | "Core & Infrastructure";
  tagline: string;
  benchmark: string;
  icon: any;
  color: string;
  codeSnippet: string;
  capabilities: string[];
}

const TECH_NODES: TechNode[] = [
  {
    id: "threejs",
    name: "Three.js & WebGL",
    layer: "Spatial & 3D",
    tagline: "Real-Time 3D Shaders & GPU Graphics",
    benchmark: "60 FPS Hardware-Accelerated",
    icon: Box,
    color: "from-rose-500 to-orange-500",
    codeSnippet: `const renderer = new THREE.WebGLRenderer({\n  powerPreference: "high-performance",\n  antialias: true,\n  alpha: true\n});\nscene.add(new KineticPolyhedron());`,
    capabilities: ["Custom GLSL Shaders", "Physics Simulations", "PBR Frosted Glass", "Mobile-Optimized"],
  },
  {
    id: "nextjs",
    name: "Next.js 16 (App Router)",
    layer: "Core & Infrastructure",
    tagline: "Edge-Ready Enterprise Architecture",
    benchmark: "100/100 Lighthouse Performance",
    icon: Zap,
    color: "from-slate-900 to-slate-700",
    codeSnippet: `export const runtime = "edge";\nexport async function generateMetadata() {\n  return { title: "Production Grade" };\n}`,
    capabilities: ["Server Actions", "Turbopack Engine", "Static & Dynamic Hybrid", "Instant Streaming"],
  },
  {
    id: "openai",
    name: "AI Agents & OpenAI API",
    layer: "Intelligence & AI",
    tagline: "Autonomous Agentic Pipelines & Vision",
    benchmark: "< 350ms Inference Latency",
    icon: Bot,
    color: "from-emerald-500 to-teal-500",
    codeSnippet: `const agent = new AutonomousAgent({\n  model: "gpt-4o",\n  tools: [vectorSearch, codeInterpreter],\n  stream: true\n});`,
    capabilities: ["Vision Processing", "Dynamic RAG", "Structured Outputs", "Prompt Engineering"],
  },
  {
    id: "react",
    name: "React 19 & Concurrent UI",
    layer: "Spatial & 3D",
    tagline: "Next-Gen Asynchronous Component Model",
    benchmark: "0ms Main-Thread Blocking",
    icon: Cpu,
    color: "from-sky-500 to-blue-600",
    codeSnippet: `const [isPending, startTransition] = useTransition();\n// Smooth non-blocking UI states\nstartTransition(() => mutateState());`,
    capabilities: ["Concurrent Transitions", "Server Components", "Optimistic Updates", "Custom Hooks"],
  },
  {
    id: "typescript",
    name: "TypeScript (Strict)",
    layer: "Core & Infrastructure",
    tagline: "End-to-End Type Safety & Contracts",
    benchmark: "0 Runtime Type Exceptions",
    icon: Code2,
    color: "from-blue-600 to-indigo-600",
    codeSnippet: `type Result<T> = \n  | { status: "success"; data: T }\n  | { status: "error"; error: Error };`,
    capabilities: ["Strict Null Checks", "Zod Validation", "Generic Metaprogramming", "API Contracts"],
  },
  {
    id: "framer",
    name: "Framer Motion Dynamics",
    layer: "Spatial & 3D",
    tagline: "Physics-Based Springs & Micro-Gestures",
    benchmark: "Sub-pixel Spring Damping",
    icon: Sparkles,
    color: "from-pink-500 to-rose-500",
    codeSnippet: `<motion.div \n  layoutId="active-pill"\n  transition={{ type: "spring", stiffness: 400, damping: 30 }}\n/>`,
    capabilities: ["Shared Layout Animations", "Scroll Transforms", "Drag Gestures", "Exit Transitions"],
  },
  {
    id: "backend",
    name: "Node.js & MongoDB Vector",
    layer: "Core & Infrastructure",
    tagline: "Scalable Data Storage & Embeddings",
    benchmark: "High-Concurrency Throughput",
    icon: Database,
    color: "from-emerald-600 to-green-700",
    codeSnippet: `await collection.aggregate([\n  { $vectorSearch: { queryVector, path: "embedding", limit: 5 } }\n]);`,
    capabilities: ["Vector Similarity Search", "JWT Authentication", "Schema Architecture", "REST & WebSocket"],
  },
];

const LAYERS = [
  { name: "Spatial & 3D", desc: "Interactive WebGL, GLSL Shaders & Motion", color: "rose" },
  { name: "Intelligence & AI", desc: "Autonomous Agents & Vision Models", color: "emerald" },
  { name: "Core & Infrastructure", desc: "Next.js 16, TypeScript & Scalable Backend", color: "blue" },
] as const;

export default function TechStack() {
  const [activeNode, setActiveNode] = useState<TechNode>(TECH_NODES[0]);

  return (
    <section id="techstack" className="relative py-28 px-6 max-w-6xl mx-auto overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-rose-400/10 via-orange-400/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_4px_16px_-4px_rgba(244,63,94,0.12)] text-xs font-semibold text-slate-700 ring-1 ring-slate-900/5 mb-4"
        >
          <Activity className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
          <span>Interactive Architectural Engine</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-orange-500 font-bold">Live Blueprint</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
        >
          Engineering Stack &{" "}
          <span className="bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
            System Pipeline
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed"
        >
          Click or hover any system node below to inspect live architecture specifications, benchmark telemetry, and code implementation.
        </motion.p>
      </div>

      {/* Main Architectural Canvas: 2-Column Hologram & Terminal Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Engineering Pipeline Layers (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {LAYERS.map((layer) => {
            const layerNodes = TECH_NODES.filter((n) => n.layer === layer.name);
            return (
              <div 
                key={layer.name}
                className="relative p-4 sm:p-6 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_-6px_rgba(0,0,0,0.04)] ring-1 ring-slate-900/5"
              >
                {/* Layer Title with animated pulse dot */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
                    </span>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-800">
                      {layer.name}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
                    {layer.desc}
                  </span>
                </div>

                {/* Nodes inside this layer */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {layerNodes.map((node) => {
                    const isSelected = activeNode.id === node.id;
                    const Icon = node.icon;
                    return (
                      <button
                        key={node.id}
                        onClick={() => setActiveNode(node)}
                        onMouseEnter={() => setActiveNode(node)}
                        className={`group relative px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl flex items-center gap-2 sm:gap-2.5 transition-all duration-300 text-left cursor-pointer ${
                          isSelected
                            ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-[1.03]"
                            : "bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-200/60 shadow-sm"
                        }`}
                      >
                        <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                          isSelected 
                            ? "bg-white/10 text-white" 
                            : "bg-slate-100 text-slate-700"
                        }`}>
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold tracking-tight">
                          {node.name}
                        </span>

                        {isSelected && (
                          <motion.span 
                            layoutId="node-glow" 
                            className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-rose-500/30 to-orange-500/30 -z-10 blur-sm"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Live Holographic System Inspector & Code Terminal (5 Cols) */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="rounded-3xl bg-slate-900 text-slate-200 border border-slate-800 shadow-2xl p-4 sm:p-6 overflow-hidden relative">
            
            {/* Ambient terminal glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 blur-3xl pointer-events-none" />

            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-rose-400" />
                  spec_inspector.tsx
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-emerald-400 font-semibold">
                ● ACTIVE
              </span>
            </div>

            {/* Dynamic Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-5"
              >
                {/* Node Title & Layer */}
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-rose-400 mb-1">
                    {activeNode.layer}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    {activeNode.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {activeNode.tagline}
                  </p>
                </div>

                {/* Benchmark Telemetry Box */}
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <Activity className="w-4 h-4 text-orange-400" />
                    <span>Benchmark:</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-300">
                    {activeNode.benchmark}
                  </span>
                </div>

                {/* Live Code Snippet Terminal View */}
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                    // Implementation Signature
                  </div>
                  <pre className="p-3.5 rounded-2xl bg-black/40 border border-slate-800 font-mono text-[11px] text-rose-300/90 leading-relaxed overflow-x-auto">
                    <code>{activeNode.codeSnippet}</code>
                  </pre>
                </div>

                {/* Capabilities Tags */}
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                    // Architectural Capabilities
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {activeNode.capabilities.map((cap) => (
                      <div 
                        key={cap}
                        className="flex items-center gap-1.5 text-xs text-slate-300 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>

    </section>
  );
}
