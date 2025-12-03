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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto px-4 md:px-6"
    >
      <header className="mb-12 md:mb-16 flex-shrink-0">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-3 tracking-tight">How I work</h1>
        <p className="text-gray-400 max-w-xl text-base md:text-lg font-light leading-relaxed">
          I don't just make things look good. I build systems that work.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group p-6 rounded-2xl bg-dark-sec/10 border border-dark-sec/50 hover:bg-dark-sec/20 hover:border-teal-accent/30 transition-all duration-300"
          >
            {/* Subtle background number */}
            <div className="absolute right-4 top-2 text-6xl font-bold text-white/[0.03] font-display select-none pointer-events-none group-hover:text-teal-accent/[0.05] transition-colors">
                {step.id}
            </div>

            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-10 h-10 rounded-lg bg-dark-sec/50 border border-white/5 flex items-center justify-center text-teal-accent group-hover:scale-110 transition-transform duration-300">
                <step.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-light-text group-hover:text-teal-accent transition-colors">{step.title}</h3>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-sm relative z-10 max-w-sm">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 md:mt-16 flex-shrink-0 flex justify-start"
      >
        <Link 
            to="/contact" 
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-teal-accent text-dark-main font-bold text-sm transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(0,173,181,0.4)]"
        >
            Start a project 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Process;