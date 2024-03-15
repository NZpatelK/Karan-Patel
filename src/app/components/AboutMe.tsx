import React from 'react';
import '../styles/AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';


const AboutMe: React.FC= () => {
    return (
        <div className='about-me-section'>
            <h2>About Me</h2>
            <p>
                I&apos;m a recent graduate from AUT with a Bachelor&apos;s degree in Computer and Information Science,
                specializing in software development. Through internships at Kara Technologies and UiRev,
                I&apos;ve honed my skills as a Database Technician and Junior Developer. My passion lies in frontend, web,
                and mobile development, coupled with UI/UX design. Beyond tech, I enjoy hiking, watching movies, and exploring diverse cuisines.
                With an open mind and a hunger for learning,
                I thrive on new challenges and consider myself a fast learner, always eager to grow personally and professionally.
            </p>
        </div>
    );
};

export default AboutMe;