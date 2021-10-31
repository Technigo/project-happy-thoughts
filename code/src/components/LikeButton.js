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
    const incLikes = likes + 1;
    setLikes(incLikes);
    localStorage.setItem(thoughtId, JSON.stringify(incLikes));
  };

  return (
    <div className="likes-container">
      {likes === 0 && (
        <button
          className={
            thought.hearts === 0 ? "liked-button" : "liked-button liked"
          }
          onClick={() => onLikesIncrease(thought._id)}
        >
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </button>
      )}
      {likes > 0 && (
        <button
          className="liked-button hover"
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
