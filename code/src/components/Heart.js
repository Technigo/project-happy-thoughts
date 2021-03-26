import React from 'react';

const Heart = (props) => {

  const {hearts, id, onLikesIncrease} = props;

  let heartButtonClass;
  if (hearts === 0) {heartButtonClass = "inner-heart-container-button"
  } else {
    heartButtonClass = "inner-heart-container-button-liked"
  }
  
  return (
    <div className="outer-heart-container">
      <button onClick={() => onLikesIncrease(id)} className={heartButtonClass}>
        <img className="heart-icon" src="./assets/heart.svg" alt="heart icon"/>
      </button>
      <p> x {hearts}</p>
    </div>
  )
};
export default Heart;