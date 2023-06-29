import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Section2.css";
import kashmiriCarpets from "./images/Kashmiri_carpets.png";
import meenakariRing from "./images/Meenakari_ring.png";
import kanthaEmbroidery from "./images/Kantha_embroidery.png";
import pottery from "./images/pottery.png";
import madhubaniPaintings from "./images/Madhubani_paintings.png";
import bidriware from "./images/bidriware.png";
import woodcarvings from "./images/woodcarvings.png";
import ajrakhTextiles from "./images/Ajrakh_textiles.png";
import image1 from "./images/home2.png";
import banarasiSaree from "./images/Banarasi_Saree.png";

const CarouselSection = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        stopOnHover
        showThumbs={false}
      > 
      <div className="carousel-item">
          <img src={kanthaEmbroidery} alt="kanthaEmbroidery" />
          <div className="carousel-caption">
            <h2>Kantha Embroidery</h2>
            <p>Colorful stitching creating intricate patterns in textile art.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={kashmiriCarpets} alt="Kashmiri Carpets" />
          <div className="carousel-caption">
            <h2>Kashmiri Carpets</h2>
            <p>Exquisite handmade carpets from Kashmir, known for intricate designs</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={meenakariRing} alt="meenakariRing" />
          <div className="carousel-caption">
            <h2>Meenakari Jewellery</h2>
            <p>Vibrant enamel jewelry with rich cultural heritage from Rajasthan</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={pottery} alt="pottery" />
          <div className="carousel-caption">
            <h2>Pottery</h2>
            <p>Sculpting clay into decorative ceramic objects.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={madhubaniPaintings} alt="madhubaniPaintings" />
          <div className="carousel-caption">
            <h2>Madhubani Paintings</h2>
            <p>A perfect gift for admirers of the traditional art of Bihar.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={bidriware} alt="bidriware1" />
          <div className="carousel-caption">
            <h2>Bidriware</h2>
            <p>Silver inlay work on black metalware from Bidar, India.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={woodcarvings} alt="woodcarvings" />
          <div className="carousel-caption">
            <h2>Wood Carvings</h2>
            <p>Beautiful wooden sculptures and designs</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={ajrakhTextiles} alt="ajrakhTextiles" />
          <div className="carousel-caption">
            <h2>Ajrakh Textiles</h2>
            <p>Traditional block-printed textiles with intricate geometric patterns and vibrant colors</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={banarasiSaree} alt="banarasiSaree" />
          <div className="carousel-caption">
            <h2>Banarasi SilK Saree</h2>
            <p>Luxurious silk sarees from Banaras, known for their intricate weaving.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
