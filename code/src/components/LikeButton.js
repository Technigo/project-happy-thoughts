import React, { useState } from "react";

export const LikeButton = ({ likes, id, fetchLikes }) => {
  const [liked, setLiked] = useState(false);

  const onLikeClick = (messageID) => {
    setLiked(true);
    fetchLikes(messageID);
  };
  
  return (
    <button className="like-btn" onClick={() => onLikeClick(id)}>
      <span
        role="img"
        /* by adding a state  to the className this element can change 
        background-color depending on if it has the class .heart-is-true or .heart-is-false */
        className={`like-btn__heart heart-is-${liked}`}
        aria-label="heart-emoji"
      >
        &#10084;&#65039;
      </span>
      <p className="like-btn__text"> x {likes}</p>
    </button>
  );
};
