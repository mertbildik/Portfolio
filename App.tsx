import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Process from './pages/Process';
import About from './pages/About';
import Contact from './pages/Contact';
import CV from './pages/CV';

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

const Content: React.FC = () => {
  const location = useLocation();
  const isCvPage = location.pathname === '/cv';

  if (isCvPage) {
    return <CV />;
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-dark-main text-light-text font-sans selection:bg-teal-accent selection:text-dark-main relative">
      {/* Subtle Background Gradient for Premium Feel - Uses dark-sec (30%) blending into dark-main (60%) */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-dark-sec via-dark-main to-dark-main opacity-60 pointer-events-none"></div>
      
      <Sidebar />
      
      {/* Main Content Area - Enforcing 8pt Grid Spacing */}
      {/* Increased Top Padding to pt-24 md:pt-32 for better vertical start consistency */}
      <main className="flex-1 w-full px-8 md:px-12 lg:px-16 lg:pl-32 pt-24 md:pt-32 pb-32 relative z-10 flex flex-col">
          <AnimatedRoutes />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    // @ts-ignore: Suppressing type error for future flags which are valid in runtime for v6.28+
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Content />
    </HashRouter>
  );
};

export default App;