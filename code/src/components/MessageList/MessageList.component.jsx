import React from "react";

import MessageListItem from "../MessageListItem/MessageListItem.component"

const MessageList = ({ messageList }) => {
  return (
    <ul>
      {messageList.map((message) => {
        return (
          <li key={message._id}>
            <MessageListItem message={message} /> 
          </li>
        )
      })}
    </ul>
  ) 
}

export default MessageList;