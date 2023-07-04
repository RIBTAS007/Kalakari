import React from "react";
import styles from "./Footer.module.css";
import logo from "./images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <motion.img
          whileHover={{ rotateZ: "360deg" }}
          transition={{ duration: 5, ease: "linear", loop: Infinity }}
          src={logo}
          alt="Logo"
          className={styles.footerLogo}
        />
        <div className={styles.footerInfo}>
          <h1 className={styles.footerTitle}>KALAKARI</h1>
          <p className={styles.footerSubtitle}>
            Curated Elegance. Delivered to your Doorstep.
          </p>
        </div>
      </div>
      <div className={styles.footerContacts}>
        <ul className={styles.contactList}>
          <li className={styles.contactItem}>
            <a href="mailto:nishant@thekalakari.co">
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />{" "}
              Nishant@thekalakari.co
            </a>
          </li>
          <li className={styles.contactItem}>
            <a href="https://wa.me/9354339332">
              <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} /> +91
               9354339332
            </a>
          </li>
          <li className={styles.contactItem}>
            <a href="./files/Kalakari_Brochure.pdf" download>
              <FontAwesomeIcon icon={faFile} className={styles.icon} /> Brochure
            </a>
          </li>
        </ul>
      </div>
      <p className={styles.footerRights}>&copy; 2023 Kalakari. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
