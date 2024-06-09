import React, { useState, useEffect } from 'react';
import Exercisebtn from './Exercisebtn';

const Main = () => {
  const [activeTab, setActiveTab] = useState('Exercise');
  const [fadeIn, setFadeIn] = useState(true);


  // 15초마다 이미지 변경
  const images = [
    "image/운동.png",
    "image/운동2.png",
    "image/운동3.png",
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }, 15000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const renderContent = () => {
    if (activeTab === 'Exercise') {
      return <Exercisebtn />;
    }
  };

  const Input = (props) => {
    return <input {...props} />;
  };

  return (
    <div className='EXERSISE'>
        <div className="photocontainer">
          <div className="BG">
          <div className="image-container">
              {images.map((image, index) => (
                  <img
                      key={index}
                      src={image}
                      alt={`Travel ${index + 1}`}
                      className={index === currentImageIndex ? 'visible' : ''}
                  />
              ))}
          </div>
          <div className="header_wrap">
              <a href="../MainPG">
                  <h4>Senior club</h4>
              </a>
          </div>
          <div className="bottom_wrap">
              <h3>운동</h3>
              <div className="search_wrap">
                  <form action="">
                      <Input
                          type="text"
                          placeholder="원하시는 검색을 입력해주세요."
                      />
                  </form>
              </div>
              <h6>헬스트레이너는 시니어 클럽으로! 다양한 운동을 한 번에<br /> 어려웠던 운동들 대신 혼자서 해볼 수 있는 쉬운 운동으로 구성했어요.</h6>
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
