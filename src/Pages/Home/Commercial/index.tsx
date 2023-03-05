import React, { useEffect, useRef, useState } from 'react';
import bg01 from '@Assets/Images/Home/bg01.jpg';
import bg02 from '@Assets/Images/Home/bg02.jpg';
import bg03 from '@Assets/Images/Home/bg03.jpg';
import classNames from 'classnames';
import { useInterval, useWindowScroll, useWindowSize } from 'react-use';
import './Commercial.scss';

const BACKGROUNDS = [
  { key: '01', src: bg01 },
  { key: '02', src: bg02 },
  { key: '03', src: bg03 },
];
const Commercial = () => {
  const stageOuterRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const switchsRef = useRef<HTMLDivElement>(null);

  const [activeKey, setActiveKey] = useState<number>(0);
  const [isMouseGrap, setMouseGrap] = useState<boolean>(false);
  const { y: scrollY } = useWindowScroll();
  const { width } = useWindowSize();

  const getActivatedKey = () => {
    if (switchsRef.current) {
      let key = activeKey;

      [...switchsRef.current.children].forEach((child, index) => {
        if (child.classList.contains('active')) {
          key = index;
        }
      });
      return key;
    }
    return activeKey;
  };

  const moveBackground = (x = 0) => {
    if (stageRef.current && stageOuterRef.current && switchsRef.current) {
      const clientWidth = stageOuterRef.current.clientWidth;
      const totalWidth = clientWidth * BACKGROUNDS.length;
      const key = getActivatedKey();

      stageRef.current.style.width = `${totalWidth}px`;
      stageRef.current.style.transform = `translate3d(${-key * clientWidth + x}px, 0px, 0px)`;
    }
  };

  const handleClickSwitch = (index: number) => setActiveKey(index);
  const handleClickPrev = (key = activeKey) => setActiveKey(key > 0 ? key - 1 : BACKGROUNDS.length - 1);
  const handleClickNext = (key = activeKey) => setActiveKey(key < BACKGROUNDS.length - 1 ? key + 1 : 0);

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
    setMouseGrap(true);
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
          handleClickPrev(key);
        }
      } else if (movementX <= 0) {
        if (key < BACKGROUNDS.length - 1) {
          handleClickNext(key);
        }
      }

      moveBackground();
    }

    movementX = undefined;
    startX = undefined;
    setMouseGrap(false);
  };

  useInterval(
    () => {
      handleClickNext();
    },
    isMouseGrap ? null : 5000,
  );

  useEffect(() => {
    if (stageOuterRef.current) {
      if (scrollY > 101) {
        stageOuterRef.current.style.transform = 'translateY(10%) scale(1.2)';
      } else if (scrollY > 0) {
        stageOuterRef.current.style.transform = 'translateY(5%) scale(1.1)';
      } else if (scrollY <= 0) {
        stageOuterRef.current.style.transform = '';
      }
    }
  }, [scrollY]);

  useEffect(() => {
    moveBackground();
  }, [activeKey, width]);

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="commercial">
      <div className="cm-switch">
        <div ref={switchsRef} className="switchs">
          {BACKGROUNDS.map((item, index) => (
            <div
              key={item.key}
              className={classNames('switch', { active: index === activeKey })}
              onClick={() => handleClickSwitch(index)}
            >
              <i />
              <span>{item.key}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="cm-text">
        <div className="title">
          <span>NO.1</span>
          <span>패션 라이프 스타일 편집숍</span>
          <strong>원더플레이스</strong>
        </div>
        <div className="desc">
          <strong>A PLACE OF WONDER</strong>
          <span>원더플레이스는 놀라움이 가득한 장소 A PLACE OF WONDER 라는 의미로</span>
          <span>다양한 패션+라이프를 담은 편집을 통해 차별화된 스타일링과 룩을</span>
          <span>지향하는 패션 라이프 스타일 편집숍입니다.</span>
        </div>
      </div>
      <div className="cm-carousel">
        <div ref={stageOuterRef} className="carousel-stage-outer">
          <div ref={stageRef} className="carousel-stage">
            {BACKGROUNDS.map((item) => (
              <img key={item.key} src={item.src} alt={item.src} style={{ width: stageOuterRef.current?.clientWidth }} />
            ))}
          </div>
        </div>
        <div className="carousel-nav">
          <div className="nav prev" onClick={() => handleClickPrev()} />
          <div className="nav next" onClick={() => handleClickNext()} />
        </div>
      </div>
    </div>
  );
};

export default Commercial;
