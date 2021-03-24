import React from 'react';

export const FormButton = ({ disabled }) => {
  return (
    <button 
      type="submit"
      className="button"
      disabled={disabled}>
      <span role="img" aria-label="heart">❤️</span> Send Happy Thought <span role="img" aria-label="heart">❤️</span>
    </button>
  )
}