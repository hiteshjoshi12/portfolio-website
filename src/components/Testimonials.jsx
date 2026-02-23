"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    content: "Hitesh completely transformed our digital storefront. The Next.js architecture made our site lightning-fast, and our checkout friction is practically gone.",
    author: "E-commerce Director",
    project: "BeadAndBlood",
  },
  {
    id: 2,
    content: "Integrating vision models and a credit dashboard was a complex task, but the Redux state and AI prompt logic were handled flawlessly. Highly recommended.",
    author: "SaaS Founder",
    project: "VogueAI Studio",
  },
  {
    id: 3,
    content: "The AI itinerary generation is incredibly smooth. Working together was seamless; there is a clear understanding of how to bridge complex backend logic with a clean UI.",
    author: "Product Lead",
    project: "IndiaPlanner",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Client Feedback
          </h2>
          <p className="text-lg text-slate-500">
            What founders and teams say about the products we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div className="text-blue-200 mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-8 italic">
                "{review.content}"
              </p>
              
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <p className="font-bold text-slate-900">{review.author}</p>
                <p className="text-sm font-medium text-blue-600">{review.project}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}