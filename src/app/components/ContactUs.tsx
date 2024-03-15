import React, { useState } from 'react';
import '../styles/ContactUs.css';



const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        // You can send the formData to your backend or perform any other action
    };

    return (
        <div className='temp-unavaliable'>
            <div className='msg'>
                <h1>Contact Us Form</h1>
                <h1>Temporarily Unavailable</h1>
            </div>
            <div className='contact-us-section'>
                <form className="contactForm" onSubmit={handleSubmit}>
                    <h2>Contact Us</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button disabled type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;