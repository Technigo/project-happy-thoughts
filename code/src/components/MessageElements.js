import React from 'react'
import moment from 'moment'

const MessageElements = ({ onLikesIncrease, message }) => {
    return (
        <div className='message-container'>
            <h4>{message.message}</h4>
            <div className='heart-date-container'>
              <div className="likes-icon-count">
                <button onClick={() => onLikesIncrease(message._id)}>❤️️</button>
                <p>{message.hearts}</p>
              </div>
              <p className="date">- {moment(message.createdAt).fromNow()}</p>
            </div>
        </div>

    )
}

export default MessageElements
