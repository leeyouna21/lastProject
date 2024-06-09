
import React, { useState } from 'react';
import MedicineItem from './MedicineItem';
import { VitaminAData, VitaminBData , calciumData, glucosamineData } from '../Medicine'; 

const Medi = () => {
  const [category, setCategory] = useState('theme'); 

  return (
    <div className="medicine-page">  
      <div className="title_wrap">
        <div className="container">
          <div className="theme_title">
            <div className="choice">
              <button
                className={category === 'theme' ? 'active' : ''}
                onClick={() => setCategory('theme')}
              >
                멀티비타민
              </button>
              <button
                className={category === 'general' ? 'active' : ''}
                onClick={() => setCategory('general')}
              >
                오메가3
              </button>
              <button
                className={category === 'calciumData' ? 'active' : ''}
                onClick={() => setCategory('calciumData')}
              >
                칼슘
              </button>
              <button
                className={category === 'glucosamineData' ? 'active' : ''}
                onClick={() => setCategory('glucosamineData')}
              >
                글루코사민
              </button>
            </div>
          </div>
          <div className="box_wrap">
            {category === 'theme' && VitaminAData.map((item, index) => (
              <MedicineItem
                key={index}
                title={item.title}
                location={item.location}
                moreinfo={item.moreinfo}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
              />
            ))}
            {category === 'general' && VitaminBData.map((item, index) => (
              <MedicineItem
                key={index}
                title={item.title}
                location={item.location}
                moreinfo={item.moreinfo}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
              />
            ))}
            {category === 'calciumData' && calciumData.map((item, index) => (
              <MedicineItem
                key={index}
                title={item.title}
                location={item.location}
                moreinfo={item.moreinfo}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
              />
            ))}
            {category === 'glucosamineData' && glucosamineData.map((item, index) => (
              <MedicineItem
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
}

export default Medi;