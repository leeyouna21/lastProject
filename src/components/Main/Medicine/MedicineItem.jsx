import React from 'react';

const MedicineItem = ({ title, location, moreinfo, imgSrc, imgAlt }) => {
  return (
    <div className="location_wrap">
      <div className="location">
        <div className="tre_title">{title}</div>
        <div className="tre_location">{location}</div>
      </div>
      <div className="tre_desc">{moreinfo}</div>
      <img className="tre_img" src={imgSrc} alt={imgAlt} />
      <div className="booking">
        <h5>영양제 알아보기</h5>
        <link rel="stylesheet" href="https://hotels.naver.com/" />
      </div>
    </div>
  );
};

export default MedicineItem;
