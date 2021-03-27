import React from "react";
import moment from "moment";

const SingleMessage = ({ onHeartsIncrease, message }) => {
  return (
    <div className="message-container">
      <h4 className="happy-thought">{message.message}</h4>
      <div className="hearts-and-time">
        <div className="heart-and-counter">
          <button
            className="hearts-button"
            onClick={() => onHeartsIncrease(message._id)}
          >
            <span className="heart-emoji" role="img" aria-label="heart-emoji">
              &#10084;&#65039;
            </span>
          </button>
          <p className="counter">x {message.hearts}</p>
        </div>
        <p className="date">{moment(message.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default SingleMessage;
