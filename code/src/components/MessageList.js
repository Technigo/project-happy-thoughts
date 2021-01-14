import React from "react";
import moment from "moment";

import "./messageList.css";

export const MessageList = ({ messages, onLiked }) => {
  const handleSubmit = (id) => {
    onLiked(id);
  };

  // Render messages using map
  return (
    // Add a section for each message returned by the backend
    <>
      {messages.map((message) => (
        <article className="message-card" key={message._id} tabIndex="0">
          <p className="message">{message.text}</p>
          <div className="message-info">
            <button
              className={
                message.likes > 0
                  ? "like-button with-likes"
                  : "like-button no-likes"
              }
              onClick={() => handleSubmit(message._id)}
            >
              <span className="heart" role="img" aria-label="Click to like the post.">
                💜
              </span>
            </button>
            <p className="nr-of-likes">{message.likes}&nbsp;likes</p>
            <p className="message-time">
              {moment(message.createdAt).fromNow()}
            </p>
          </div>
        </article>
      ))}
    </>
  );
};
