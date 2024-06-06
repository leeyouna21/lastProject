import React, { useState } from 'react';
import FoodItem from './FoodItem';
import { RiverData, HeartData } from '../Food';

const Food = () => {
  const [category, setCategory] = useState('theme'); 

  return (
    <div>
      <div className="FoodItem_page">
        <div className="title_wrap">
            <div className="container">
                <div className="theme_title">
                    <div className="choice">
                        <button
                            className={category === 'theme' ? 'active' : ''}
                            onClick={() => setCategory('theme')}
                    >
                            간
                        </button>
                        <button
                        className={category === 'general' ? 'active' : ''}
                        onClick={() => setCategory('general')}
                        >
                            심장
                        </button>
                        </div>
                </div>
                <div className="box_wrap">
                    {category === 'theme' && RiverData.map((item, index) => (
                    <FoodItem
                        key={index}
                        title={item.title}
                        location={item.location}
                        moreinfo={item.moreinfo}
                        imgSrc={item.imgSrc}
                        imgAlt={item.imgAlt}
                    />
                    ))}
                    {category === 'general' && HeartData.map((item, index) => (
                    <FoodItem
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
</div>
  )
}

export default Food
