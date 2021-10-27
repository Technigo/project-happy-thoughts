import React from "react";

export const LikesCounter = ({ myLikes }) => {
  return (
    <div className="likes-counter-container like-counter">
      Liked thoughts: <span className="highlight">{myLikes}</span>
    </div>
  );
};
