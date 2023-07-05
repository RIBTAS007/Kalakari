import React from "react";
import styles from "./Section6.module.css";
import odop from "./images/odop.png";

const Section6 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionContent}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={odop} alt="Premium Section" />
        </div>

        <h2 className={styles.heading}>ONE DISTRICT ONE PRODUCT</h2>
      </div>
      <p className={styles.paragraph}>
        We are proud to champion the 'One District, One product' inititaive.
        Each region is teeming with unique artisanal talent and we curate one
        exceptional product per district, shining a spotlight on their distinct
        art forms.
      </p>
    </div>
  );
};

export default Section6;
