import React, { useState } from 'react';
import TravelItem from './TravelItem'; // Ensure correct path to the component
import { themeTravelData, generalTravelData } from '../TravelData'; // Ensure correct path to the data file



const Domestic = () => {

  const [category, setCategory] = useState('theme'); // Default category is 'theme'

return (
    <div>
    <div className="title_wrap">
        <div className="container">
        <div className="theme_title">
            <div className="choice">
            <button
                className={category === 'theme' ? 'active' : ''}
                onClick={() => setCategory('theme')}
            >
                테마여행
            </button>
            <button
                className={category === 'general' ? 'active' : ''}
                onClick={() => setCategory('general')}
            >
                무난히 다 가기 좋은 여행
            </button>
            </div>
        </div>
        <div className="box_wrap">
            {category === 'theme' && themeTravelData.map((item, index) => (
            <TravelItem
                key={index}
                title={item.title}
                location={item.location}
                desc={item.desc}
                hashes={item.hashes}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
            />
            ))}
            {category === 'general' && generalTravelData.map((item, index) => (
            <TravelItem
                key={index}
                title={item.title}
                location={item.location}
                desc={item.desc}
                hashes={item.hashes}
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

export default Domestic;