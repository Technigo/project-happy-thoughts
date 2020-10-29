import React, { useEffect, useState } from 'react';
import moment from 'moment'; 
import { MESSAGE_URL } from '../url'; 

export const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
  fetch(MESSAGE_URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    data.reverse();

  // Dont show empty messages
  const filteredMessages = data.filter(message => message.message);

  //Save the data to state
  setMessages(filteredMessages);
  })
  }, []); //Empty array for not getting an infinite loop

  return ( 
  <div>
    {messages.map(messages => {

      return (
        <article className="message-card">
        <h3 className='message' key={messages._id}> 
          {messages.message}
          <div className="message-bottom">
          <div className="like-wrapper">  
          <button className="heart-button">
          <span className="heart" role="img" aria-label="Heart">
						{'❤️ '}
					</span>
          </button>
          <p className="likes">x  {messages.hearts}</p>
          </div>
          <span className="messageTime">
          {moment(messages.created).fromNow()}
          </span>
          </div>
        </h3>
        </article>
      ); 
    })}
  </div>
)}
