import React, { useState } from "react";
import { LIKES_URL } from '../utils/commons'

const HeartButton = ({ thoughtId, thought, fetchThoughts }) => {
  const [sumYourLikes, setSumYourLikes] = useState(
    JSON.parse(localStorage.getItem(thoughtId)) + 0
  );

  const onLikesIncrease = (thoughtId) => {
    fetch(LIKES_URL(thoughtId), {
      method: 'POST'
    })
      .then((res) => res.json())
      .then(() => {
        fetchThoughts()
      }, [])
    
    setSumYourLikes((value) => value + 1)
    localStorage.setItem(thoughtId, JSON.stringify(sumYourLikes))
  }

  return (
    <div className="heart-likes-container">
      {sumYourLikes === 0 && (
        <button
          className={thought.hearts === 0 ? "heart-button" : "heart-button liked"}
          onClick={() => onLikesIncrease(thought._id)}
        >
          <span role="img" aria-label="heart">❤️</span>
        </button>
      )}
      {sumYourLikes >= 1 && (
        <button
          className="heart-button blue"
          onClick={() => onLikesIncrease(thought._id)}
        >
          <span role="img" aria-label="heart">❤️</span>
        </button>
      )}
        <div className="likes-text"> x {thought.hearts}</div>
        <div>You x {sumYourLikes}</div>
    </div>
  )
}

export default HeartButton
