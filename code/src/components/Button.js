import React, { useState, useEffect } from "react";

const Button = () => {
  return (
    <button
      // disabled={thought.length < 6 || thought.length > 140}
      type="submit"
      className="btn"
    >
      <span role="img" aria-label="heart emoji">
        ❤️{" "}
      </span>
      Send Happy Thought
      <span role="img" aria-label="heart emoji">
        {" "}
        ❤️
      </span>
    </button>
  );
};

export default Button;
