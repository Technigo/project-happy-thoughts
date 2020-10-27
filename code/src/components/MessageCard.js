import React from "react";
import Moment from "moment";
import "./messageCard.css";

export const MessageCard = ({ _id, createdAt, hearts, message }) => {
  return (
    <div className="message-card-container" key={_id}>
      <p className="card-message">{message}</p>
      <div className="bottom-card-container">
        <div className="hearts-container">
          <button className="heart-btn">🖤 </button>
          <span className="hearts">x {hearts}</span>
        </div>
        <span className="moment">{Moment(createdAt).fromNow()}</span>
      </div>
    </div>
  );
};

export default MessageCard;
