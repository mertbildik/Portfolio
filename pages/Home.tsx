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
      className="max-w-4xl mx-auto flex flex-col justify-center h-full relative z-10"
    >
      {/* Availability Badge */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3 mb-6 md:mb-8"
      >
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-accent"></span>
        </div>
        <span className="text-sm font-mono text-teal-accent tracking-wide uppercase">Available for work</span>
      </motion.div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8 md:mb-12">
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

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl font-light border-l-2 border-teal-accent pl-4 mb-16 md:mb-20"
      >
        Helping people spend less time clicking and more time living.
      </motion.p>

      {/* Interactive Q&A */}
      <div className="space-y-4 md:space-y-6 mb-16 md:mb-24">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4"
        >
          What brings you here today?
        </motion.h2>

        <div className="grid grid-cols-1 gap-3 md:gap-4">
          <OptionCard 
            label="A"
            icon="✨"
            text="I've seen your work before and would love to explore more."
            subtext="I care a lot about design and development."
            onClick={() => handleOptionClick('/portfolio')}
            delay={0.6}
          />
          <OptionCard 
            label="B"
            icon="🚀"
            text="Can I see how you work?"
            subtext="I'm interested in your process and methodology."
            onClick={() => handleOptionClick('/process')}
            delay={0.7}
          />
          <OptionCard 
            label="C"
            icon="👋"
            text="Sorry, but who are you?"
            subtext="I'd love to get to know the person behind the screen."
            onClick={() => handleOptionClick('/about')}
            delay={0.8}
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm md:text-base font-light"
      >
        <span>If you’d like more information, feel free to</span>
        <Link to="/contact" className="inline-flex items-center gap-2 text-teal-accent font-semibold group border-b border-transparent hover:border-teal-accent transition-all pb-0.5">
          get in touch <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
        </Link>
      </motion.div>
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
      className="group w-full text-left p-3 md:p-5 bg-dark-sec/30 border border-dark-sec hover:border-teal-accent/50 hover:bg-dark-sec/50 rounded-xl transition-all duration-300 flex items-start gap-3 md:gap-4"
    >
      <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-dark-main border border-gray-700 text-gray-400 flex items-center justify-center font-mono text-xs group-hover:border-teal-accent group-hover:text-teal-accent transition-colors">
        {label}
      </div>
      <div>
        <h3 className="text-light-text font-medium text-sm md:text-base group-hover:text-teal-accent transition-colors">
          <span className="mr-2">{icon}</span> {text}
        </h3>
        <p className="text-gray-500 text-xs md:text-sm mt-0.5">{subtext}</p>
      </div>
      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity self-center">
        <ArrowRight className="text-teal-accent" size={18} />
      </div>
    </motion.button>
  );
};

export default Home;