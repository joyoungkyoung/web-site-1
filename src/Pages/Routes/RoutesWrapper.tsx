import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from '@Components/Header';
import Pages from './Pages';

function RoutesWrapper() {
  const parseExact = (name: string, exact?: boolean) => `${name}${exact ? '/*' : ''}`;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {Pages.map((page) => (
          <Route key={page.name} path={parseExact(page.name, page.exact)} element={page.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesWrapper;
