import React from 'react';

const TravelItem = ({ title, location, desc, hashes, imgSrc, imgAlt }) => {
  return (
    <div className="location_wrap">
      <div className="location">
        <div className="tre_title">{title}</div>
        <div className="tre_location">{location}</div>
      </div>
      <div className="tre_desc">{desc}</div>
      <div className="tre_hash">
        {hashes.map((hash, index) => (
          <h6 key={index}>{hash}</h6>
        ))}
      </div>
      <img className="tre_img" src={imgSrc} alt={imgAlt} />
      <div className="booking">
        <h5>호텔 알아보기</h5>
        <link rel="stylesheet" href="https://hotels.naver.com/" />
      </div>
    </div>
  );
};

export default TravelItem;
