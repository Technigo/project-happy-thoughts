import React, { useState } from 'react'
import './likeHearts.css'

const MESSAGES_URL = 'https://happy-thoughts-week19.herokuapp.com/thoughts'

export const LikeHearts = ({ message }) => {
  const { hearts, _id } = message
  const [heartClicks, setHeartClicks] = useState(hearts)

  const handleClick = () => {
    fetch(`${MESSAGES_URL}/${_id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '',
    }).then(res => res.json())
      .then(setHeartClicks(heartClicks + 1))
  }

  return (
    <section className='like-hearts'>
      <button className={heartClicks > 0 ? 'liked' : 'not-liked'} 
        onClick={handleClick}>
          <p></p>
      </button>
      <div className='heart-count'>x {heartClicks}</div>
    </section>
  )
}