import React from 'react';

import Heart from '../../assets/heart.svg';

const Likes = (props) => {
  return (
    <div className="likes">
      <button className={`like-button ${props.likes > 0 ? 'liked' : ''}`}>
        <img className="heart" src={Heart} alt="Pink heart"></img>
      </button>
      <p>x {props.likes}</p>
    </div>
  )
}

export default Likes;