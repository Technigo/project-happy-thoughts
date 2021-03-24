import React from 'react'
import moment from 'moment'

const ThoughtsElement = ({ sentmessage, handleHeartsIncrease}) => {
  return (
    <div className="sent-message-container">
      <h4 className="sent-message">{sentmessage.message}</h4>
      <div className="heart-button-and-messagecreated-container">
        <div className="heart-likes-container">
          <button 
            className="heart-button" 
            onClick={() => handleHeartsIncrease(sentmessage._id)} 
            style={{ backgroundColor: sentmessage.hearts > 0 ? "#ffadad" : "#f2f0f0" }}>
            ❤️
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
