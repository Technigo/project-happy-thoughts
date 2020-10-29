import React, { useState } from 'react';

import img from './media/pixel_heart.png'
import './LikedMessage.css'

export const LikedMessage = ({ hearts, id }) => {
  const [likes, setLikes] = useState(hearts)

  
  const handleLikes = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }).then(() => {setLikes(likes + 1)
    window.location.reload()} 
    )}
  return (
    <div className='heart-time'>
			<button
      className={hearts > 0 ? 'liked' : 'not-liked'}
				type='button'
        onClick={handleLikes}
        >
        <img 
        className='heart-like' 
        src={img} 
        alt='Heart'>
        </img>
      </button>
      <span>
      <p className='times-liked'>x {likes}</p>
      </span>
      </div>
  )
}