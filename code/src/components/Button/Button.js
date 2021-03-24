import React from 'react';

import './Button.css';

const Button = ({ isSubmit }) => {
  return (
    <button type={isSubmit ? 'submit' : 'button'} className="button">
      <span role="img" aria-label="heart">
        ❤️
      </span>
      {isSubmit && (
        <span role="img" aria-label="heart">
          ❤️
        </span>
      )}
    </button>
  );
};

export default Button;
