import React from 'react';

const SubmitButton = () => {
  return (
    <>
      <button 
        className="submit-button"
        type="submit"
      >
        <span 
          role="img" 
          aria-label="heart icon">
            ❤️
        </span> 
        <p className="submit-button-text">Send Happy Thought</p>
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