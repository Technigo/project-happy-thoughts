import React, { useState, useEffect } from "react";
import { MessageCard } from "./MessageCard";

export const MessageList = (props) => {
  
  return (
    <div>
      {props.messages.map((message) => (
        <MessageCard key={message._id} message={message}/>
      ))}
    </div>
  );
};
