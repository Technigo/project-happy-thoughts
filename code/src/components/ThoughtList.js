import React from "react";
import { formatDistance } from "date-fns";

const ThoughtList = ({ thoughts, onLikeIncrease }) => {
  return (
    <div className="Thoughtlist-container">
      {thoughts.map((thought) => (
        <div className="main-listcontainer" key={thought._id}>
          <p>{thought.message}</p>

          <button
            className="like-button"
            onClick={() => onLikeIncrease(thought._id)}
          >
            <span role="img" aria-label="heart image">
              ❤️
            </span>
          </button>
          <span className="likes"> x {thought.hearts}</span>
          <p className="time-created">
            {formatDistance(new Date(thought.createdAt), new Date())} ago
          </p>
        </div>
      ))}
    </div>
  );
};

export default ThoughtList;
