"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, FolderGit2, Wrench, Workflow, User, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "/#projects", icon: FolderGit2 },
    { name: "Services", href: "/#services", icon: Wrench },
    { name: "Process", href: "/#process", icon: Workflow },
    { name: "About", href: "/about", icon: User },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          {/* Brand Logo & Availability Pill */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex items-center gap-3"
          >
            <Link
              href="/"
              className="group flex items-center gap-2.5 px-3 py-2 rounded-full bg-white/80 hover:bg-white backdrop-blur-xl border border-white/80 shadow-[0_8px_25px_-5px_rgba(0,0,0,0.06)] ring-1 ring-slate-900/5 transition-all duration-300"
            >
              {/* Monogram Icon */}
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 via-orange-400 to-amber-300 flex items-center justify-center text-white font-bold text-xs shadow-sm group-hover:scale-105 transition-transform duration-300">
                <span>HJ</span>
                <span className="absolute inset-0 rounded-full bg-rose-400/20 blur-sm group-hover:blur-md transition-all" />
              </div>

              {/* Name & Tag */}
              <div className="flex flex-col text-left pr-1">
                <span className="text-sm font-bold text-slate-900 leading-tight tracking-tight flex items-center gap-1">
                  Hitesh Joshi
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                </span>
                <span className="text-[10px] font-medium text-slate-400 tracking-wider uppercase">
                  3D & Web Creative
                </span>
              </div>
            </Link>

          </motion.div>

          {/* Desktop Floating Navigation Dock */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`pointer-events-auto hidden md:flex items-center p-1.5 rounded-full transition-all duration-300 ${scrolled
                ? "bg-white/85 backdrop-blur-2xl shadow-[0_12px_36px_-6px_rgba(0,0,0,0.08)] border border-white/80 ring-1 ring-slate-900/5"
                : "bg-white/75 backdrop-blur-xl shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05)] border border-white/60 ring-1 ring-slate-900/5"
              }`}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isHovered = hoveredNav === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredNav(link.name)}
                  className="relative px-4 py-2 text-xs font-semibold tracking-wide text-slate-600 hover:text-slate-900 transition-colors duration-200 flex items-center gap-1.5"
                >
                  {isHovered && (
                    <motion.span
                      layoutId="nav-bubble"
                      className="absolute inset-0 rounded-full bg-slate-100/90 -z-10 shadow-inner"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 transition-transform duration-200 ${isHovered ? "scale-110 text-rose-500" : "text-slate-400"}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </motion.nav>

          {/* Right Action CTA & Mobile Trigger */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex items-center gap-2.5"
          >
            {/* Desktop CTA Button */}
            <Link
              href="/#contact"
              className="hidden sm:inline-flex group relative items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide shadow-[0_8px_20px_-4px_rgba(15,23,42,0.25)] hover:shadow-[0_10px_25px_-4px_rgba(244,63,94,0.35)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-400 group-hover:rotate-12 transition-transform duration-300" />
                Let's Talk
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-11 h-11 rounded-full bg-white/85 hover:bg-white backdrop-blur-xl border border-white/80 shadow-[0_8px_25px_-5px_rgba(0,0,0,0.06)] ring-1 ring-slate-900/5 flex items-center justify-center text-slate-800 transition-all active:scale-95"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-5 h-5 text-rose-500" /> : <Menu className="w-5 h-5" />}
            </button>
          </motion.div>

        </div>
      </header>

      {/* Mobile Animated Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-slate-900/20 md:hidden flex flex-col justify-start pt-24 px-4 pb-8"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/80 shadow-2xl p-6 flex flex-col gap-6 ring-1 ring-slate-900/5"
            >
              {/* Availability Banner */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold text-slate-700">Currently taking on projects</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-rose-500 tracking-wider">Q2/Q3 2026</span>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between p-3.5 rounded-2xl hover:bg-slate-50 text-slate-800 font-semibold text-base transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-rose-50 flex items-center justify-center text-slate-600 group-hover:text-rose-500 transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span>{link.name}</span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-slate-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-semibold text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <Sparkles className="w-4 h-4 text-rose-400" />
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <p className="text-center text-xs text-slate-400">
                  Based in India • Working Worldwide
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
