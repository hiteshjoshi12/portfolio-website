"use client";

import { 
  ArrowUp, 
  Sparkles, 
  Mail, 
  ArrowUpRight,
  Heart
} from "lucide-react";

// Clean brand SVGs since Lucide does not export Github/Linkedin/Instagram
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 pt-20 pb-12 px-6 border-t border-slate-200/80 bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden">
      
      {/* 3D Horizon Grid Background Effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none opacity-30 -z-10 overflow-hidden"
        style={{ perspective: 600 }}
      >
        <div 
          className="w-full h-[200%] absolute -bottom-10 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)]"
          style={{ transform: "rotateX(65deg) translateY(-20%)" }}
        />
      </div>

      {/* Ambient Gradient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-48 bg-rose-200/30 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-1/4 w-96 h-48 bg-amber-200/30 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Top Pre-Footer Marquee / Big Typography Callout */}
        <div className="relative mb-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-2xl overflow-hidden border border-slate-800">
          
          {/* Subtle Ambient Light Orb inside Card */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-rose-500/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-rose-300 text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                <span>Next Available Sprint: Q2 / Q3 2026</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ready to turn your vision into an <span className="bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">interactive reality?</span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 hover:from-rose-600 hover:via-orange-600 hover:to-amber-600 text-white font-bold text-sm tracking-wide shadow-xl shadow-rose-500/25 transition-all duration-300 flex items-center justify-center gap-2.5 group"
              >
                <span>Book Engineering Sprint</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="mailto:joshihitesh940@gmail.com"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <Mail className="w-4 h-4 text-slate-300" />
                <span>Email Directly</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-200">
          
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="inline-block text-2xl font-extrabold tracking-tight text-slate-900 group">
              Hitesh<span className="text-rose-500 group-hover:translate-x-0.5 inline-block transition-transform">.</span>
            </a>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Independent Full-Stack & 3D WebGL Software Engineer specializing in modern Next.js 16 architectures, kinetic UI systems, and autonomous AI integrations.
            </p>

            {/* Live Stack Specs Pill */}
            <div className="p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm max-w-sm space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500 font-semibold">Engineered With</span>
                <span className="font-mono font-bold text-slate-800">Next.js 16 + Three.js</span>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Gurugram (28.45° N, 77.02° E) • 100/100 LCP</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Matrix (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 mb-3">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li>
                <a href="#projects" className="hover:text-rose-500 transition-colors flex items-center justify-between group">
                  <span>Selected Works</span>
                  <span className="text-[11px] font-mono text-slate-400 group-hover:text-rose-500">04</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-500 transition-colors flex items-center justify-between group">
                  <span>Core Services</span>
                  <span className="text-[11px] font-mono text-slate-400 group-hover:text-rose-500">03</span>
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-rose-500 transition-colors flex items-center justify-between group">
                  <span>Sprint Process</span>
                  <span className="text-[11px] font-mono text-slate-400 group-hover:text-rose-500">4-Wks</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-rose-500 transition-colors flex items-center justify-between group">
                  <span>Client Proof</span>
                  <span className="text-[11px] font-mono text-slate-400 group-hover:text-rose-500">5.0 ★</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-rose-500 transition-colors flex items-center justify-between group">
                  <span>Knowledge FAQ</span>
                  <span className="text-[11px] font-mono text-slate-400 group-hover:text-rose-500">Q&A</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Back to Top (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900 mb-3">
                Direct Channels
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="https://github.com/hiteshjoshi12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-2.5 text-xs font-semibold text-slate-700 shadow-sm group"
                >
                  <GithubIcon className="w-4 h-4 text-slate-900 group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/hitesh-joshi-0b868b227/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-2.5 text-xs font-semibold text-slate-700 shadow-sm group"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077b5] group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com/codewithitesh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-2.5 text-xs font-semibold text-slate-700 shadow-sm group"
                >
                  <InstagramIcon className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
                </a>

                <a
                  href="mailto:joshihitesh940@gmail.com"
                  className="p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-2.5 text-xs font-semibold text-slate-700 shadow-sm group"
                >
                  <Mail className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Back to Top 3D Interactive Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="w-full p-3.5 rounded-2xl bg-white/90 hover:bg-slate-900 hover:text-white border border-slate-200/80 text-slate-700 transition-all duration-300 flex items-center justify-between text-xs font-bold shadow-sm group cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <ArrowUp className="w-4 h-4 text-rose-500 group-hover:text-white group-hover:-translate-y-0.5 transition-transform" />
                  <span>Return to Summit</span>
                </span>
                <span className="font-mono text-[11px] text-slate-400 group-hover:text-slate-300">TOP ↑</span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Micro-Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Hitesh Joshi. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>High-Velocity TypeScript</span>
            <span>•</span>
            <span>Zero Runtime Bloat</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-700 font-semibold">
              Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
