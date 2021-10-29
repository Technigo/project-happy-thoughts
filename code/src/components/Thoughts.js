import React from "react";
import LikeButton from "./LikeButton";
import moment from "moment";

const Thoughts = ({ thoughts, onLikeSubmit, yourLikes }) => {
  return (
    <>
      <article className="thought-container">
        <p className="message">{thoughts.message}</p>
        <section className="like-section">
          <LikeButton thought={thoughts} onLikeSubmit={onLikeSubmit} />
          <p className="number-of-likes"> X {thoughts.hearts}</p>
          <p className="date">{moment(thoughts.createdAt).fromNow()}</p>
          <p>{yourLikes}</p>
        </section>
      </article>
    </>
  );
};
export default Thoughts;
