import React from 'react';

const HobbyItem = ({ title, desc, hashes, link, thumbnail }) => {
  return (
    <div className="location_wrap">
      <div className="location">
        <div className="tre_title">{title}</div>
        <h5 className='desc'>이미지를 클릭하시면, 해당 모임 사이트로 이동합니다.</h5>
        {/* <div className="tre_desc">{desc}</div> */}
      </div>
      {/* <div className="tre_hashs">{hashes.join(' ')}</div> */}
      <div className="tre_hash">
        {hashes.map((hash, index) => (
          <h6 key={index}>{hash}</h6>
        ))}
      </div>
      <div className="tre_img">
          <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={thumbnail} alt={title} />
        </a>
      </div>
    </div>
  );
};

export default HobbyItem;
