import React from 'react';
import '../styles/Contents.css';

type ContentsProps = {
    selectPage: (value: number) => void;
    isMobile: boolean;
};

const Contents: React.FC<ContentsProps> = ({ selectPage, isMobile}) => {

    console.log('isMobile: ', isMobile);
    const sections = [
        { title: 'Introduction', id: 'introduction', page: 1, pageId: -1 },
        { title: 'About Me', id: 'about-me', page: 3, pageId: 0 },
        { title: 'Skills', id: 'skills', page: 4, pageId: 0},
        { title: 'Services', id: 'services', page:(isMobile ? 7 : 5), pageId: (isMobile ? 2 : 1)},
        { title: 'Projects', id: 'projects', page: (isMobile ? 8 : 6), pageId: (isMobile ? 2 : 1)},
        { title: 'Contact Me', id: 'contact ', page: (isMobile ? 9 : 7), pageId: (isMobile ? 3 : 2)},
    ];

    return (
        <div className='contents-section'>
            <h2>Table of Contents</h2>
            <ol className='list-contents'>
                {sections.map((section) => (
                    <li key={section.id} style={{ display: 'flex', justifyContent: 'space-between' }} onClick={(e) => { e.preventDefault() ,selectPage(section.pageId)}}>
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