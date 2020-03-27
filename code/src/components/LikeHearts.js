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
    <span>
      <button onClick={handleClick}>
        <p><span role='img' aria-label='Heart'>❤️</span></p>
      </button>
      x {hearts}
    </span>
  )
}