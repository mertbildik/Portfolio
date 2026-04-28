import React from 'react';
import ProjectTemplate from '../templates/projects/ProjectTemplate';
import { PROJECT_CONTENT } from '../data/project-content';

const OFK: React.FC = () => {
    const data = PROJECT_CONTENT.find(s => s.id === 'ofk');
    return <ProjectTemplate
        project={data}
        layoutOverrides={{
            textBalance: true,
            tighterMeasure: true
        }}
    />;
};

export default OFK;
