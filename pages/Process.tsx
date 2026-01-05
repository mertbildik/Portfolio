import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, PenTool, Rocket, ArrowRight } from 'lucide-react';
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

const Process: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Discovery",
      desc: "I listen to understand your core goals. No assumptions, just clear facts.",
      icon: MessageSquare
    },
    {
      id: "02",
      title: "Strategy",
      desc: "User flows and wireframes to ensure solid logic before any visual design.",
      icon: Search
    },
    {
      id: "03",
      title: "Design",
      desc: "Minimal, premium aesthetic. Functional beauty where every pixel serves a purpose.",
      icon: PenTool
    },
    {
      id: "04",
      title: "Launch",
      desc: "Production-ready assets and support to ensure the solution works in the wild.",
      icon: Rocket
    }
  ];

  return (
    // 100svh Container - STRICTLY NO SCROLL
    // Centered Layout
    // UPDATED TOP ANCHOR: pt-[clamp(3rem,8vh,8rem)]
    <div className="w-full h-[100svh] max-h-[100svh] overflow-hidden relative flex flex-col justify-center pt-[clamp(3rem,8vh,8rem)] pb-[clamp(3rem,8vh,8rem)]">

      {/* Atmosphere: Morning Fog */}

      <motion.div
        className="flex flex-col h-full max-w-[1200px] mx-auto w-full px-6 md:px-12 relative z-10 justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* HEADER: Tight and Integrated */}
        <motion.header variants={itemVariants} className="shrink-0 mb-[clamp(1.5rem,3vh,3rem)] flex items-end justify-between">
          <div>
            <h1 className="font-medium text-[#EDEDED] leading-none tracking-tight mb-3"
              style={{ fontSize: "clamp(2rem, 5vh, 4rem)" }}>
              How I work
            </h1>
            <div className="pl-4 border-l border-[#262626]">
              <p className="text-[#737373] font-normal leading-snug max-w-xl"
                style={{ fontSize: "clamp(0.875rem, 1.5vh, 1.125rem)" }}>
                I don't just make things look good. I build systems that work.
              </p>
            </div>
          </div>
        </motion.header>

        {/* MAIN CONTENT: 2x2 Grid (Balanced & Dense) */}
        {/* Grid grows but not indefinitely. Aspect ratio control prevents stretching. */}
        <div className="shrink-0 grid grid-cols-1 md:grid-cols-2 gap-[clamp(0.75rem,1.5vh,1.5rem)] mb-[clamp(2rem,4vh,4rem)]">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              // Card Styling: Short, wide, minimal.
              className="group relative flex flex-col bg-[#121212]/40 backdrop-blur-sm border border-white/5 rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#121212]/80 hover:border-white/10"
              style={{ padding: "clamp(1.25rem, 2.5vh, 2rem)" }}
            >
              {/* Specular Highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-white/10 opacity-50"></div>

              <div className="flex items-start justify-between mb-4">
                {/* Title */}
                <h3 className="font-medium text-[#EDEDED] leading-tight"
                  style={{ fontSize: "clamp(1.1rem, 2vh, 1.5rem)" }}>
                  {step.title}
                </h3>
                {/* Number: Embedded */}
                <span className="font-mono text-white/5 text-lg font-bold tracking-widest group-hover:text-white/10 transition-colors">{step.id}</span>
              </div>

              {/* Description */}
              <p className="text-[#737373] leading-relaxed max-w-[90%]"
                style={{ fontSize: "clamp(0.75rem, 1.4vh, 0.95rem)", lineHeight: "1.5" }}>
                {step.desc}
              </p>

              {/* Icon: Background Texture */}
              <div className="absolute -bottom-6 -right-6 text-[#121212] group-hover:text-[#1A1A1A] transition-colors duration-500 pointer-events-none transform rotate-12 group-hover:rotate-0">
                <step.icon size={100} strokeWidth={0.5} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER: Tools (Text Logos) + CTA */}
        <div className="shrink-0 flex items-center justify-between py-2 border-t border-white/5 pt-6">

          {/* Text-Based Logo Wall (Simulated) */}
          <motion.div variants={itemVariants} className="flex-1 flex flex-col justify-center">
            <span className="font-mono uppercase text-[#404040] tracking-widest text-[10px] mb-3">Tools</span>

            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 opacity-50 hover:opacity-100 transition-opacity duration-500">
              {/* Figma: Geometric Sans */}
              <span className="text-[#888] font-sans font-bold tracking-tight text-sm hover:text-white cursor-default transition-colors">figma</span>

              {/* Framer: Geometric */}
              <span className="text-[#888] font-sans font-semibold tracking-wide text-sm hover:text-white cursor-default transition-colors">framer</span>

              {/* React: Mono */}
              <span className="text-[#888] font-mono font-medium text-xs hover:text-white cursor-default transition-colors">React</span>

              {/* TS: Serif or Mono */}
              <span className="text-[#888] font-mono font-bold text-xs text-blue-500/50 hover:text-blue-400 cursor-default transition-colors">TS</span>

              {/* Adobe: Uppercase Bold */}
              <span className="text-[#888] font-sans font-black tracking-tighter text-sm hover:text-[#FF0000]/80 cursor-default transition-colors">Ad</span>

              {/* Notion: Serif */}
              <span className="text-[#888] font-serif font-medium italic text-sm hover:text-white cursor-default transition-colors">Notion</span>

              {/* Gemini: Sparkle text */}
              <span className="text-[#888] font-sans font-medium hover:text-white cursor-default transition-colors bg-clip-text text-transparent bg-gradient-to-r from-[#888] to-[#666] hover:from-blue-400 hover:to-purple-400">Gemini</span>
            </div>
          </motion.div>

          {/* CTA (Right) */}
          <motion.div variants={itemVariants} className="shrink-0 flex items-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-[#EDEDED] font-medium transition-transform hover:translate-x-1 group"
              style={{ fontSize: "clamp(0.875rem, 1.5vh, 1rem)" }}
            >
              Start a project
              <ArrowRight size={16} className="text-[#525252] group-hover:text-white transition-colors" />
            </Link>
          </motion.div>

        </div>

      </motion.div>
    </div>
  );
};

export default Process;