import React from "react";
import moment from "moment";

const ThoughtItem = ({ thought, onLikesIncrease }) => {
  return (
    <div className="new-thoughts-card">
      <p>{thought.message}</p>
      <button
        className="like-button"
        onClick={() => onLikesIncrease(thought._id)}
      >
        {" "}
        &#10084;&#65039;
      </button>
      <p>x {thought.hearts}</p>
      <p className="date">- Created: {moment(thought.createdAt).fromNow()}</p>
    </div>
  );
};

export default ThoughtItem;
