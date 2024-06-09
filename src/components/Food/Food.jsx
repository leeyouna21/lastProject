
import React, { useState } from 'react';
import FoodItem from './FoodItem';
import { RiverData, HeartData,SkinData, KidneyData, RenalData } from '../Food';

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
                        <button
                        className={category === 'SkinData' ? 'active' : ''}
                        onClick={() => setCategory('SkinData')}
                        >
                            피부
                        </button>
                        <button
                        className={category === 'KidneyData' ? 'active' : ''}
                        onClick={() => setCategory('KidneyData')}
                        >
                            신장
                        </button>
                        <button
                        className={category === 'RenalData' ? 'active' : ''}
                        onClick={() => setCategory('RenalData')}
                        >
                            콩팥
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
                    {category === 'SkinData' && SkinData.map((item, index) => (
                    <FoodItem
                        key={index}
                        title={item.title}
                        location={item.location}
                        moreinfo={item.moreinfo}
                        imgSrc={item.imgSrc}
                        imgAlt={item.imgAlt}
                    />
                    ))}{category === 'KidneyData' && KidneyData.map((item, index) => (
                        <FoodItem
                            key={index}
                            title={item.title}
                            location={item.location}
                            moreinfo={item.moreinfo}
                            imgSrc={item.imgSrc}
                            imgAlt={item.imgAlt}
                        />
                        ))}{category === 'RenalData' && RenalData.map((item, index) => (
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
