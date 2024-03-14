import React from 'react';
import '../styles/AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

type AboutMeProps = {
    turnPage: (value: string) => void;
    id: string;
};

const AboutMe: React.FC<AboutMeProps> = ({id, turnPage}) => {
    return (
        <div className='about-me-section'>
            <h2>About Me</h2>
            <p>
                I&apos;m a recent graduate from AUT, holding a Bachelor of Computer and Information Science with a focus on Software Development. With internships at Kara Technologies and UiRev, 
                I&apos;ve gained practical experience in database technology and junior development roles. My passion lies in front-end, web, and mobile development, along with UI/UX design, 
                where I thrive on creating visually captivating user experiences. Beyond coding, I enjoy hiking, watching movies, and exploring diverse cuisines. 
                I&apos;m an open-minded individual who eagerly embraces new challenges and opportunities for learning, with a strong drive for personal and professional growth.
            </p>
            <FontAwesomeIcon className='prev page-btn' icon={faCaretRight} onClick={(e) => { e.preventDefault() ,turnPage(id)}}/>
        </div>
    );
};

export default AboutMe;