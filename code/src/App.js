import React, { useState, useEffect } from "react";
import { MessageForm } from "./MessageForm";
import { MessageList } from "./MessageList";

export const App = () => {
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(MESSAGES_URL)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      });
  }, []);

  return (
    <div className="main-container">
      <MessageForm messages={messages}/>
      <MessageList messages={messages}/>
    </div>
  );
};
