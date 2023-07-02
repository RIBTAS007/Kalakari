import React from "react";
import styles from "./Footer.module.css";
import logo from "./images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const footerAnimation = {
  enlarge: {
    scale: 1.1,
    transition: {
      duration: 1,
    },
  },
};

const Footer = () => {
  return (
    <div className={styles.footerParent}>
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <motion.img  whileHover={{ rotateZ: "360deg" }}
            transition={{duration:5, ease: "linear", loop: Infinity}}
            src={logo} alt="Logo" className={styles.footerLogo}>

          </motion.img>
          <div className={styles.logoText}>
            <motion.h1
              className={styles.footerHeading}
              variants={footerAnimation}
              whileHover="enlarge"
            >
              KALAKARI
            </motion.h1>
            <motion.p
              variants={footerAnimation}
              whileHover="enlarge"
              className={styles.footerText}
            >
              Curated Elegance. Delivered to your Doorstep.
            </motion.p>
          </div>
        </div>
        <div className={styles.footerRight}>
          <ul className={styles.footerLinks}>
            <motion.li variants={footerAnimation} whileHover="enlarge">
              <a href="mailto:nishant@thekalakari.co">
                <FontAwesomeIcon icon={faEnvelope} /> Nishant@thekalakari.co
              </a>
            </motion.li>
            <motion.li variants={footerAnimation} whileHover="enlarge">
              <a href="https://wa.me/9354339332">
                <FontAwesomeIcon icon={faWhatsapp} /> +91 9354339332
              </a>
            </motion.li>
            <motion.li variants={footerAnimation} whileHover="enlarge">
              <a href="./files/Kalakari_Brochure.pdf" download>
                <FontAwesomeIcon icon={faFile} /> Brochure
              </a>
            </motion.li>
          </ul>
        </div>
      </footer>
      <motion.p
        variants={footerAnimation}
        whileHover="enlarge"
        className={styles.footerCopyright}
      >
        &copy; 2023 Kalakari. All rights reserved.
      </motion.p>
    </div>
  );
};

export default Footer;
