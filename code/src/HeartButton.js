import React from 'react';

const HeartButton = ({ message, onHeartClick }) => {
  return (
    <>
      <button>
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