import React from "react";

import Moment from "moment";
import "./messageCard.css";

export const MessageCard = ({ _id, createdAt, likes, message, onLiked }) => {
  const handleClick = () => {
    const MESSAGES_URL = `https://jonnas-happy-thoughts.herokuapp.com/${_id}/like`;

    fetch(MESSAGES_URL, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" },
    }).then(() => onLiked(_id));
  };

  return (
    <div className="message-card-container" key={_id}>
      <p className="card-message">{message}</p>
      <div className="bottom-card-container">
        <div className="smiley-container">
          <button
            className={`smiley-btn ${
              likes > 9
                ? "love-liked"
                : likes > 4
                ? "super-liked"
                : likes > 0
                ? "liked"
                : "not-liked"
            }`}
            onClick={handleClick}
          ></button>
          <span className="hearts">x {likes}</span>
        </div>
        <span className="moment">{Moment(createdAt).fromNow()}</span>
      </div>
    </div>
  );
};

export default MessageCard;
