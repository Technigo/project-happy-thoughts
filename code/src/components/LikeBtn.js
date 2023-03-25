/* eslint-disable no-underscore-dangle */

import React from 'react';

const LikeBtn = ({ currentThought, handleLike, setCurrentThought, wobble, setWobble }) => {
  return (
    <div className="likes-container">
      <button
        key={currentThought._id}
        className={`likes-btn ${currentThought.hearts > 0
          ? 'more-likes' : ''}`}
        type="button"
        onClick={() => {
          handleLike(
            currentThought._id,
            currentThought.hearts,
            currentThought,
            setCurrentThought,
            setWobble
          );
        }}
        onAnimationEnd={() => setWobble(0)}
        wobble={wobble}> <span>❤️</span>
      </button><p className="single-thought-likes-counter">x {currentThought.hearts} </p>
    </div>
  )
}

export default LikeBtn;
