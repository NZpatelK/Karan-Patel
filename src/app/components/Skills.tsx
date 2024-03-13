import React from 'react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
    const programmingLanguages = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#'];
    const uiDesignerTools = ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Zeplin'];

    return (
        <div className='skill-section'>
            <h2>Programming Languages:</h2>
            <ul>
                {programmingLanguages.map((language) => (
                    <li key={language}>{language}</li>
                ))}
            </ul>

            <h2>UI Designer Tools:</h2>
            <ul>
                {uiDesignerTools.map((tool) => (
                    <li key={tool}>{tool}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;