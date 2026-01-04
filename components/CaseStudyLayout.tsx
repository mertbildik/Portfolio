import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { caseStudies } from '../data/case-studies.tsx';

interface CaseStudyLayoutProps {
    children: React.ReactNode;
    currentId: string;
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ children, currentId }) => {
    const navigate = useNavigate();

    const currentIndex = caseStudies.findIndex(cs => cs.id === currentId);
    const prevProject = caseStudies[currentIndex - 1];
    const nextProject = caseStudies[currentIndex + 1];
    const currentProject = caseStudies[currentIndex];

    const handleNavigate = (id: string) => {
        navigate(`/portfolio/${id}`);
    };

    return (
        <div className="min-h-screen text-light-text flex flex-col">
            {/* Floating Controls - No Background */}
            <nav className="fixed top-0 left-0 right-0 z-[100] h-20 pointer-events-none">
                <div className="max-w-7xl mx-auto w-full h-full flex items-center justify-between px-4 md:px-8">

                    {/* Left: Close Button */}
                    <Link
                        to="/portfolio"
                        className="pointer-events-auto flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                        <div className="p-2 md:p-3 rounded-full bg-dark-main/50 backdrop-blur-md border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-all shadow-lg">
                            <X size={20} />
                        </div>
                        <span className="hidden md:inline text-xs font-mono uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">Close</span>
                    </Link>

                    {/* Right: Prev/Next Controls */}
                    <div className="flex items-center gap-2 md:gap-4 pointer-events-auto">
                        <button
                            onClick={() => prevProject && handleNavigate(prevProject.id)}
                            disabled={!prevProject}
                            className={`p-2 md:p-3 rounded-full border border-white/10 backdrop-blur-md transition-all flex items-center justify-center shadow-lg ${prevProject ? 'bg-dark-main/50 text-white hover:border-white/30 hover:bg-white/10' : 'bg-dark-main/20 text-gray-600 cursor-not-allowed opacity-50'
                                }`}
                            aria-label="Previous project"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => nextProject && handleNavigate(nextProject.id)}
                            disabled={!nextProject}
                            className={`p-2 md:p-3 rounded-full border border-white/10 backdrop-blur-md transition-all flex items-center justify-center shadow-lg ${nextProject ? 'bg-dark-main/50 text-white hover:border-white/30 hover:bg-white/10' : 'bg-dark-main/20 text-gray-600 cursor-not-allowed opacity-50'
                                }`}
                            aria-label="Next project"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Content Area */}
            <main className="flex-1 pt-16 md:pt-20">
                {children}
            </main>
        </div>
    );
};

export default CaseStudyLayout;
