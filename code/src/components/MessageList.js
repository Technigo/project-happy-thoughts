import React from 'react';
import moment from 'moment';

const MessageList = ({MessageListArray}) => {
  console.log(MessageListArray);

  return (
    <div className="message-list-container">
      {MessageListArray.map(message => (
        <div className= "thoughts-card" key={message._id}>
          <h4 className="message-text">{message.message}</h4>
        <div className="created-and-likes">
          <p>heart x {message.hearts}</p>
          <p className="created">{moment(message.createdAt).fromNow()}</p>
          </div>
        </div>
      ))}
     </div>
  )
}

export default MessageList;