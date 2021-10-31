import React, { useState } from "react";
import { LIKES_URL } from "../utils/urls";

const LikeButton = ({ thoughtId, thought, fetchThoughts }) => {
  const [likes, setLikes] = useState(
    JSON.parse(localStorage.getItem(thoughtId)) + 0
  );

  const onLikesIncrease = () => {
    fetch(LIKES_URL(thoughtId), {
      method: "POST",
    })
      .then((res) => res.json())
      .then(() => {}, []);

    fetchThoughts();
    setLikes((value) => value + 1);
    localStorage.setItem(thoughtId, JSON.stringify(likes + 1)); // Could not make this work properly without adding + 1. Isn't the previous line supposed to add + 1 to yourLikes?
  };

  return (
    <div className="likes-container">
      {likes === 0 && (
        <button
          className={thought.hearts === 0 ? "like-button" : "like-button liked"}
          onClick={() => onLikesIncrease(thought._id)}
        >
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </button>
      )}
      {likes > 0 && (
        <button
          className="heart-button hover"
          onClick={() => onLikesIncrease(thought._id)}
        >
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </button>
      )}
      <div className="likes-text"> x {thought.hearts}</div>
    </div>
  );
};

export default LikeButton;
