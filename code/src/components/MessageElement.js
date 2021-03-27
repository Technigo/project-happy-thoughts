import React from 'react'
import moment from 'moment'

const MessageElement = ({ message, onLikesIncrease } ) => {
  return (
      <>
        <h4>{message.message}</h4>
          <button onClick= {() => onLikesIncrease(message._id)}>
            {message.hearts}
             ♥️
          </button> 
          <p className ="date-created">-{moment(message.createdAt).fromNow()}</p> 
      </>
    )
}

export default MessageElement
