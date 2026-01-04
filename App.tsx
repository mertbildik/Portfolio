import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Process from './pages/Process';
import About from './pages/About';
import Contact from './pages/Contact';
import CV from './pages/CV';
import CaseStudy from './pages/CaseStudy';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-full h-full">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/case-study/:id" element={<CaseStudy />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

const Content: React.FC = () => {
  const location = useLocation();
  const isCvPage = location.pathname === '/cv';

  if (isCvPage) {
    return <CV />;
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-void text-text-primary font-sans selection:bg-text-primary selection:text-text-inverse relative">
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
    <HashRouter>
      <Content />
    </HashRouter>
  );
};

export default App;