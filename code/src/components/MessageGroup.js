import React from "react";
import MessageCard from "./MessageCard";

import './MessageGroup.css'

const MessageGroup = ({ messages }) => {
  return (
    <div className="message-group-container">
      {messages.map((message, i) => (
        <MessageCard key={i} {...message} />
      ))}
    </div>
  );
};

export default MessageGroup;
