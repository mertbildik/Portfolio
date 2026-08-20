import React from 'react';

const GlobalBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute inset-0 bg-canvas z-0" />
        </div>
    );
};

export default GlobalBackground;
