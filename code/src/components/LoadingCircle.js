import React from "react";
import "./LoadingCircle.css";

const LoadingCircle = () => {
  return (
    <div className="roller">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingCircle;
