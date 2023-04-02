import React from 'react';

export const SendButton = ({ children, disabled }) => {
  return (
    <button
      type="submit"
      className="sendButton"
      disabled={disabled}>
      {children}
    </button>
  )
}