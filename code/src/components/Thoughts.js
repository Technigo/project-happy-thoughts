import React from "react";
import LikeButton from "./LikeButton";
import moment from "moment";

const Thoughts = ({ thoughts, onLikeSubmit }) => {
  return (
    <>
      {thoughts.map((thought) => (
        <article className="thought-container" key={thought._id}>
          <p className="message">{thought.message}</p>
          <section className="like-section">
            <LikeButton thought={thought} onLikeSubmit={onLikeSubmit} />
            <p className="number-of-likes"> X {thought.hearts}</p>
            <p className="date">{moment(thought.createdAt).fromNow()}</p>
          </section>
        </article>
      ))}
    </>
  );
};
export default Thoughts;
