import React, { useState, useEffect } from "react";
import { MessageForm } from "./MessageForm";
import { MessageList } from "./MessageList";

export const App = () => {
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [messages, setMessages] = useState([]);
  const [likes, setLikes] = useState(0)

  const messageLike = (id) => {
    
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
    .then(() => {
        setLikes(likes + 1)
        //setHearts(hearts + 1)
        console.log(likes)
    })
}


  useEffect(() => {
    fetch(MESSAGES_URL)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      });
  }, [likes]);

  return (
    <div className="main-container">
      <MessageForm messages = {messages} setMessages = {setMessages}/>
      <MessageList messages={messages} messageLike={messageLike}/>
    </div>
  );
};
