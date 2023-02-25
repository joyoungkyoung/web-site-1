import React from 'react';
import Commercial from './Commercial';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <Commercial />
      <div>about</div>
      <div>text anim</div>
      <div>brand</div>
      <div>contact</div>
    </div>
  );
};

export default Home;
