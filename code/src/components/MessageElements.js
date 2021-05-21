import React from 'react'
import moment from 'moment'

const MessageElements = ({ onLikesIncrease, message, userName, onClickDelete }) => {

    return (
        <div className='message-container'>
          <div className='message-delete-container'>
            <p className='message-text'>{message.message}</p>
            <button 
              tabIndex='0'
              aria-pressed='false'
              aria-label='Remove thought'
              className='delete-button'
              onClick={() => onClickDelete(message._id)}
            >
              x
            </button>
          </div>
          <p className='username-text'>Posted by: {message.userName}</p>
          <div className='heart-date-container'>
            <div className="likes-icon-count">
              <button 
                tabIndex='0'
                aria-pressed='false'
                aria-label='Add like'
                onClick={() => onLikesIncrease(message._id)}
                className={`heart-button ${message.hearts > 0 ? 'heart-active' : 'heart-inactive'}`}
              >
                  <img className='heart-img' 
                  src={process.env.PUBLIC_URL + './icons/favourite.png'}
                  alt='heart' 
                  /> 
              </button>
              <p>x {message.hearts}</p>
            </div>
            <p className='date'>- {moment(message.createdAt).fromNow()}</p>
          </div>
        </div>
    )
}

export default MessageElements
