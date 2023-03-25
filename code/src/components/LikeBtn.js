/* eslint-disable no-underscore-dangle */

import React from 'react';

const LikeBtn = ({ currentThought, handleLike, setCurrentThought }) => {
//   const [currentThought, setCurrentThought] = useState(thought);
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
