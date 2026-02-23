"use client";

import { motion, Transition } from "framer-motion"; 
import Link from "next/link";

export default function About() {
  const transition: Transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };

  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Hi, I'm Hitesh. <br className="hidden md:block" />
            <span className="text-blue-600">I engineer digital growth.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Based in Gurugram, I am a freelance Full-Stack Developer specializing in the MERN stack and Next.js. I bridge the gap between complex technical architecture and premium user experiences.
          </p>
        </motion.div>

        {/* Image / Visual Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.1 }}
          className="w-full aspect-[21/9] bg-slate-50 rounded-3xl border border-slate-200 mb-20 flex items-center justify-center overflow-hidden"
        >
           <p className="text-slate-400 font-medium">
             [ Insert a clean, well-lit photo of your workspace or yourself here ]
           </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Column: The Journey */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transition, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">The Journey</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                My approach to development is rooted in solving real business problems. This foundation was solidified during my time at ITC Hotels, where I built an enterprise-level Policy Management System utilizing Java, SharePoint, and React. 
              </p>
              <p>
                That experience taught me how to handle secure data, manage complex user roles, and write code that scales across an entire organization.
              </p>
              <p>
                Today, I bring that enterprise-grade logic to startups, agencies, and independent brands. Whether it is an AI-driven platform or a lightning-fast e-commerce site, I focus on building products that perform.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Beyond the Code */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transition, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Beyond the Stack</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                A great digital product is more than just a frontend and a database. I leverage Python for data manipulation and backend automation scripting, allowing me to streamline complex workflows.
              </p>
              <p>
                I also understand the visual demands of the modern web. With hands-on experience in video editing using Adobe After Effects and Premiere Pro, I know how to optimize rich media for web performance and craft digital experiences that engage users visually.
              </p>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Currently Building</p>
                <p className="text-blue-600 font-medium">
                  Omnicode AI — A prompt-driven, multi-language code generating SaaS platform.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.4 }}
          className="mt-24 pt-12 border-t border-slate-200 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready to start your project?</h3>
          <Link 
            href="/#contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors"
          >
            Let's get to work
          </Link>
        </motion.div>

      </div>
    </main>
  );
}