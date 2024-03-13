import React from 'react';
import '../styles/Profile.css';



const Profile: React.FC = () => {
    return (
        <div className='profile-section'>
            <h1>Karan Patel</h1>
            <h3>Web Development</h3>

            <div>
                <span>
                    Github
                </span>
                <span>
                    Linkedln
                </span>
                <span>
                    Instagram
                </span>
            </div>

            <div>Download Resume</div>

        </div>
    );
};

export default Profile;