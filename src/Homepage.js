
import './Homepage.css';
import './fonts/fonts.css';
import CarouselSection from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Footer from './Footer';
import Section1 from './Section1';

const Homepage = () => {

  return (
    <>
    <div className="nav-div"></div>
      <Section1/>
      <div className='sectionTwoBg'>
      <CarouselSection/> 
      </div>
      <div className='sectionThreeBg'>
      <Section3/>
      </div>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
      
      
    </>
  );
};

export default Homepage;
