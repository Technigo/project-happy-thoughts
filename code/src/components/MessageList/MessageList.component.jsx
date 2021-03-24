import React, { useContext } from "react";

import FormContext from '../FormContext/FormContext.component'
import MessageListItem from "../MessageListItem/MessageListItem.component";

import {MessageListContainer, MessageListItemContainer} from './MessageList.style'

const MessageList = () => {
  const { messageList } = useContext(FormContext);
  
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