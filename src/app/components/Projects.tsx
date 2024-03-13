import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
    const projects = [
        { id: 1, name: 'Project 1' },
        { id: 2, name: 'Project 2' },
        { id: 3, name: 'Project 3' },
        // Add more projects here
    ];

    return (
        <div className='projects-section'>
            <h1>Projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;