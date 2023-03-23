import React from 'react';
import './Company.scss';
import Top from './Top';
import About from './About';
import History from './History';
import Vision from './Vision';
import Business from './Business';
import Post from './Post';

const Company = () => {
  return (
    <div className="company-container">
      <Top />
      <About />
      <History />
      <Vision />
      <Business />
      <Post />
    </div>
  );
};

export default Company;
