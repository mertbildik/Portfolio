import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Process from './pages/Process';
import About from './pages/About';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Navigation from './src/components/Navigation';
import GlobalBackground from './src/components/GlobalBackground';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
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

  // Determine if we need max-width wrapper (pages other than Home)
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen text-white font-sans selection:bg-white selection:text-black relative overflow-x-hidden">

      {/* Global Background Layer */}
      <GlobalBackground />

      {/* Global Navigation */}
      <Navigation />

      {/* Main Content Area */}
      <main className={`flex-1 w-full relative z-10 flex flex-col ${!isHome ? 'max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 pt-24 pb-32' : ''}`}>
        <AnimatedRoutes />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="antialiased bg-black min-h-screen">
        <Content />
      </div>
    </HashRouter>
  );
};

export default App;