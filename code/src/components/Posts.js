import React, { useState } from "react";
import moment from "moment";

const Posts = ({ thought, onSendLike }) => {
  const [color, setColor] = useState("#f2f2f2");

  const clickLike = (id) => {
    setColor("#ffb3b3");
    onSendLike(id);
  };

  return (
    <div className="container posts">
      <p className="message">{thought.message}</p>
      <div className="inner-container">
        <div className="hearts-counter">
          <button
            style={{ background: color }}
            onClick={() => {
              clickLike(thought._id);
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
