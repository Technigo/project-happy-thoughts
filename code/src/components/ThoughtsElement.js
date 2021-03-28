import React from 'react';
import moment from 'moment';

const ThoughtsElement = ({ message, onHeartLikes}) => {
  return (
    <div
      className='chat-section'
      key={message._id}
      >
      <h4 tabIndex="0">{message.message}</h4>
      <div className='likes-section'>
        <div className='likes'>
        <button aria-label="send happy thoughts" className={message.hearts === 0 ? 'button-grey' : 'button-pink'}
          onClick={() => onHeartLikes(message._id)}>
          <span className='heart' role="img" aria-label="heart-icon">❤️</span>
        </button>
        </div>
        <p className='counter' tabIndex="0">
          x {message.hearts}
        </p>
        <p className='time' tabIndex="0">{moment(message.createdAt).fromNow()}</p>
      </div>
    </div>
  )
}

export default ThoughtsElement;
