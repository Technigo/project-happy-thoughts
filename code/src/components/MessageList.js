import moment from 'moment';
import React, { useEffect, useState } from 'react';

export const MessageList = () => {
  const MESSAGES_URL = 'https://wk11livesession.herokuapp.com/messages';
  const [messages, setMessages] = useState([]); 

  useEffect(() => {
   fetch(MESSAGES_URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      data.reverse();

      const filteredMessages = data.filter((message) => message.text);

      setMessages(filteredMessages);
    });
  } ,[]);

  return (
    <div>
      {messages.map((message) => {
        return (
          <p key={message._id}>
            {message.text}
            {moment(message.created).fromNow()}
          </p>
        );
      })}
    </div>
  ); 
};