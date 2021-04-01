import React from "react";
import moment from "moment";

const MessageElement = ({ message, onLikeIncreas }) => {
  return (
    <div className="message-element">
      <p className="message-text">{message.message}</p>
      <div className="heart-date">
        <button
          onClick={() => onLikeIncreas(message._id)}
          className="heart-button"
        >
          <div className="heart-container">
            <span role="img" aria-label="heart" className="heart-emoji">
              ❤️
            </span>
          </div>
          x {message.hearts}
        </button>
        <p>{moment(message.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default MessageElement;
