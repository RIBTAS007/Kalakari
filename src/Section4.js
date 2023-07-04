import React from 'react';
import sec4 from './images/section4.png';
import styles from "./Section4.module.css";
import { motion } from "framer-motion";

const section4Animation = {

  hiddenLeft:{
    x:"-90vw"
  },
  hiddenRight:{
    x:"90vw"
  },
  hiddenBottom:{
   y:"90vw"
  },
  visible:{
    x:0,
    transition:{
      delay: 2, 
      duration: 2
    }
  }
}

const Section4 = () => {
  return (
    <div className={styles.mainContent}>
      <section className={styles.featureSection}>
        <div className={styles.featureBox}>
          <div className={styles.featureContent}>
            <motion.h2 className={styles.featureTitle}
             variants={section4Animation}
             initial="hiddenLeft"
             animate="visible"
            >Embrace the Timeless Beauty of India's Traditional Art</motion.h2>
            <motion.p className={styles.featureDescription}
           variants={section4Animation}
           initial="hiddenLeft"
           animate="visible"
            >India's traditional art, with its rich hues and intricate patterns, brings life and elegance to any space. Adorning your walls with these exquisite pieces, steeped in history and tradition, not only evokes a sense of heritage but also elevates your surroundings to a realm of luxury, sophistication, and cultural depth.</motion.p>
            <motion.button 
            variants={section4Animation}
            initial="hiddenLeft"
            animate="visible"
            transition={{duration:1}}
            className={styles.customButton}><a href="mailto:nishant@thekalakari.co">Connect with Us</a></motion.button>
          </div>
          <motion.div className={`${styles.featureImage} ${styles.imageOverlay}`}
          variants={section4Animation}
          initial="hiddenRight"
          animate="visible"
          transition={{duration:1}}
          >
            <img src={sec4} alt="Feature Image" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Section4;
