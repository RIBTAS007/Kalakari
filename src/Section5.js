import styles from "./Section5.module.css";
import { motion } from 'framer-motion';

const Section5 = () => {
  return (
    <div className={styles.section5container}>
      <div className={styles.glassEffect} />
      <motion.p className={styles.text}
        whileHover={{textShadow: "0px 0px 2px rgb(255,255,255)"}}
      >
        Elevate tradition with our premium Indian cultural products
      </motion.p>
    </div>
  );
};

export default Section5;

