import React, { useState, useEffect } from "react";
import moment from "moment";
import './messageList.css'
import { LikeHearts } from "./LikeHearts";

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
    <div className="messages-list">
      {messages.map(message =>(
        <section className="messages">
        <p key={message.createdAt}>{message.message}</p>
        <h5>{moment(message.createdAt).fromNow()}</h5>
        </section>
      ))}
    </div>
  )
}
