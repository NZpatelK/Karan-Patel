import React from 'react';
import '../styles/Contents.css';

const Contents: React.FC = () => {
    const sections = [
        { title: 'Introduction', id: 'introduction', page: 1 },
        { title: 'Chapter 1', id: 'chapter-1', page: 5 },
        { title: 'Chapter 2', id: 'chapter-2', page: 10 },
        { title: 'Conclusion', id: 'conclusion', page: 15 },
    ];

    return (
        <div className='contents-section'>
            <h2>Table of Contents</h2>
            <ol style={{ listStyle: 'none', paddingLeft: 0 }}>
                {sections.map((section) => (
                    <li key={section.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ marginRight: '10px' }}>
                            <a href={`#${section.id}`}>{section.title}</a>
                        </div>
                        <div style={{ marginLeft: 'auto', fontStyle: 'italic' }}>
                            <span style={{ marginRight: '5px' }}>.....</span>
                            <span>{section.page}</span>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Contents;