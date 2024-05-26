import React, { useState } from 'react';
import BookItem from './BookItem';
import { RomanceData, TeenagerData } from '../Book';

const Book_button = () => {
  const [category, setCategory] = useState('Romance');

  return (
    <div>``
      <div className="title_wrap">
        <div className="container">
          <div className="theme_title">
            <div className="choice">
              <button
                className={category === 'Romance' ? 'active' : ''}
                onClick={() => setCategory('Romance')}
              >
                로맨스
              </button>
              <button
                className={category === 'Teenager' ? 'active' : ''}
                onClick={() => setCategory('Teenager')}
              >
                청소년
              </button>
            </div>
          </div>
          <div className="box_wrap">
            {category === 'Romance' && RomanceData.map((item, index) => (
              <BookItem
                key={index}
                title={item.title}
                location={item.location}
                moreinfo={item.moreinfo}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
              />
            ))}
            {category === 'Teenager' && TeenagerData.map((item, index) => (
              <BookItem
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

export default Book_button;
