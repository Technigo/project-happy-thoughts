import React from "react";
import MessageCard from "./MessageCard";

import "./MessageGroup.css";

const MessageGroup = ({ messages }) => {
  return (
    <div className="message-group-container">
      {messages.map((message) => (
        <MessageCard key={message._id} {...message} />
      ))}
    </div>
  );
};

export default MessageGroup;
