import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/process', label: 'Process' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[fit-content] px-4">
            <motion.nav
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="flex items-center gap-1 p-1.5 rounded-full bg-[#111111]/80 backdrop-blur-md border border-white/10 shadow-xl shadow-black/20"
            >
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 outline-none"
                    >
                        {({ isActive }) => (
                            <>
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-white rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className={`relative z-10 transition-colors duration-200 ${isActive ? 'text-black' : 'text-neutral-400 hover:text-white'}`}>
                                    {item.label}
                                </span>
                            </>
                        )}
                    </NavLink>
                ))}
            </motion.nav>
        </div>
    );
};

export default Navigation;
