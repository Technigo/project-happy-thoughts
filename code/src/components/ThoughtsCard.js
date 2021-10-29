import React from "react";

const ThoughtsCard = ({ thought, heartCounter, moment }) => {
  return (
    <>
      <div key={thought._id} className="answer-card">
        <div className="answer">
          <p>{thought.message}</p>
          <button
            onClick={() => heartCounter(thought._id)}
            className="heart-btn"
          >
            {" "}
            <span
              role="img"
              aria-label="heart-emoji"
              className={thought.hearts > 0 ? "heart-liked" : "heart"}
            >
              ❤️
            </span>{" "}
            x {thought.hearts}
          </button>
          <p className="date">
            -Created at: {moment(thought.createdAt).fromNow()}
          </p>
        </div>
      </div>
    </>
  );
};

export default ThoughtsCard;
