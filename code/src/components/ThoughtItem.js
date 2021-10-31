import React from "react";
import moment from "moment";
import LikeButton from "./LikeButton";

const ThoughtItem = ({
  thoughtId,
  thought,
  onLikesIncrease,
  fetchThoughts,
  sumYourLikes,
}) => {
  return (
    <div className="happy-card">
      <p>{thought.message}</p>
      <div className="happy-card-row">
        <LikeButton
          onLikesIncrease={onLikesIncrease}
          thought={thought}
          thoughtId={thoughtId}
          fetchThoughts={fetchThoughts}
          sumYourLikes={sumYourLikes}
        />
        <p className="date">
          - Created at: {moment(thought.createdAt).fromNow()}
        </p>
      </div>
    </div>
  );
};

export default ThoughtItem;
