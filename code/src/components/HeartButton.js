import React from "react";

const HeartButton = ({ thought, onLikesIncrease }) => {
  return (
    <button
      className="heart-button"
      onClick={() => onLikesIncrease(thought._id)}
    >
      <span role="img" className="heart-icon" aria-label="heart icon">
        💗
      </span>
    </button>
  );
};

export default HeartButton;
