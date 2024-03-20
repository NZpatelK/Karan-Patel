import React from 'react';
import '../../styles/Skills.css';
import FigmaLogo from '../../assets/FigmaLogo';
import SalesforceLogo from '../../assets/SaleforceLogo';
import JavaLogo from '../../assets/JavaLogo';
import PythonSvg from '../../assets/Python';


const OthersSkills: React.FC = () => {

    const uiDesign = [
        { name: 'Figma', logo: <FigmaLogo key={0} /> },
        { name: 'Salesforce', logo: <SalesforceLogo key={0} /> },
        { name: 'Java', logo: <JavaLogo key={1} /> },
        { name: 'Python', logo: <PythonSvg key={2} /> }];

    return (
        <div className='skill-section'>
            <h2 className='header'>Skills</h2>
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

export default OthersSkills;