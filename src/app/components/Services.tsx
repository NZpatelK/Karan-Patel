import React from 'react';
import '../styles/Services.css';

const Services: React.FC = () => {
    return (
        <div className='services-section'>
            <h1>Service Offers</h1>
            <ul>
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>UI Design</li>
            </ul>
        </div>
    );
};

export default Services;