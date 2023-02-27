import React from 'react';
import About from './About';
import Commercial from './Commercial';
import TextAnimation from './TextAnimation';
import './Home.scss';
import Brand from './Brand';
import Contact from './Contact';

const Home = () => {
  return (
    <div id="home-container" className="home-container">
      <Commercial />
      <About />
      <TextAnimation />
      <Brand />
      <Contact />
    </div>
  );
};

export default Home;
