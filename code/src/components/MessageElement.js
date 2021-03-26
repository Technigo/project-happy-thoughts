import React from 'react';
import moment from 'moment';

const MessageElement = ({ message, onHeartLikes}) => {
  return (
    <div>
      <h4>{message.message}</h4>
      <button onClick={() => onHeartLikes(message._id)}>
        {message.likes}
        ♥
      </button>
      <p className="date">- {moment(message.created).fromNow()}</p>
    </div>
  )
}

export default MessageElement;