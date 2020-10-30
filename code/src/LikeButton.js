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
    <button
      className='like-button'
      type='submit'
      onClick={handleClick}
    >
      <span role='img' aria-label='heart'>❤️</span>
    </button> 
    <p className='like-text'> x {clicks} (you liked it {localStorage[props.id]} times)</p>
  </div>
)};