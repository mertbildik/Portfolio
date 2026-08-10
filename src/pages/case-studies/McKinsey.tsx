import React from 'react';
import EmploymentTemplate from '../../templates/EmploymentTemplate';
import { EMPLOYMENT_CONTENT } from '../../data/employment-content';

const McKinsey: React.FC = () => {
    return <EmploymentTemplate data={EMPLOYMENT_CONTENT['mckinsey']} />;
};

export default McKinsey;
