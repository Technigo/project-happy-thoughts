import React from 'react'
import moment from 'moment'

const MessageElements = ({ onLikesIncrease, message, backgroundColorClicked, backgroundColorInactive }) => {

    return (
        <div className='message-container'>
            <p className='message-text'>{message.message}</p>
            <div className='heart-date-container'>
              <div className="likes-icon-count">
                <button 
                  className='heart-button' 
                  onClick={() => onLikesIncrease(message._id)}
                  style={(message.hearts > 0) ? { backgroundColor: backgroundColorClicked } : { backgroundColor: backgroundColorInactive } }
                >
                    <span role='img' aria-label='heart emoji'>❤️</span>
                </button>
                <p>x {message.hearts}</p>
              </div>
              <p className='date'>- {moment(message.createdAt).fromNow()}</p>
            </div>
        </div>

    )
}

export default MessageElements
