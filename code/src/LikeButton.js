import React from 'react'
import './like-button.css'

export const LikeButton = (props) => {
  const likes_url = `https://technigo-thoughts.herokuapp.com/${props.id}/like`
  const handleClick = () => {
    fetch(likes_url, {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: ""
    })
    props.onMessageLiked(props.id)
  }

  return (
    <button
      onClick={handleClick}><img className="heartIcon" src="./icons/heart.png" alt="Heart icon" /></button>
  )
}
// How to get the svg to render?
