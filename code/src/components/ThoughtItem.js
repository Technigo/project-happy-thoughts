/* eslint-disable react/button-has-type */
import React, { useState } from "react"
import moment from "moment"

const ThoughtItem = ({ thought, onLikesIncrease }) => {
  const [myLikes, setMyLikes] = useState(0)

  const addLikes = (id) => {
    setMyLikes(myLikes + 1)
    onLikesIncrease(id)
  }

  return (
    <div className="thought-wrapper">
      <p className="message-text">{thought.message}</p>
      <div className="like-container">
        <div className="like-btn">
          <button
            className={thought.likes > 0 ? "heart-btn heart-btn-clicked" : "heart-btn"}
            // eslint-disable-next-line no-underscore-dangle
            onClick={() => addLikes(thought._id)}>
            {' '}
            <span className="heart-icon" role="img" aria-label="like">❤️</span>
          </button>
          <p>x {thought.likes}</p>
        </div>
        <p className="date">{moment(thought.createdAt).fromNow()}</p>
      </div>
      <div>
        <p className="likes-text">You liked this happy thought {myLikes}
          {myLikes === 1 ? " time" : " times"}</p>
      </div>
    </div>
  )

}

export default ThoughtItem