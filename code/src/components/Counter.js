import React from "react";

const Counter = ({ counter }) => {
  return (
    <p>
      <span className={counter < 5 || counter > 140 ? "invalid" : "valid"}>
        {counter}
      </span>
      / 140
    </p>
  );
};

export default Counter;
