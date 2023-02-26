import React, { useEffect, useRef, useState } from 'react';
import { usePrevious, useWindowScroll } from 'react-use';
import classNames from 'classnames';
import { BRAND_BACKGROUNDS } from './Home.data';

interface ActiveProps {
  activeKey: number;
  action: 'switch' | 'carousel';
}
const Brand = () => {
  const stageOuterRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const switchsRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState<ActiveProps>({ activeKey: 0, action: 'switch' });
  const { y: scrollY } = useWindowScroll();
  const prevActive = usePrevious(active);

  const getActivatedKey = () => {
    if (switchsRef.current) {
      let key = active.activeKey;

      [...switchsRef.current.children].forEach((child, index) => {
        if (child.classList.contains('active')) {
          key = index;
        }
      });
      return key;
    }
    return active.activeKey;
  };

  const moveBackground = (x = 0) => {
    if (stageRef.current && stageOuterRef.current && switchsRef.current) {
      const clientWidth = stageOuterRef.current.clientWidth;
      const totalWidth = clientWidth * BRAND_BACKGROUNDS.length;
      const key = getActivatedKey();

      stageRef.current.style.width = `${totalWidth}px`;
      stageRef.current.style.transition = 'all 0.5s ease 0s';
      stageRef.current.style.transform = `translate3d(${-key * clientWidth + x}px, 0px, 0px)`;
    }
  };

  const fadeBackground = (x = 0) => {
    if (stageRef.current && stageOuterRef.current && switchsRef.current) {
      const clientWidth = stageOuterRef.current.clientWidth;
      const totalWidth = clientWidth * BRAND_BACKGROUNDS.length;
      const key = getActivatedKey();

      stageRef.current.style.width = `${totalWidth}px`;
      stageRef.current.style.transition = 'none';
      stageRef.current.style.transform = `translate3d(${-key * clientWidth + x}px, 0px, 0px)`;

      const target = stageRef.current.children[key].children[0] as HTMLDivElement;

      target.style.backgroundImage = `url(${BRAND_BACKGROUNDS[key].src})`;
    }
  };

  const handleClickSwitch = (index: number) => {
    // if (stageRef.current) {
    //   const target = stageRef.current.children[index].children[0] as HTMLDivElement;

    //   target.style.backgroundImage = `url(${BRAND_BACKGROUNDS[active.activeKey].src})`;
    //   console.log('미리바꿔둠:', target.style.backgroundImage);
    // }

    setActive({ action: 'switch', activeKey: index });
  };
  const handleSlidePrev = (key = active.activeKey) =>
    setActive({ action: 'carousel', activeKey: key > 0 ? key - 1 : BRAND_BACKGROUNDS.length - 1 });
  const handleSlideNext = (key = active.activeKey) =>
    setActive({ action: 'carousel', activeKey: key < BRAND_BACKGROUNDS.length - 1 ? key + 1 : 0 });

  let startX: number | undefined;
  let movementX: number | undefined;

  const handleMouseMove = (e: MouseEvent) => {
    if (startX !== undefined) {
      movementX = e.offsetX - startX;
      stageRef.current?.classList.add('grap');
      moveBackground(movementX / 3);
    }
  };

  const handleMouseDown = (e: MouseEvent) => {
    startX = e.offsetX;
    document.addEventListener('mousemove', handleMouseMove);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    stageRef.current?.classList.remove('grap');
    const key = getActivatedKey();

    if (movementX !== undefined) {
      if (movementX > 0) {
        if (key > 0) {
          handleSlidePrev(key);
        }
      } else if (movementX <= 0) {
        if (key < BRAND_BACKGROUNDS.length - 1) {
          handleSlideNext(key);
        }
      }

      moveBackground();
    }

    movementX = undefined;
    startX = undefined;
  };

  useEffect(() => {
    if (stageRef.current) {
      if (scrollY > 2800) {
        [...stageRef.current.children].forEach((item) => {
          (item.children[0] as HTMLDivElement).classList.add('expand');
        });
      } else {
        [...stageRef.current.children].forEach((item) => {
          (item.children[0] as HTMLDivElement).classList.remove('expand');
        });
      }
    }
  }, [scrollY]);

  useEffect(() => {
    if (active.action === 'carousel') {
      moveBackground();
    } else {
      fadeBackground();
    }
  }, [active]);

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="brand">
      <div className="title-wrapper">
        <strong className="brand-top">BRAND</strong>
        <div className="brand-text">
          <div className="title">
            <strong>WONDER PLACE</strong>
            <strong>BRANDS</strong>
          </div>
          <div className="desc">
            <span>
              우리는, 원더플레이스만의 새로운 시각으로 패션 브랜드 전개 및 새로운 콘텐츠와 지속 가능한 브랜드 가치를
              제공합니다.
            </span>
            <span>
              우리는, 패션을 통해 고객이 원하는 상품을, 고객이 원하는 시간과 장소에서 고객이 만족하는 합리적인 가격으로,
              고객의 더 높은 만족을 위하여 즐겁고 합리적인 소비생활에 기여합니다.
            </span>
          </div>
        </div>
      </div>

      <div className="brand-carousel">
        <div ref={stageOuterRef} className="carousel-stage-outer">
          <div ref={stageRef} className="carousel-stage">
            {BRAND_BACKGROUNDS.map((item) => (
              <div
                key={item.key}
                className="carousel-item"
                style={{ width: stageOuterRef.current?.clientWidth, height: '837px' }}
              >
                <div className="image" style={{ backgroundImage: `url(${item.src})` }} />
              </div>
            ))}
          </div>
          <span className="text-stroke">BRANDS</span>
        </div>
      </div>
      <div className="brand-switch">
        <div ref={switchsRef} className="switchs">
          {BRAND_BACKGROUNDS.map((item, index) => (
            <div
              key={item.key}
              className={classNames('switch', { active: index === active.activeKey })}
              onClick={() => handleClickSwitch(index)}
            >
              <span>{item.key}</span>
              <i />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
