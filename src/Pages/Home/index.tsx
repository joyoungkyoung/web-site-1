import React from 'react';
import About from './About';
import Commercial from './Commercial';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <Commercial />
      <About />
      <div>text anim</div>
      <div>brand</div>
      <div>contact</div>
    </div>
  );
};

export default Home;
