import React, { EventHandler } from 'react';
import '../styles/Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image'; // Import the Image component from next/image package

const Profile: React.FC = () => {

    const handleClickPDF = (e: React.MouseEvent<HTMLButtonElement>) => {
        // Add your code here
        e.preventDefault();
        window.open('/resume.pdf')
    }
    return (
        <div className='profile-section'>

            <Image src='https://avatars.githubusercontent.com/u/60243726?v=4' alt='profile' className='profileImg' width={200} height={200} /> {/* Replace <img> with <Image> */}

            <h1>Karan Patel</h1>

            {/* TODO: add the list of different roles */}
            <h3>Web Development</h3>

            <div className='social-media-links'>
                <a href='https://github.com/NZpatelK'><FontAwesomeIcon className='social-media-icons' icon={faGithub} /></a>
                <a href='https://www.linkedin.com/in/karan-h-patel/'><FontAwesomeIcon className='social-media-icons' icon={faLinkedin} /></a>
                <a href='https://www.instagram.com/designs_by_patelk/'><FontAwesomeIcon className='social-media-icons' icon={faSquareInstagram} /></a>
            </div>

            <div className='profile-description'>
                <p>
                    I&apos;m a skilled frontend, web, and mobile developer looking for junior developer roles. I&apos;m open to different opportunities that match my skills. I love learning new things and trying out fresh ideas. My goal is to keep growing and delivering great work with my passion for innovation.
                </p>
            </div>

            <div className='link-btn'>
                <button onClick={handleClickPDF}>Download Resume</button>
            </div>

        </div>
    );
};

export default Profile;