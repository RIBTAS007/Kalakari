
import decor from './images/decor.png';
import sec4 from './images/section4.png';
import "./Section4.css";

const Section4 = () => { 

    return (

        <div className="main-content">
        <section className="feature-section">
          <div className="feature-box">
            <div className="feature-content">
              <h2 className="feature-title">Embrace the Timeless Beauty of India's Traditional Art</h2>
              <p className="feature-description">India's traditional art, with its rich hues and intricate patterns, brings life and elegance to any space. Adorning your walls with these exquisite pieces, steeped in history and tradition, not only evokes a sense of heritage but also elevates your surroundings to a realm of luxury, sophistication, and cultural depth.</p>
              <button className="custom-button">Connect with Us</button>
            </div>
            <div className="feature-image">
              <img src={sec4} alt="Feature Image"/>
            </div>
          </div>
        </section>
      </div>

    );
}

export default Section4;