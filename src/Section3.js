import styles from "./Section3.module.css";
import { motion } from "framer-motion";

const Section3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <motion.div className={`${styles.div} ${styles.div1}`} whileHover={{scale:0.9}} transition= {{duration: 0.3}}>
          <div className={styles.content}>
            <h2>DECOR</h2>
          </div>
        </motion.div>
        <motion.div className={`${styles.div} ${styles.div2}`}  whileHover={{scale:0.9}} transition= {{duration: 0.3}}>
          <div className={styles.content}>
            <h2>APPAREL</h2>
          </div>
        </motion.div>
      </div>
      <div className={styles.row}>
        <motion.div className={`${styles.div} ${styles.div3}`}  whileHover={{scale:0.9}} transition= {{duration: 0.3}}>
          <div className={styles.content}>
            <h2>CRAFTS</h2>
          </div>
        </motion.div>
        <motion.div className={`${styles.div} ${styles.div4}`}  whileHover={{scale:0.9}} transition= {{duration: 0.3}}>
          <div className={styles.content}>
            <h2>JEWELLERY</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section3;
