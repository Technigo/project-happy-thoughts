import React, { useEffect, useState } from 'react';
import moment from 'moment'; 

export const MessageList = () => {
  const MESSAGE_URL = 'https://wk11livesession.herokuapp.com/messages'; 
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
const filteredMessages = data.filter(message => message.text);
const limitedMessages = filteredMessages.slice(0, 10);

    //Save the data to state
    setMessages(filteredMessages);
  })
}, []); //Empty array for not getting an infinite loop

  return ( 
  <div>
    {messages.map(messages => {
      return (
        <p className='message' key={messages._id}> 
          {messages.text}
          <span className="messageTime">
          {moment(messages.created).fromNow()}
          </span>
          <p>{messages.hearts}</p>
        </p>
        
      ); 
    })}
  </div>
)}
