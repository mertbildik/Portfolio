import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Briefcase, Layers, User, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
    const navItems = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/portfolio', label: 'Portfolio', icon: Briefcase },
        { path: '/process', label: 'Process', icon: Layers },
        { path: '/about', label: 'About', icon: User },
        { path: '/contact', label: 'Contact', icon: Mail },
    ];

    return (
        <div className="fixed z-50 w-max px-4 bottom-6 left-1/2 -translate-x-1/2 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:left-12 lg:translate-x-0 lg:px-0">
            <motion.nav
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center lg:flex-col gap-2 lg:gap-0 p-2 lg:p-0 rounded-full bg-[#050505]/80 backdrop-blur-[20px] border border-white/[0.08] shadow-[0_20px_40px_-12px_rgba(0,0,0,1)] ring-1 ring-white/[0.02] lg:bg-transparent lg:border-none lg:shadow-none lg:backdrop-blur-none lg:ring-0"
            >
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className="relative group outline-none z-10 lg:w-full lg:flex lg:flex-col lg:items-center"
                    >
                        {({ isActive }) => (
                            <div className={`
                                relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500
                                lg:w-auto lg:h-16 lg:rounded-none lg:bg-transparent lg:border-none lg:py-0
                            `}>

                                {/* Mobile Active Indicator (Pill) */}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-active"
                                        className="absolute inset-0 bg-white/[0.08] rounded-full backdrop-blur-sm lg:hidden"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        style={{ borderRadius: 9999 }}
                                    />
                                )}

                                {/* Icon */}
                                <div className={`relative z-10 transition-all duration-500 ${isActive ? 'text-white scale-110 lg:scale-100' : 'text-neutral-500 group-hover:text-neutral-300 lg:scale-100 lg:text-neutral-600 lg:group-hover:text-white'}`}>
                                    <item.icon
                                        size={20}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                {/* Label (Strictly Minimal & Aligned) */}
                                <div
                                    className={`
                                        absolute pointer-events-none flex items-center justify-center overflow-visible
                                        transition-all duration-500 ease-[0.23,1,0.32,1]
                                        
                                        /* Mobile: Bottom-Up Reveal */
                                        bottom-full left-1/2 -translate-x-1/2 mb-4 flex-col
                                        
                                        /* Desktop: Strict Center Row, No Decorations */
                                        lg:bottom-auto lg:mb-0 lg:left-full lg:top-0 lg:h-full lg:items-center lg:flex-row lg:pl-6 lg:translate-x-0 lg:translate-y-0
                                        
                                        /* Visibility Logic */
                                        ${isActive
                                            ? 'opacity-100 lg:opacity-100 translate-y-0 lg:translate-x-0'
                                            : 'opacity-0 translate-y-4 lg:translate-y-0 lg:translate-x-[-10px] lg:opacity-0'
                                        }
                                        group-hover:opacity-100 group-hover:translate-y-0 group-hover:lg:translate-x-0 group-hover:lg:opacity-100
                                    `}
                                >
                                    <span
                                        className="text-[11px] lg:text-[10px] bg-transparent leading-none font-medium lg:font-mono lg:uppercase lg:tracking-widest text-white tracking-[0.02em] whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-2 py-1 rounded-md bg-black/50 backdrop-blur-md border border-white/10 lg:border-none lg:backdrop-blur-none lg:p-0 lg:text-neutral-500 group-hover:lg:text-white transition-colors"
                                    >
                                        {item.label}
                                    </span>
                                </div>

                            </div>
                        )}
                    </NavLink>
                ))}
            </motion.nav>
        </div>
    );
};

export default Navigation;
