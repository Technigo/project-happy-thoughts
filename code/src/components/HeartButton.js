import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import './heartbutton.css'

export const HeartButton = ({ id, onHeartClicked, hearts }) => {

  // Posting to API with POST, using the thought id, when heart button is clicked
  const handleClick = () => {
    fetch(`https://fridamaria-happy-api.herokuapp.com/thoughts/${id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      // Callback function, from Thoughts.js
      onHeartClicked(id)
    })
  }

  return (
    <button className="heart-button" type="button" onClick={handleClick}>
      <FontAwesomeIcon icon={hearts > 0 ? faHeartSolid : faHeart} className="heart-emoji" role="img" aria-label="red heart" />
    </button>
  )
}