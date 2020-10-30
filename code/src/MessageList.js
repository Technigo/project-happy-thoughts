import React from "react";
import { MessageCard } from "./MessageCard";

export const MessageList = (props) => {
  
  return (
    <div>
      {props.messages.map((message) => (
        <MessageCard key={message._id} message={message} messageLike={props.messageLike} likedThoughts={props.likedThoughts}/>
      ))}
    </div>
  );
};
