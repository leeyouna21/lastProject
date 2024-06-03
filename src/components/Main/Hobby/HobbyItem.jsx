import React from 'react';

const HobbyItem = ({ title, desc, hashes, link, thumbnail }) => {
  return (
    <div className="location_wrap">
      <div className="location">
        <div className="tre_title">{title}</div>
        <div className="tre_desc">{desc}</div>
      </div>
      <div className="tre_hashes">{hashes.join(' ')}</div>
      <div className="tre_img">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={thumbnail} alt={title} />
        </a>
      </div>
    </div>
  );
};

export default HobbyItem;
