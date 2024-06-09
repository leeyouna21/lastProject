import React from 'react';

const BookItem = ({ title, location, moreinfo, imgSrc, imgAlt, link }) => {
  return (
    <div className="location_wrap">
      <div className="location">
        <div className="tre_location">{location}</div>
        <div className="tre_title">{title}</div>
      </div>
      <div className="tre_desc">{moreinfo}</div>
      <img className="tre_img" src={imgSrc} alt={imgAlt} />
      <a href={link} className="link">책 구매하기</a>
    </div>
  );
};

export default BookItem;
