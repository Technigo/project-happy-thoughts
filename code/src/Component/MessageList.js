import React from 'react';
import moment from 'moment';
import LikeButton from './LikeButton';

const MessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => {
        return (
          <div className="message-box container" key={message._id}>
            <p className="message">
              {message.message}
            </p>
            <div className="message-second-row">
              <LikeButton
                message={message}
              />
              <span className="second-row-elements">
                {moment(message.created).fromNow()}
              </span>
              </div>
            </div>
         );
      })}
    </div>
   );
};
 
export default MessageList;