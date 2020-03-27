import React from 'react'
import './likeHearts.css'

export const LikeHearts = ({ message, onLiked }) => {
  const { hearts, _id } = message

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => onLiked(_id))
  }

  return (
    <section className="like-hearts">
      <button   
      className={
        hearts > 0 ? 'liked' : 'not-liked'} 
        onClick={handleClick}>
        <p><span role='img' aria-label='Heart'>❤️</span></p>
      </button>
      <div className="heart-count">x {hearts}</div>
      
    </section>
  )
}