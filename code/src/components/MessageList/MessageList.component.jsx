import React from "react";

import MessageListItem from "../MessageListItem/MessageListItem.component";

import {MessageListContainer, MessageListItemContainer} from './MessageList.style'

const MessageList = ({ messageList }) => {
  return (
    <MessageListContainer>
      {messageList.map((message) => {
        return (
          <MessageListItemContainer key={message._id}>
            <MessageListItem message={message} /> 
          </MessageListItemContainer>
        )
      })}
    </MessageListContainer>
  ) 
}

export default MessageList;