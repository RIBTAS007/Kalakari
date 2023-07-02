import React, { useState, useEffect } from "react";
import styles from "./Section3.module.css";
import decorImage from "./images/decor.png";
import apparelImage from "./images/apparel.png";
import craftsImage from "./images/crafts.png";
import jewelleryImage from "./images/jewellery.png";
import { motion } from "framer-motion";

const section3Animation = {
  hidden: {
    y: -250,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  enlarge: {
    scale: 1.3,
    transition: {
      duration: 0.5,
    },
  },
};

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
          <motion.div
            className={`${styles.panel} ${
              activePanel === 0 ? styles.active : ""
            }`}
            onClick={() => handlePanelClick(0)}
            style={{
              backgroundImage: `url(${decorImage})`,
            }}
            whileHover={{scale: 0.9, boxShadow: "0px 0px 6px rgb(255, 255, 255)"}}
            transition= {{duration: 0.3}}
          >
            <h3 >
              DECOR
            </h3>
          </motion.div>
          <motion.div
            className={`${styles.panel} ${
              activePanel === 1 ? styles.active : ""
            }`}
            onClick={() => handlePanelClick(1)}
            style={{
              backgroundImage: `url(${apparelImage})`,
            }}
            whileHover={{scale: 0.9, boxShadow: "0px 0px 6px rgb(255, 255, 255)",}}
            transition= {{duration: 0.3}}
          >
            <h3>APPAREL</h3>
          </motion.div>
          <motion.div
            className={`${styles.panel} ${
              activePanel === 2 ? styles.active : ""
            }`}
            onClick={() => handlePanelClick(2)}
            style={{
              backgroundImage: `url(${craftsImage})`,
            }}
            whileHover={{scale: 0.9, boxShadow: "0px 0px 6px rgb(255, 255, 255)"}}
            transition= {{duration: 0.3}}
          >
            <h3>CRAFTS</h3>
          </motion.div>
          <motion.div
            className={`${styles.panel} ${
              activePanel === 3 ? styles.active : ""
            }`}
            onClick={() => handlePanelClick(3)}
            style={{
              backgroundImage: `url(${jewelleryImage})`,
            }}
            whileHover={{scale: 0.9, boxShadow: "0px 0px 6px rgb(255, 255, 255)"}}
            transition= {{type: "easeIn",duration: 0.3}}
            
          >
            <h3>JEWELLERY</h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
