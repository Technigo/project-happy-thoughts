import React from "react";

import Moment from "moment";
import "./messageCard.css";

export const MessageCard = ({ _id, createdAt, hearts, message, onLiked }) => {
  const handleClick = () => {
    const MESSAGES_URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`;

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
              hearts > 10
                ? "love-liked"
                : hearts > 4
                ? "super-liked"
                : hearts > 0
                ? "liked"
                : "not-liked"
            }`}
            onClick={handleClick}
          ></button>
          <span className="hearts">x {hearts}</span>
        </div>
        <span className="moment">{Moment(createdAt).fromNow()}</span>
      </div>
    </div>
  );
};

export default MessageCard;
