import React from "react";

import "../css/heartButton.css";

export const HeartButton = ({ onLiked, heart, heartId }) => {
  const handleClick = () => {
    fetch(
      `https://happy-thoughts-caroline.herokuapp.com/thoughts/${heartId}/like`,
      {
        method: "POST",
        body: "",
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => onLiked(heartId));
  };

  return (
    <div className="like-container">
      <button
        onClick={handleClick}
        className="heart-button"
        style={{ background: heart > 0 ? "#FFADAD" : "#EAEAEA" }}
      >
        <span role="img" aria-label="heart">
          {"❤️"}
        </span>
      </button>
      <p className="heart-counting-text">x {heart}</p>
    </div>
  );
};
