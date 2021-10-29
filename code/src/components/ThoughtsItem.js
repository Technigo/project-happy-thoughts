import React from "react";
import moment from "moment";
import "./ThoughtsItem.css";

const ThoughtsItem = ({ thought, onLikesIncrease }) => {
  // const [yourLikes, setYourLikes] = useState(0)

  return (
    <div className="thought-container">
      <p className="thoughts-text">{thought.message}</p>
      <div className="input-section">
        <div className="like-section">
          <button
            className="like-button"
            onClick={() => onLikesIncrease(thought._id)}
            style={{
              backgroundColor: thought.hearts > 0 ? "rgb(245, 177, 169)" : "",
            }}
          >
            <span className="heart-emoji" role="img" aria-label="Heart-emoji">
              ❤️
            </span>
          </button>
          <p className="likes"> x {thought.hearts}</p>
        </div>
        <p className="date">{moment(thought.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default ThoughtsItem;
