import React, { useState } from 'react';
import moment from 'moment';

import './messageList.css';

export const MessageList = ({messageList, onLiked}) => {

  const [messageId, setMessageId] = useState("");
  console.log("lite message kanske?" + messageId)

  const handleSubmit = () => {
    console.log("Like handleSubmit" + messageId);
    //event.preventDefault();
    // onLiked("5f9c661e69d3ae00171aa283");
    onLiked(messageId);
  };

  // Render messages using map
  return (
    <div>
      {
        // Add a section for each message returned by the backend
        messageList.map(message => (
          <article className="message-card" key={message._id}>
            <p className="message">
              {message.message}                           
            </p>
            <div className="message-info">
              <button 
                className="heart-button"
                onClick={handleSubmit}
                value={messageId}
                onChange={event => setMessageId(event.target.value)}
                style={{ background: message.hearts > 0 ? '#ffadad' : '#f3f1f1' }}
              >
                <span className="heart" role="img" aria-label="heart">❤️</span>
              </button>
              <p>{message.hearts}</p>
              <p className="message-time">
                {moment(message.createdAt).fromNow()}
              </p>
            </div>
          </article>
        ))
      }
    </div>
  )
}