import React, { useState } from 'react';
import moment from 'moment';

import './messageList.css';

//import { MESSAGE_URL} from '.././urls';

export const MessageList = ({messageList, onLiked}) => {

  //const [message, setMessage] = useState(0);

  const handleSubmit = () => {
    console.log("Like handleSubmit" + message._id);
    //event.preventDefault();
    onLiked(message._id);  //newLike = 0
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
                value={message._id}
                onClick={handleSubmit}
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