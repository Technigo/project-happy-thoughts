import React from 'react';

const SubmitButton = () => {
  return (
    <>
      <button type="submit">
        <span 
          role="img" 
          aria-label="heart icon">
            ❤️
        </span> 
        Send Happy Thought 
        <span 
          role="img" 
          aria-label="heart icon">
            ❤️
        </span>
      </button>
    </>
  );
};

export default SubmitButton;