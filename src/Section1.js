import React from "react";
import styles from "./Section1.module.css";
import { motion } from "framer-motion";

const section1Animationh1 = {
  hidden:{
    y: -250, 
    opacity: 0
  },
  visible:{
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 1, 
    }
  },
  enlarge:{
    scale: 1.1, 
    textShadow: "0px 0px 6px rgb(255, 255, 255)",
    transition: { 
      duration: 0.5 
    }
  }
}

const section1Animationh2 = {
  hidden:{
    opacity: 0, 
    y: 20
  },
  visible:{
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.5, 
      delay: 0.2
    }
  },
  enlarge:{
    scale: 1.1, 
    transition: { 
      duration: 0.5 ,
      delay: 0.2
    }
  }
}

const Section1 = () => {
  return (
    <div className={styles.landingPage}
    >
      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          variants={section1Animationh1}
          initial="hidden"
          animate="visible"
        >
          KALAKARI
        </motion.h1>
        <motion.h2
          className={styles.subheading}
          variants={section1Animationh2}
          initial="hidden"
          animate="visible"
        >
          CURATED ELEGANCE. DELIVERED TO YOUR DOORSTEP.
        </motion.h2>
      </div>
    </div>
  );
};

export default Section1;
