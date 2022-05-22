import { formatDistance } from "date-fns";
import React, { useState } from "react";
import { postLikes } from "assets/networking";

import "./MessageCard.css";

const MessageCard = ({ _id, message, hearts, createdAt }) => {
  const [likeCount, setLikeCount] = useState(hearts);

  const date = formatDistance(new Date(createdAt), new Date(), { addSuffix: true });

  return (
    <div className="message-container">
      <h2 className="message-text">{message}</h2>
      <div className="message-info-container">
        <div className="message-heart-group">
          <button
            type="button"
            className={likeCount ? "message-heart-button clicked" : "message-heart-button"}
            onClick={() => postLikes(_id, hearts, (data) => setLikeCount(data.updated.hearts))}
          >
            {" "}
            <span className="message-heart" role="img" aria-label="heart emoji">
              ❤️
            </span>{" "}
          </button>
          <p className="message-heart-count"> x {likeCount}</p>
        </div>
        <p className="message-date">{date}</p>
      </div>
    </div>
  );
};

export default MessageCard;
