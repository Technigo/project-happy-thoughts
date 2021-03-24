import React from 'react';

const HeartButton = ({ message, onHeartClick }) => {
  return (
    <>
      <button 
        className="heart-button"
        onClick={() => onHeartClick(message._id)}>
        <span 
          role="img" 
          aria-label="heart icon">
            ❤️
        </span>
      </button>
    </>
  );
};

export default HeartButton;