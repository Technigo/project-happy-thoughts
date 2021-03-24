import React from 'react'
import moment from 'moment'

const ThoughtsElement = ({ sentmessage, handleHeartsIncrease}) => {
  return (
    <>
      <h4>{sentmessage.message}</h4>
        <div className="heart-likes-container">
          <button className="heart-button" onClick={() => handleHeartsIncrease(sentmessage._id)}>
            ❤️
          </button>
          <p className="heart-times-counter">x {sentmessage.hearts}</p>
          <p className="message-created">{moment(sentmessage.createdAt).fromNow()}</p>
        </div>
    </>
  )
}

export default ThoughtsElement
