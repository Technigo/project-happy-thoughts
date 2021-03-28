import React from 'react';

const HeartButton = ({ message, onHeartClick }) => {
  return (
    <button 
      className={`heart-button ${message.hearts === 0 ? "no-hearts" : "received-heart"}`}
      onClick={() => onHeartClick(message._id)}>
      <span 
        role="img" 
        aria-label="heart icon">
          ❤️
      </span>
    </button>
  );
};

export default HeartButton;