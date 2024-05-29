import React, { useState, useEffect } from 'react';

import Book_button from './Book_button';

const Main = () => {
  const [activeTab, setActiveTab] = useState('Book');
  const images = ['./image/도서.png', './image/도서2.png', './image/도서3.png'];
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
    if (activeTab === 'Book') {
      return <Book_button />;
    } else if (activeTab === 'Book') {
      return <Book_button />;
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
          <button>도서</button>
        </div>
        <div className="inputbox">
          <input
            className='inputbar'
            type='text'
            placeholder='원하시는 검색어를 입력해주세요.'
          />
        </div>
        <div className="themeinfobox">
          <span>마음의 양식을 쌓고 싶을 땐,<br /> 이곳에서 고민하고 골라보세요.</span >
        </div>
      </div>
      {/* <div className="navbar">
        <button 
          className={activeTab === 'Food' ? 'active' : ''}
          onClick={() => setActiveTab('Food')}
        >
          도서
        </button>
        <button 
          className={activeTab === 'Medi' ? 'active' : ''}
          onClick={() => setActiveTab('Medi')}
        >
          도서2
        </button>
      </div> */}
      
      <div className="content">
        {renderContent()}
      </div>
    </div>
  )
}

export default Main;
