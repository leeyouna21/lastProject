import React, { useState } from 'react';
import HobbyItem from './HobbyItem'; 
import { RidingData, FishingData } from '../Hobby';

const Hobby_btn = () => {
  const [category, setCategory] = useState('Ride');

  return (
    <div>
      <div className="title_wrap">
        <div className="container">
          <div className="theme_title">
            <div className="choice">
              <button
                className={category === 'Riding' ? 'active' : ''}
                onClick={() => setCategory('Riding')}
              >
                라이딩
              </button>
              <button
                className={category === 'Fishing' ? 'active' : ''}
                onClick={() => setCategory('Fishing')}
              >
                낚시
              </button>
            </div>
          </div>
          <div className="box_wrap">
            {category === 'Riding' && RidingData.map((item, index) => (
              <HobbyItem
                key={index}
                title={item.title}
                location={item.location}
                moreinfo={item.moreinfo}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
              />
            ))}
            {category === 'Fishing' && FishingData.map((item, index) => (
              <HobbyItem
                key={index}
                title={item.title}
                location={item.location}
                moreinfo={item.moreinfo}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobby_btn;
