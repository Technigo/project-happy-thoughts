import React from 'react';
import moment from 'moment';

const MessageElement = ({ message, onLikesIncrease }) => {
    return (
        <div className="happy-card">
              <h4>{message.message}</h4>
              <button onClick={() => onLikesIncrease(message._id)}>
                {message.hearts}
                ❤
              </button>
              <p className="date">- {moment(message.created).fromNow()}</p>
            </div>
    )
}

export default MessageElement;
