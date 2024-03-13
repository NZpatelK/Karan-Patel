import React from 'react';
import '../styles/Contents.css';

const Contents: React.FC = () => {
    const sections = [
        { title: 'Introduction', id: 'introduction', page: 1 },
        { title: 'About Me', id: 'about-me', page: 5 },
        { title: 'Skills', id: 'skills', page: 10 },
        { title: 'Services', id: 'services', page: 15 },
        { title: 'Projects', id: 'projects', page: 20 },
        { title: 'Contact Me', id: 'contact ', page: 25 },
    ];

    return (
        <div className='contents-section'>
            <h2>Table of Contents</h2>
            <ol className='list-contents'>
                {sections.map((section) => (
                    <li key={section.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ marginRight: '10px' }}>
                            <a href={`#${section.id}`}>{section.title}</a>
                        </div>
                        <div style={{ marginLeft: 'auto', fontStyle: 'italic' }}>
                            <span>{section.page}</span>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Contents;