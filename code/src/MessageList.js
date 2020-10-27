import React, { useState, useEffect } from "react";

export const MessageList = () => {
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(MESSAGES_URL)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      });
  }, []);
  return (<div>{messages.map(message =>  <p>{message.message}</p>)}</div>)
};
