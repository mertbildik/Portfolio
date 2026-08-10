import React from 'react';
import ProjectTemplate from '../../templates/ProjectTemplate';
import { PROJECT_CONTENT } from '../../data/project-content';

const Bunect: React.FC = () => {
    const data = PROJECT_CONTENT.find(s => s.id === 'bunect');
    return <ProjectTemplate
        project={data}
        layoutOverrides={{
            textBalance: true,
            tighterMeasure: true
        }}
    />;
};

export default Bunect;
