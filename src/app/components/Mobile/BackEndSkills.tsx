import React from 'react';
import '../../styles/Skills.css';
import NodejsLogo from '../../assets/NodejsLogo';
import JSONLogo from '../../assets/JSONLogo';
import MongoDBLogo from '../../assets/MongoDBLogo';

const BackEndSkils: React.FC = () => {

    const backEnd_Database = [
        { name: 'Nodejs', logo: <NodejsLogo key={0} /> },
        { name: 'JSON', logo: <JSONLogo key={1} /> },
        { name: 'MongoDB', logo: <MongoDBLogo key={2} /> }];

    return (
        <div className='skill-section'>
            <h2 className='header'>Skills</h2>
            <h2 className='subHeader'>Back-End / Database Tools:</h2>
            <div className='logos-grids'>
                {backEnd_Database.map((tool, index) => (
                    <div key={index} className='logoImg'>
                        <div>{tool.logo}</div>
                        <h3>{tool.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BackEndSkils;