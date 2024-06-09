import React, { useState, useEffect } from 'react';
import Hobby_btn from './Hobbybtn';
// import { UserContext } from '../../UserContext';

const Main = () => {
  const [activeTab, setActiveTab] = useState('Hobby');
  const [fadeIn, setFadeIn] = useState(true);

  const Input = (props) => {
    return <input {...props} />;
  };


  // 15초마다 이미지 변경
  const images = [
    "/image/Travel_1.png",
    "/image/Travel_2.png",
    "/image/Travel_3.png"
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
      if (activeTab === 'Hobby') {
        return <Hobby_btn />;
      }
    };

  return (
    <div>
      <div className="HOBBY_MAIN">
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
                      <h3>취미</h3>
                      <div className="search_wrap">
                          <form action="">
                              <Input
                                  type="text"
                                  placeholder="원하시는 검색을 입력해주세요."
                              />
                          </form>
                      </div>
                      <h6>마음의 양식을 쌓고 싶을 땐,<br /> 이곳에서 고민하고 골라보세요.</h6>
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
        
        </div>
    </div>
  );
}

export default Main;
