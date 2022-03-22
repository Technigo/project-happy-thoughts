import React from "react";

const MessageGroup = ({ messages }) => {
  return messages.map((item, i) => <p key={i}>{item.message}</p>);
};

export default MessageGroup;
