import React, { useState } from 'react';
import HobbyItem from './HobbyItem'; 
import { RidingData, FishingData } from '../Hobby';

const Hobby_btn = () => {
  const [category, setCategory] = useState('rest');

  return (
    <div>
      <div className="title_wrap">
        <div className="container">
          <div className="theme_title">
            <div className="choice">
              <button
                className={category === 'rest' ? 'active' : ''}
                onClick={() => setCategory('rest')}
              >
                힐링
              </button>
              <button
                className={category === 'activity' ? 'active' : ''}
                onClick={() => setCategory('activity')}
              >
               액티비티
              </button>
            </div>
          </div>
          <div className="box_wrap">
            {category === 'rest' && RidingData.map((item, index) => (
                <HobbyItem
                  key={index}
                  title={item.title}
                  desc={item.desc}
                  hashes={item.hashes}
                  link={item.link}
                  thumbnail={item.thumbnail}
                />
              ))}
              {category === 'activity' && FishingData.map((item, index) => (
                <HobbyItem
                  key={index}
                  title={item.title}
                  desc={item.desc}
                  hashes={item.hashes}
                  link={item.link}
                  thumbnail={item.thumbnail}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobby_btn;
