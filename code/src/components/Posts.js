import React from "react";
import moment from "moment";

const Posts = ({ thought, onSendLike, color }) => {
  return (
    <div className="container posts">
      <p className="message">{thought.message}</p>
      <div className="inner-container">
        <div className="hearts-counter">
          <button
            style={{ background: color }}
            onClick={() => {
              onSendLike(thought._id);
            }}
            className="like"
          >
            <span className="hearts">&hearts;</span>
          </button>
          x {thought.hearts}
        </div>
        <div> {moment(thought.createdAt).fromNow()}</div>
      </div>
    </div>
  );
};

export default Posts;
