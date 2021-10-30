import React from "react";
import moment from "moment";

const ThoughtItem = ({ thought, onLikesIncrease }) => {
  return (
    <div className="new-thoughts-card">
      <p>{thought.message}</p>
      <div className="likes">
        <div className="button-card">
          <button
            className="like-button"
            onClick={() => onLikesIncrease(thought._id)}
            style={{
              backgroundColor: thought.hearts > 0 ? "#ffadad" : "#eaeaea",
            }}
          >
            {" "}
            <span role="img" aria-label="heart emoji">
              &#10084;&#65039;
            </span>
          </button>
          <p className="likes-amount">x {thought.hearts}</p>
        </div>
        <p className="date">{moment(thought.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default ThoughtItem;
