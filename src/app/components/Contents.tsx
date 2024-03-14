import React from 'react';
import '../styles/Contents.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

type ContentsProps = {
    selectPage: (value: number) => void;
    turnPage: (value: string) => void;
    id: string;
};

const Contents: React.FC<ContentsProps> = ({ selectPage, turnPage, id }) => {
    const sections = [
        { title: 'Introduction', id: 'introduction', page: 1, pageId: -1 },
        { title: 'About Me', id: 'about-me', page: 3, pageId: 0 },
        { title: 'Skills', id: 'skills', page: 4, pageId: 0},
        { title: 'Services', id: 'services', page: 5, pageId: 1},
        { title: 'Projects', id: 'projects', page: 6, pageId: 1},
        { title: 'Contact Me', id: 'contact ', page: 7, pageId: 2},
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
            <FontAwesomeIcon className='next-page-btn' icon={faCaretRight} onClick={(e) => { e.preventDefault() ,turnPage(id)}}/>
        </div>
    );
};

export default Contents;