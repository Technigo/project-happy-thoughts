import React from 'react';

export const Thoughts = ({ message }) => {
  return (
    <div>
      <h2>{message}</h2>
      <button type="button" className="heart-button">
        &#x2764;
      </button>
    </div>
  )
}