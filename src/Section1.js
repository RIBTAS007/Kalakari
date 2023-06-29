// Section1.jsx
import React from "react";
import styles from "./Section1.module.css";

const Section1 = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.content}>
        <h1 className={styles.title}>KALAKARI</h1>
        <h2 className={styles.subheading}>
          Curated Elegance. Delivered to your Doorstep.
        </h2>
      </div>
    </div>
  );
};

export default Section1;
