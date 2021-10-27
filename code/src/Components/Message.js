import React from "react";
import moment from "moment";

export const Message = ({ thought, onLikesIncrease }) => {
  return (
    <section className="container">
      <div>
        <div>
          <p>{thought.message}</p>
          <button
            className="likes-button"
            onClick={() => onLikesIncrease(thought._id)}
          >
            {" "}
            &#10084;&#65039;
          </button>
          <span className="likes"> x {thought.hearts}</span>
          <p className="date">{moment(thought.createdAt).fromNow()}</p>
        </div>
      </div>
    </section>
  );
};
