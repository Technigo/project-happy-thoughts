import React, { useEffect } from "react";

import MessageCard from "./MessageCard";
import "./messageList.css";

const MessageList = ({ messages, setMessages }) => {
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

  useEffect(() => {
    fetch(MESSAGES_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMessages(data);
      });
  }, []);

  // adding a new like (updates)
  const onLiked = (messageId) => {
    const updatedMessages = messages.map((message) => {
      if (message._id === messageId) {
        message.hearts += 1;
      }
      return message;
    });

    setMessages(updatedMessages);
  };

  return (
    <div className="message-list-container">
      {messages.map((message) => {
        // props destructuring ... --> sends as individual props (see MessageCard)
        return <MessageCard {...message} onLiked={onLiked} />;
      })}
    </div>
  );
};

export default MessageList;
