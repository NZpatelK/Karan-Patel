import React from 'react';
import '../styles/Projects.css';
import latestProject from '../assets/ecomm-project.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Projects: React.FC = () => {

    return (
        <div className='projects-section'>
            <h1>Projects</h1>
            <div className='latest-project'>
                <h3 className='title'>Latest Project</h3>
                <Image className='projectImg' src={latestProject} alt='latest project' />
                <div className='project-title-and-link'>
                    <h3>Nutrition Website</h3>
                    <a className='latest-project-link' href='https://nzpatelk.github.io/Nutrition-Ecomm/'><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ color: "#0055ff", }} /> Preview </a>
                </div>
                <p className='project_desc'>
                    Welcome to the Nutrition E-commerce website, a showcase of my expertise in crafting exceptional user interfaces. 
                    Through meticulous design and innovative features, I&apos;ve created a dynamic platform that seamlessly integrates captivating animations and transitions.
                    Feel free to click the preview link below to experience the website firsthand and immerse yourself in its interactive elements.
                </p>
            </div>
            <a className='linkGithub' href='https://github.com/NZpatelK?tab=repositories'>View All Projects</a>
        </div>
    );
};

export default Projects;