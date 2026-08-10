import React from 'react';
import ProjectTemplate from '../../templates/ProjectTemplate';
import { PROJECT_CONTENT } from '../../data/project-content';

const Adclusive: React.FC = () => {
    const data = PROJECT_CONTENT.find(s => s.id === 'adclusive');
    return <ProjectTemplate
        project={data}
        layoutOverrides={{
            textBalance: true,
            tighterMeasure: true
        }}
    />;
};

export default Adclusive;
