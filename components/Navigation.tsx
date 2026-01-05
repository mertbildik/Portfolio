import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Layers, User, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/portfolio', icon: Briefcase, label: 'Portfolio' },
    { path: '/process', icon: Layers, label: 'Process' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/contact', icon: Mail, label: 'Get in Touch' },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center gap-1 p-1.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/50"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="relative group outline-none"
          >
            {({ isActive }) => (
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl transition-colors hover:bg-white/[0.08] focus-visible:bg-white/[0.1]">

                {/* Active Indicator (Mechanical Dot) */}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute bottom-1.5 w-1 h-1 bg-white rounded-full"
                    transition={{ duration: 0.2 }}
                  />
                )}

                {/* Icon */}
                <div className={`transition-colors duration-200 ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'}`}>
                  <item.icon size={20} strokeWidth={1.5} />
                </div>

                {/* Tooltip - Functional */}
                <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2 py-1 bg-black border border-white/10 text-white text-[10px] font-mono rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            )}
          </NavLink>
        ))}
      </motion.nav>
    </div>
  );
};

export default Navigation;
