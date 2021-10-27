import React from "react";
import moment from "moment";

const ThoughtItem = ({ thought, onLikesIncrease }) => {
  return (
    <section className="thoughts-card">
      <div>
        <p>{thought.message}</p>
        <button
          className="heart-button"
          onClick={() => onLikesIncrease(thought._id)}
        >
          {" "}
          <span> &#10084;&#65039; </span>{" "}
        </button>
        <span className="total-likes">x{thought.hearts}</span>
        <p className="date">{moment(thought.createdAt).fromNow()}</p>
      </div>
    </section>
  );
};

export default ThoughtItem;
