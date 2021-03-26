import React from 'react';
import moment from 'moment';

const MessageElement = ({ message, onHeartLikes}) => {
  return (
    <div
      className='chat-section'
      key={message._id}
      >
      <h4>{message.message}</h4>
      <div className='likes-section'>
        <div className='likes'>
        <button
          onClick={() => onHeartLikes(message._id)}
          className={message.likes > 0 ? 'many-likes' : 'likes'}>
          <span role="img" aria-label="heart emoji">❤️</span>
        </button>
        </div>
        <p>
          x {message.likes}
        </p>
        <p className='time'>{moment(message.createdAt).fromNow()}</p>
      </div>
    </div>
  )
}

export default MessageElement;