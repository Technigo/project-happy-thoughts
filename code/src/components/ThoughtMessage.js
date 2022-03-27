import React from "react";
import { formatDistance } from "date-fns";

const ThoughtMessage = ({ thought, onClickHeart }) => {
  return (
    <section className="thought-container">
      <p className="message">{thought.message}</p>
      <div className="btn-container">
        <div className="like-container">
          <button
            className={thought.heart > 0 ? "liked" : "like-btn"}
            onClick={() => onClickHeart(thought._id)}
          >
            <span role="img" aria-label="heart for likes">
              ❤️
            </span>
          </button>
          <p className="like-counter"> x{thought.hearts}</p>
        </div>
        <p className="date">
          {formatDistance(new Date(thought.createdAt), Date.now(), {
            addSuffix: true,
          })}
        </p>
      </div>
    </section>
  );
};

export default ThoughtMessage;
