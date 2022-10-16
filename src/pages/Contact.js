import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'default_service',
                'template_2ika1ta',
                form.current,
                'eFJiQ5W2ozsXCGYLp'
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again.');
                }
            );
    };

    return (
        <div className="contact">
            <div className="about">
                <h2>Contact Me</h2>
                <div className="prompt">
                    I am a self-teaching fulltime student currently pursuing my
                    Associates of Applied Science. I run a side gig creating
                    websites for small businesses. I am always expanding my
                    toolkit and have gnact for problem solving.
                </div>
            </div>
            <div className="skills">
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
