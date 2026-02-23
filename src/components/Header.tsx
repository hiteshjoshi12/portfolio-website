"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

 const navLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/about" }, // Changed from "#about" to "/about"
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full bg-slate-50/80 backdrop-blur-md border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
          Hitesh<span className="text-blue-600">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-slate-900 transition-colors">
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-colors"
          >
            Let's Talk
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-50 border-b border-slate-200 px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-slate-600 font-medium hover:text-slate-900"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="bg-slate-900 text-white px-5 py-2 rounded-full text-center hover:bg-slate-800 transition-colors mt-2"
          >
            Let's Talk
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}