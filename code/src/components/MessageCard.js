import React from "react";

import Moment from "moment";
import "./messageCard.css";

export const MessageCard = ({ _id, createdAt, hearts, message, onLiked }) => {
  const handleClick = () => {
    fetch(
      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`,
      {
        method: "POST",
        body: "",
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => onLiked(_id));
  };

  return (
    <div className="message-card-container" key={_id}>
      <p className="card-message">{message}</p>
      <div className="bottom-card-container">
        <div className="hearts-container">
          <button
            className="heart-btn"
            onClick={handleClick}
            style={{ background: hearts > 0 ? "pink" : "black" }}
          >
            <span role="img" aria-label="hearts">
              {"💛 "}
            </span>
          </button>
          <span className="hearts">x {hearts}</span>
        </div>
        <span className="moment">{Moment(createdAt).fromNow()}</span>
      </div>
    </div>
  );
};

export default MessageCard;
