import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Layers, User, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar: React.FC = () => {
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/portfolio', icon: Briefcase, label: 'Portfolio' },
    { path: '/process', icon: Layers, label: 'Process' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    /* Positioning Wrapper - Handles Layout without CSS Transforms */
    <div className="fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-end pb-6 lg:pb-0 lg:justify-center lg:items-start lg:pl-6">
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto flex flex-row lg:flex-col items-center gap-4 md:gap-6 p-3 rounded-full 
          bg-dark-sec/50 backdrop-blur-xl border border-white/5 shadow-2xl ring-1 ring-white/5"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `group relative flex items-center justify-center p-3 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'text-teal-accent bg-teal-accent/10 shadow-[0_0_15px_-3px_rgba(0,173,181,0.3)]' 
                  : 'text-gray-500 hover:text-light-text hover:bg-white/5'
              }`
            }
          >
            <item.icon size={22} strokeWidth={1.5} />
            
            {/* Tooltip for desktop */}
            <span className="absolute left-full ml-5 top-1/2 -translate-y-1/2 bg-dark-sec text-light-text text-xs py-1.5 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden lg:block border border-white/10 shadow-xl">
              {item.label}
            </span>
          </NavLink>
        ))}
      </motion.nav>
    </div>
  );
};

export default Sidebar;