import React from 'react';
import picAbout1 from '@Assets/Images/Company/pic_about1.png';

const About = () => {
  return (
    <section className="cs-about cs-area cs-gray">
      <div className="wrap">
        <strong className="cs-title">ABOUT</strong>
        <div className="cs-content">
          <p className="text">
            국내외 <strong>{"'UP & COMING'"}</strong> 브랜드, <strong>{"'FRESH & UNIQUE'"}</strong> 신진 디자이너
            레이블, <strong>{"'TRENDY & SEASONAL ESSENTIAL'"}</strong> 패션 제품 등 다양한{' '}
            <strong>{"'FASHION TO LIFESTYLE'"}</strong> 아이템을 함께 구성하여 보다 새로운 즐거움을 줄 수 있는 공간을
            추구합니다.
          </p>
          <div className="csa-text">
            <ul>
              <li>
                <strong>대표이사</strong>
                <span>김영한</span>
              </li>
              <li>
                <strong>설립일</strong>
                <span>2011.04</span>
              </li>
              <li>
                <strong>Main business</strong>
                <span>편집샵 (Select Shop, Multi-brand store)</span>
              </li>
              <li>
                <strong>업종</strong>
                <span>패션 유통 . 제조</span>
              </li>
              <li>
                <strong>본사</strong>
                <span>서울시 성동구</span>
              </li>
              <li>
                <strong>매장현황</strong>
                <span>
                  69개(2022.11.30 기준)
                  <br />
                  원더플레이스 55개 + 아웃도어프로덕츠 12개
                </span>
              </li>
              <li>
                <strong>온라인몰</strong>
                <span>https://www.wonderplace.co.kr/</span>
              </li>
              <li>
                <strong>홈페이지</strong>
                <span>https://www.wonderplace.com/</span>
              </li>
            </ul>
          </div>
          <div className="csa-pic">
            <img src={picAbout1} alt={picAbout1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
