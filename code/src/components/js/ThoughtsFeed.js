import React from "react";
import moment from "moment";

import { HeartButton } from "../js/HeartButton.js";
import "../css/thoughtsFeed.css";

export const ThoughtsFeed = ({
  onLiked,
  heart,
  heartId,
  thought,
  createdAt,
}) => {
  return (
    <section className="feed-section">
      <article className="thoughts-container">
        <p className="thought-text">{thought}</p>
        <div className="thought-footer">
          <HeartButton
            onLiked={onLiked}
            thought={thought}
            heart={heart}
            heartId={heartId}
          />
          <p className="post-time">{moment(createdAt).fromNow()}</p>
        </div>
      </article>
    </section>
  );
};
