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
    // Floating Dock Container: Centered Left on Desktop, Bottom Center on Mobile
    <div className="fixed z-50 pointer-events-none flex flex-col items-center 
      bottom-6 left-0 right-0 
      lg:top-0 lg:bottom-0 lg:left-8 lg:right-auto lg:justify-center lg:items-start"
    >
      <motion.nav
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="pointer-events-auto flex flex-row lg:flex-col items-center gap-3 p-2 rounded-full 
          glass-panel shadow-[0_8px_32px_rgba(0,0,0,0.2)] 
          ring-1 ring-white/5 hover:bg-surface/40 transition-colors duration-500"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative flex items-center justify-center p-3 rounded-full transition-all duration-300 group`
            }
          >
            {({ isActive }) => (
              <>
                {/* Active Indicator (Soft Glow behind) */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Icon with scaling interaction */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
                  className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-text-primary' : 'text-text-muted group-hover:text-text-primary'}`}
                >
                  <item.icon size={20} strokeWidth={1.5} />
                </motion.div>

                {/* Tooltip (Desktop Only) */}
                <span className="absolute left-full ml-6 top-1/2 -translate-y-1/2 
                  bg-surface/90 backdrop-blur-md border border-white/10 text-text-primary text-[10px] tracking-wide font-medium py-1 px-2.5 rounded opacity-0 -translate-x-2 
                  group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap hidden lg:block shadow-xl z-20"
                >
                  {item.label}
                </span>

                {/* Active Dot for minimal indication */}
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full hidden lg:block shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </motion.nav>
    </div>
  );
};

export default Sidebar;