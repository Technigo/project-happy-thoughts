import React from "react";

const CharCount = ({ charCount }) => {
  return (
    <>
      <svg
        className="counter"
        viewBox="0 0 31.83 31.83"
        strokeDasharray={`${(charCount / 140) * 100} 100`}
      ></svg>
      <p className="message-count">
        <span className={charCount > 140 ? "p-red" : "p-blue"}>
          {140 - charCount}
        </span>{" "}
        /140
      </p>
    </>
  );
};

export default CharCount;
