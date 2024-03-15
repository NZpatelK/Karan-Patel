import React from 'react';
import '../styles/Projects.css';
import latestProject from '../assets/ecomm-project.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Projects: React.FC= () => {


    return (
        <div className='projects-section'>
            <h1>Projects</h1>
            <div className='latest-project'>
                <h3 className='title'>Latest Project</h3>
                <Image className='projectImg' src={latestProject} alt='latest project' />
                <div className='project-title-and-link'>
                    <h3>Nutrition Website</h3> 
                    <a className='latest-project-link' href='https://nzpatelk.github.io/Nutrition-Ecomm/'><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#0055ff",}} /> Preview </a>
                </div>
                <p>Project Description</p>
            </div>
            <button>View All Projects</button>
        </div>
    );
};

export default Projects;