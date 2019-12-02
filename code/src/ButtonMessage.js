import React from "react";

export const ButtonMessage = props => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="main-message-container--btn">
      <span role="img" aria-labelledby="heart icon">
        💖
      </span>{" "}
      Send Happy Thought{" "}
      <span role="img" aria-labelledby="heart icon">
        💖
      </span>
    </button>
  );
};
