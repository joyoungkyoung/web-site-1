import React from 'react';
import RoutesString from '@Utils/RoutesString';
import { createBrowserRouter } from 'react-router-dom';
import App from 'src/App';
import Company from '@Pages/Company';
import Home from '@Pages/Home';

const router = createBrowserRouter([
  {
    path: RoutesString.Home,
    element: <App />,
    children: [
      { path: RoutesString.Home, element: <Home /> },
      { path: RoutesString.Company, element: <Company /> },
    ],
  },
]);

export default router;
