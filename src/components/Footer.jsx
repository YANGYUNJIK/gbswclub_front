import React from 'react';
import gbswLogo from '../assets/img/gbsw_logo.png';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo-section">
          <img src={gbswLogo} alt="경북소프트웨어마이스터고 로고" />
        </div>
        <div className="footer-info">
          <p>사이트명 : 전공 동아리 홍보 및 관리 웹사이트 개발</p>
          <p>주소 : 경상북도 의성군 봉양면 봉호로 14</p>
          <p className="footer-note">
            이 사이트는 경북소프트웨어마이스터고등학교 학생들의 동아리 산출물과 개인 포트폴리오 관리를 위해 만들어진 웹사이트입니다.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
