import React from 'react';
import '../styles/Footer.css';
import { LinkedIn, GitHub, YouTube } from '@material-ui/icons';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHub />
        <LinkedIn />
        <YouTube />
      </div>
      <p>© 2022 jacobstevenson.us</p>
    </div>
  );
}

export default Footer;
