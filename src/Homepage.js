
import './Homepage.css';
import './fonts/fonts.css';
import CarouselSection from './Section2';
import Section3 from './Section3';

const Homepage = () => {

  return (
    <>
    <div className="nav-div"></div>
      <div className="landing-page">
        <div className="content">
          <h1 className="title">KALAKARI</h1>
          <h2 className="subheading">
            Curated Elegance. Delivered to your Doorstep.
          </h2>
        </div>
      </div>
      <div className='sectionTwoBg'>
      <CarouselSection/> 
      </div>
      <div className='sectionThreeBg'>
      <Section3/>
      </div>
      
      
    </>
  );
};

export default Homepage;
