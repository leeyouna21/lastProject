import React from 'react';

const EduItem = ({ title, desc, hashes, link }) => {
  return (
    <div className="location_wrap">
      <div className="location">
        <div className="tre_title">{title}</div>
        <div className="tre_desc">{desc}</div>
      </div>
      <div className="tre_hashes">{hashes}</div>
      <div className="tre_link">{link}</div>
      {/* <div className="booking">
        <h5>자세히 알아보기</h5>
        <link rel="stylesheet" href="https://hotels.naver.com/" />
      </div> */}
    </div>
  );
};

export default EduItem;
