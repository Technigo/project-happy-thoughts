import React from 'react';

const Heart = ({ clicked, likes, heartBtnClick, thoughtId }) => {
  if (likes === 0) {
    return <button type="button" className={`heart-no-likes ${clicked ? 'heart-like' : ''}`} onClick={() => heartBtnClick(thoughtId)}>❤️</button>
  } else {
    return <button type="button" className={`heart-with-likes ${clicked ? 'heart-like' : ''}`} onClick={() => heartBtnClick(thoughtId)}>❤️</button>
  }
}
export default Heart
