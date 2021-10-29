import React from "react";

const Counter = ({ counter }) => {
  return (
    <p>
      <span className={counter > 140 ? "invalid" : "valid"}>
        {140 - counter}
      </span>
      / 140
    </p>
  );
};

export default Counter;
