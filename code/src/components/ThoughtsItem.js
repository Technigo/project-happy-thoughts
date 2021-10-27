import React from "react";
import moment from "moment";
import "./ThoughtsItem.css";

const ThoughtsItem = ({ thought, onLikesIncrease }) => {
  return (
    <div className="thought-container">
      <p className="thoughts-text">{thought.message}</p>
      <div className="input-section">
        <button
          className="like-button"
          onClick={() => onLikesIncrease(thought._id)}
        >
          <span className="heart-emoji" role="img" aria-label="Heart-emoji">
            ❤️
          </span>
        </button>
        <p className="likes"> x {thought.hearts}</p>
        <p className="date">{moment(thought.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default ThoughtsItem;
