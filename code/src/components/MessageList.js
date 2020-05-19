import React, { useState, useEffect } from "react";
import moment from "moment";
import './messageList.css'
import { LikeHearts } from "./LikeHearts";

export const MessageList = () => {
  //const MESSAGES_URL = 'https://happy-thoughts-week19.herokuapp.com/thoughts'
  const MESSAGES_URL = 'http://localhost:8080/thoughts'
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

  const onLiked = messageId => {
    const updatedMessages = messages.map(message => {
      if (message._id === messageId) {
        message.hearts += 1
      }
      return message
    })
    setMessages(updatedMessages)
  }

  return (
    <div className="messages-list">
      {messages.map(message => (
        <section className="messages">
          <p key={message.createdAt}>{message.message}</p>
          <div className="likes-and-when">
            <p><LikeHearts message={message} onLiked={onLiked} /></p>
            <h5>{moment(message.createdAt).fromNow()}</h5>
          </div>
        </section>
      ))}
    </div>
  )
}
