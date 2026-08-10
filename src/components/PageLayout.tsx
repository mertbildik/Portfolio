import React from 'react';

interface PageLayoutProps {
    children: React.ReactNode;
    debug?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, debug = false }) => {
    return (
        <div className="w-full min-h-screen text-[#E5E5E5] flex flex-col font-sans overflow-hidden">
            {/* Grid Layout Container - Single Source of Truth */}
            {/* Extracted exactly from Portfolio.tsx */}
            <div className={`
                relative z-10 w-full max-w-[1600px] flex-1 mx-auto 
                px-6 md:px-12 lg:pr-20 lg:pl-32 xl:px-32 
                grid grid-cols-1 lg:grid-cols-12 
                items-start lg:items-center 
                gap-12 lg:gap-12 
                py-24 lg:py-0 
                min-h-screen lg:h-screen lg:overflow-hidden
                ${debug ? 'outline outline-1 outline-red-500' : ''}
            `}>

                {/* Debug Grid Overlay */}
                {debug && (
                    <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 pointer-events-none z-50 opacity-20">
                        {/* 4 col left */}
                        <div className="hidden lg:block lg:col-span-4 bg-blue-500 h-full"></div>
                        {/* 8 col right */}
                        <div className="hidden lg:block lg:col-span-8 bg-green-500 h-full"></div>
                    </div>
                )}

                {children}

            </div>

            {/* Footer Info - Fixed visual anchor */}
            <div className="fixed bottom-8 left-6 md:left-12 z-40 hidden lg:block pointer-events-none">
                <span className="text-caption text-neutral-500 font-mono uppercase opacity-40">
                    Mert Bildik © 2026
                </span>
            </div>
        </div>
    );
};

export default PageLayout;
