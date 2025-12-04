import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const words = ["brands.", "websites.", "presentations.", "posters."];

const Home: React.FC = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleOptionClick = (path: string) => {
    navigate(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 md:gap-x-6 lg:gap-x-8 min-h-[80vh] items-center max-w-7xl mx-auto"
    >
      <div className="col-span-4 md:col-span-8 lg:col-span-12 flex flex-col">
        
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-accent"></span>
          </div>
          <span className="text-xs font-mono text-teal-accent tracking-wide uppercase">Available for work</span>
        </motion.div>

        {/* Main Heading */}
        <h1 className="text-h2 md:text-h1 font-display font-bold leading-h1 tracking-h1 mb-6 text-light-text">
          Hey, I'm Mert. <br />
          <span className="text-gray-400">I design </span>
          <span className="relative inline-block min-w-[200px] md:min-w-[400px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -20, opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                className="absolute left-0 text-teal-accent block"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
            <span className="invisible">{words[0]}</span>
          </span>
        </h1>

        {/* Value Proposition */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative pl-6 border-l-2 border-teal-accent/50"
          >
            <p className="text-h6 text-gray-400 max-w-2xl font-light leading-p tracking-h6">
              Helping people spend less time clicking and more time living.
            </p>
          </motion.div>
        </div>

        {/* Interactive Q&A */}
        <div className="space-y-6 mb-16 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4"
          >
            What brings you here today?
          </motion.h2>

          <div className="grid grid-cols-1 gap-4">
            <OptionCard 
              label="A"
              icon="✨"
              text="I've seen your work before and would love to explore more."
              subtext="View my selected works."
              onClick={() => handleOptionClick('/portfolio')}
              delay={0.6}
            />
            <OptionCard 
              label="B"
              icon="🚀"
              text="Can I see how you work?"
              subtext="Learn about my strategy and methodology."
              onClick={() => handleOptionClick('/process')}
              delay={0.7}
            />
            <OptionCard 
              label="C"
              icon="👋"
              text="Sorry, but who are you?"
              subtext="Get to know the person behind the screen."
              onClick={() => handleOptionClick('/about')}
              delay={0.8}
            />
          </div>
        </div>

        {/* Strategic CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <span className="text-gray-400 text-body font-light">If you’d like more information, feel free to</span>
          <Link 
            to="/contact" 
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-dark-main font-bold text-body transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
          >
            Get in touch <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </motion.div>

      </div>
    </motion.div>
  );
};

interface OptionCardProps {
  label: string;
  icon: string;
  text: string;
  subtext: string;
  onClick: () => void;
  delay: number;
}

const OptionCard: React.FC<OptionCardProps> = ({ label, icon, text, subtext, onClick, delay }) => {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      onClick={onClick}
      // Uses dark teal shades on hover for depth
      className="group w-full text-left p-6 bg-dark-sec/20 border border-white/5 hover:border-teal-accent/20 hover:bg-teal-accent/5 rounded-xl transition-all duration-300 flex items-start gap-5 active:scale-[0.99]"
    >
      {/* Icon Container: Dark Teal Border Hint */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dark-main border border-white/10 text-gray-400 flex items-center justify-center font-mono text-xs group-hover:border-teal-accent/30 group-hover:text-teal-accent transition-colors">
        {label}
      </div>
      <div>
        <h3 className="text-light-text font-medium text-body group-hover:text-white transition-colors tracking-p">
          <span className="mr-2">{icon}</span> {text}
        </h3>
        <p className="text-gray-500 text-sm mt-1 leading-p">{subtext}</p>
      </div>
      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity self-center">
        <ArrowRight className="text-teal-accent" size={18} />
      </div>
    </motion.button>
  );
};

export default Home;