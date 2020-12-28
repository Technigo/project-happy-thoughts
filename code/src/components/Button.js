import React from 'react';

const Button = ({ className, type, onClick, disabled, text, value }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      value={value}
    >
      {text}
    </button>
  );
};

export default Button;
