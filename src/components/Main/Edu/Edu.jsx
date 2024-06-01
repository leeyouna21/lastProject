import React, { useState, useEffect } from 'react';

import Edu_btn from './Edu_btn';



const Main = () => {
  const [activeTab, setActiveTab] = useState('Edu');
  const images = ['./image/교육.png', './image/교육2.png', './image/교육3.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const renderContent = () => {
    if (activeTab === 'Edu') {
      return <Edu_btn />;
    } else if (activeTab === 'Edu') {
      return <Edu_btn />;
    }
  };

  return (
    <div>
      <div className="photocontainer">
        <div className="themephoto">
          <img
            className='themephoto1'
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
          <button>교육</button>
        </div>
        <div className="inputbox">
          <input
            className='inputbar'
            type='text'
            placeholder='원하시는 검색어를 입력해주세요.'
          />
        </div>
        <div className="themeinfobox">
          <span>배움에는 시기가 없습니다,<br /> 이곳에서 배움을 시작해보세요!</span >
        </div>
      </div>
      <div className="Trv_main">
        <div className="Trv_container">
            <div className="try_title">
              <h4>교육 추천</h4>
          </div>
            <div className="content">
              {renderContent()}
            </div>
          </div>
      </div>
      
      
    </div>
  )
}

export default Main;
