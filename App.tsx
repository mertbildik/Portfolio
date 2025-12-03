import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Process from './pages/Process';
import About from './pages/About';
import Contact from './pages/Contact';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col md:flex-row min-h-screen md:h-screen bg-dark-main text-light-text font-sans selection:bg-teal-accent selection:text-dark-main relative overflow-hidden">
        {/* Subtle Background Gradient for Premium Feel */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a1e26] via-dark-main to-dark-main opacity-60 pointer-events-none"></div>
        
        <Sidebar />
        <main className="flex-1 w-full h-full overflow-y-auto md:overflow-hidden p-6 md:p-8 lg:p-10 relative z-10 flex flex-col">
            <AnimatedRoutes />
        </main>
      </div>
    </HashRouter>
  );
};

export default App;