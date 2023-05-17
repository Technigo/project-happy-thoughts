/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';
import './messagedisplay.css'
import { useReward } from 'react-rewards';

export const MessageDisplay = ({ messageList, LikeCounter, latestMessage }) => {
  const { reward, isAnimating } = useReward('rewardId', 'confetti')
  // This is a React package that is imported for adding the confetti when user presses the likes. a span is added next to the button-text that is triggered when the user clicks the button.

  return (
    <div className="message-list-container">
      {messageList.map((message) => (
        <div className={`message-box ${message._id === latestMessage ? 'fade-in' : ''}`} key={message._id}>
          <p className="message-text">{message.message}</p>
          <div className="like-and-date">
            <div className="button-and-counter">
              <button className={(message.likes === 0 ? 'no-like-button' : 'like-button')} disabled={isAnimating} onClick={() => { LikeCounter(message._id); reward() }}> <span id="rewardId" />❤️</button>
              <p className="counter">x {message.likes}</p>
            </div>
            <p className="date-text">{formatDistance(new Date(message.createdAt), Date.now(), { addSuffix: true })}</p>
          </div>
        </div>
      ))}
    </div>
  )
}