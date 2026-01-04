import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, ArrowRight, PawPrint, Briefcase, Monitor, Palette, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: "dog-and-ride",
      year: "2025",
      title: "Dog & Ride",
      subtitle: "Building a lifestyle brand for riders and their dogs.",
      desc: "Designed the launch presentation, website, and social content so the brand tells one clear story across every channel.",
      tags: ["Product design", "Social content", "Presentations"],
      icon: <PawPrint size={32} />
    },
    {
      id: "bunect",
      year: "2024",
      title: "Bunect",
      subtitle: "Accounting, TRC, and company setup in Poland.",
      desc: "Designed a clear website and presentation deck that make complex services feel simple and human.",
      tags: ["Web design", "Presentations"],
      icon: <Briefcase size={32} />
    },
    {
      id: "adclusive",
      year: "2024",
      title: "Adclusive",
      subtitle: "Ad management platform for publishers and brands.",
      desc: "Designed the full web app UI so teams can track campaigns, inventory, and revenue in one dashboard.",
      tags: ["Product design", "UX/UI"],
      icon: <Monitor size={32} />
    }
  ];

  const mckinseySkills = [
    "Data visualization",
    "Executive comms",
    "Pitch decks",
    "AI & product testing"
  ];

  const personalBrands = [
    {
      id: "curvix",
      label: "Personal brand",
      title: "Curvix",
      desc: "My own creative brand for design, marketing, and photography projects.",
      role: "Founder and sole designer.",
      tags: ["Brand identity", "Web design", "Marketing", "Photography"],
      icon: <Palette size={32} />
    },
    {
      id: "galanetwork",
      label: "Personal brand",
      title: "GalaNetwork",
      desc: "English speaking Galatasaray community where I mix design, writing, and posters.",
      role: "Co-founder, content and design lead.",
      tags: ["Content design", "Posters", "Community", "Sports"],
      icon: <Globe size={32} />
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-20"
      >
        <h1 className="text-h2 font-medium mb-8 tracking-tight leading-h2 text-text-primary">Client stories</h1>
        <div className="relative pl-6 border-l border-border-subtle">
          <p className="text-h6 text-text-muted font-normal leading-p tracking-normal max-w-3xl">
            Below, you’ll find some of the projects I’ve worked on. <br className="hidden md:block" />
            Each one is a story of how we solved a problem together.
          </p>
        </div>
      </motion.div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative mb-32">

        {/* Left Column: Projects Stack */}
        <div className="lg:col-span-8 flex flex-col gap-12 lg:gap-24 w-full">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="sticky top-24 md:top-32 lg:top-40 self-start w-full"
              style={{ zIndex: index + 1 }}
            >
              <Link to={`/case-study/${project.id}`} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="group relative w-full min-h-[500px] lg:min-h-[600px] p-8 md:p-12 rounded-md bg-surface/80 backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* Background Effects */}
                  <div className="absolute top-0 right-0 p-40 bg-white/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  {/* Top Content: Icon & Action */}
                  <div className="relative z-10 flex justify-between items-start mb-6">
                    <div className="p-2 md:p-3 rounded-md bg-surface/50 backdrop-blur-md border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-all shadow-lg apple-ease">
                      {project.icon}
                    </div>
                    <span className="hidden md:inline text-xs font-mono uppercase tracking-widest font-normal opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">View Story</span>
                    <div className="w-12 h-12 rounded-md border border-white/10 bg-white/5 flex items-center justify-center text-text-muted group-hover:border-white/30 group-hover:text-white group-hover:bg-white/10 transition-all duration-300 transform translate-x-2 -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                      <ArrowRight size={24} />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-10 flex flex-col gap-6 mt-auto">
                    <div>
                      {/* Year Pill */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono font-medium text-text-muted uppercase tracking-widest px-3 py-1 rounded-md bg-white/5 border border-white/10">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-medium text-text-primary group-hover:text-white transition-colors mb-2 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xl md:text-2xl text-text-muted font-normal leading-tight mb-4">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="h-px w-full bg-border-subtle"></div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <p className="text-text-muted text-lg leading-relaxed max-w-xl">
                        {project.desc}
                      </p>

                      <div className="flex gap-2 flex-wrap md:justify-end">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs font-medium text-text-muted border border-white/5 px-3 py-1.5 rounded-md bg-void">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>

        {/* Right Column: McKinsey Feature */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="lg:col-span-4 sticky top-24 md:top-32 lg:top-40 h-fit z-10"
        >
          {/* McKinsey Section */}
          <div
            className="w-full min-h-[500px] lg:min-h-[600px] p-8 md:p-10 rounded-md bg-surface/20 border border-white/5 hover:border-white/10 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between backdrop-blur-sm"
          >
            {/* Subtle Background Glow */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

            <div className="flex flex-col gap-10 relative z-10">
              {/* Header */}
              <div>
                <div className="w-14 h-14 rounded-md bg-white/5 border border-white/5 flex items-center justify-center text-text-primary mb-6">
                  <BarChart size={28} strokeWidth={1.5} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-h4 font-medium text-text-primary leading-[1.1] tracking-tight">McKinsey <br /> & Company</h3>
                  <p className="text-xs font-mono text-text-muted uppercase tracking-widest font-normal">Visual Communication Specialist</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-medium text-white tracking-tight">10k+</span>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-text-muted uppercase tracking-widest mt-2 block leading-relaxed">Presentation assets</span>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-medium text-white tracking-tight">50+</span>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-text-muted uppercase tracking-widest mt-2 block leading-relaxed">Executive pitch decks</span>
                </div>
              </div>
            </div>

            {/* Bottom: Skills & Info */}
            <div className="relative z-10 space-y-8 mt-auto pt-6">
              <div className="flex items-start gap-3">
                <div className="min-w-[4px] h-4 rounded-full bg-text-primary/50 mt-1"></div>
                <p className="text-sm text-text-muted leading-relaxed">
                  Work is under NDA, but I can walk you through the process and outcomes in a call.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {mckinseySkills.map((skill) => (
                  <span key={skill} className="text-xs text-text-muted bg-white/5 px-3 py-1.5 rounded-md border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Brands I run Section */}
      <div className="mb-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-h2 font-medium mb-12 tracking-tight leading-h2 text-text-primary"
        >
          Brands I run
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalBrands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 md:p-12 rounded-md bg-surface/40 backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl flex flex-col justify-between overflow-hidden min-h-[400px]"
            >
              {/* Background Effects */}
              <div className="absolute top-0 right-0 p-32 bg-white/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-md bg-void/50 border border-white/10 flex items-center justify-center text-text-muted group-hover:scale-105 group-hover:bg-white group-hover:text-void transition-all duration-500 shadow-lg">
                    {brand.icon}
                  </div>
                  {/* External Link Arrow */}
                  <div className="w-10 h-10 rounded-md border border-white/10 bg-white/5 flex items-center justify-center text-text-muted group-hover:text-white transition-all opacity-0 group-hover:opacity-100">
                    <ArrowRight size={20} />
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-xs font-mono font-medium text-text-muted uppercase tracking-widest mb-3 block">{brand.label}</span>
                  <h3 className="text-3xl md:text-4xl font-medium text-text-primary group-hover:text-white transition-colors mb-2 tracking-tight">{brand.title}</h3>
                  <p className="text-sm font-mono text-text-muted uppercase tracking-wider">{brand.role}</p>
                </div>

                <p className="text-text-muted text-lg leading-relaxed mb-8">
                  {brand.desc}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {brand.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-text-muted border border-white/5 px-3 py-1.5 rounded-md bg-void/30">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;