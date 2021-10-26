import React from "react";
import moment from "moment";
import "./Thoughts.css";
import { LIKE_URL } from "utils/urls";

const Thoughts = ({ thoughts, onLikeCounterChange }) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(LIKE_URL, options)
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <div>
      {thoughts.map((thought) => (
        <div className="thought-container" key={thought._id}>
          <p className="thoughts-text">{thought.message}</p>
          <div className="input-section">
            <button className="like-button" onClick={onLikeCounterChange}>
              <span className="heart-emoji" role="img" aria-label="Heart-emoji">
                ❤️
              </span>
            </button>
            <p className="likes"> x {thought.hearts}</p>
            <p className="date">{moment(thought.createdAt).fromNow()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Thoughts;
