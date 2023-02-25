import React from 'react';
import Home from '@Pages/Home';
import RoutesString from 'src/Utils/RoutesString';

interface PageProps {
  name: string;
  component: JSX.Element;
  exact: boolean;
}

const Pages: PageProps[] = [{ name: RoutesString.Home, component: <Home />, exact: true }];

export default Pages;
