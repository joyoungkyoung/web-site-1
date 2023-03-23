import Footer from '@Components/Footer';
import Header from '@Components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default App;
