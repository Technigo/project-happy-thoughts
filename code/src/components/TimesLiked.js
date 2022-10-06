import React from 'react';

const TimesLiked = ({ timesLiked }) => {
  return (
    <div className="liked-container">
      <button type="button" className="heart-container">❤️</button>
      <p className="times-liked">x {timesLiked}</p>
    </div>
  )
}

export default TimesLiked;