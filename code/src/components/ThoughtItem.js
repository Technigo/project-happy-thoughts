import React from "react";
import moment from "moment";

const ThoughtItem = ({ thought, onLikesIncrease }) => {
  return (
    <section className="thought-card">
      <p className="thought-text">{thought.message}</p>
      <div className="likes-time-container">
        <div className="likes-amount-container">
          <button
            onClick={() => onLikesIncrease(thought._id)}
            className="heart-button"
          >
            <span aria-label="heart" role="img" className="heart-button-icon">
              ❤️
            </span>
          </button>
          <p className="likes-counter"> x {thought.hearts}</p>
        </div>
        <p className="date">{moment(thought.createdAt).fromNow()}</p>
      </div>
    </section>
  );
};

export default ThoughtItem;
