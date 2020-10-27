import React, { useState, useEffect } from "react";

export const MessageList = (props) => {
  console.log(props.messages);
  return (
    <div>
      {props.messages.map((message) => (
        <p>{message.message}</p>
      ))}
    </div>
  );
};
