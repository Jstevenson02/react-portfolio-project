import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import emailjs from '@emailjs/browser';
import gradient from '../assets/gradient4.jpg';
import '../styles/Contact.css';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('Jacob_Stevenson', 'template_2ika1ta', form.current, 'eFJiQ5W2ozsXCGYLp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact">
            <Parallax pages={1.5}>
                <ParallaxLayer
                    style={{
                        backgroundImage: `url(${gradient})`,
                        backgroundSize: 'cover',
                    }}
                    factor={2}
                    speed={1}>
                    <div className="about">
                        <h2>Contact Me</h2>
                        <div className="prompt">
                            I am a self-teaching fulltime student currently pursuing my
                            Associates of Applied Science. I run a side gig creating
                            websites for small businesses. I am always expanding my
                            toolkit and have gnact for problem solving.
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0.85}
                    speed={0.5}>
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
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default Contact;
