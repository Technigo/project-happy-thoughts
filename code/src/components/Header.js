import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <h1 className="header">
      <span role="img" aria-label="heart emoji">
        💗
      </span>{" "}
      Happy Thoughts{" "}
      <span role="img" aria-label="heart emoji">
        💗
      </span>
    </h1>
  );
};

export default Header;
