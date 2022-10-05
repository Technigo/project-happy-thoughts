import React from 'react';

const Heart = ({ likes, heartBtnClick, thoughtId }) => {
  if (likes === 0) {
    return <button type="button" className="heart-no-likes" onClick={() => heartBtnClick(thoughtId)}>❤️</button>
  } else {
    return <button type="button" className="heart-with-likes" onClick={() => heartBtnClick(thoughtId)}>❤️</button>
  }
}
export default Heart