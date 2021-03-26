import React from 'react';

const Heart = (props) => {

  const {hearts, id, onLikesIncrease} = props;
  
  return (
    <div className="outer-heart-container">
      <button onClick={() => onLikesIncrease(id)} className="inner-heart-container-button">
        <img className="heart-icon" src="./assets/heart.svg" alt="heart icon"/>
      </button>
      <p> x {hearts}</p>
    </div>
  )
};
export default Heart;