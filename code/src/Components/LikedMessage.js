import React, { useState } from 'react';
import img from './media/pixel_heart.png'
import './LikedMessage.css'

export const LikedMessage = ({ hearts, id }) => {
	const [likes, setLikes] = useState(hearts)

  const handleLikes = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '',
    })
    setLikes(likes + 1)
  }
  return (
		<div className='heart-lies'>
			<button
      className='like-buttons'
				type='button'
        onClick={handleLikes}
        style={{background: hearts > 0 ? '#ffadad' : '#f3f1f1'}}
        >
					{/* <span className='liked-heartemoji' role='img' aria-label='Heart'>
						{'❤️' }
					</span> */}
        <img src={img} alt='Heart'></img>
      </button>
      <p>x {likes}</p>
		</div>
	);
};