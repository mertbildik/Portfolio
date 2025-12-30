import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, PenTool, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Process: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Discovery",
      desc: "I start by stripping away the noise. I listen to understand your core goals and specific problems. No assumptions, just clear facts.",
      icon: MessageSquare
    },
    {
      id: "02",
      title: "Strategy",
      desc: "Before design, I build user flows and wireframes to ensure solid product logic. This prevents 'pretty but useless' outcomes.",
      icon: Search
    },
    {
      id: "03",
      title: "Design",
      desc: "Functional meets beautiful. I apply a minimal, premium aesthetic that aligns with your brand. Every pixel serves a purpose.",
      icon: PenTool
    },
    {
      id: "04",
      title: "Launch",
      desc: "I hand over production-ready assets, support development, and iterate based on feedback to ensure the solution works in the wild.",
      icon: Rocket
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 md:gap-x-6 lg:gap-x-8">
        <div className="col-span-4 md:col-span-8 lg:col-span-12">
          {/* Header Section - Standardized Margin Bottom (mb-20) */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h1 className="text-h2 font-display font-bold mb-6 tracking-h2 leading-h2 text-light-text">How I work</h1>
            <div className="relative pl-6 border-l-2 border-teal-accent/50">
              <p className="text-h6 text-gray-400 max-w-2xl font-light leading-p tracking-h6">
                I don't just make things look good. I build systems that work.
              </p>
            </div>
          </motion.header>

          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                // Hover: white/gray shade instead of teal
                className="col-span-4 md:col-span-4 lg:col-span-6 relative group p-8 rounded-2xl bg-dark-sec/20 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="absolute right-6 top-6 text-display font-bold text-white/[0.03] font-display select-none pointer-events-none group-hover:text-white/[0.08] transition-colors leading-none">
                  {step.id}
                </div>

                <div className="flex items-center gap-5 mb-6 relative z-10">
                  {/* Icon with Neutral Background */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <step.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-h5 font-bold text-light-text group-hover:text-white transition-colors">{step.title}</h3>
                </div>

                <p className="text-gray-400 leading-p text-body relative z-10 max-w-md">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-start"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-dark-main font-bold text-body transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
            >
              Start a project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Process;