import React from 'react';

import { AboutUs, Manger, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Manger />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
