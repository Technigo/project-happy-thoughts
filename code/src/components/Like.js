import React from "react";

export const Like = ({ onLiked, heart, heartId }) => {
  const handleClick = () => {
    fetch(
      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${heartId}/like`,
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
        className="like-button"
        onClick={handleClick}
        style={{ background: heart > 0 ? "#FFADAD" : "#EAEAEA" }}
      >
        <span role="img" aria-label="heart">
          {"❤️"}
        </span>
      </button>
      <p className="like-text">x {heart}</p>
    </div>
  );
};
