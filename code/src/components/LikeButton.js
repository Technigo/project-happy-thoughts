/* eslint-disable no-underscore-dangle */
import React from 'react';

const LikeButton = ({ thought, onLikesIncrease }) => {
  return (
    <>
      <button
        type="button"
        onClick={() => onLikesIncrease(thought._id)}
        style={{ background: thought.hearts >= 1 ? '#de84b4' : '#eaeaea' }}>
        <span>❤️</span>
      </button>
      <span> x {thought.hearts}</span>
    </>
  )
}

export default LikeButton;