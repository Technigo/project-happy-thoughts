import React from "react";
import moment from "moment";

import { ReactComponent as Heart } from "./images/heart.svg";
import { ReactComponent as EmptyHeart } from "./images/empty-heart.svg";

const SingleThought = ({
  oneThought,
  likeThisThought,
  likedThoughts,
  setLikedThoughts,
}) => {
  return (
    <div key={oneThought._id} className="card">
      <p>{oneThought.message}</p>
      <p>{moment(oneThought.createdAt).fromNow()}</p>
      <div>
        <button
          disabled={likedThoughts.includes(oneThought._id)}
          className="heart-button"
          onClick={() => {
            likeThisThought(oneThought._id);
            setLikedThoughts([...likedThoughts, oneThought._id]);
          }}
        >
          {likedThoughts.includes(oneThought._id) ? (
            <Heart className="icon" />
          ) : (
            <EmptyHeart className="icon" />
          )}
        </button>
        <span id={oneThought._id}>{oneThought.hearts}</span>
      </div>
    </div>
  );
};

export default SingleThought;
