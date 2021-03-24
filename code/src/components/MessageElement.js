import React from 'react'
import moment from'moment'

const MessageElement = ({ message, onHeartsIncrease }) => {
  return (
    <div>
        <h4>{message.message}</h4>
        <button onClick={ () => onHeartsIncrease(message._id)}>
          {message.hearts}
          ❤️
        </button>
        <p>-{moment(message.createdAt).fromNow()}</p>
      </div>

  )
     
}

export default MessageElement