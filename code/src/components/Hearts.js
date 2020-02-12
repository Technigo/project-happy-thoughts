import React from 'react'
import './Hearts.css'
import { ReactComponent as Heart } from './media/heart.svg'

export const Hearts = (props) => {
  const handleLikes = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      props.onThoughtLiked(props.id)
    })
  }

  return (
    <div className="hearts">
      <button
        onClick={handleLikes}>
        <span className="like-heart" role="img" aria-label="heart-emoji"> <Heart /></span>
      </button>
      x {props.hearts}
    </div >
  )
}

