/* eslint-disable no-underscore-dangle */

import React, { useState } from 'react';

const LikeBtn = ({ thought, handleLike }) => {
  const [currentThought, setCurrentThought] = useState(thought);
  return (
    <div>
      <button
        key={currentThought._id}
        className={currentThought.hearts === 0
          ? 'likes-btn' : 'more-likes'}
        type="button"
        onClick={() => {
          handleLike(currentThought._id, currentThought.hearts, currentThought, setCurrentThought);
        }}> ❤️
      </button><p>x {currentThought.hearts} </p>
    </div>
  )
}

export default LikeBtn;
