import React from 'react';

import HeartIcon from '../../assets/heart-icon.png';

const Likes = ({ id, likes, onLiked }) => {
  const LIKE_URL = `https://happy-thoughts-technigo.herokuapp.com/thougths/${id}/like`;

  const handleClick = () => {
    fetch(LIKE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: ''
    }).then(() => onLiked(id))
  }

  return (
    <div className="likes">
      <button
        onClick={handleClick}
        className={`like-button ${likes > 0 ? 'liked' : ''}`}
      >
        <img className="heart" src={HeartIcon} alt="Pink heart"></img>
      </button>
      <p>x {likes}</p>
    </div>
  )
}

export default Likes;