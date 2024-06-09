import React, { useState } from 'react';
import ExerciseItem from './ExerciseItem';
import { UpperData, LowerData } from '../Exercise'; 

const Exercise_btn = () => {
    const [category, setCategory] = useState('upper'); 

  return (
    <div className='EXERSISE'>
      <div className="title_wrap">
        <div className="container">
        <div className="theme_title">
            <div className="choice">
            <button
                className={category === 'upper' ? 'active' : ''}
                onClick={() => setCategory('upper')}
            >
                상체
            </button>
            <button
                className={category === 'lower' ? 'active' : ''}
                onClick={() => setCategory('lower')}
            >
                하체
            </button>
            </div>
        </div>
        <div className="box_wrap">
            {category === 'upper' && UpperData.map((item, index) => (
            <ExerciseItem
                key={index}
                title={item.title}
                location={item.location}
                moreinfo={item.moreinfo}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
            />
            ))}
            {category === 'lower' && LowerData.map((item, index) => (
            <ExerciseItem
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
  )
}

export default Exercise_btn
