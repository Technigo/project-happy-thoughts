import React from 'react';
import moment from 'moment';

const MessageElement = ({ message, onLikesIncrease }) => {
    return (
        <div className="happy-card">
              <h4>{message.message}</h4>
              <div className="button-wrapper">
              <button className="heart-button" onClick={() => onLikesIncrease(message._id)}>
              <span className={message.hearts > 0 ? 'heart-button-active' : 'heart-button'} role='img' aria-label='heart icon'>❤</span>
              </button>
              <p className="heart-count">x {message.hearts}</p>
              </div>
              <p className="date">- {moment(message.createdAt).fromNow()}</p>
            </div>
    )
}

export default MessageElement;
