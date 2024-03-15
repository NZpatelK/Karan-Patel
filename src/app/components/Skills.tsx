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
    const frontEnd = [<ReactLogo key={0}/>, <VueLogo key={1}/>, <HTML5Logo key={2}/>, <CSS3Logo key={3}/>, <JavaScriptLogo key={4}/>, <TypeScriptLogo key={5}/>, <NextLogo key={6}/>];
    const backEnd_Database = [<NodejsLogo key={0}/>, <JSONLogo key={1}/>, <MongoDBLogo key={2}/>];
    const uiDesign = [<FigmaLogo key={0}/>] 
    const other = [<SalesforceLogo key={0}/>, <JavaLogo key={1}/>, <PythonSvg key={2}/>]

    return (
        <div className='skill-section'>
            <h2 style={{textAlign: "center"}}>Skills</h2>
            <h2 style={{textAlign: "left"}}>Font-End Tools:</h2>
            <div className='logos-grids'>
                {frontEnd.map((language, index) => (
                    <div key={index} className='logoImg'>{language}</div>
                ))}
            </div>

            <h2>Back-End / Database Tools</h2>
            <div className='logos-grids'>
                {backEnd_Database.map((tool, index) => (
                    <div key={index} className='logoImg'>{tool}</div>
                ))}
            </div>

            <h2>Ui Designer</h2>
            <div className='logos-grids'>
                {uiDesign.map((tool, index) => (
                    <div key={index} className='logoImg'>{tool}</div>
                ))}
            </div>

            <h2>Other Tool</h2>
            <div className='logos-grids'>
                {other.map((tool, index) => (
                    <div key={index} className='logoImg'>{tool}</div>
                ))}
            </div>
        </div>
    );
};

export default Skills;