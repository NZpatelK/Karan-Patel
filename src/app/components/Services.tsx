import React from 'react';
import '../styles/Services.css';

const Services: React.FC = () => {
    return (
        <div className='services-section'>
            <h1>Service</h1>
            <div>
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>UI Design</li>
            </div>
        </div>
    );
};

export default Services;