import React from 'react';
import styles from './Footer.module.css';
import logo from './images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className={styles.footerParent}>
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <img src={logo} alt="Logo" className={styles.footerLogo} />
          <div className={styles.logoText}>
            <h1 className={styles.footerHeading}>KALAKARI</h1>
            <p className={styles.footerText}>Curated Elegance. Delivered to your Doorstep.</p>
          </div>
        </div>
        <div className={styles.footerRight}>
          <ul className={styles.footerLinks}>
            <li><a href="mailto:nishant@thekalakari.co"><FontAwesomeIcon icon={faEnvelope} /> Nishant@thekalakari.co</a></li>
            <li><a href="https://wa.me/9354339332"><FontAwesomeIcon icon={faWhatsapp} /> +91 9354339332</a></li>
            <li><a href="./files/Kalakari_Brochure.pdf" download><FontAwesomeIcon icon={faFile} /> Brochure</a></li>
          </ul>
        </div>
      </footer>
      <p className={styles.footerCopyright}>
        &copy; 2023 Kalakari. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
