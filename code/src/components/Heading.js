import React from "react";

export const Heading = ({ text }) => {
  return (
    <div className="heading-container">
      <span className="heading-style">
        <p className="heading">{text}</p>
      </span>
    </div>
  );
};
