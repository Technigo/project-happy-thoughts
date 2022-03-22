import React, { useState, useEffect } from "react";

const ThoughtList = ({ oneThought }) => {
  return (
    <div className="thought-card">
      <p className="thought-text">{oneThought.message}</p>
    </div>
  );
};

export default ThoughtList;
