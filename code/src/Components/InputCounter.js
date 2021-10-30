import React from 'react';
import './inputCounter.css';

const InputCounter = ({ charCount }) => {
  const maxChar = 140;

  return (
    <p className="p-input-counter">
      <span className={charCount > 140 ? 'p-red' : 'p-green'}>
        {maxChar - charCount}
      </span>
      /{maxChar}
    </p>
  );
};

export default InputCounter;
