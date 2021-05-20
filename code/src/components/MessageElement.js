import React from 'react';
import moment from 'moment';

import { 
  DateText, 
  LikeAndDateContainer, 
  LikeButton, 
  LikesText, 
  MessageContainer, 
  MessageName, 
  MessageTitle } from './Styling';

export const MessageElement = ({ message, onLikeClick }) => {
  return (
    <MessageContainer>
      <MessageTitle tabIndex='0'>{message.message}</MessageTitle>
      <MessageName tabIndex='0'>{message.name}</MessageName>
      <LikeAndDateContainer>
        <LikesText>
          <LikeButton 
            onClick={() => onLikeClick(message._id)}
            liked={message.hearts > 0}>
            <span role='img' aria-label='heart'>❤️</span>
          </LikeButton> 
          x {message.hearts}
        </LikesText>
        <DateText>{moment(message.createdAt).fromNow()}</DateText>
      </LikeAndDateContainer>
    </MessageContainer>
  )
};