import React from 'react';

export const LikeButton = ({ thought, onHeartButtonClick }) => {
  return (
    <div className="heart-button">
      <button type="button" className="heart-emoji" onClick={onHeartButtonClick}>❤️</button>
      <p>x {thought.hearts}</p>
    </div>
  )
}