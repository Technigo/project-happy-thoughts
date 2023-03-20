import React from 'react'

export const LikeButton = (props) => {
  return (
<button className={`like-button ${props.thoughts.hearts === 0 ? "not-liked" : "liked"}`} onClick= {() => props.OnLikesIncrease(props.thoughts._id)}>
    <span className="heart-on-button-icon" role="img" aria-label="Heart">💗</span>
</button>
  )
}