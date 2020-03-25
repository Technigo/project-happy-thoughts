import React, { useState, useEffect } from "react";
import moment from "moment";
import './messageList.css'

export const MessageList = () => {
  const MESSAGES_URL ="https://technigo-thoughts.herokuapp.com"
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch(MESSAGES_URL)
    .then((res) => {
      return res.json();
    })
    .then(data => { 
      setMessages(data)
    });

  }, []);
  
  return (
    <div className="messages">
      {messages.map(message =>(
        <p key={message.createdAt}>{message.message}
        <span>{moment(message.createdAt).fromNow()}</span>
        </p>
      ))}
    </div>
  )
}
