import React, { useState } from "react";

export const LikeButton = ({ id, onThoughtLiked }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
    fetch(`https://jenny-happy-api.herokuapp.com/${id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      onThoughtLiked(id);
    });
  };

  return (
    <button
      type="button"
      className={`like-button ${clicked && " like-button-red"}`}
      onClick={() => handleClick()}
    >
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </button>
  );
};
