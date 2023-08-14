import React, { useState, useEffect } from 'react';
import './TeamIntroduction.css'; // TeamIntroduction 컴포넌트와 스타일을 연결하는 CSS 파일
import { FaInstagram, FaGithub } from 'react-icons/fa';

const TeamIntroduction = () => {
  const memberBackgroundColors = [
    '#fe6d73', // 양예은
    '#ffa200', // 김희은
    '#a7c957', // 박민정
    '#1768ac', // 김산이
    '#6db1bf', // 김진우
    '#f39a9d', // 방민식
  ];

  const [showTopButton, setShowTopButton] = useState(false);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 탑 버튼 클릭 핸들러
  const handleTopButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="team-introduction">
      <h1>
        <span className="highlight">I</span> a
        <span className="highlight">M</span>
        <span className="highlight"> CA</span>lendar
      </h1>
      <div className="introParagraph">
        <p>
          <br />
          IMCA는 <span className="boldSpan">"I am Calendar"</span>의 약자로,
          예술 커뮤니티를 위한 서비스를 개발하는 팀입니다. <br />
          우리의 목표는 연극과 뮤지컬의 일정을 캘린더로 표시하고 정보를 제공하여
          <br />
          예술 관련 이벤트를 즐기는 사람들에게 유용한 서비스를 제공하는
          것입니다.
        </p>
      </div>
      <div className="frontEndDescription">
        <h2>" Frontend "</h2>
        <p>
          프론트엔드는 사용자들이 웹 애플리케이션과 상호작용하는 부분을
          담당합니다.
          <br />
          주로 클라이언트 사이드 개발로, 사용자 인터페이스를 구성하고 사용자가
          웹 서비스를 편리하게 이용할 수 있도록 합니다.
          <br />
          우리 팀의 프론트엔드 개발자들은 다음과 같은 역할을 수행합니다.
        </p>
        <div className="frontEndDescription addParagraph">
          <p>
            사용자 인터페이스(UI) 설계 및 구현, 캘린더 뷰어 개발, 이벤트 정보
            표시와 커뮤니티 기능 구현, 프론트엔드 테스팅
          </p>
        </div>
      </div>
      {/* 프론트엔드 개발자 정보 */}
      <div className="team-members">
        {/* 양예은 팀원 정보 */}
        <div className="team-member">
          <div
            className="team-member-container"
            style={{ backgroundColor: memberBackgroundColors[0] }}
          >
            <img src="/images/DEV-Yangkong.png" alt="양콩" />
          </div>
          <div className="team-member-content">
            <h4>양예은(양콩)</h4>
            <p className="role">💛 Frontend 💛</p>
            <p className="roleDevelop">" IMCA 소개 & 콘텐츠 "</p>
            <p className="roleDevelop2">
              " <span className="highlight3">콘텐츠</span>{' '}
              <span className="highlight2">Backend Support</span>💙 "
            </p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/hi._.yangkong/"
                className="instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={35} />
              </a>
              <a
                href="https://github.com/DEV-Yangkong"
                className="github"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={35} />
              </a>
            </div>
          </div>
        </div>
        {/* 김희은 팀원 정보 */}
        <div className="team-member">
          <div
            className="team-member-container"
            style={{ backgroundColor: memberBackgroundColors[1] }}
          >
            <img src="/images/hiheeen.png" alt="희은" />
          </div>
          <div className="team-member-content">
            <h4>김희은</h4>
            <p className="role">💛 Frontend 💛</p>
            <p className="roleDevelop">" 메인페이지 & 공연소식 "</p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/_hiniminih_/"
                className="instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={35} />
              </a>
              <a
                href="https://github.com/hiheeen"
                className="github"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={35} />
              </a>
            </div>
          </div>
        </div>
        {/* 박민정 팀원 정보 */}
        <div className="team-member">
          <div
            className="team-member-container"
            style={{ backgroundColor: memberBackgroundColors[2] }}
          >
            <img src="/images/minz0ey.png" alt="민정잉" />
          </div>
          <div className="team-member-content">
            <h4>박민정(민정잉)</h4>
            <p className="role">💛 Frontend 💛</p>
            <p className="roleDevelop">" 내 캘린더 및 회원관리 "</p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/minz0ey/"
                className="instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={35} />
              </a>
              <a
                href="https://github.com/MINZOEY"
                className="github"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={35} />
              </a>
            </div>
          </div>
        </div>
        {/* 김산이 팀원 정보 */}
        <div className="team-member">
          <div
            className="team-member-container"
            style={{ backgroundColor: memberBackgroundColors[3] }}
          >
            <img src="/images/tanmtn.png" alt="탄산" />
          </div>
          <div className="team-member-content">
            <h4>김산이</h4>
            <p className="role">💛 Frontend 💛</p>
            <p className="roleDevelop">" 커뮤니티 & 관리자페이지 "</p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/_tancong_"
                className="instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={35} />
              </a>
              <a
                href="https://github.com/tanmtn"
                className="github"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={35} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 백엔드 개발자 정보 */}
      <div className="backEndDescription">
        <h2>" Backend "</h2>
        <p>
          백엔드는 웹 애플리케이션의 서버 측 개발을 담당합니다.
          <br />
          주로 서버 사이드 개발로, 프론트엔드와 사용자의 요청을 처리하고
          데이터를 관리합니다.
          <br />
          우리 팀의 백엔드 개발자들은 다음과 같은 역할을 수행합니다.
        </p>
        <div className="backEndDescription addParagraph">
          <p>
            서버 개발과 데이터베이스 설계, 캘린더와 이벤트 데이터 관리, 사용자
            인증 및 보안 기능 구현, 백엔드 테스팅
          </p>
        </div>
      </div>
      <div className="team-members">
        {/* 김진우 팀원 정보 */}
        <div className="team-member">
          <div
            className="team-member-container"
            style={{ backgroundColor: memberBackgroundColors[4] }}
          >
            <img src="/images/sds7629.png" alt="지이누" />
          </div>
          <div className="team-member-content">
            <h4>김진우(지이누)</h4>
            <p className="role">💙 Backend 💙</p>
            <p className="roleDevelop">" 회원정보 & 캘린더 "</p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/sds7629/"
                className="instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={35} />
              </a>
              <a
                href="https://github.com/sds7629"
                className="github"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={35} />
              </a>
            </div>
          </div>
        </div>
        {/* 방민식 팀원 정보 */}
        <div className="team-member">
          <div
            className="team-member-container"
            style={{ backgroundColor: memberBackgroundColors[5] }}
          >
            <img src="/images/spaceenterbs.png" alt="빵식" />
          </div>
          <div className="team-member-content">
            <h4>방민식(빵식)</h4>
            <p className="role">💙 Backend 💙</p>
            <p className="roleDevelop">" 커뮤니티 & 컨텐츠 "</p>
            <div className="social-links">
              <a
                href="https://www.instagram.com/spaceenterbs/"
                className="instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={35} />
              </a>
              <a
                href="https://github.com/spaceenterbs"
                className="github"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={35} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {showTopButton && (
        <button className="top-button" onClick={handleTopButtonClick}>
          TOP
        </button>
      )}
    </div>
  );
};

export default TeamIntroduction;
