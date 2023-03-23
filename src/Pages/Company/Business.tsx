import React from 'react';
import picBusiness01 from '@Assets/Images/Company/pic_business01.jpeg';
import picBusiness02 from '@Assets/Images/Company/pic_business02.jpeg';
import picBusiness03 from '@Assets/Images/Company/pic_business03.jpeg';
import picBusiness04 from '@Assets/Images/Company/pic_business04.jpeg';

const CARD_LIST = [
  {
    title: '편집SHOP',
    src: picBusiness01,
    text: '대한민국 주요 상권에 차별화된 스타일과 룩을 편집하여 선보이는\n편집숍으로 다양성을 겸비한 새로운 브랜드 개발을 겸하며\n신선한 재미를 선사하는 라이프 스타일 편집 숍입니다.',
  },
  {
    title: 'BRAND INCTUBATING',
    src: picBusiness02,
    text: '대한민국 주요 상권에 차별화된 스타일과 룩을 편집하여 선보이는\n편집숍으로 다양성을 겸비한 새로운 브랜드 개발을 겸하며\n신선한 재미를 선사하는 라이프 스타일 편집 숍입니다.',
  },
  {
    title: '원더아리아',
    src: picBusiness03,
    text: '대한민국 주요 상권에 차별화된 스타일과 룩을 편집하여 선보이는\n편집숍으로 다양성을 겸비한 새로운 브랜드 개발을 겸하며\n신선한 재미를 선사하는 라이프 스타일 편집 숍입니다.',
  },
  {
    title: '온라인 MALL',
    src: picBusiness04,
    text: '대한민국 주요 상권에 차별화된 스타일과 룩을 편집하여 선보이는\n편집숍으로 다양성을 겸비한 새로운 브랜드 개발을 겸하며\n신선한 재미를 선사하는 라이프 스타일 편집 숍입니다.',
  },
];

const Business = () => {
  const renderCardList = () => {
    return CARD_LIST.map((item) => {
      return (
        <li key={item.title}>
          <div className="csbl-box">
            <span className="csbl-pop">{item.title}</span>
            <img src={item.src} alt={item.src} />
            <div className="csbl-wrap">
              <span className="csbl-title">{item.title}</span>
              <p className="csbl-text">
                <span>{item.text}</span>
              </p>
            </div>
            <i />
          </div>
        </li>
      );
    });
  };

  return (
    <section className="cs-business cs-area">
      <div className="wrap">
        <strong className="cs-title">사업영역</strong>
        <div className="cs-content">
          <p className="text">
            원더플레이스는 예술과 상업이 만나는 복합문화 공간이자 국내 최대의 편집숍으로 패션 트렌드에 적합한 다양한
            브랜드와 문화 콘텐츠를 발굴하여 고객에게 제안함은 물론{' '}
            <strong>패션 브랜드가 고객과 같이 성장할 수 있도록 다양한 지원</strong>을 하고 있습니다.
          </p>
          <div className="csb-list">{renderCardList()}</div>
        </div>
      </div>
    </section>
  );
};

export default Business;
