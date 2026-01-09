import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// -- Variants (Consistent with Home) --
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

// -- Data --
import { PORTFOLIO_ITEMS } from '../data/portfolioItems';

import PageLayout from '../components/PageLayout';

// ... (Imports & Variants remain same)

const Portfolio: React.FC = () => {
  return (
    <PageLayout>
      {/* LEFT COLUMN: Header / Intro - col-span-4 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="lg:col-span-4 flex flex-col justify-center relative z-20 h-full"
      >
        <div className="flex flex-col">
          {/* Back Link - Very subtle, aligned */}
          <Link to="/" className="inline-block mb-8 lg:mb-12 opacity-40 hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs tracking-widest uppercase font-medium">← Back</span>
          </Link>

          {/* Title System - Matches Home's "Hey, I'm Mert" hierarchy */}
          <div className="mb-6 lg:mb-8">
            <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-4 block">
              Archive
            </span>
            <h1 className="text-4xl lg:text-[3.5rem] font-medium tracking-tight leading-[0.95] text-white">
              Selected <br />
              <span className="text-neutral-500 font-light">Work.</span>
            </h1>
          </div>

          <p className="text-neutral-400 max-w-xs leading-relaxed text-sm lg:text-base font-light">
            A curated collection of client stories, missions, and personal ventures.
          </p>
        </div>
      </motion.div>

      {/* RIGHT COLUMN: Interactive List - col-span-8 */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="lg:col-span-8 flex flex-col w-full relative z-30 lg:pl-12 lg:h-screen lg:overflow-hidden"
      >
        <div className="flex flex-col w-full max-w-3xl ml-auto gap-10 lg:gap-12">

          {/* SECTION: Client Work */}
          <div className="flex flex-col gap-4">
            <motion.h2 variants={itemVariants} className="text-xs font-mono text-neutral-500 uppercase tracking-widest pl-[2px] mb-2">
              Client Projects
            </motion.h2>
            <div className="flex flex-col">
              <div className="border-t border-white/[0.08] -mx-2 mb-0" />
              {PORTFOLIO_ITEMS.filter(i => i.type === 'clientProject').map((work) => (
                <Link key={work.id} to={work.route} className="group block outline-none relative z-10 cursor-pointer">
                  <motion.div
                    variants={itemVariants}
                    className="relative py-5 lg:py-6 px-2 -mx-2 rounded-lg border-b border-white/[0.08] flex items-baseline justify-between lg:grid lg:grid-cols-[14rem_1fr_auto] lg:gap-4 group-hover:bg-white/[0.02] transition-colors duration-300"
                  >
                    {/* Title */}
                    <span className="text-xl font-light text-neutral-300 group-hover:text-white transition-colors duration-300 tracking-tight truncate">
                      {work.title}
                    </span>

                    {/* Role/Type */}
                    <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-500 uppercase tracking-wider transition-colors">
                      {work.subtitle}
                    </span>

                    {/* Year & Arrow */}
                    <div className="flex items-center justify-end gap-4">
                      <span className="text-xs font-mono text-neutral-600">{work.yearOrStatus}</span>
                      <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                        <ArrowUpRight size={16} className="text-white" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* SECTION: Experience */}
          <div className="flex flex-col gap-4">
            <motion.h2 variants={itemVariants} className="text-xs font-mono text-neutral-500 uppercase tracking-widest pl-[2px] mb-2">
              Employment
            </motion.h2>
            <div className="flex flex-col">
              <div className="border-t border-white/[0.08] -mx-2 mb-0" />
              {PORTFOLIO_ITEMS.filter(i => i.type === 'employment').map((exp) => (
                <Link key={exp.id} to={exp.route} className="group block outline-none relative z-10 cursor-pointer">
                  <motion.div
                    variants={itemVariants}
                    className="relative py-5 lg:py-6 px-2 -mx-2 rounded-lg border-b border-white/[0.08] flex items-baseline justify-between lg:grid lg:grid-cols-[14rem_1fr_auto] lg:gap-4 group-hover:bg-white/[0.02] transition-colors duration-300"
                  >
                    {/* Title */}
                    <span className="text-xl font-light text-neutral-300 group-hover:text-white transition-colors duration-300 tracking-tight truncate">
                      {exp.title}
                    </span>

                    {/* Role */}
                    <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-500 uppercase tracking-wider transition-colors">
                      {exp.subtitle}
                    </span>

                    {/* Year & Arrow */}
                    <div className="flex items-center justify-end gap-4">
                      <span className="text-xs font-mono text-neutral-600">{exp.yearOrStatus}</span>
                      <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                        <ArrowUpRight size={16} className="text-white" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* SECTION: Ventures */}
          <div className="flex flex-col gap-4">
            <motion.h2 variants={itemVariants} className="text-xs font-mono text-neutral-500 uppercase tracking-widest pl-[2px] mb-2">
              Ventures
            </motion.h2>
            <div className="flex flex-col">
              <div className="border-t border-white/[0.08] -mx-2 mb-0" />
              {PORTFOLIO_ITEMS.filter(i => i.type === 'venture').map((venture) => (
                <Link key={venture.id} to={venture.route} className="group block outline-none relative z-10 cursor-pointer">
                  <motion.div
                    variants={itemVariants}
                    className="relative py-5 lg:py-6 px-2 -mx-2 rounded-lg border-b border-white/[0.08] flex items-baseline justify-between lg:grid lg:grid-cols-[14rem_1fr_auto] lg:gap-4 group-hover:bg-white/[0.02] transition-colors duration-300"
                  >
                    {/* Title */}
                    <span className="text-xl font-light text-neutral-300 group-hover:text-white transition-colors duration-300 tracking-tight truncate">
                      {venture.title}
                    </span>

                    {/* Role */}
                    <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-500 uppercase tracking-wider transition-colors">
                      {venture.subtitle}
                    </span>

                    {/* Year & Arrow */}
                    <div className="flex items-center justify-end gap-4">
                      <span className="text-xs font-mono text-neutral-600">{venture.yearOrStatus}</span>
                      <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                        <ArrowUpRight size={16} className="text-white" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </PageLayout >
  );
};

export default Portfolio;