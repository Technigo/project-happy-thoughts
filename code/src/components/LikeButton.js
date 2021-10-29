import React from "react";

const LikeButton = ({ onLikeSubmit, thought }) => {
  return (
    <>
      {/* {console.log(thought)} */}
      <button
        className="like-button"
        onClick={() => onLikeSubmit(thought._id)}
        style={{
          backgroundColor: thought.hearts > 0 ? "rgb(245, 169, 169)" : "",
        }}
      >
        &#10084;
      </button>
    </>
  );
};

export default LikeButton;
