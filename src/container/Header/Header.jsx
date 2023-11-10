import React from 'react';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h2 className="sub">Lens of Creative Excellence </h2>
      <h1 className="app__header-h1">Capturing Creativity Through Our Lens</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Welcome to Osama El-Hawraa Studio for Photography, where art and professionalism converge to create unforgettable moments. We are here to provide a unique photography experience characterized by creativity and quality. Whether you're looking for an artistic family photo session or professional event photography, we offer our services with a distinctive style that reflects your vision. Explore the beauty of photography with us, where professionalism meets creativity in every shot. Contact us today to book a photography session that captures your uniqueness, leaving a beautiful impact in every image.</p>
      <button type="button" className="custom__button">Explore</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
