import React from 'react';
import styles from './RotatingLogo.module.css';
import logo from './images/logo.png';

const RotatingLogo = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.logo}
        src={logo}
        alt="Logo"
      />
      <p className={styles.text}>Loading Kalakari ...</p>
    </div>
  );
};

export default RotatingLogo;
