import React from "react";
import moment from "moment";

const ThoughtItem = ({ thought, onClickHeart }) => {
  return (
    <div>
      <p>{thought.message}</p>
      <button onClick={() => onClickHeart(thought._id)}>
        <span role="img" aria-label="heart for likes">
          ❤️
        </span>{" "}
        {thought.hearts}
      </button>
      {/* &hearts; also works  */}
      <p className="date">Created at: {moment(thought.createdAt).fromNow()}</p>
    </div>
  );
};

export default ThoughtItem;
