import React from 'react'

import moment from 'moment'

const MessageList = ({ messageList, onLikesIncrease }) => {
    return (
        <div>
          {messageList.map(message => (
            <div key={message._id}>
            <h4>{message.message}</h4>
                <button onClick= { () => onLikesIncrease(message._id)}>
                {message.hearts}
                ♥️
                </button> 
                <p className ="date-created">-{moment(message.createdAt).fromNow()}</p> 
            </div>
          ))}          
        </div>
    )
}

export default MessageList
