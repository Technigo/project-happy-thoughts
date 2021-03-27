import React from 'react'
import moment from 'moment'

const Thought = ({ message, onLikesIncrease }) => {
  return (
    <>
      <div className="thought-container">
        <p className="happy-thought">{message.message}</p>
        <div className="icon-time-container">
          <div>
            <button
              onClick={() => onLikesIncrease(message._id)}
              className={message.hearts === 0 ? "like-button" : "button-color"}
            >
              <span role="img" aria-label="heart icon">
                &#10084;&#65039;
              </span>
            </button>
            <span> x {message.hearts}</span>
          </div>
          <span className="created-time">
            {moment(message.createdAt).fromNow()}
          </span>
        </div>
      </div>
    </>
  )
}

export default Thought
