import React from "react";

import "./MessageCard.css";

const MessageCard = ({ message, hearts, createdAt }) => {
  return (
    <div className="message-container">
      <h2 className="message-text">{message}</h2>
      <div className="message-info-container">
        <div className="message-heart-group">
          <button type="button" className="message-heart-button"> ❤️ </button>
          <p className="message-heart-count"> x {hearts}</p>
        </div>
        <p className="message-date">{createdAt}</p>
      </div>
    </div>
  );
};

export default MessageCard;
