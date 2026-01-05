import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, ArrowRight, PawPrint, Briefcase, Monitor, Palette, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: "dog-and-ride",
      year: "2025",
      title: "Dog & Ride",
      subtitle: "Lifestyle brand for riders.",
      tags: "Product design",
      icon: <PawPrint size={18} />
    },
    {
      id: "bunect",
      year: "2024",
      title: "Bunect",
      subtitle: "Corporate setup in Poland.",
      tags: "Web design",
      icon: <Briefcase size={18} />
    },
    {
      id: "adclusive",
      year: "2024",
      title: "Adclusive",
      subtitle: "Ad management platform.",
      tags: "Product UX",
      icon: <Monitor size={18} />
    }
  ];

  const brands = [
    {
      id: "curvix",
      title: "Curvix",
      role: "Founder",
      icon: <Palette size={18} />
    },
    {
      id: "galanetwork",
      title: "GalaNetwork",
      role: "Co-founder",
      icon: <Globe size={18} />
    }
  ];

  return (
    // 100svh Container - STRICTLY NO SCROLL
    <div className="w-full h-[100svh] max-h-[100svh] overflow-hidden relative flex flex-col pt-[clamp(3rem,8vh,6rem)] pb-[clamp(3rem,8vh,6rem)]">

      {/* Atmosphere */}

      <motion.div
        className="flex flex-col h-full max-w-[1400px] mx-auto w-full px-6 md:px-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* HEADER: Compact */}
        <motion.header variants={itemVariants} className="shrink-0 mb-[clamp(1rem,2.5vh,2rem)]">
          <h1 className="font-medium text-[#EDEDED] leading-none tracking-tight mb-2"
            style={{ fontSize: "clamp(2rem, 4vh, 3.5rem)" }}>
            Selected Work
          </h1>
          <div className="pl-4 border-l border-[#262626]">
            <p className="text-[#737373] font-normal leading-snug max-w-xl"
              style={{ fontSize: "clamp(0.875rem, 1.5vh, 1rem)" }}>
              Client stories and personal business ventures.
            </p>
          </div>
        </motion.header>

        {/* BENTO GRID CONTENT - Fills remaining height */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-[clamp(0.5rem,1.5vh,1rem)] min-h-0">

          {/* TOP ROW: 3 Client Projects */}
          {projects.map((project) => (
            <Link to={`/case-study/${project.id}`} key={project.id} className="contents">
              <motion.div
                variants={itemVariants}
                className="group relative flex flex-col justify-between bg-[#121212]/40 backdrop-blur-sm border border-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#121212]/80 hover:border-white/10 p-[clamp(1rem,2vh,1.5rem)]"
              >
                {/* Highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-white/10 opacity-50"></div>

                <div className="flex justify-between items-start">
                  <div className="p-1.5 rounded bg-white/5 text-white/70 group-hover:text-white transition-colors">{project.icon}</div>
                  <ArrowRight size={14} className="text-[#333] group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0" />
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#404040] uppercase tracking-widest">{project.year}</span>
                  <h3 className="font-medium text-[#EDEDED] mt-1 group-hover:underline decoration-white/30 underline-offset-4" style={{ fontSize: "clamp(1.1rem, 2vh, 1.4rem)" }}>{project.title}</h3>
                  <p className="text-[#737373] text-xs mt-0.5 leading-snug line-clamp-2">{project.subtitle}</p>
                </div>
              </motion.div>
            </Link>
          ))}

          {/* BOTTOM ROW: McKinsey (Wide) + 2 Personal Brands (Stacked or Side-by-Side?) */}
          {/* Layout Idea: McKinsey takes 2 columns, Brand Stack takes 1 column (containing 2 vertical mini cards) */}

          {/* McKinsey - Spans 2 Cols */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 group relative flex flex-col justify-between bg-[#121212]/40 backdrop-blur-sm border border-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#121212]/80 hover:border-white/10 p-[clamp(1rem,2vh,1.5rem)]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-white/10 opacity-50"></div>
            <div className="flex justify-between items-start">
              <div className="p-1.5 rounded bg-white/5 text-white/70"><BarChart size={18} /></div>
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#404040] uppercase tracking-widest">Experience</span>
              <h3 className="font-medium text-[#EDEDED] mt-1" style={{ fontSize: "clamp(1.1rem, 2vh, 1.4rem)" }}>McKinsey & Co.</h3>
              <p className="text-[#737373] text-xs mt-0.5 leading-snug">Visual Communication Specialist.</p>
              <div className="mt-3 flex gap-2">
                <span className="text-[10px] border border-white/5 px-2 py-0.5 rounded text-[#555]">Pitch Decks</span>
                <span className="text-[10px] border border-white/5 px-2 py-0.5 rounded text-[#555]">Data Viz</span>
              </div>
            </div>
          </motion.div>

          {/* Personal Brands - 1 Col, split vertically into 2 sub-rows */}
          <div className="col-span-1 grid grid-rows-2 gap-[clamp(0.5rem,1.5vh,1rem)]">
            {brands.map((brand) => (
              <motion.div
                key={brand.id}
                variants={itemVariants}
                className="group relative flex flex-col justify-center bg-[#121212]/40 backdrop-blur-sm border border-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#121212]/80 hover:border-white/10 px-[clamp(1rem,2vh,1.5rem)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-white/10 opacity-50"></div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded bg-white/5 text-white/70 group-hover:text-white transition-colors">{brand.icon}</div>
                  <div>
                    <h3 className="font-medium text-[#EDEDED] text-sm group-hover:text-white">{brand.title}</h3>
                    <p className="text-[#737373] text-[10px] uppercase tracking-wide">{brand.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;