import React from "react";
import moment from "moment";

export const MessageCard = (props) => {
  return (
    <div className="message-container">
      <div className="message-content">
        <p className="message-text">{props.message.message}</p>
        <div className="message-details">
          <div
            className="hearts"
            style={{
              background: props.likedThoughts.includes(props.message._id) //compare if id is in array of liked thoughts => set color
                ? "#FFADAD"
                : "#EAEAEA",
            }}
            onClick={() => props.messageLike(props.message._id)}
          >
            <span className="heart">❤️</span>
          </div>
          <span className="hearts-count">x {props.message.hearts}</span>
          <span className="message-time">
            {moment(props.message.createdAt).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
};
