import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-overlay flex__center">
     
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Welcome to Studio Osama El Hawraa, where moments turn into timeless art. We are a passionate team of photographers dedicated to capturing the essence of your special moments with creativity and finesse.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      
      <div className="split flex__center">
        
      </div>


      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Studio Osama El Hawraa was founded in the vibrant year of 2015, with a vision to redefine the art of photography. What began as a passion project has evolved into a hub for capturing timeless moments with creativity and precision.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
