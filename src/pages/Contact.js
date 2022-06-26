import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
          <p>
            I am a self-teaching fulltime student currently pursuing my
            Associates of Applied Science. I run a side gig creating websites
            for small businesses. I am always expanding my toolkit and have
            gnact for problem solving.
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul className="form-list">
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input placeholder="Email" type="email" name="email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
