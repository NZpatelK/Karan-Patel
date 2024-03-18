import React from 'react';
import '../../styles/Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image'; // Import the Image component from next/image package

const M_Profile: React.FC = () => {
    return (
        <div className='profile-section'>

            <Image src='https://avatars.githubusercontent.com/u/60243726?v=4' alt='profile' className='profileImg' width={200} height={200} /> {/* Replace <img> with <Image> */}

            <h1>Karan Patel</h1>

            {/* TODO: add the list of different roles */}
            <h3>Web Development</h3>

            <div className='social-media-links'>
                <FontAwesomeIcon className='social-media-icons' icon={faGithub} />
                <FontAwesomeIcon className='social-media-icons' icon={faLinkedin} />
                <FontAwesomeIcon className='social-media-icons' icon={faSquareInstagram} />
            </div>

            </div>
    );
};

export default M_Profile;