import React from 'react';
import '../styles/Footer.css';
import { LinkedIn, GitHub, YouTube } from '@material-ui/icons';
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/Jstevenson02">
          <GitHub />
        </a>
        <a href="https://www.linkedin.com/in/jacob-stevenson-406098162/">
          <LinkedIn />
        </a>
        <a href="https://www.youtube.com/channel/UCWhTl1NsJMi_zz2wJFJcCPw">
          <YouTube />
        </a>
      </div>
      <p>© 2022 jacobstevenson.us</p>
    </div>
  );
}

export default Footer;
