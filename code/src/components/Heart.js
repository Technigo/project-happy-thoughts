import React, { useState, useEffect } from "react";
import "./heart.css";

export const Heart = (props) => {

  if (!localStorage[props.id]) {
    localStorage.setItem(props.id, 0)
  }

  const handleLikeClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      props.onThoughtLiked(props.id)
      localStorage[props.id] = Number(localStorage[props.id]) + 1
    })
  }

  return (
    <li>
      <button className="like-button"
        onClick={() => {
          handleLikeClick()
        }}>
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
      x{props.hearts} (you liked x{localStorage[props.id]})
    </li >
  )
}

