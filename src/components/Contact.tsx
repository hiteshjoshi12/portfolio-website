"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Terminal, 
  MessageSquare,
  Zap,
  Globe,
  CheckCircle2,
  Calendar
} from "lucide-react";

const PROJECT_TYPES = [
  "Interactive 3D / WebGL",
  "AI & Agentic SaaS",
  "Next.js 16 Web App",
  "High-Converting Landing",
  "Speed & Code Audit"
];

const BUDGET_RANGES = [
  "< $2,000",
  "$2,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+"
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("Interactive 3D / WebGL");
  const [selectedBudget, setSelectedBudget] = useState<string>("$2,000 - $5,000");
  const [currentTime, setCurrentTime] = useState<string>("");

  // 3D Parallax Tilt state for right console
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.02);
    setRotateY(x * 0.02);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Local India Time (IST)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });
      setCurrentTime(istTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("joshihitesh940@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Inject chosen tags into form submission
    formData.append("project_type", selectedType);
    formData.append("budget_tier", selectedBudget);

    try {
      const response = await fetch("https://formspree.io/f/xqedgqew", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" data-section="contact" className="py-28 px-6 relative z-10 border-t border-slate-200/50 bg-gradient-to-b from-transparent via-slate-100/40 to-white overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-rose-200/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">
              Start an Engagement
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Let's Engineer Your Next <span className="bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">Masterpiece</span>
          </h2>

          <p className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Have an ambitious 3D web experience, AI product, or Next.js flagship to build? Fill out the project brief below or reach out directly for a direct response.
          </p>
        </div>

        {/* 2-Column 3D Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: 3D Holographic Status Dossier */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Top Status Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-xl relative overflow-hidden group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>2 Client Slots Available</span>
                </div>
                <span className="text-xs font-mono text-slate-400 font-medium">Q2 / Q3 2026</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Direct Engineering Collaboration
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Work directly with the engineer building your product—no account managers, no junior handoffs, and no bloated agency overhead.
              </p>

              {/* Verified Commitments */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 text-xs md:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Sub-12 hour response time guaranteed</span>
                </div>
                <div className="flex items-center gap-3 text-xs md:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Complimentary 20-min architectural roadmap</span>
                </div>
                <div className="flex items-center gap-3 text-xs md:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Milestone-based billing with full IP handover</span>
                </div>
              </div>
            </div>

            {/* Middle Quick Contact Dock */}
            <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-md space-y-4">
              
              {/* Email Copier */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">Direct Email</div>
                    <div className="text-xs md:text-sm font-semibold text-slate-800 truncate">
                      joshihitesh940@gmail.com
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 transition-colors flex items-center gap-1.5 shrink-0 shadow-sm"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Live Clock */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold">Location</div>
                    <div className="text-xs font-bold text-slate-800">Gurugram, India</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold">Local Time (IST)</div>
                    <div className="text-xs font-mono font-bold text-slate-800">
                      {currentTime || "UTC+5:30"}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Social Proof Strip */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <div>
                  <div className="text-xs font-bold text-white">Open to Global Remote Contracts</div>
                  <div className="text-[11px] text-slate-400">US, Europe & Asia-Pacific Timezone Overlap</div>
                </div>
              </div>
              <Globe className="w-5 h-5 text-slate-400" />
            </div>

          </div>

          {/* Right Column: 3D Project Inquiry Form Studio */}
          <div 
            className="lg:col-span-7"
            style={{ perspective: 1200 }}
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle top ambient glow */}
              <div className="absolute top-0 right-1/4 w-72 h-32 bg-gradient-to-r from-rose-500/10 via-orange-500/10 to-transparent blur-3xl pointer-events-none" />

              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
                    Inquiry Transmitted!
                  </h3>
                  <p className="text-slate-600 text-base max-w-md mx-auto mb-6">
                    Thank you for reaching out. I have received your project details and will review your technical specifications within 12 hours.
                  </p>
                  
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 mb-8 max-w-sm w-full text-left">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Receipt Reference</div>
                    <div className="font-bold text-slate-900">#PRJ-{Math.floor(100000 + Math.random() * 900000)}</div>
                    <div className="text-slate-500 mt-1">Direct alert dispatched to joshihitesh940@gmail.com</div>
                  </div>

                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  
                  {/* Form Title & Telemetry Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        Interactive Project Brief
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Select your requirements or type customized details below.
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-mono">
                      <Terminal className="w-3 h-3 text-rose-500" />
                      <span>ENCRYPTED POST</span>
                    </div>
                  </div>

                  {/* 1. Project Scope Chips */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2.5">
                      01 / Project Scope & Architecture
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((type) => {
                        const isSelected = selectedType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setSelectedType(type)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                              isSelected
                                ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                                : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Budget Tier Chips */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2.5">
                      02 / Estimated Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_RANGES.map((budget) => {
                        const isSelected = selectedBudget === budget;
                        return (
                          <button
                            key={budget}
                            type="button"
                            onClick={() => setSelectedBudget(budget)}
                            className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all duration-200 text-center border ${
                              isSelected
                                ? "bg-rose-500 text-white border-rose-500 shadow-sm shadow-rose-500/20"
                                : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                            }`}
                          >
                            {budget}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Client Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1.5">
                        03 / Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g. Alex Morgan"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-rose-500/40 focus:border-rose-500 transition-all bg-slate-50/70 text-slate-900 placeholder-slate-400 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1.5">
                        04 / Business Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="alex@company.com"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-rose-500/40 focus:border-rose-500 transition-all bg-slate-50/70 text-slate-900 placeholder-slate-400 text-sm"
                      />
                    </div>
                  </div>

                  {/* 4. Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1.5">
                      05 / Subject / Project Headline
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      defaultValue={`${selectedType} Project Inquiry`}
                      key={selectedType}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-rose-500/40 focus:border-rose-500 transition-all bg-slate-50/70 text-slate-900 placeholder-slate-400 text-sm"
                    />
                  </div>

                  {/* 5. Project Details Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-1.5">
                      06 / Scope Details & Objectives
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Share your goals, target launch timeline, key features, or links to existing Figma/specs..."
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-rose-500/40 focus:border-rose-500 transition-all bg-slate-50/70 text-slate-900 placeholder-slate-400 text-sm resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium">
                      Failed to transmit message through the gateway. Please try again or email me directly at joshihitesh940@gmail.com.
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 hover:from-rose-600 hover:via-orange-600 hover:to-amber-600 shadow-xl shadow-rose-500/25 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="text-center">
                    <p className="text-[11px] text-slate-400">
                      ⚡ 100% confidential. No spam, NDA available upon request.
                    </p>
                  </div>

                </form>
              )}

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}