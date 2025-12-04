import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Monitor, BarChart, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      client: "GALANETWORK",
      title: "Fan Community",
      desc: "Global platform connecting fans. Automated content & engagement tools.",
      tags: ["Community", "Social"],
      icon: <Globe size={28} />
    },
    {
      id: 2,
      client: "CURVIX",
      title: "Visual Identity",
      desc: "Complete brand overhaul and minimal digital product UI.",
      tags: ["Branding", "UI/UX"],
      icon: <Layout size={28} />
    },
    {
      id: 3,
      client: "ADCLUSIVE",
      title: "SaaS Dashboard",
      desc: "Complex main web app designed for consistency and ease of use.",
      tags: ["Product", "SaaS"],
      icon: <Monitor size={28} />
    }
  ];

  const mckinseySkills = [
    "Data Visualization",
    "Executive Comms",
    "Pitch Decks",
    "Brand Systems"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      // Standardized Max Width and Alignment
      className="w-full max-w-7xl mx-auto"
    >
        {/* Header Section - Standardized Margin Bottom (mb-20) */}
        <div className="mb-20">
          <h1 className="text-h2 font-display font-bold mb-8 tracking-h2 leading-h2 text-light-text">Client stories</h1>
          <div className="relative pl-6 border-l-2 border-teal-accent/50">
              <p className="text-h6 text-gray-400 font-light leading-p tracking-h6 max-w-3xl">
              Below, you’ll find some of the projects I’ve worked on. <br className="hidden md:block" />
              Each one is a story of how we solved a problem together.
              </p>
          </div>
        </div>

        {/* Main Grid Layout - Gap 8 (32px) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Projects List */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                // Standardized Surface
                className="group relative p-8 md:p-10 rounded-3xl bg-dark-sec/20 border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-32 bg-white/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                  
                  {/* Icon Block - Neutral */}
                  <div className="shrink-0">
                     <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-inner">
                        {project.icon}
                     </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col flex-1 gap-4">
                     <div className="flex items-start justify-between gap-4">
                        <div>
                             <h3 className="text-2xl font-bold text-light-text group-hover:text-white transition-colors mb-2">{project.title}</h3>
                             <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">{project.client}</span>
                                <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-700"></span>
                                <div className="flex gap-2">
                                  {project.tags.map(tag => (
                                      <span key={tag} className="text-[10px] text-gray-500 border border-white/5 px-2 py-0.5 rounded hover:text-white hover:border-white/20 transition-colors cursor-default">
                                      {tag}
                                      </span>
                                  ))}
                                </div>
                             </div>
                        </div>
                        {/* Action Icon */}
                        <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-gray-500 group-hover:border-white/20 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0">
                            <ArrowUpRight size={20} />
                        </div>
                     </div>

                     <p className="text-gray-400 leading-relaxed text-base max-w-xl">
                        {project.desc}
                     </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: McKinsey Feature */}
          <div className="lg:col-span-4 lg:sticky lg:top-8">
              <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  // Strict Neutral Surface - Matching Left Column
                  className="w-full p-8 md:p-10 rounded-3xl bg-dark-sec/20 border border-white/5 hover:border-white/10 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between gap-8 h-full min-h-[500px]"
              >
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

                  {/* Header */}
                  <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white mb-6">
                          <BarChart size={28} strokeWidth={2} />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-h4 font-bold text-light-text leading-[1.1]">McKinsey <br/> & Company</h3>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">Graphic Designer</p>
                      </div>
                  </div>

                  {/* Expanded Content for Height Balance */}
                  <div className="relative z-10 space-y-8">
                      {/* Stats */}
                      <div className="py-6 border-y border-white/5">
                          <div className="flex items-baseline gap-1">
                            <span className="text-5xl font-display font-bold text-white tracking-tighter">10k</span>
                            <span className="text-2xl font-bold text-white">+</span>
                          </div>
                          <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mt-2 block">Assets Created</span>
                      </div>

                      {/* Core Focus - Adds height naturally */}
                      <div>
                          <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-4 block">Core Focus</span>
                          <div className="flex flex-wrap gap-2">
                              {mckinseySkills.map((skill) => (
                                  <span key={skill} className="text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                                      {skill}
                                  </span>
                              ))}
                          </div>
                      </div>
                  </div>

                  {/* Footer / CTA */}
                  <div className="relative z-10 mt-auto pt-6">
                       <p className="text-sm text-gray-400 leading-relaxed mb-6">
                          Visual Communication Specialist <br /> <span className="text-gray-600">2021 — 2024</span>
                       </p>
                       
                       <button className="w-full py-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white hover:text-dark-main hover:border-white transition-all font-bold text-sm flex items-center justify-center gap-2 group/btn">
                          View Case Study <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform"/>
                       </button>
                  </div>
              </motion.div>
          </div>

        </div>
    </motion.div>
  );
};

export default Portfolio;