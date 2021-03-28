import React from 'react'

import moment from 'moment'

const MessageElement = ({ message, onLikesIncrease } ) => {
  return (
    <div className= 'printed-message-container'>
      <p className= "printed-message">{message.message}</p>
        <div className="heart-counting-date-wrapper">
          <p className ="date-created">{moment(message.createdAt).fromNow()}</p> 
            <div className="button-counting-wrapper">
              <button className="heart-button" onClick= {() => onLikesIncrease(message._id)}>
                <span role="img" aria-label="heart">♥️</span>
              </button> 
              <p className="counting-likes"> x {message.hearts}</p>
            </div>
        </div>
    </div>
    )
}

export default MessageElement
 