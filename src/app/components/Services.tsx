import React from 'react';
import '../styles/Services.css';
import webDev from '../assets/webDev.png';
import mobileDev from '../assets/mobileDev.png';
import uiDesigner from '../assets/uiDesign.png';
import Image from 'next/image';

const Services: React.FC = () => {
    return (
        <div className='services-section'>
            <h1>Service</h1>

            <div className='serviceContainer'>
                <div className='serviceGroup'>
                    <div className="serviceType">
                        <Image className='serviceIcon' src={webDev} alt="web development" />
                        <h2>Web Development</h2>
                    </div>
                    <div className="serviceType">
                        <Image className='serviceIcon' src={mobileDev} alt="web development" />
                        <h2>Mobile Development</h2>
                    </div>
                    <div className="serviceType">
                        <Image className='serviceIcon' src={uiDesigner} alt="web development" />
                        <h2>UI/UX Designer</h2>
                    </div>
                </div>

                <p>
                    I am a full stack developer with a passion for creating and designing web and mobile applications.
                    I am also a UI/UX designer with a passion for creating and designing user interfaces and user experiences.
                </p>
            </div>
        </div>
    );
};

export default Services;