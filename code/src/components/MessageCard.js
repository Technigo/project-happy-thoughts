import { formatRelative } from "date-fns";
import React, { useState } from "react";
import { postLikes } from "assets/networking";

import "./MessageCard.css";

const MessageCard = ({ _id, message, hearts, createdAt }) => {
  const [likeCount, setLikeCount] = useState(hearts);

  const handleOnClick = () => {
    postLikes(_id, hearts, (data) => setLikeCount(data.hearts));
  };

  const date = formatRelative(new Date(createdAt), new Date());

  return (
    <div className="message-container">
      <h2 className="message-text">{message}</h2>
      <div className="message-info-container">
        <div className="message-heart-group">
          <button type="button" className="message-heart-button" onClick={handleOnClick}>
            {" "}
            ❤️{" "}
          </button>
          <p className="message-heart-count"> x {likeCount}</p>
        </div>
        <p className="message-date">{date}</p>
      </div>
    </div>
  );
};

export default MessageCard;
