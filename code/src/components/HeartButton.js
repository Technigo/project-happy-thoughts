import React from 'react'
import './heartbutton.css'

export const HeartButton = ({ id, onHeartClicked, hearts }) => {

  // Posting to API with POST, using the thought id, when heart button is clicked
  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      // Callback function, from Thoughts.js
      onHeartClicked(id)
    })
  }

  return (
    <button className={hearts > 0 ? "clicked-heart-button" : "heart-button"} type="button" onClick={handleClick}>
      <span className="heart-emoji" role="img" aria-label="red heart">❤️</span>
    </button>
  )
}