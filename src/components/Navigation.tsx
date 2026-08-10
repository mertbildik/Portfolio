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
                className="relative flex items-center lg:flex-col gap-8 lg:gap-0 p-4 lg:p-0 rounded-full bg-[#050505]/90 backdrop-blur-md border border-white/[0.08] lg:bg-transparent lg:border-none lg:backdrop-blur-none lg:rounded-none"
            >
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className="relative group outline-none z-10 lg:w-full lg:flex lg:flex-col lg:items-center"
                    >
                        {({ isActive }) => (
                            <div className={`
                                relative flex items-center justify-center w-auto h-auto rounded-none
                                lg:w-auto lg:h-16 lg:py-0
                            `}>

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
                                        
                                        /* Desktop: Strict Center Row */
                                        lg:bottom-auto lg:mb-0 lg:left-full lg:top-0 lg:h-full lg:items-center lg:flex-row lg:pl-6 lg:translate-x-0 lg:translate-y-0
                                        
                                        /* Visibility Logic: Hover Only */
                                        opacity-0 translate-y-4 lg:translate-y-0 lg:translate-x-[-10px] lg:opacity-0
                                        group-hover:opacity-100 group-hover:translate-y-0 group-hover:lg:translate-x-0 group-hover:lg:opacity-100
                                    `}
                                >
                                    <span
                                        className="text-eyebrow bg-transparent font-mono uppercase text-neutral-500 group-hover:text-white transition-colors whitespace-nowrap"
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
