import React, { useEffect, useState } from 'react'
import "components css/messageList.css";
import moment from 'moment';
import { Likes } from "./Likes.js"

export const MessageList = () => {
// It's good to put your URLs in constants
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [messages, setMessages] = useState([]);
  // Ask the server for the messages using a GET requests
  useEffect (()=> {
    getMessage()
  },[]);

  const getMessage = () => {
    fetch(MESSAGES_URL)
    .then((res) => {
    // Get the JSON of the response body
      return res.json()
    })
    .then((data) => {
    // Set the state based on the response
      const filteredMessages = data.filter((message) => message.message); 
      const limitedMessages = filteredMessages.slice(0,10);
      setMessages(limitedMessages);
    });
  }

  return (
  <div> 
    {messages.map((message) => {
      return <section className="message" key={message._id}>
              <p className="text"> {message.message} </p>
              <div className="likes-and-time">
                <Likes hearts={message.hearts}
                      getMessage={getMessage}
                      id={message._id}
                />
                <span className="message-time"> 
                {moment(message.createdAt).fromNow()}
                </span>
              </div>
            </section> 
    })}
  </div>
  );  
};
