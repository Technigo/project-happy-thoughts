import React from "react";
import moment from "moment";
import "./thoughts.css";

const Thoughts = ({ thought, onHeartClick }) => {
  return (
    <div>
      <div className="happy-thoughts-list" key={thought._id}>
        <p>{thought.message}</p>
        <p>Created: {moment(thought.createdAt).fromNow()}</p>
        <button onClick={() => onHeartClick(thought._id)}>
          {" "}
          &hearts; {thought.hearts}
        </button>
      </div>
    </div>
  );
};

export default Thoughts;
