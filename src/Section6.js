import React from "react";
import styles from "./Section6.module.css";
import odop from './images/odop.png';

const Section6 = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>ONE DISTRICT ONE PRODUCT</h2>
          <p className={styles.paragraph}>
          We are proud to champion the 'One District, One product' inititaive. Each region is teeming with unique artisanal talent and we curate one exceptional product per district, shining a spotlight on their distinct art forms.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={odop}
            alt="Premium Section"
          />
        </div>
      </div>
    </section>
  );
};

export default Section6;
