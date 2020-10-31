import React from "react";
import moment from "moment";
import { Like } from "./Like.js";

export const ThoughtsFeed = ({ thought, createdAt, onLiked, heart, heartId }) => {
  return (
    <section className="input-section">
      <article className="input-container">
        <p className="text-message">
          {thought}
        </p>
        <div className="input-feauters">
          <Like
            onLiked={onLiked}
            heart={heart}
            heartId={heartId}
          />
          <p className="time">{moment(createdAt).fromNow()}</p>
        </div>
      </article>
    </section>
  );
};
