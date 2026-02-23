"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

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
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Left Side: Contact Info (Keep your existing code here) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-5/12 flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Let's build something <span className="text-blue-600">together.</span>
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Whether you have a specific project in mind, need a freelance developer to scale your ideas, or just want to chat about the MERN stack—my inbox is always open.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</p>
              <p className="text-slate-900 font-medium">Gurugram, India</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</p>
              <a href="mailto:joshihitesh940@gmail.com" className="text-slate-900 font-medium hover:text-blue-600 transition-colors">
                joshihitesh940@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-7/12 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200"
        >
          {status === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
              <p className="text-slate-600">Thanks for reaching out. I'll get back to you shortly.</p>
              <button onClick={() => setStatus("idle")} className="mt-8 text-blue-600 font-medium hover:underline">
                Send another message
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-col flex w-full">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all bg-white" required />
                </div>
                <div className="flex-col flex w-full">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all bg-white" required />
                </div>
              </div>
              
              <div className="flex-col flex">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Freelance Project Inquiry" className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all bg-white" required />
              </div>

              <div className="flex-col flex">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell me about your project, timeline, and budget..." className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all bg-white resize-none" required></textarea>
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm">Oops! There was a problem sending your message. Please try again.</p>
              )}

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors mt-2 disabled:bg-slate-400 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}