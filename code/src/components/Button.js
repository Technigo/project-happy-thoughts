import React from 'react';

const Button = ({ className, type, click, disabled, text }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={click}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
