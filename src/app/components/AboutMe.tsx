import React, { useEffect, useState } from 'react';
import '../styles/AboutMe.css';

const AboutMe: React.FC = () => {

    const [isMobile, setIsMobile] = useState(true);



    useEffect(() => {
        const checkScreenSize = () => {
            const screemSize = !!!(window.innerWidth <= 880 || window.innerHeight <= 625)
            setIsMobile(screemSize);
        };
        setTimeout(function () {
            // Hide the address bar!
            window.scrollTo(0, 1);
        }, 0);

        checkScreenSize(); // Check initial screen size

        window.addEventListener('resize', checkScreenSize); // Update on resize

        return () => window.removeEventListener('resize', checkScreenSize); // Clean up event listener
    }, []);

    return (
        <div className='about-me-section'>
            <h2>About Me</h2>
            {isMobile ?
                <p>
                    I&apos;m a recent graduate from AUT with a Bachelor&apos;s degree in Computer and Information Science,
                    specializing in software development. Through internships at Kara Technologies and UiRev,
                    I&apos;ve honed my skills as a Database Technician and Junior Developer. My passion lies in frontend, web,
                    and mobile development, coupled with UI/UX design. Beyond tech, I enjoy hiking, watching movies, and exploring diverse cuisines.
                    With an open mind and a hunger for learning,
                    I thrive on new challenges and consider myself a fast learner, always eager to grow personally and professionally.
                </p> :
                <p>
                    A recent graduate from AUT with a Bachelor&apos;s degree in Computer and Information Science, specializing in software development.
                    Holds experience as a Database Technician and Junior Developer through internships at Kara Technologies and UiRev.
                    Passionate about frontend, web, and mobile development, along with UI/UX design. Enjoys hiking, watching movies,
                    and exploring diverse cuisines outside of tech. Thrives on new challenges and considers themselves a fast learner, eager to grow personally and professionally.
                </p>}
        </div>
    );
};

export default AboutMe;