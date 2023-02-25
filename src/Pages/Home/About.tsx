import React, { useEffect, useRef } from 'react';
import about1 from '@Assets/Images/Home/pic_about1.png';
import { useWindowScroll } from 'react-use';
import { Link } from 'react-router-dom';
import RoutesString from 'src/Utils/RoutesString';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { y: scrollY } = useWindowScroll();

  useEffect(() => {
    if (scrollY <= 700) aboutRef.current?.classList.remove('on');
    else aboutRef.current?.classList.add('on');
  }, [scrollY]);

  return (
    <div ref={aboutRef} className="about">
      <div className="about-text">
        <div className="top">ABOUT</div>
        <div className="title">
          <strong>MAKE FUN PLACE</strong>
          <strong>WONDER PLACE</strong>
        </div>
        <div className="desc">
          <span>{`국내외 'UP & COMING' 브랜드, 'FRESH & UNIQUE'`}</span>
          <span>{`신진 디자이너 레이블, 'TRENDY & SEASONAL ESSENTIAL' 패션 제품 등`}</span>
          <span>{`다양한 'FASHION TO LIFESTYLE' 아이템을 함께 구성하여`}</span>
          <span>{`보다 새로운 즐거움을 줄 수 있는 공간을 추구 합니다.`}</span>
        </div>
        <Link to={RoutesString.Company} className="btn">
          MORE
        </Link>
      </div>
      <div className="about-img">
        <img src={about1} alt={about1} />
      </div>
    </div>
  );
};

export default About;
