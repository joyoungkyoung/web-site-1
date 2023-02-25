import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-sns">
        <span>
          <Link to={'https://www.facebook.com/'}>Facebook</Link>
        </span>
        <span>
          <Link to={'https://www.instagram.com/'}>instagram</Link>
        </span>
        <span>
          <Link to={'https://www.youtube.com/'}>Youtube</Link>
        </span>
      </div>
      <div className="footer-copyright">
        <div>COPYRIGHT</div>
        <strong>© WONDERPLACE</strong>
        <div>ALL RIGHTS RESERVED.</div>
      </div>
      <div className="footer-contact">
        <div className="contact-row">
          <strong>TEL</strong>
          <span className="link">
            <Link to={''}>1688-3508</Link>
          </span>
        </div>
        <div className="contact-row">
          <strong>E-MAIL</strong>
          <span className="link">
            <Link to={''}>help@wonderplace.co.kr</Link>
          </span>
        </div>
        <div className="contact-row">
          <strong>ADDRESS</strong>
          <span className="address">04782 서울특별시 가나구 가나다로1길 23 (가나동1가) 가나다라마타워 1층</span>
        </div>
      </div>
      <div className="footer-terms">
        <Link to={''}>개인정보처리방침</Link>
        <div>대표이사 : 홍길동</div>
        <div>사업자 등록번호 : 123-12-12345</div>
      </div>
    </div>
  );
};

export default Footer;
