import React from 'react';
import sec4 from './images/section4.png';
import styles from "./Section4.module.css";

const Section4 = () => {
  return (
    <div className={styles.mainContent}>
      <section className={styles.featureSection}>
        <div className={styles.featureBox}>
          <div className={styles.featureContent}>
            <h2 className={styles.featureTitle}>Embrace the Timeless Beauty of India's Traditional Art</h2>
            <p className={styles.featureDescription}>India's traditional art, with its rich hues and intricate patterns, brings life and elegance to any space. Adorning your walls with these exquisite pieces, steeped in history and tradition, not only evokes a sense of heritage but also elevates your surroundings to a realm of luxury, sophistication, and cultural depth.</p>
            <button className={styles.customButton}><a href="mailto:nishant@thekalakari.co">Connect with Us</a></button>
          </div>
          <div className={`${styles.featureImage} ${styles.imageOverlay}`}>
            <img src={sec4} alt="Feature Image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section4;
