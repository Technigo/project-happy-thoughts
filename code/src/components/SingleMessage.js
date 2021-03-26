import React from "react";
import moment from "moment";

const SingleMessage = ({ onHeartsIncrease, message }) => {
  return (
    <div>
      <h4>{message.message}</h4>
      <button onClick={() => onHeartsIncrease(message._id)}>
        {message.hearts}
      </button>
      <p className="date"> - {moment(message.createdAt).fromNow()}</p>
    </div>
  );
};

export default SingleMessage;
