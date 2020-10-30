import React from "react";
import moment from "moment";
import { Like } from "./Like.js";

export const ThoughtsFeed = ({ id, thought, onLiked, heart, createdAt }) => {
  return (
    <section className="input-section">
      <article className="input-container">
        <p key={id} className="text-message">
          {thought}
        </p>
        <div className="input-feauters ">
          <Like
            onLiked={onLiked}
            thought={thought}
            heart={heart}
            heartId={id}
          />
          <p className="text-time">{moment(createdAt).fromNow()}</p>
        </div>
      </article>
    </section>
  );
};
