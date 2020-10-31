import React from 'react';
import moment from 'moment';

export const MessageList = ({ messageList, onLike }) => {
  return (
    <div>
      {
        messageList.map(message => (
          <div className="message" key={message._id}>
            <p>{message.message}</p>
            <button
              value={`heart-button ${message.hearts > 0 ? 'Liked' : 'Unliked'}`}
              onClick={() => onLike(message)}
            >
              <span role='img' aria-label='heart'>
                {'❤️'}
              </span>
            </button>
            <span className="num-hearts">
              x {message.hearts}
            </span>
            {/* </div> */}
            <span className="time-stamp">
              {moment(message.createdAt).fromNow()}
            </span>
          </div>
        ))
      }
    </div >
  )
};

