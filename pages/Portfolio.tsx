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
const WORKS = [
  { id: 'dog-and-ride', title: 'Dog & Ride', type: 'Product Design', year: '2025' },
  { id: 'bunect', title: 'Bunect', type: 'Web Design', year: '2024' },
  { id: 'adclusive', title: 'Adclusive', type: 'Product UX', year: '2024' },
];

const EXPERIENCE = [
  {
    id: 'mckinsey',
    title: 'McKinsey & Co.',
    role: 'Visual Communication Specialist',
    year: '3 Years',
    note: 'Details upon request'
  }
];

const VENTURES = [
  { id: 'curvix', title: 'Curvix', role: 'Founder', year: 'Current' },
  { id: 'galanetwork', title: 'GalaNetwork', role: 'Co-founder', year: 'Current' },
];

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
        className="lg:col-span-8 flex flex-col justify-center w-full relative z-30 lg:pl-12"
      >
        <div className="flex flex-col w-full max-w-3xl ml-auto gap-12 lg:gap-16">

          {/* SECTION: Client Work */}
          <div className="flex flex-col gap-4">
            <motion.h2 variants={itemVariants} className="text-xs font-mono text-neutral-500 uppercase tracking-widest pl-[2px] mb-2">
              Client Projects
            </motion.h2>
            <div className="flex flex-col border-t border-white/[0.08]">
              {WORKS.map((work) => (
                <Link key={work.id} to={`/case-study/${work.id}`} className="group block outline-none">
                  <motion.div variants={itemVariants} className="relative py-5 lg:py-7 flex items-baseline justify-between border-b border-white/[0.08] group-hover:bg-white/[0.02] transition-colors duration-300 px-2 -mx-2 rounded-lg">
                    <div className="flex items-baseline gap-6 md:gap-10">
                      <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
                        01
                      </span>
                      <span className="text-xl lg:text-3xl font-light text-neutral-300 group-hover:text-white transition-colors duration-300 tracking-tight">
                        {work.title}
                      </span>
                      <span className="text-xs text-neutral-600 hidden sm:block font-mono">
                        {work.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-6">
                      <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
                        {work.year}
                      </span>
                      <ArrowUpRight
                        className="w-4 h-4 text-neutral-600 group-hover:text-white group-hover:rotate-45 transition-all duration-300 transform"
                        strokeWidth={1.5}
                      />
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
            <div className="flex flex-col border-t border-white/[0.08]">
              {EXPERIENCE.map((exp) => (
                <motion.div key={exp.id} variants={itemVariants} className="relative py-5 lg:py-7 flex items-center justify-between border-b border-white/[0.08] px-2 -mx-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-10">
                    <span className="text-xs font-mono text-neutral-600">
                      02
                    </span>
                    <span className="text-xl lg:text-3xl font-light text-neutral-400 tracking-tight">
                      {exp.title}
                    </span>
                    <span className="text-xs text-neutral-600 font-mono">
                      {exp.role}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-neutral-600">
                    {exp.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SECTION: Ventures */}
          <div className="flex flex-col gap-4">
            <motion.h2 variants={itemVariants} className="text-xs font-mono text-neutral-500 uppercase tracking-widest pl-[2px] mb-2">
              Ventures
            </motion.h2>
            <div className="flex flex-col border-t border-white/[0.08]">
              {VENTURES.map((venture) => (
                <motion.div key={venture.id} variants={itemVariants} className="relative py-5 lg:py-7 flex items-center justify-between border-b border-white/[0.08] group-hover:bg-white/[0.02] transition-colors duration-300 px-2 -mx-2 rounded-lg cursor-default">
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="text-xs font-mono text-neutral-600">
                      03
                    </span>
                    <span className="text-xl lg:text-3xl font-light text-neutral-400 group-hover:text-neutral-200 transition-colors tracking-tight">
                      {venture.title}
                    </span>
                    <span className="text-xs text-neutral-600 font-mono">
                      {venture.role}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-neutral-600">
                    {venture.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Portfolio;