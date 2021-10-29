import React from "react";
import moment from "moment";

const ThoughtItem = ({ thought, onLikesIncrease }) => {
  return (
    <div className="thoughts">
      <div className="thoughts-card">
        <p>{thought.message}</p>
        <div className="thoughts-container">
          <button
            style={{
              backgroundColor: thought.hearts > 0 ? "lightpink" : "lightgrey",
            }}
            onClick={() => onLikesIncrease(thought._id)}
            className="btn"
          >
            {" "}
            <span>❤</span>
          </button>
          <p>x{thought.hearts} </p>
          <p className="date">{moment(thought.createdAt).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default ThoughtItem;
