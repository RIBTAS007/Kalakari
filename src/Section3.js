import React, { useState, useEffect } from 'react';
import "./Section3.css";
import decor from './images/decor.png';

const Section3 = () => {

    const [activePanel, setActivePanel] = useState(null);

    // const handlePanelClick = (panelIndex) => {
    //   removeActiveClasses();
    //   setActivePanel(panelIndex);
    // };
  
    const handlePanelClick = () => {
      setActivePanel((prevPanel) => (prevPanel + 1) % 5); // Rotates between panel indexes 0, 1, 2, 3
    };
  
    useEffect(() => {
      const interval = setInterval(handlePanelClick, 3000); // Rotate every 3 seconds (adjust as needed)
      return () => clearInterval(interval);
    }, []);
  
    // const removeActiveClasses = () => {
    //   setActivePanel(null);
    // };
 return  <div className="container">
 <div
   className={`panel ${activePanel === 0 ? 'active' : ''}`}
   onClick={() => handlePanelClick(0)}
   style={{
     backgroundImage: `url(${require('./images/decor.png')})`,
   }}
 >
   <h3>
    DECOR
   </h3>
 </div>
 <div
   className={`panel ${activePanel === 1 ? 'active' : ''}`}
   onClick={() => handlePanelClick(1)}
   style={{
     backgroundImage:
       "url('https://drive.google.com/uc?id=1JwmWFuVwhaDsy5BFDj6kvhpVBFWF7EUo')",
   }}
 >
   <h3>APPAREL</h3>
 </div>
 <div
   className={`panel ${activePanel === 2 ? 'active' : ''}`}
   onClick={() => handlePanelClick(2)}
   style={{
     backgroundImage:
     `url(${require('./images/crafts.png')})`,
   }}
 >
   <h3>CRAFTS</h3>
 </div>
 <div
   className={`panel ${activePanel === 3 ? 'active' : ''}`}
   onClick={() => handlePanelClick(3)}
   style={{
     backgroundImage:
     `url(${require('./images/jewellery.png')})`,
   }}
 >
   <h3>JEWELLERY</h3>
 </div>
</div> 
}

export default Section3