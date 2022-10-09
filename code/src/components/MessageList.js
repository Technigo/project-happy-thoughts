/* eslint no-underscore-dangle: 0 */
/* eslint no-shadow: 0 */

import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const MessageList = ({ loading, messageList, handleLikes }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }
  return (
    <section className="messageList">
      {messageList.map((message) => (
        <div className="singleMessage" key={message._id}>
          <h4>{message.message}</h4>
          <div className="likeAndTime">
            <div className="btnAndCounter">
              <button
                type="button"
                className="likeBtn"
                onClick={() => { handleLikes(message._id); }}
                style={{ background: message.hearts >= 1 ? 'rgb(241, 198, 198)' : 'lightgrey' }}>
              ❤️
              </button>
              <p className="counter">{message.hearts}</p>
            </div>
            <p className="time">{formatDistanceToNow(new Date(message.createdAt), Date.now(), { addSuffix: true })}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default MessageList;