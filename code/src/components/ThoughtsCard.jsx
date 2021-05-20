import React, { useState } from "react"
import moment from "moment"

import { LIKES_URL } from "../reusable/urls"

const ThoughtsCard = ({ message }) => {
const [hearts, setHearts] = useState(message.hearts)
const [isLiked, setIsLiked] = useState(false)

const onLikesIncrease = (id) => {
  setIsLiked(true)
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
  }
  fetch(LIKES_URL(id), options)
    .then(res => res.json())
    .then(receivedMessage => (setHearts(receivedMessage.hearts)))
}

  return (
    <div className="thought-card">
      <p className="username-text">{message.userName}</p>
      <h4>{message.message}</h4>
      <div className="bottom-info-container">
        <div className="likes-container">
          <button 
            // className={message.hearts === 0 ? "heart-button" : "liked-heart-button"}
            className="heart-button"
            onClick={() => onLikesIncrease(message._id)}
            disabled={isLiked}
            >
            <img src="assets/heart-icon.png" alt="heart"/>
          </button>
          <p className="like-counter">x {hearts}</p>
        </div>
        <p>{moment(message.createdAt).fromNow()}</p>
      </div>
    </div>
  )
}

export default ThoughtsCard