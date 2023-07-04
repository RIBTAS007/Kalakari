import React from "react";
import styles from "./Section6.module.css";
import odop from './images/odop.png';
import { motion } from 'framer-motion';

const Section6 = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.h2 className={styles.heading}>ONE DISTRICT ONE PRODUCT</motion.h2>
          <motion.p  className={styles.paragraph}>
          We are proud to champion the 'One District, One product' inititaive. Each region is teeming with unique artisanal talent and we curate one exceptional product per district, shining a spotlight on their distinct art forms.
          </motion.p>
        </div>
        <motion.div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={odop}
            alt="Premium Section"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section6;
