import React from 'react'

export const LikeButton = ({message, onLikesIncrease}) => {
  return (
    <button 
      className={`like-button ${message.hearts > 0 ? 'liked' : ''} 
       ${message.hearts > 10 ? 'super-liked' : ''}`}
      onClick={() => onLikesIncrease(message._id)}>
      <span className="heart-emoji" role="img" aria-label="heart emoji">💓</span>
    </button>
  )
}
