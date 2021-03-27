import React from 'react'
import moment from 'moment'

const MessageElements = ({ onLikesIncrease, message }) => {

    return (
        <div className='message-container'>
            <p className='message-text'>{message.message}</p>
            <div className='heart-date-container'>
              <div className="likes-icon-count">
                <button 
                  tabIndex='0'
                  aria-pressed='false'
                  aria-label='Add like'
                  onClick={() => onLikesIncrease(message._id)}
                  className={`heart-button ${message.hearts > 0 ? 'heart-active' : 'heart-inactive'}`}
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
