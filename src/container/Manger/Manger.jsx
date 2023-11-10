import React from 'react';

import { images } from '../../constants';

import './Manger.css';

const Manger = () => ( <div className="app__bg app__wrapper section__padding">
<div className="app__wrapper_img app__wrapper_img-reverse">
  <img src={images.chef} alt="chef_image" />
</div>
<div className="app__wrapper_info">
  <h1 className="headtext__cormorant">What we believe in</h1>

  <div className="app__chef-content">
    <div className="app__chef-content_quote">
      <img src={images.quote} alt="quote_image" />
      <p className="p__opensans">At Studio Osama El Hawraa, our manager believes in </p>
    </div>
    <p className="p__opensans"> capturing authentic moments with artistic vision, prioritizing a client-centric approach, embracing continuous innovation, and maintaining an unwavering commitment to excellence since our establishment in 2015. </p>
  </div>

  <div className="app__chef-sign">
    <p>Osama El hawraa</p>
    <p className="p__opensans"> Founder</p>
  </div>
</div>
</div>
);

export default Manger;
