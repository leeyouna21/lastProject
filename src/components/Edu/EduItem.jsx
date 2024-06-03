import React from 'react';

const getYoutubeThumbnail = (url) => {
  const videoId = url.split('v=')[1] || url.split('youtu.be/')[1];
  const ampersandPosition = videoId ? videoId.indexOf('&') : -1;
  return ampersandPosition !== -1 
    ? `https://img.youtube.com/vi/${videoId.substring(0, ampersandPosition)}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const EduItem = ({ title, desc, hashes, link }) => {
  const thumbnail = getYoutubeThumbnail(link);

  return (
    <div className="location_wrap">
      <div className="location">
        <div className="tre_title">{title}</div>
        <div className="tre_desc">{desc}</div>
      </div>
      <div className="tre_hashes">{hashes}</div>
      <div className="tre_img">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="tre_link">
        <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
      </div>
    </div>
  );
};

export default EduItem;
