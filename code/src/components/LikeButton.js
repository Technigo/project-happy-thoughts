import React from 'react'

export const LikeButton = ({ hearts }) => {

  return (
    <span className="likes">
      <button className="like-btn"><span role="img" aria-label="heart">❤️</span></button>
      x {hearts}
    </span>
  )
}