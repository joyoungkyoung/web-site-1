import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useWindowScroll } from 'react-use';
import RoutesString from 'src/Utils/RoutesString';
import { MENUS } from './Header.data';
import './Header.scss';

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const goBottomRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const { y: scrollY } = useWindowScroll();

  useEffect(() => {
    if (scrollY > 0) headerRef.current?.classList.add('on');
    else headerRef.current?.classList.remove('on');

    if (scrollY > 100) goBottomRef.current?.classList.add('on');
    else goBottomRef.current?.classList.remove('on');
  }, [scrollY]);

  const handleClickDrawerMenu = () => {
    drawerRef.current?.classList.toggle('on');
    drawerRef.current?.classList.toggle('off');

    headerRef.current?.classList.toggle('open');
    menuRef.current?.classList.toggle('hide');
    goBottomRef.current?.classList.toggle('hide');
  };

  const handleGoBottom = () => {
    // const home = document.getElementById('home-container'); // home?.scrollHeight

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={headerRef} className="header">
      <Link to={RoutesString.Home} className="logo">
        <div />
      </Link>
      <div className="menu-wrapper">
        <div ref={menuRef} className="menu">
          {MENUS.map((item) => (
            <Link key={item.id} to={item.path}>
              {item.text}
            </Link>
          ))}
        </div>

        <div ref={drawerRef} className="drawer-menu off" onClick={handleClickDrawerMenu}>
          <i />
        </div>
      </div>

      <div ref={goBottomRef} className="go-bottom" onClick={handleGoBottom}>
        <i />
      </div>

      <div className="menu-detail">
        <div className="menu-detail-wrapper">
          <div className="typography">
            <Link to={RoutesString.Company} onClick={handleClickDrawerMenu}>
              <span>COMPANY</span>
            </Link>
            <Link to={RoutesString.Recruit}>
              <span>RECRUIT</span>
            </Link>
            <Link to={RoutesString.Brand}>
              <span>BRAND</span>
            </Link>
            <Link to={RoutesString.Shop}>
              <span>SHOP</span>
            </Link>
            <Link to={RoutesString.Contact}>
              <span>CONTACT</span>
            </Link>
          </div>
          <div className="desc">
            <span>NO.1</span>
            <span>패션 라이프 스타일 편집숍</span>
            <strong>원더플레이스</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
