import React, { useEffect, useState } from 'react';
import moment from 'moment';

const MessageList = () => {
  const MESSAGE_URL="https://wk11livesession.herokuapp.com/messages"
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(MESSAGE_URL)
    .then((res) => {
     return res.json();
    })
     .then((data) => {
     console.log(data);
     data.reverse();
     const filterMessages = data.filter((message) => message.text);
     const limitedMessages = filterMessages.slice(0, 10);
     
     setMessages(limitedMessages);
    });
  }, []);

  return (
    <div>
      {messages.map((message) => {
        return (
          <p className="message" key={message._id}>
            {message.text}
            <span className="message-time">
              {moment(message.created).fromNow()}
            </span>
          </p>
        );
      })}
    </div>
   );
};
 
export default MessageList;