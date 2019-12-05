import React from 'react';
import "./heart.css";

export const Heart = (props) => {
  const handleLikeClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      props.onThoughtLiked(props.id)
    })
  }

  return (
    <li>
      <button className="like-button" onClick={handleLikeClick}>
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
      x {props.hearts}
    </li>
  )
}