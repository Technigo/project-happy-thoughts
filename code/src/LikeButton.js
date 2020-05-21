import React from 'react'
import './like-button.css'

export const LikeButton = (props) => {
  const likes_url = `https://annas-happy-thoughts.herokuapp.com/thoughts/${props.id}/like`

  //Posts a like to API
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

  //Returns like-button
  return (
    <button
      onClick={handleClick} className={(props.likes > 0 ? 'liked' : 'notLiked')}><img className="heartIcon" src="./icons/heart.png" alt="Heart icon" /></button>
  )
}
