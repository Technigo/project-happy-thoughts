import React, { useState } from 'react';
import './LikeButton.css';


export const LikeButton = props => {
  const [clicks, setClicks] = useState((props.hearts));

  if(!localStorage[props.id]) {
    localStorage.setItem(props.id, 0)
  }

  const handleClick = () => {

    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
  }).then(() => {
    props.onLiked(props.id)
    localStorage[props.id] = Number(localStorage[props.id]) + 1
    setClicks(clicks + 1)
  });
};

return (
  <div className='like-container'>
    <a>
      <button
        className='like-button'
        type='submit'
        onClick={handleClick}
      >
        <p
          className='heart'
        >
          ❤️
        </p>
      </button> 
      </a>
      <p
        className='like-text'
        tabIndex='0'
      >
        x {clicks} (you liked it {localStorage[props.id]} times)
      </p>
   
  </div>
)};