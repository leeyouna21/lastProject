import React, { useState, useEffect } from 'react';
import Exercisebtn from './Exercisebtn';

const Main = () => {
  const [activeTab, setActiveTab] = useState('Exercise');
  const images = ['./image/운동.png', './image/운동2.png', './image/운동3.png'];
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
    if (activeTab === 'Exercise') {
      return <Exercisebtn />;
    }
  };

  return (
    <div>
      <div className="EXERCISE">
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
            <button>운동</button>
          </div>
          <div className="inputbox">
            <input
              className='inputbar'
              type='text'
              placeholder='원하시는 검색어를 입력해주세요.'
            />
          </div>
          <div className="themeinfobox">
            <span>휴식도 좋지만 건강을 위해서,<br />다양한 운동을 시도해보는건 어떠세요?</span >
          </div>
        </div>
        <div className="Trv_main">
          <div className="Trv_container">
            <div className="try_title">
              <h4>운동 추천</h4>
            </div>
            <div className="content">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
