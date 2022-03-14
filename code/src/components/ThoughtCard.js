import React from "react";
import moment from "moment";

const ThoughtCard = ({ thought, onLikesIncrease }) => {
  return (
    <div className="thought-container">
      <div className="thought-message">
        {/* displaying thought message */}
        <p>{thought.message}</p>
        <p className="name">{thought.author}</p>
      </div>

      <div className="heart-date-container">
        <button
          className="heart-btn"
          onClick={() => onLikesIncrease(thought._id)} //calling the function with the id of the object
          //the heart-btn background-color depends on the likes(if bigger than 0 color is pink, otherwise is white)
          style={{
            backgroundColor: thought.hearts > 0 ? "#FFADAD" : "#EAEAEA",
          }}
        >
          <span role="img" aria-label="Heart emoji">
            &#10084;&#65039;
          </span>
        </button>

        <p className="amount-hearts">x {thought.hearts}</p>
        {/* Using the Moment.js to display when the happy thought was posted */}
        <p className="date">{moment(thought.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default ThoughtCard;
