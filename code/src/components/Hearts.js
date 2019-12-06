import React from 'react'
import './Hearts.css'

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
      <button className="like-heart"
        onClick={handleLikes}>
        <span role="img" aria-label="heart-emoji"> ❤️</span>
      </button>
      x {props.hearts}
    </div >
  )
}

