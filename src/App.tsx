import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router';
import { MotionConfig } from 'motion/react';

import GlobalBackground from './components/GlobalBackground';
import Wrapped from './layouts/Wrapped';

const Home = React.lazy(() => import('./pages/Home'));
const CaseStudy = React.lazy(() => import('./pages/case-studies/CaseStudy'));

const LegacyCaseStudyRedirect: React.FC = () => {
    const { id } = useParams();
    return <Navigate to={`/portfolio/${id}`} replace />;
};

const AppRoutes: React.FC = () => {
    return (
        <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Navigate to="/#portfolio" replace />} />
                <Route path="/about" element={<Navigate to="/#about" replace />} />
                <Route path="/contact" element={<Navigate to="/#contact" replace />} />

                <Route element={<Wrapped />}>
                    <Route path="/portfolio/:id" element={<CaseStudy />} />
                </Route>

                <Route path="/case-study/:id" element={<LegacyCaseStudyRedirect />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Suspense>
    );
};

const App: React.FC = () => (
    // Motion-driven transforms resolve without movement when the visitor asks for less motion.
    <MotionConfig reducedMotion="user">
        <BrowserRouter>
            {/* Layout only. Ink, font and selection come from `body` in index.css,
                so the document default stays ink-high and white keeps meaning
                emphasis rather than being the floor. */}
            <div className="flex flex-col min-h-screen relative">
                <GlobalBackground />
                <main className="flex-1 w-full relative z-10 flex flex-col">
                    <AppRoutes />
                </main>
            </div>
        </BrowserRouter>
    </MotionConfig>
);

export default App;
