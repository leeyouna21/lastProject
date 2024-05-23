import React, { useState, useEffect } from 'react';
import Domestic from './Domestic';
import International from './International';

const Input = (props) => {
    return <input {...props} />;
};

const Travel = () => {
    const [activeTab, setActiveTab] = useState('domestic');

    const renderContent = () => {
        if (activeTab === 'domestic') {
            return <Domestic />;
        } else if (activeTab === 'international') {
            return <International />;
        }
    };

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
        }, 15000); // 15초마다 이미지 변경

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="travel_wrap">
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
                    <button className='Home'>마크위치</button>
                    <div className="login_but">
                        <button className='Login'>로그인</button>
                        <button className='Sing'>회원가입</button>
                    </div>
                </div>
                <div className="bottom_wrap">
                    <h3>테마 여행</h3>
                    <div className="search_wrap">
                        <form action="">
                            <Input
                                type="text"
                                placeholder="원하시는 검색을 입력해주세요."
                            />
                        </form>
                    </div>
                    <h6>다양한 테마를 기반으로 한 여행에 대해 알아보고 <br />
                    테마 구경부터 예약까지 한 번에.</h6>
                </div>
            </div>
            <div className="Trv_main">
                <div className="Trv_container">
                    <div className="try_title">
                        <h4>여행지 추천</h4>
                        <div className="navbar">
                            <button
                                className={activeTab === 'domestic' ? 'active' : ''}
                                onClick={() => setActiveTab('domestic')}
                            >
                            국내
                            </button>
                            <button
                                className={activeTab === 'international' ? 'active' : ''}
                                onClick={() => setActiveTab('international')}
                            >
                            해외
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
};

export default Travel;