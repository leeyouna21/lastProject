import React, { useState } from 'react';
import EduItem from './EduItem'; 
import { EasyData, MiddleData, HardData } from '.';

const Edu_btn = () => {
  const [category, setCategory] = useState('Easy');

  return (
    <div className='EDU'>
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
                desc={item.desc}
                hashes={item.hashes}
                link={item.link}
              />
            ))}
            {category === 'Middle' && MiddleData.map((item, index) => (
              <EduItem
                key={index}
                title={item.title}
                desc={item.desc}
                hashes={item.hashes}
                link={item.link}
              />
            ))}
            {category === 'Hard' && HardData.map((item, index) => (
              <EduItem
                key={index}
                title={item.title}
                desc={item.desc}
                hashes={item.hashes}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edu_btn;
