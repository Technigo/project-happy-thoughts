import React from 'react';

const Heart = (props) => {
  return (
    <div className="outer-heart-container">
      <div className="inner-heart-container">
        <img className="heart-icon" src="./assets/heart.svg" alt="heart icon"/>
      </div>
      <p> x {props.hearts}</p>
    </div>
  )
};
export default Heart;