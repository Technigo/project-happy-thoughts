import React from "react";
import moment from "moment";

import "./happyThoughts.css";

export const HappyThoughts = ({ thought, onLiked }) => {
  console.log(thought, onLiked);
  const { message, hearts, createdAt, _id } = thought;

  return (
    <article className="happy-thought">
      <h3>{message}</h3>
      <p>
        <button
          onClick={() => onLiked(_id)}
          className={
            hearts > 5 ? "super-liked" : hearts > 0 ? "liked" : "not-liked"
          }
        >
          <span className="heart" role="img" aria-label="heart">
            {"💖 "}
          </span>
        </button>
        x {hearts}
      </p>
      <p>{moment(createdAt).fromNow()}</p>
    </article>
  );
};
