
import React, { useState, useEffect } from 'react';
import Food from '../Food/Food';
import Medi from './Medi';

const Main = () => {
  const [activeTab, setActiveTab] = useState('Food');
  const images = ['./image/건강.png', './image/건강2.png', './image/건강3.png'];
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
    if (activeTab === 'Food') {
      return <Food />;
    } else if (activeTab === 'Medi') {
      return <Medi />;
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
          <button>건강</button>
        </div>
        <div className="inputbox">
          <input
            className='inputbar'
            type='text'
            placeholder='원하시는 검색어를 입력해주세요.'
          />
        </div>
        <div className="themeinfobox">
          <span>어떤 음식이 어디에 좋은지,<br /> 어떤 영양제를 먹을지 추천과 구매를 한번에.</span>
        </div>
      </div>
      <div className="Trv_main">
        <div className="Trv_container">
          <div className="try_title">
            <h4>식품 추천</h4>
            <div className="navbar">
              <button
                className={activeTab === 'Medi' ? 'active' : ''}
                onClick={() => setActiveTab('Medi')}
              >
                영양제
              </button>
              <button
                className={activeTab === 'Food' ? 'active' : ''}
                onClick={() => setActiveTab('Food')}
              >
                음식
              </button>
            </div>
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
