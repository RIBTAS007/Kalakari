import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import logo from './images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
  return (
    <div className="footer_parent">
    <footer className="footer">
      <div className="footer__left">
        <img src={logo} alt="Logo" className="footer__logo" />
        <div className='logotext'>
        <h1 className="footer__heading"> KALAKARI</h1>
        <p className="footer__text">Curated Elegance. Delivered to your Doorstep.</p>
        </div>
        
      </div>
      <div className="footer__right">
        <ul className="footer__links">
          <li><a href="mailto:nishant@thekalakari.co"><FontAwesomeIcon icon={faEnvelope} />  Nishant@thekalakari.co</a></li>
          <li><a href="https://wa.me/9354339332"><FontAwesomeIcon icon={faWhatsapp} />  +91 9354339332</a></li>
          <li><a href="./files/Kalakari_Brochure.pdf" download><FontAwesomeIcon icon={faFile} /> Brochure</a></li>
        </ul>
      </div>
    </footer>
    <p className="footer__copyright">&copy; 2023 Kalakari. All rights reserved.</p>
    </div>
  );
}

export default Footer;
