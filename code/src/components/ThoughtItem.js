import React from "react";
import moment from "moment";

const ThoughtItem = ({ thought, onLikesIncrease }) => {
    return (
        <div className="thought-item">
          <p>{thought.message}</p>
          <div className="like-container">
            <button
              className={(thought.hearts === 0) ? "like-btn"  : "like-btn like-btn-loved"}
              onClick={() => onLikesIncrease(thought._id)}>
                {' '}
                <span role="img" aria-label="heart-emoji">❤️</span>
            </button>
            <p className="likes">
              x {thought.hearts}
            </p>
            <p className="date">
              {moment(thought.createdAt).fromNow()}
            </p>
          </div>
        </div>
    )
}

export default ThoughtItem