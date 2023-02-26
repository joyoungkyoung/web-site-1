import { clamp } from '@Utils/Function';
import React, { useEffect, useRef } from 'react';
import { usePrevious, useWindowScroll } from 'react-use';

let translateX = 40;
const TextAnimation = () => {
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const { y: scrollY } = useWindowScroll();
  const prevScrollY = usePrevious(scrollY);
  const tick = 0.031;

  useEffect(() => {
    if (textRef1.current && textRef2.current) {
      const diff = scrollY - (prevScrollY || 0);

      if (scrollY > 1200) {
        translateX = clamp(translateX - tick * diff, -9999, 40);
      } else {
        translateX = 40;
      }

      textRef1.current.style.transform = `translate(${translateX}%,0px)`;
      textRef2.current.style.transform = `translate(${translateX * -1}%,0px)`;
    }
  }, [scrollY]);

  return (
    <div className="text-service">
      <strong ref={textRef1} className="text1">
        A PLACE OF WONDER A PLACE OF WONDER
      </strong>
      <strong ref={textRef2} className="text2">
        A PLACE OF WONDER A PLACE OF WONDER
      </strong>
    </div>
  );
};

export default TextAnimation;
