"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Sparkles, 
  FolderGit2, 
  Wrench, 
  Workflow, 
  User, 
  Menu, 
  X,
  Send
} from "lucide-react";
import { scrollToSection } from "@/utils/navigation";

interface NavItem {
  name: string;
  sectionId?: string;
  href?: string;
  icon: any;
}

export default function Header() {
  const pathname = usePathname();
  const isAboutPage = pathname?.endsWith("/about") || pathname?.endsWith("/about/");
  const isHomePage = !isAboutPage;

  const [isOpen, setIsOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrolled, setScrolled] = useState(false);

  // Active section scroll tracking on homepage
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = ["hero", "techstack", "projects", "services", "process", "faq", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId) || document.querySelector(`[data-section="${sectionId}"]`);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.getBoundingClientRect().height;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Check URL params for smooth scroll on landing (e.g. /?section=projects)
  useEffect(() => {
    if (typeof window === "undefined" || !isHomePage) return;
    const params = new URLSearchParams(window.location.search);
    const target = params.get("section");
    if (target) {
      setTimeout(() => {
        scrollToSection(target);
        window.history.replaceState(null, "", window.location.pathname);
      }, 300);
    }
  }, [isHomePage]);

  const navLinks: NavItem[] = [
    { name: "Projects", sectionId: "projects", icon: FolderGit2 },
    { name: "Services", sectionId: "services", icon: Wrench },
    { name: "Process", sectionId: "process", icon: Workflow },
    { name: "About", href: "/about", icon: User },
  ];

  const handleNavClick = (link: NavItem) => {
    setIsOpen(false);
    if (link.sectionId) {
      scrollToSection(link.sectionId);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none py-3 sm:py-4 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          {/* Brand Logo & Monogram Pill */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex items-center gap-2 sm:gap-3"
          >
            <Link
              href="/"
              onClick={() => {
                if (isHomePage) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="group flex items-center gap-2.5 px-3 py-1.5 sm:py-2 rounded-full bg-white/85 hover:bg-white backdrop-blur-xl border border-white/80 shadow-[0_8px_25px_-5px_rgba(0,0,0,0.06)] ring-1 ring-slate-900/5 transition-all duration-300"
            >
              {/* Monogram Icon */}
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-rose-500 via-orange-400 to-amber-300 flex items-center justify-center text-white font-bold text-xs shadow-sm group-hover:scale-105 transition-transform duration-300">
                <span>HJ</span>
                <span className="absolute inset-0 rounded-full bg-rose-400/20 blur-sm group-hover:blur-md transition-all" />
              </div>

              {/* Name & Subtitle */}
              <div className="flex flex-col text-left pr-1">
                <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight tracking-tight flex items-center gap-1">
                  Hitesh Joshi
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                </span>
                <span className="hidden xs:inline-block text-[9px] sm:text-[10px] font-medium text-slate-400 tracking-wider uppercase">
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
            className={`pointer-events-auto hidden md:flex items-center p-1.5 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-white/85 backdrop-blur-2xl shadow-[0_12px_36px_-6px_rgba(0,0,0,0.08)] border border-white/80 ring-1 ring-slate-900/5"
                : "bg-white/75 backdrop-blur-xl shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05)] border border-white/60 ring-1 ring-slate-900/5"
            }`}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isHovered = hoveredNav === link.name;
              const isActive = (isHomePage && link.sectionId === activeSection) || (!isHomePage && pathname === link.href);

              return (
                <div key={link.name} className="relative">
                  {link.href ? (
                    <Link
                      href={link.href}
                      onMouseEnter={() => setHoveredNav(link.name)}
                      className={`relative px-4 py-2 text-xs font-semibold tracking-wide transition-colors duration-200 flex items-center gap-1.5 ${
                        isActive ? "text-slate-900 font-bold" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {(isHovered || isActive) && (
                        <motion.span
                          layoutId="nav-dock-pill"
                          className="absolute inset-0 rounded-full bg-slate-100/90 -z-10 shadow-inner"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        />
                      )}
                      <Icon className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isActive ? "text-rose-500 scale-105" : isHovered ? "scale-110 text-rose-500" : "text-slate-400"
                      }`} />
                      <span>{link.name}</span>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleNavClick(link)}
                      onMouseEnter={() => setHoveredNav(link.name)}
                      className={`relative px-4 py-2 text-xs font-semibold tracking-wide transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
                        isActive ? "text-slate-900 font-bold" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {(isHovered || isActive) && (
                        <motion.span
                          layoutId="nav-dock-pill"
                          className="absolute inset-0 rounded-full bg-slate-100/90 -z-10 shadow-inner"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                        />
                      )}
                      <Icon className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isActive ? "text-rose-500 scale-105" : isHovered ? "scale-110 text-rose-500" : "text-slate-400"
                      }`} />
                      <span>{link.name}</span>
                    </button>
                  )}
                </div>
              );
            })}
          </motion.nav>

          {/* Right Action CTA & Mobile Trigger */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex items-center gap-2"
          >
            {/* Desktop CTA Button */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="hidden sm:inline-flex group relative items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide shadow-[0_8px_20px_-4px_rgba(15,23,42,0.25)] hover:shadow-[0_10px_25px_-4px_rgba(244,63,94,0.35)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-rose-400 group-hover:rotate-12 transition-transform duration-300" />
                Let's Talk
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Mobile Hamburger Button (44px min touch target) */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white backdrop-blur-xl border border-white/80 shadow-[0_8px_25px_-5px_rgba(0,0,0,0.06)] ring-1 ring-slate-900/5 flex items-center justify-center text-slate-800 transition-all active:scale-95 cursor-pointer"
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-slate-900/25 md:hidden flex flex-col justify-start pt-20 sm:pt-24 px-4 pb-8"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm mx-auto bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/90 shadow-2xl p-6 flex flex-col gap-5 ring-1 ring-slate-900/5"
            >
              {/* Availability Banner */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold text-slate-700">Accepting Q2/Q3 Sprints</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-rose-500 tracking-wider">AVAILABLE</span>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = (isHomePage && link.sectionId === activeSection) || (!isHomePage && pathname === link.href);

                  return link.href ? (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between p-3 rounded-2xl transition-colors ${
                        isActive ? "bg-rose-50/70 text-rose-600 font-bold" : "hover:bg-slate-50 text-slate-800 font-semibold"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isActive ? "bg-rose-500 text-white" : "bg-slate-100 text-slate-600"
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm">{link.name}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  ) : (
                    <button
                      key={link.name}
                      type="button"
                      onClick={() => handleNavClick(link)}
                      className={`w-full flex items-center justify-between p-3 rounded-2xl transition-colors cursor-pointer text-left ${
                        isActive ? "bg-rose-50/70 text-rose-600 font-bold" : "hover:bg-slate-50 text-slate-800 font-semibold"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          isActive ? "bg-rose-500 text-white" : "bg-slate-100 text-slate-600"
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm">{link.name}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400" />
                    </button>
                  );
                })}
              </nav>

              {/* Action Button */}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    scrollToSection("contact");
                  }}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 text-white font-bold text-sm shadow-lg shadow-rose-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Start a Project Brief</span>
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  Gurugram, India • Working Globally
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
