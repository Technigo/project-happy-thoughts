import React from 'react'

export const LikeButton = ({ hearts }) => {

  return (
    <span className="likes">
      <button className="like-btn">❤️</button>
      x {hearts}
    </span>
  )
}