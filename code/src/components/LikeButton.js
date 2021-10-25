import React from "react";

export const LikeButton = ({ onLikeButtonClick, thought }) => {
  return (
    <div>
      <button onClick={() => onLikeButtonClick(thought)}>&hearts;</button>
      <button> x {thought.hearts}</button>
    </div>
  );
};
