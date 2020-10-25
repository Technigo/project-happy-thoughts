import React from 'react';

const Button = ({ className, type, click, disabled, text, icon }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={click}
      disabled={disabled}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
