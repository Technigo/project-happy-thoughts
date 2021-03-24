import React from "react";

import MessageListItem from "../MessageListItem/MessageListItem.component";

import {MessageListContainer, MessageListItemContainer} from './MessageList.style'

const MessageList = ({ messageList, handleLikesIncrease }) => {
  return (
    <MessageListContainer>
      {messageList.map((message) => {
        return (
          <MessageListItemContainer key={message._id}>
            <MessageListItem message={message} handleLikesIncrease={handleLikesIncrease} /> 
          </MessageListItemContainer>
        )
      })}
    </MessageListContainer>
  ) 
}

export default MessageList;