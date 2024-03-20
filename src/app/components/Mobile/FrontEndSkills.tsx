import React from 'react';
import '../../styles/Skills.css';
import ReactLogo from '../../assets/ReactLogo';
import VueLogo from '../../assets/VueLogo';
import HTML5Logo from '../../assets/HTML5Logo';
import CSS3Logo from '../../assets/CSS3';
import JavaScriptLogo from '../../assets/JavaScriptLogo';
import TypeScriptLogo from '../../assets/TypeScriptLogo';
import NextLogo from '../../assets/NextLogo';

const FrontEndSkils: React.FC = () => {

    const frontEnd = [
        { name: 'React', logo: <ReactLogo key={0} /> },
        { name: 'Vue', logo: <VueLogo key={1} /> },
        { name: 'HTML5', logo: <HTML5Logo key={2} /> },
        { name: 'CSS3', logo: <CSS3Logo key={3} /> },
        { name: 'JavaScript', logo: <JavaScriptLogo key={4} /> },
        { name: 'TypeScript', logo: <TypeScriptLogo key={5} /> },
        { name: 'Next', logo: <NextLogo key={6} /> }];

    return (
        <div className='skill-section'>
            <h2 className='header'>Skills</h2>
            <h2 className='subHeader'>Font-End Tools:</h2>
            <div className='logos-grids'>
                {frontEnd.map((tool, index) => (
                    <div key={index} className='logoImg'>
                        <div>{tool.logo}</div>
                        <h3>{tool.name}</h3>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default FrontEndSkils;