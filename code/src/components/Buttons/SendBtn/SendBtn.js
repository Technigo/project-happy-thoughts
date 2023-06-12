import React from 'react';
import './SendBtn.css'

export const SendBtn = ({ message, ariaLabel }) => {
  const isDisabled = message.length < 5 || message.length > 140;

  return (
    <button
      type="submit"
      className="send-btn"
      aria-label={ariaLabel}
      aria-disabled={isDisabled}
      disabled={isDisabled}>
      ❤️ Send happy thought ❤️
    </button>
  )
}
