import React from 'react'
import { Heart } from './Heart'
import './likebutton_style.css'

export const LikeButton = (props) => {
  // const apiURL = 

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`,
       {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: ""
    }).then(() => {
      props.onThoughtLiked(props.id)
    })
  }
  return (
    <button className="like-button"onClick={handleClick}><Heart /></button>
  )
}