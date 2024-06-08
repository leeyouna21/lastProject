import React, { useState, useEffect } from 'react';
import Hobby_btn from './Hobby_btn';

const Main = () => {
  const [activeTab, setActiveTab] = useState('Hobby');
  const images = ['./image/취미.png', './image/취미2.png', './image/취미3.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setFadeIn(true);
      }, 500); // 이미지 페이드 아웃 시간과 맞추기
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const renderContent = () => {
    if (activeTab === 'Hobby') {
      return <Hobby_btn />;
    } else if (activeTab === 'Hobby') {
      return <Hobby_btn />;
    }
  };

  return (
    <div>
      <div className="photocontainer">
        <div className="themephoto">
          <img
            className={`themephoto1 ${fadeIn ? 'fade-in' : ''}`}
            alt='photo'
            src={images[currentImageIndex]}
          />
          <div className="top_wrap">
            <div className="markbox">
              <button>마크위치</button>
            </div>
            <div className="loginbox">
              <button>로그인</button><h3>/</h3><button>회원가입</button>
            </div>
          </div>
        </div>
        <div className="themebox">
          <button>취미</button>
        </div>
        <div className="inputbox">
          <input
            className='inputbar'
            type='text'
            placeholder='원하시는 검색어를 입력해주세요.'
          />
        </div>
        <div className="themeinfobox">
          <span>무료한 일상을 보내고 계신가요?<br /> 이곳에서 다양한 취미들을 찾고 도전 해보세요!</span>
        </div>
      </div>
      <div className="Trv_main">
        <div className="Trv_container">
          <div className="try_title">
            <h4>취미 추천</h4>
          </div>
          <div className="content">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
