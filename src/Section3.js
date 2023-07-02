import React, { useState, useEffect } from "react";
import styles from "./Section3.module.css";
import decorImage from "./images/decor.png";
import apparelImage from "./images/apparel.png";
import craftsImage from "./images/crafts.png";
import jewelleryImage from "./images/jewellery.png";

const Section3 = () => {
  const [activePanel, setActivePanel] = useState(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const container = document.querySelector(`.${styles.container}`);
      if (container && !container.contains(event.target)) {
        removeActiveClasses();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handlePanelClick = (panelIndex) => {
    removeActiveClasses();
    setActivePanel(panelIndex);
  };

  const removeActiveClasses = () => {
    setActivePanel(null);
  };

  return (
    <div className={styles.sectionThreeBg}>
      <div className={styles.outerContainer}>
        {/* <div className={styles.heading}>
        <h1>CATEGORIES</h1>
      </div> */}
        <div className={styles.container}>
          <div
            className={`${styles.panel} ${
              activePanel === 0 ? styles.active : ""
            }`}
            onClick={() => handlePanelClick(0)}
            style={{
              backgroundImage: `url(${decorImage})`,
            }}
          >
            <h3>DECOR</h3>
          </div>
          <div
            className={`${styles.panel} ${
              activePanel === 1 ? styles.active : ""
            }`}
            onClick={() => handlePanelClick(1)}
            style={{
              backgroundImage: `url(${apparelImage})`,
            }}
          >
            <h3>APPAREL</h3>
          </div>
          <div
            className={`${styles.panel} ${
              activePanel === 2 ? styles.active : ""
            }`}
            onClick={() => handlePanelClick(2)}
            style={{
              backgroundImage: `url(${craftsImage})`,
            }}
          >
            <h3>CRAFTS</h3>
          </div>
          <div
            className={`${styles.panel} ${
              activePanel === 3 ? styles.active : ""
            }`}
            onClick={() => handlePanelClick(3)}
            style={{
              backgroundImage: `url(${jewelleryImage})`,
            }}
          >
            <h3>JEWELLERY</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
