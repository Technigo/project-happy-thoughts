import React from 'react';
import moment from 'moment';

// import HeartButton from './HeartButton';

const MessageElement = ({ message, onHeartClick }) => {
  return (
    <>
      <div className="message-element-container">
        <p className="message">{message.message}</p>
        
        <div className="heart-date-container">
          <button onClick={() => onHeartClick(message._id)}>
            <span 
              role="img" 
              aria-label="heart icon">
                ❤️
            </span>
          </button>

          <span>x {message.hearts}</span>
          <p>{moment(message.createdAt).fromNow()}</p>
        </div>
      </div> 
    </>
  );
};

export default MessageElement; 