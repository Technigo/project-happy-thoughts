import React from "react";
import moment from "moment";
import "./thoughts.css";

const Thoughts = ({ thought, onHeartClick }) => {
  return (
    <div>
      <div className="happy-thoughts-list" key={thought._id}>
        <p>{thought.message}</p>
        <div className="heart-and-created">
          <button
            className="heart-button"
            onClick={() => onHeartClick(thought._id)}
          >
            <p className="heart"> &hearts;</p>
            <p className="hearts-count"> x {thought.heart}</p>
          </button>
          <p className="created-text">{moment(thought.createdAt).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default Thoughts;
