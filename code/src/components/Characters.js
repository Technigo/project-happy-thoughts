import React from "react";

const Characters = ({ counter }) => {
  return (
    <p className="characters">
      <span className={counter > 140 || counter < 5 ? "bad" : "good"}>
        {0 + counter}
      </span>
      /140
    </p>
  );
};

export default Characters;
