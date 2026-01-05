import React from 'react';

const Background: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 bg-neutral-950 pointer-events-none">
            {/* Subtle Grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
                }}
            />
        </div>
    );
};

export default Background;
