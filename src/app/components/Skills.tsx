import React from 'react';
import '../styles/Skills.css';
import ReactLogo from '../assets/ReactLogo';
import VueLogo from '../assets/VueLogo';
import HTML5Logo from '../assets/HTML5Logo';
import CSS3Logo from '../assets/CSS3';
import JavaScriptLogo from '../assets/JavaScriptLogo';
import TypeScriptLogo from '../assets/TypeScriptLogo';
import NodejsLogo from '../assets/NodejsLogo';
import JSONLogo from '../assets/JSONLogo';
import MongoDBLogo from '../assets/MongoDBLogo';
import FigmaLogo from '../assets/FigmaLogo';
import NextLogo from '../assets/NextLogo';
import SalesforceLogo from '../assets/SaleforceLogo';
import JavaLogo from '../assets/JavaLogo';
import PythonSvg from '../assets/Python';


const Skills: React.FC = () => {

    const frontEnd = [
        { name: 'React', logo: <ReactLogo key={0} /> },
        { name: 'Vue', logo: <VueLogo key={1} /> },
        { name: 'HTML5', logo: <HTML5Logo key={2} /> },
        { name: 'CSS3', logo: <CSS3Logo key={3} /> },
        { name: 'JavaScript', logo: <JavaScriptLogo key={4} /> },
        { name: 'TypeScript', logo: <TypeScriptLogo key={5} /> },
        { name: 'Next', logo: <NextLogo key={6} /> }];

    const backEnd_Database = [
        { name: 'Nodejs', logo: <NodejsLogo key={0} /> },
        { name: 'JSON', logo: <JSONLogo key={1} /> },
        { name: 'MongoDB', logo: <MongoDBLogo key={2} /> }];

    const uiDesign = [
        { name: 'Figma', logo: <FigmaLogo key={0} /> },
        { name: 'Salesforce', logo: <SalesforceLogo key={0} /> },
        { name: 'Java', logo: <JavaLogo key={1} /> },
        { name: 'Python', logo: <PythonSvg key={2} /> }];






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

            <h2 className='subHeader'>Back-End / Database Tools:</h2>
            <div className='logos-grids'>
                {backEnd_Database.map((tool, index) => (
                    <div key={index} className='logoImg'>
                        <div>{tool.logo}</div>
                        <h3>{tool.name}</h3>
                    </div>
                ))}
            </div>

            <h2 className='subHeader'>Ui Designer/ Other tools:</h2>
            <div className='logos-grids'>
                {uiDesign.map((tool, index) => (
                    <div key={index} className='logoImg'>
                        <div>{tool.logo}</div>
                        <h3>{tool.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;