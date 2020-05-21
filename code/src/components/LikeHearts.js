import React from 'react'
import './likeHearts.css'

const MESSAGES_URL = 'https://happy-thoughts-week19.herokuapp.com/thoughts'
//const MESSAGES_URL = 'http://localhost:8080/thoughts'

export const LikeHearts = ({ message, onLiked }) => {
  const { hearts, _id } = message

  const handleClick = () => {
    fetch(`${MESSAGES_URL}/${_id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '',
    }).then(() => onLiked(_id))
  }

  return (
    <section className="like-hearts">
      <button className={hearts > 0 ? 'liked' : 'not-liked'} 
        onClick={handleClick}>
        <p><span className="hearts" role='img' aria-label='Heart'>❤️</span></p>
      </button>
      <div className="heart-count">x {hearts}</div>
    </section>
  )
}