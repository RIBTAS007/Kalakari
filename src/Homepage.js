import React, { useState, useEffect } from 'react';
import './Homepage.css';

const Homepage = () => {
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

  return (
    <>
      <div className="landing-page">
        <div className="content">
          <h1 className="title">Kalakari</h1>
          <h2 className="subheading">
            Curated Elegance. Delivered to your Doorstep.
          </h2>
        </div>
      </div>
      <div className="container">
        <div
          className={`panel ${activePanel === 0 ? 'active' : ''}`}
          onClick={() => handlePanelClick(0)}
          style={{
            backgroundImage:
              "url('https://drive.google.com/uc?id=1k7PI5Y2xsJPcTFCbpshghcwUJlfBiDaW')",
          }}
        >
          <h3>Kantha Embroidery</h3>
        </div>
        <div
          className={`panel ${activePanel === 1 ? 'active' : ''}`}
          onClick={() => handlePanelClick(1)}
          style={{
            backgroundImage:
              "url('https://drive.google.com/uc?id=1JwmWFuVwhaDsy5BFDj6kvhpVBFWF7EUo')",
          }}
        >
          <h3>Kanchipuram Silk Saree</h3>
        </div>
        <div
          className={`panel ${activePanel === 2 ? 'active' : ''}`}
          onClick={() => handlePanelClick(2)}
          style={{
            backgroundImage:
              "url('https://drive.google.com/uc?id=1zhqPEOfXWmyNutPW7wTAPkvnWQe409RN')",
          }}
        >
          <h3>Banarasi Silk Saree</h3>
        </div>
        <div
          className={`panel ${activePanel === 3 ? 'active' : ''}`}
          onClick={() => handlePanelClick(3)}
          style={{
            backgroundImage:
              "url('https://drive.google.com/uc?id=1rXamViXUaAJkwOkEGEvPjxNavdZki_vw')",
          }}
        >
          <h3>Contemporary Jewellery</h3>
        </div>
        <div
          className={`panel ${activePanel === 4 ? 'active' : ''}`}
          onClick={() => handlePanelClick(4)}
          style={{
            backgroundImage:
              "url('https://drive.google.com/uc?id=1WMHSdiP4K7RJh36VJ_GyUgSKs-zzv6C7')",
          }}
        >
          <h3>Kani Shawls</h3>
        </div>
      </div>
    </>
  );
};

export default Homepage;
