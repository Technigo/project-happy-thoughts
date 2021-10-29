import React from "react";
import moment from "moment";

const Thoughts = ({ thought, onLikesIncrease }) => {
  return (
    <div>
      <div className="thought-wrapper">
        <p>{thought.message}</p>
        <div className="likes">
          <button
            className="like-button"
            onClick={() => onLikesIncrease(thought._id)}
          >
            <span role="img" aria-label="heart emoji">
              ❤️
            </span>
          </button>
          <p>x {thought.hearts}</p>
        </div>
        <p className="date">{moment(thought.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default Thoughts;
