import React from "react";

export const LikeButton = ({ likes }) => {
  return (
    <div className="messages-info__likes">
      <span
        role="img"
        className="messages-info__likes-heart"
        aria-label="heart-emoji"
      >
        &#10084;&#65039;
      </span>
      x{likes}
    </div>
  );
};
