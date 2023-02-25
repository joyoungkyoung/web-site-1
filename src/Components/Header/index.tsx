import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import RoutesString from 'src/Utils/RoutesString';
import { MENUS } from './Header.data';
import './Header.scss';

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const { y: scrollY } = useWindowScroll();

  useEffect(() => {
    if (scrollY > 0) headerRef.current?.classList.add('on');
    else headerRef.current?.classList.remove('on');
  }, [scrollY]);

  const handleClickDrawerMenu = () => {
    drawerRef.current?.classList.toggle('on');
    drawerRef.current?.classList.toggle('off');

    headerRef.current?.classList.toggle('open');
  };

  return (
    <div ref={headerRef} className="header">
      <Link to={RoutesString.Home}>
        <img className="logo" />
      </Link>
      <div className="menu-wrapper">
        {MENUS.map((item) => (
          <Link key={item.id} to={item.path} className="menu">
            {item.text}
          </Link>
        ))}
        <div ref={drawerRef} className="drawer-menu off" onClick={handleClickDrawerMenu}>
          <i />
        </div>
      </div>
    </div>
  );
};

export default Header;
