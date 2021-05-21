import React from 'react'
import moment from 'moment'

const ThoughtsElement = ({ sentmessage, handleHeartsIncrease}) => {
  return (
    <div className="sent-message-container">
      <h4 className="sent-message">{sentmessage.message}</h4>
      <h5 className="sent-message-author">Posted by: {sentmessage.author}</h5> 
      <div className="heart-button-and-messagecreated-container">
        <div className="heart-likes-container">
          <button
            tabIndex="0"
            aria-label="Add like to a sent message"
            className={`heart-button ${sentmessage.hearts > 0 ? 'heart-button-clicked' : 'heart-button-unclicked'}`}
            onClick={() => handleHeartsIncrease(sentmessage._id)}
          >
          <span role="img" aria-label="heart">❤️</span>
          </button>
          <p className="heart-times-counter">x {sentmessage.hearts}</p>
        </div>
        <div className="message-created-container">
          <p className="message-created">{moment(sentmessage.createdAt).fromNow()}</p>
        </div>
      </div>
    </div>
  )
}

export default ThoughtsElement
