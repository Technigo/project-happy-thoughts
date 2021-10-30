import React from "react";
import moment from "moment";

import HeartButton from "./HeartButton";

const Posts = ({
  thoughts,
  onLikesIncrease,
}) => {
  return (
    <>
      {thoughts.map((thought) => (
        <div key={thought._id} className="post-container">
          <p>{thought.message}</p>
          <div className="like-div">
            <HeartButton
              onLikesIncrease={onLikesIncrease}
              thought={thought}
            />
            {' '}x {thought.hearts}
          </div>
          <p className="date">{moment(thought.createdAt).fromNow()}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
