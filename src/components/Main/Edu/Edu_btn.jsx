import React, { useState } from 'react';
import EduItem from './EduItem'; 
import { EasyData, MiddleData, HardData } from '../Edu';

const Edu_btn = () => {
  const [category, setCategory] = useState('sdf');

  return (
    <div>
      <div className="title_wrap">
        <div className="container">
          <div className="theme_title">
            <div className="choice">
              <button
                className={category === 'Easy' ? 'active' : ''}
                onClick={() => setCategory('Easy')}
              >
                초급
              </button>
              <button
                className={category === 'Middle' ? 'active' : ''}
                onClick={() => setCategory('Middle')}
              >
                중급
              </button>
              <button
                className={category === 'Hard' ? 'active' : ''}
                onClick={() => setCategory('Hard')}
              >
                고급
              </button>
            </div>
          </div>
          <div className="box_wrap">
            {category === 'Easy' && EasyData.map((item, index) => (
              <EduItem
                key={index}
                title={item.title}
                location={item.location}
                moreinfo={item.moreinfo}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
              />
            ))}
            {category === 'Middle' && MiddleData.map((item, index) => (
              <EduItem
                key={index}
                title={item.title}
                location={item.location}
                moreinfo={item.moreinfo}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
              />
            ))}
            {category === 'Hard' && HardData.map((item, index) => (
              <EduItem
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

export default Edu_btn;
