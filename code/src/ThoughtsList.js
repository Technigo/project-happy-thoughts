import React from "react";
import moment from "moment";
import { LikeButton } from "LikeButton";

export const ThoughtsList = ({
  id,
  message,
  hearts,
  createdAt,
  onThoughtLiked
}) => {
  return (
    <section className="card">
      <h2>{message}</h2>
      <div className="card-bottom">
        <div className="likes">
          <LikeButton onThoughtLiked={onThoughtLiked} id={id} />
          <p>x{hearts}</p>
        </div>
        <p>{moment(createdAt).fromNow()}</p>
      </div>
    </section>
  );
};
