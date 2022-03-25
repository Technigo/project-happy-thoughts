import React from "react";

const Characters = ({ counter }) => {
  return (
    <p className="characters">
      <span className={counter > 140 ? "bad" : "good"}>{140 - counter}</span>
      /140
    </p>
  );
};

export default Characters;
