import React, { useState } from 'react';
import moment from 'moment';

import './messageList.css';

export const MessageList = ({messageList, onLiked}) => {

  const [messageId, setMessageId] = useState("");
  console.log("messageId: " + messageId);

  const handleSubmit = () => {
    console.log("messageId inside handleSubmit: " + messageId);
    onLiked(messageId);
    //onLiked("5f9c803469d3ae00171aa29f");
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
                //onClick={handleSubmit}
                //onClick={event => handleSubmit(event.target.value)}
                //onChange={event => setMessageId(event.target.value)}
                onClick={() => {
                    setMessageId(message._id)
                    handleSubmit()
                }}
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