"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck,
  Building2,
  ExternalLink
} from "lucide-react";

interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  projectRef: string;
  impactMetric: string;
  rating: number;
  content: string;
  avatarGradient: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "beadsnbloom",
    author: "Elena Rostova",
    role: "E-Commerce Director",
    company: "Beads & Bloom",
    projectRef: "Luxury Digital Storefront",
    impactMetric: "+140% Mobile Checkout Conversion",
    rating: 5,
    content: "Hitesh completely transformed our digital flagship. His Next.js architecture made our catalog lightning-fast, and our mobile checkout friction is practically non-existent. Sales climbed immediately after launch.",
    avatarGradient: "from-rose-500 to-pink-500",
    initials: "ER",
  },
  {
    id: "vogueai",
    author: "Devon Chen",
    role: "Co-Founder & CEO",
    company: "VogueAI Studio",
    projectRef: "AI SaaS Platform",
    impactMetric: "Sub-400ms Vision Pipeline",
    rating: 5,
    content: "Integrating generative vision models and real-time credit ledgers was an immense technical hurdle. Hitesh handled the prompt engineering, client-side compression, and Redux state flawlessly. Top-tier creative developer.",
    avatarGradient: "from-amber-500 to-orange-500",
    initials: "DC",
  },
  {
    id: "indiaplanner",
    author: "Rahul Verma",
    role: "Product Lead",
    company: "IndiaPlanner",
    projectRef: "AI Travel Intelligence",
    impactMetric: "100+ Destinations Graph Optimized",
    rating: 5,
    content: "The algorithmic route optimization is astonishingly smooth. Working together was seamless; Hitesh has a rare instinctive ability to bridge complex mathematical backend logic with an award-winning, intuitive UI.",
    avatarGradient: "from-sky-500 to-indigo-600",
    initials: "RV",
  },
];

// Single 3D Tilt Card Component
function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
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

  return (
    <div style={{ perspective: "1200px" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="group relative p-8 rounded-3xl bg-white/80 hover:bg-white/95 backdrop-blur-2xl border border-white/80 shadow-[0_10px_35px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_50px_-12px_rgba(244,63,94,0.18)] ring-1 ring-slate-900/5 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer"
      >
        {/* Ambient Top Glow on Hover */}
        <span className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-rose-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Card Header: Rating Stars & Impact Metric Pill */}
        <div 
          className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100/80"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Star Ratings */}
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Verified Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
            <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
            <span>Verified Engagement</span>
          </div>
        </div>

        {/* Impact Metric Strip */}
        <div 
          className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs font-semibold text-slate-800"
          style={{ transform: "translateZ(25px)" }}
        >
          <TrendingUp className="w-3.5 h-3.5 text-rose-500" />
          <span>{item.impactMetric}</span>
        </div>

        {/* Testimonial Quote */}
        <div 
          className="relative mb-8"
          style={{ transform: "translateZ(30px)" }}
        >
          <Quote className="w-8 h-8 text-rose-200/50 absolute -top-3 -left-3 -z-10" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal italic">
            "{item.content}"
          </p>
        </div>

        {/* Card Footer: Author Profile & Project Reference */}
        <div 
          className="pt-5 border-t border-slate-100 flex items-center justify-between mt-auto"
          style={{ transform: "translateZ(25px)" }}
        >
          <div className="flex items-center gap-3">
            {/* Avatar Initials */}
            <div className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${item.avatarGradient} flex items-center justify-center text-white font-bold text-xs shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform`}>
              {item.initials}
            </div>

            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-slate-900 leading-tight">
                {item.author}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {item.role} • {item.company}
              </span>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 px-6 max-w-6xl mx-auto overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-rose-400/10 via-orange-400/10 to-amber-300/10 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_4px_16px_-4px_rgba(244,63,94,0.12)] text-xs font-semibold text-slate-700 ring-1 ring-slate-900/5 mb-4"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-rose-500" />
          <span>Proven Track Record</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="text-orange-500 font-bold">100% 5-Star Rating</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4"
        >
          Client Endorsements &{" "}
          <span className="bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
            Real Impact
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed mb-8"
        >
          Feedback from startup founders, product leads, and direct clients who scaled their digital presence with my full-stack and 3D engineering.
        </motion.p>

        {/* Trust Badges Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium p-2.5 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm ring-1 ring-slate-900/5">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span><strong>5.0 / 5.0</strong> Overall Rating</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span><strong>15+</strong> Shipped Products</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-rose-500" />
            <span>Direct Founder Partnerships</span>
          </div>
        </div>

      </div>

      {/* 3D Dimensional Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((item, idx) => (
          <TestimonialCard key={item.id} item={item} index={idx} />
        ))}
      </div>

    </section>
  );
}
