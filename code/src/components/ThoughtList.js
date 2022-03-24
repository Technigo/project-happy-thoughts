import React, { useState, useEffect } from "react";

const ThoughtList = ({ oneThought, onLike }) => {
  return (
    <div className="thought-card">
      <p className="thought-text">{oneThought.message}</p>
      <div className="thought-info">
        <button onClick={() => onLike(oneThought._id)} className="btn">
          <span
            style={{
              backgroundColor: oneThought.likes > 0 ? "#F381AF" : "#EAEAEA",
            }}
            className="btn-heart"
            role="img"
            aria-label="heart emoji"
          >
            ❤️
          </span>{" "}
          x {oneThought.likes}
        </button>{" "}
      </div>
    </div>
  );
};
export default ThoughtList;
