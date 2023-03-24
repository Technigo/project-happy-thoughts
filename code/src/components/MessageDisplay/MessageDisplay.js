/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';
import './messagedisplay.css'
import { useReward } from 'react-rewards';

export const MessageDisplay = ({ messageList, LikeCounter, latestMessage }) => {
  // This is a React package that is imported for adding the confetti when user presses the likes. a span is added next to the button-text that is triggered when the user clicks the button.
  const { reward, isAnimating } = useReward('rewardId', 'confetti')

  return (
    <div className="message-list-container">
      {messageList.map((list) => (
        {/*the comparision below checks if the list._id is the same as the id of the latestMessage, if yes the fade-in css class will be applied */}
        <div className={`message-box ${list._id === latestMessage ? 'fade-in' : ''}`} key={list._id}>
          <p className="message-text">{list.message}</p>
          <div className="like-and-date">
            <div className="button-and-counter">
              <button className={(list.hearts === 0 ? 'no-like-button' : 'like-button')} disabled={isAnimating} onClick={() => { LikeCounter(list._id); reward() }}> <span id="rewardId" />❤️</button>
              <p className="counter">x {list.hearts}</p>
            </div>
            <p className="date-text">{formatDistance(new Date(list.createdAt), Date.now(), { addSuffix: true })}</p>
          </div>
        </div>
      ))}
    </div>
  )
}