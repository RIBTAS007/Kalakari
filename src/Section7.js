import React from 'react';
import styles from './Section7.module.css';
import logo from './images/logo.png';

const Section7 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionContent}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={logo} alt="Feature Image" />
        </div>
        <h2 className={styles.heading}>SEAL OF THE REGION OF ORIGIN</h2>
      </div>
      <p className={styles.paragraph}>
        At Kalakari, authenticity and quality are valued. Each product comes with a 'Seal of Origin' to assure customers of its originality, bridging the gap between artisans and consumers. It represents rich cultural heritage and India's diverse craftsmanship.
      </p>
    </div>
  );
};

export default Section7;
