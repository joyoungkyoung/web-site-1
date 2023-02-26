import useScript from '@Hooks/useScript';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import markerPng from '@Assets/Images/Contact/marker.png';

const Contact = () => {
  const [loading] = useScript(
    `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_APPKEY}&autoload=false`,
  );
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const kakao = (window as any).kakao;

    if (kakao) {
      kakao.maps.load(() => {
        const options = {
          center: new kakao.maps.LatLng(37.54699, 127.09598), // 지도의 중심좌표
          level: 4, // 지도의 확대 레벨
        };
        // 지도 객체 생성
        const map = new kakao.maps.Map(mapRef.current, options);

        const imageSrc = markerPng; // 마커이미지의 주소입니다
        const imageSize = new kakao.maps.Size(54, 88); // 마커이미지의 크기입니다
        const imageOption = { offset: new kakao.maps.Point(27, 88) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
        const markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    }
  }, [loading]);

  return (
    <div className="contact">
      <div className="wrap">
        <div className="text-wrapper">
          <strong className="top">CONTACT</strong>
          <div className="title">
            <strong>고객의</strong>
            <strong>패션 라이프를 책임질</strong>
            <strong>원더플레이스와 함께</strong>
          </div>
          <div className="desc">
            <span>서울 성동구 성수일로6길 33</span>
            <span>(성수동2가) 아연디지털타워 5층</span>
          </div>
          <Link to={''} className="email">
            help@wonderplace.co.kr
          </Link>
          <Link to={''} className="btn">
            KAKAO MAP
          </Link>
        </div>
        <div ref={mapRef} className={'contact-map'} />
      </div>
    </div>
  );
};

export default Contact;
