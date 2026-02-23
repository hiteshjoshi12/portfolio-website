"use client";

import { motion } from "framer-motion";

// The core technologies you use.
const technologies = [
  "Next.js", 
  "TypeScript", 
  "React", 
  "Node.js", 
  "MongoDB", 
  "Tailwind CSS", 
  "Redux", 
  "Python", 
  "OpenAI API", 
  "Express", 
  "Adobe After Effects", 
  "Premiere Pro"
];

// We duplicate the array so the marquee can loop seamlessly
const duplicatedTech = [...technologies, ...technologies];

export default function TechStack() {
  return (
    <section className="py-12 bg-white overflow-hidden border-y border-slate-100 flex flex-col items-center justify-center">
      
      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8 text-center">
        Powered by modern technologies
      </p>

      {/* The scrolling container */}
      <div className="relative w-full flex items-center">
        
        {/* Left and Right Fade Gradients for a smooth visual effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* The Animated Track */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25, // Adjust this to make it scroll faster or slower
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap gap-4 md:gap-8 w-max px-4"
        >
          {duplicatedTech.map((tech, index) => (
            <div 
              key={index}
              className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-medium shadow-sm flex items-center justify-center"
            >
              {tech}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}