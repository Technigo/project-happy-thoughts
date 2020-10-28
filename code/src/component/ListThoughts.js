import React from 'react';
import moment from 'moment';


export const MessageList = ({ messageList }) => {

  return (
    <div>

      {
        messageList.map(message => (
          <p className="message" key={message.createdAt}>
            {message.message}
            <span>{message.hearts}</span>
            <span className="time-stamp">
              {moment(message.createdAt).fromNow()}
            </span>
          </p>
        ))
      }
    </div >
  )
};