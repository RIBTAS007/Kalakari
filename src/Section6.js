import React from 'react';
import './Section6.css';
import logo from './images/seal_logo.png';
import odop from './images/odop.png';

const Section6 = () => {
  return (
    <div className="section">
      <div
        className="section__item"
      >
        <h2 className="heading">SEAL OF THE REGION OF ORIGIN</h2>
        <div className='section__content'>
        <p className="paragraph">
        At Kalakari, authenticity and quality are valued. Each product comes with a 'Seal of Origin' to assure customers of its originality, bridging the gap between artisans and consumers. It represents rich cultural heritage and India's diverse craftsmanship.
        </p>
        <img className="section__image" src={logo} alt="Feature Image"/>
        </div>
      </div>
      <div
        className="section__item"
      >
        <h2 className="heading">ONE DISTRICT ONE PRODUCT</h2>
        <p className="paragraph">
          We are proud to champion the 'One District, One product' inititaive. Each region is teeming with unique artisanal talent and we curate one exceptional product per district, shining a spotlight on their distinct art forms.
        </p>
        <div className='centerImage'>
        <img className="section__image" src={odop} alt="Feature Image"/>
        </div>
        
      </div>
    </div>
  );
};

export default Section6;
