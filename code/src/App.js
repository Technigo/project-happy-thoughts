import React, { useState, useEffect } from "react";

import { MessageList } from "./components/MessageList";
import { MessageInput } from "components/MessageInput";

export const App = () => {
  const [messages, setMessages] = useState([]);

  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    fetch(MESSAGES_URL)
      .then((res) => res.json())
      .then((data) => setMessages(data));
  };

  const reachMessageInput = (newMessage) => {
    fetch(MESSAGES_URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ message: newMessage }),
    })
      .then(() => fetchMessages())
      .catch((err) => console.log("error:", err));
  };

  const onLiked = (messageId) => {
    const updatedMessage = () =>
      messages.map((message) => {
        if (message._id === messageId) {
          message.hearts += 1;
        }
        return message;
      });
    setMessages(updatedMessage);
  };

  return (
    <div className="main-container">
      <MessageInput onMessageChange={reachMessageInput} />

      <MessageList
        key={messages._id}
        messageList={messages}
        onLiked={onLiked}
      />
    </div>
  );
};
