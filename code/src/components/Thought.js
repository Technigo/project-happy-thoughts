import React from "react";

import "../index.css";

const Thought = ({ messageList }) => {
  return (
    <>
      {messageList.map((message) => (
        <div key={message._id} className="thought-container">
          <p className="happy-thought">{message.message}</p>
          <div className="icon-time-container">
            <p>img</p>
            <p>time</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Thought;
