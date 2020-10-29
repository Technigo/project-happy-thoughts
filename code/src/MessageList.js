/* eslint-disable */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/button-has-type */
import React from 'react'
import moment from 'moment';

export const MessageList = ({ messageList, hearts, _id }) => {
  

  const onLiked = (messageId) => {
    const newMessages = messages.map(message => {
      if (message._id === messageId) {
        message.hearts += 1
      }
      return message
    })
    setMessages(newMessages)
  }

  const handleClick = () => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts/THOUGHT_ID/like", {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {onLiked(message._id)})
  }
  
  return (
    <div className="happy-message">
      {
        messageList.map((message) => (
          <div className="message" key={message.createdAt} >
            {message.message}
            <div className="form-footer">
            <button
              onClick={handleClick}>
              <span className="heart" role="img" aria-label="Heart">
                {"❤️"}
              </span>
            </button>
            <span className="heart-likes">x {hearts}</span>
            <span className="message-time">
              {moment(message.createdAt).fromNow()}
            </span>
            </div>
          </div>
        ))
      }
    </div>
  );
};