import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section className="happy-header">
      <img
        className="background-img"
        src="./pictures/pink.jpg"
        alt="backroundpicture"
      />
      <div className="happy-text-box">
        <h1 className="happy-header-title">
          Welcome to a place of happy thoughts!
        </h1>
        <p className="happy-header-text">
          Here you can share your happy thoughts and be part of a positive
          community.
        </p>
      </div>
    </section>
  );
};

export default Header;
