import React, { useState } from "react";

const LikeButton = ({ thought, addClicks, likedClicks }) => {
  return (
    <>
      <button
        className="like-button"
        onClick={() => addClicks(thought._id)}
        style={{
          backgroundColor: thought.hearts > 0 ? "rgb(245, 169, 169)" : "",
        }}
      >
        &#10084;
      </button>
      <p>{likedClicks}</p>
    </>
  );
};

export default LikeButton;
