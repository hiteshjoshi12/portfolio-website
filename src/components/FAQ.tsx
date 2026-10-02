"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HelpCircle, 
  Sparkles, 
  ChevronDown, 
  Clock, 
  Code2, 
  ShieldCheck, 
  Coins, 
  Layers, 
  ArrowUpRight,
  MessageSquare,
  Cpu,
  CheckCircle2
} from "lucide-react";

interface FAQItem {
  id: string;
  category: "all" | "timeline" | "tech" | "pricing" | "deliverables";
  question: string;
  answer: string;
  highlight?: string;
  icon: any;
  metric?: string;
}

const FAQS: FAQItem[] = [
  {
    id: "timeline",
    category: "timeline",
    question: "What is your typical project velocity & timeline?",
    answer: "A bespoke interactive landing page or 3D portfolio showcase typically takes 1 to 2 weeks from blueprint to live production. Comprehensive SaaS platforms, custom E-commerce hubs, or multi-modal AI applications generally run in 3 to 5 week agile execution sprints with weekly working deployments.",
    highlight: "Weekly staging deployments & asynchronous Loom progress reviews.",
    icon: Clock,
    metric: "1 - 4 Weeks Avg Delivery"
  },
  {
    id: "tech-stack",
    category: "tech",
    question: "What technologies power your web applications?",
    answer: "I specialize in Next.js 16 (App Router, Server Actions), React 19, strict TypeScript, and Tailwind CSS. For 3D immersive graphics, I develop custom GLSL shaders and real-time Three.js / WebGL canvases. On backends, I engineer scalable Node.js microservices, PostgreSQL with Prisma/Drizzle, and integrate OpenAI/Anthropic AI APIs.",
    highlight: "Production-grade, zero-bloat modern stack tailored for 100/100 Lighthouse performance.",
    icon: Code2,
    metric: "Next.js 16 • Three.js • TS"
  },
  {
    id: "design-services",
    category: "deliverables",
    question: "Do you design the interface or require existing Figma files?",
    answer: "Both! If you already have Figma designs or a brand guideline, I translate them into pixel-perfect, responsive code with fluid 60 FPS kinetic micro-interactions. If you don't have designs, I architect modern, high-contrast, minimalist UI systems from scratch inspired by industry-leading design standards.",
    highlight: "Complete UI/UX design and design-system token creation included when needed.",
    icon: Layers,
    metric: "Figma to Code • 60 FPS"
  },
  {
    id: "code-ownership",
    category: "deliverables",
    question: "Who owns the code, intellectual property, and assets?",
    answer: "You do 100%. Upon final delivery and milestone clearance, complete ownership of the Git repository, intellectual property, domain configurations, and assets transfers directly to you or your company. No vendor lock-in, no hidden recurring licensing fees.",
    highlight: "Full IP transfer, clean GitHub repository, and documented architecture handoff.",
    icon: ShieldCheck,
    metric: "100% IP & Repo Transfer"
  },
  {
    id: "pricing-structure",
    category: "pricing",
    question: "How do you structure project pricing and milestones?",
    answer: "I work with transparent, fixed-price milestone contracts or dedicated weekly sprint retainers so you know exact costs with zero surprises. Payment is typically split across structured phases (Discovery Blueprint &rarr; Working Prototype &rarr; Final Production Deployment & Handoff).",
    highlight: "Clear transparent milestones with zero hidden fees or unexpected overages.",
    icon: Coins,
    metric: "Fixed-Price or Sprint Retainer"
  },
  {
    id: "ongoing-support",
    category: "timeline",
    question: "What happens after the website or web application launches?",
    answer: "Every engagement includes a complimentary 30-day post-launch warranty for bug fixes, performance monitoring, and edge-case fine-tuning. For ongoing product iteration, new AI feature integration, or dedicated DevOps management, I offer flexible monthly maintenance retainers.",
    highlight: "Complimentary 30-day warranty plus available monthly continuous iteration retainers.",
    icon: Cpu,
    metric: "30-Day Launch Warranty"
  }
];

const CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "timeline", label: "Timeline & Velocity" },
  { id: "tech", label: "Tech Stack & 3D" },
  { id: "deliverables", label: "Design & Ownership" },
  { id: "pricing", label: "Pricing & Retainers" }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openId, setOpenId] = useState<string | null>("timeline");

  const filteredFaqs = activeCategory === "all" 
    ? FAQS 
    : FAQS.filter(f => f.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-28 px-6 relative z-10 border-t border-slate-200/50 bg-gradient-to-b from-transparent via-slate-100/30 to-transparent">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-rose-200/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
              Clarity & Transparency
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">Questions</span>
          </h2>

          <p className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Everything you need to know about engineering velocity, code ownership, 3D WebGL capabilities, and transparent engagement terms.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm max-w-full">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all duration-300 ${
                    isActive 
                      ? "text-white shadow-sm" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="faq-active-cat"
                      className="absolute inset-0 bg-slate-900 rounded-xl"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dual Column Layout: Left Fast-Dossier + Right 3D FAQ Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Consultation Card (3D floating style) */}
          <div className="lg:col-span-4 flex flex-col gap-5 sticky top-28">
            <div className="p-7 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl group-hover:bg-rose-500/30 transition-all duration-500 pointer-events-none" />
              
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mb-5 text-rose-400">
                <MessageSquare className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                Have a unique project architecture?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Skip the generic questions. Schedule a 20-minute technical discovery call or message me directly to discuss custom technical requirements, NDA, or budget fit.
              </p>

              <div className="space-y-3 mb-6 border-t border-slate-800 pt-5">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct founder & engineer communication</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free initial system design session</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Guaranteed response within 12 hours</span>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl font-semibold text-sm bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:from-rose-600 hover:to-orange-600 shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30 transition-all duration-200 group/btn"
              >
                <span>Initiate Project Inquiry</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Quick stats mini-pill */}
            <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-700">Client Satisfaction Rate</span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                100% On-Time
              </span>
            </div>
          </div>

          {/* Right Column: Interactive 3D FAQ Accordion Cards */}
          <div className="lg:col-span-8 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openId === faq.id;
                  const Icon = faq.icon;

                  return (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "bg-white border-rose-300 shadow-xl shadow-rose-500/5 ring-1 ring-rose-200"
                          : "bg-white/90 backdrop-blur-md border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md"
                      }`}
                    >
                      {/* Accordion Trigger Header */}
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors"
                      >
                        <div className="flex items-center gap-4 pr-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            isOpen 
                              ? "bg-rose-500 text-white shadow-md shadow-rose-500/20" 
                              : "bg-slate-100 text-slate-600 group-hover:bg-rose-50 group-hover:text-rose-500"
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>

                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-rose-500">
                                0{index + 1}
                              </span>
                              {faq.metric && (
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                                  {faq.metric}
                                </span>
                              )}
                            </div>
                            <h3 className={`text-base md:text-lg font-bold transition-colors ${
                              isOpen ? "text-slate-900" : "text-slate-800 group-hover:text-slate-900"
                            }`}>
                              {faq.question}
                            </h3>
                          </div>
                        </div>

                        {/* Chevron Indicator */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                          isOpen 
                            ? "bg-rose-500 text-white border-rose-500 rotate-180" 
                            : "bg-slate-50 text-slate-400 border-slate-200 group-hover:text-slate-700"
                        }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {/* Expandable Answer Content */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                                {faq.answer}
                              </p>

                              {faq.highlight && (
                                <div className="p-3.5 rounded-xl bg-gradient-to-r from-rose-50/70 via-orange-50/50 to-amber-50/70 border border-rose-100 text-xs md:text-sm text-slate-700 font-medium flex items-center gap-2.5">
                                  <Sparkles className="w-4 h-4 text-rose-500 shrink-0" />
                                  <span>{faq.highlight}</span>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}