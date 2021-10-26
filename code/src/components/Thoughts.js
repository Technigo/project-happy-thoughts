import React from "react";
import moment from "moment";
import "./Thoughts.css";

const Thoughts = ({ thoughts, onLikeCounterChange }) => {
  return (
    <div className="thought-container">
      {thoughts.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          <div className="input-section">
            <button className="like-button" onClick={onLikeCounterChange}>
              <span className="heart-emoji" role="img" aria-label="Heart-emoji">
                ❤️
              </span>
            </button>
            x {thought.hearts}
            <p className="date">{moment(thought.createdAt).fromNow()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Thoughts;
