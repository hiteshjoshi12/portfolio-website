"use client";

import { motion } from "framer-motion";

// Project Data Array
const projects = [
  {
    id: 1,
    title: "IndiaPlanner",
    category: "AI Travel Guide",
    description: "An intelligent itinerary generator designed to eliminate the stress of manual trip planning. It processes user preferences to instantly build logical, day-by-day travel routes.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI API"],
    liveLink: "https://indiaplanners.com/", // You can add your actual links here later
    img: "/indiaplanner.png", // Placeholder image path
    repoLink: "#",
  },
  {
    id: 2,
    title: "BeadAndBlood",
    category: "E-Commerce Platform",
    description: "A premium, high-converting digital storefront. Built with a focus on minimalist aesthetics, lightning-fast load times, and a frictionless checkout experience to maximize sales.",
    tech: ["Next.js", "Tailwind CSS", "Express", "MongoDB"],
    liveLink: "https://beadsandbloom.in/",
    img:"/beadnbloom.png",
    repoLink: "#",
  },
  {
    id: 3,
    title: "CareerDisha",
    category: "EdTech Dashboard",
    description: "An intuitive platform that transforms complex educational and career tracking data into a clean, interactive user dashboard for seamless decision-making.",
    tech: ["MERN Stack", "Redux", "RESTful APIs"],
    liveLink: "https://careerdisha.academy/",
    img: "/careerdisha.png",
    repoLink: "#",
  },
  {
    id: 4,
    title: "VogueAI Studio",
    category: "AI SaaS Platform",
    description: "An advanced mockup generation studio leveraging vision models to dynamically create high-fidelity product images. Features intelligent prompt logic, client-side image compression, and a complete Redux-managed credit dashboard.",
    tech: ["Next.js", "Redux", "Vision APIs", "Tailwind CSS"],
    liveLink: "https://vogueai-phi.vercel.app/", 
    img: "/vogueai.png", 
    repoLink: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Selected Work
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            A showcase of digital products I've built, focusing on clean code, seamless user experiences, and scalable architecture.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`flex flex-col gap-8 md:gap-12 md:items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              
              
              {/* Image Container */}
              <div className="w-full md:w-3/5 bg-slate-100 rounded-2xl border border-slate-200 shadow-sm overflow-hidden group">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]" 
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <p className="text-blue-600 font-medium mb-2">{project.category}</p>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-6">
                  <a href={project.liveLink} target="_blank" className="text-slate-900 font-medium hover:text-blue-600 transition-colors flex items-center gap-1">
                    View Live Site
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                  {/* <a href={project.repoLink} className="text-slate-500 font-medium hover:text-slate-900 transition-colors">
                    GitHub
                  </a> */}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}