import React from "react";
import moment from "moment";

const ThoughtItem = ({ thought, onClickHeart }) => {
  return (
    <section className="thought-container">
      <p className="message">{thought.message}</p>
      <div className="btn-container">
        <div className="like-container">
          <button
            className="like-btn"
            onClick={() => onClickHeart(thought._id)}
          >
            <span role="img" aria-label="heart for likes">
              ❤️
            </span>{" "}
          </button>
          <p className="like-counter"> x{thought.hearts}</p>
        </div>
        {/* &hearts; also works  */}
        <p className="date">{moment(thought.createdAt).fromNow()}</p>
      </div>
    </section>
  );
};

export default ThoughtItem;
