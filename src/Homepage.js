import React, { lazy, Suspense } from 'react';
import styles from './Homepage.module.css';
import './fonts/fonts.css';
import RotatingLogo from './RotatingLogo';

const Section1 = lazy(() => import('./Section1'));
const Section2 = lazy(() => import('./Section2'));
const Section3 = lazy(() => import('./Section3'));
const Section4 = lazy(() => import('./Section4'));
const Section5 = lazy(() => import('./Section5'));
const Section6 = lazy(() => import('./Section6'));
const Section7 = lazy(() => import('./Section7'));
const Footer = lazy(() => import('./Footer'));

const Homepage = () => {
  return (
    <>
      <div className={styles.navDiv}></div>
      <Suspense fallback={<RotatingLogo/>}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
      </Suspense>
    </>
  );
};

export default Homepage;
