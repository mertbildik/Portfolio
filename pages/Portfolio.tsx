import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, Monitor, BarChart, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      client: "GalaNetwork",
      title: "Fan Community",
      desc: "Global platform connecting fans. Automated content & engagement tools.",
      tags: ["Community", "Social"],
      icon: <Globe size={18} />
    },
    {
      id: 2,
      client: "Curvix",
      title: "Visual Identity",
      desc: "Complete brand overhaul and minimal digital product UI.",
      tags: ["Branding", "UI/UX"],
      icon: <Layout size={18} />
    },
    {
      id: 3,
      client: "Adclusive",
      title: "SaaS Dashboard",
      desc: "Complex main web app designed for consistency and ease of use.",
      tags: ["Product", "SaaS"],
      icon: <Monitor size={18} />
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto flex flex-col justify-center h-full relative z-10 px-4 md:px-6"
    >
      {/* Header */}
      <div className="mb-8 md:mb-10">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">Client stories</h1>
        <div className="relative pl-5 border-l-2 border-teal-accent/50">
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-2xl text-balance">
            Below, you’ll find some of the projects I’ve worked on. <br className="hidden md:block" />
            Each one is a story of how we solved a problem together. <br className="hidden md:block" />
            Take a look and see how we can make your ideas come to life.
            </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="group relative bg-dark-sec/20 border border-dark-sec/80 hover:border-teal-accent/40 hover:bg-dark-sec/40 rounded-xl p-5 md:p-6 flex flex-col transition-all duration-300 h-full"
            >
              {/* Header inside card */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-dark-main/50 border border-white/5 flex items-center justify-center text-teal-accent group-hover:bg-teal-accent/10 transition-colors">
                        {project.icon}
                    </div>
                    <div>
                        <h3 className="text-light-text font-bold text-sm md:text-base leading-none mb-1 group-hover:text-teal-accent transition-colors">{project.title}</h3>
                        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wide">{project.client}</p>
                    </div>
                </div>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
                {project.desc}
              </p>

              {/* Tags and Action */}
              <div className="mt-auto flex items-center justify-between">
                 <div className="flex gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-medium px-2 py-1 bg-white/5 text-gray-400 rounded-md border border-white/5">
                        {tag}
                        </span>
                    ))}
                 </div>
                 <ArrowRight size={16} className="text-teal-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* McKinsey Card */}
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="group relative bg-gradient-to-r from-dark-sec/20 to-dark-main/50 border border-dark-sec/80 hover:border-teal-accent/40 rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
        >
             <div className="absolute top-1/2 right-10 w-64 h-64 bg-teal-accent/5 blur-[80px] rounded-full -translate-y-1/2 pointer-events-none group-hover:bg-teal-accent/10 transition-all duration-500"></div>
             
             {/* Left Content */}
             <div className="relative z-10 flex items-center gap-4 w-full md:w-auto">
                <div className="w-10 h-10 rounded-lg bg-dark-sec/50 border border-white/5 flex items-center justify-center text-teal-accent shrink-0">
                    <BarChart size={20} />
                </div>
                <div>
                     <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-bold text-light-text group-hover:text-teal-accent transition-colors">McKinsey & Company</h3>
                        <span className="text-[9px] font-bold font-mono text-teal-accent border border-teal-accent/20 px-2 py-0.5 rounded bg-teal-accent/5 tracking-wider">GRAPHIC DESIGNER</span>
                    </div>
                    <p className="text-xs text-gray-500 font-mono">Visual Communication Specialist • 2021 — 2024</p>
                </div>
             </div>

             {/* Right Stats & Desc */}
             <div className="relative z-10 flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                 <div className="text-right">
                     <span className="block text-xl font-display font-bold text-light-text">10k+</span>
                     <span className="text-[9px] text-gray-500 uppercase tracking-widest">Assets Created</span>
                 </div>
                 
                 <div className="hidden md:block w-px h-8 bg-white/5"></div>

                 <p className="text-xs text-gray-400 max-w-[200px] hidden md:block leading-relaxed">
                    Designed 50+ high-stakes pitch decks for industry leaders.
                 </p>
                 
                 <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-teal-accent group-hover:text-dark-main transition-all">
                    <ArrowRight size={14} />
                 </div>
             </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Portfolio;