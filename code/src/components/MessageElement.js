import React from 'react'

import moment from 'moment'

const MessageElement = ({ message, onLikesIncrease } ) => {
  return (
      <div className= 'printed-message-container'>
        <p className= "printed-message">{message.message}</p>
          <button 
          className="likes-button"
          onClick= {() => onLikesIncrease(message._id)}>
            {message.hearts}
             ♥️
          </button> 
          <p className ="date-created">-{moment(message.createdAt).fromNow()}</p> 
      </div>
    )
}

export default MessageElement
 