import React from "react";
import moment from "moment";

import { Heart, EmptyHeart } from "./iconComponents/icons";

const SingleThought = ({
  oneThought,
  likeThisThought,
  likedThoughts,
  setLikedThoughts,
}) => {
  return (
    <div key={oneThought._id} className="card">
      <p className="happy-thought">{oneThought.message}</p>
      <div className="inline-wrapper">
        <div className="like">
          <button
            disabled={likedThoughts.includes(oneThought._id)}
            className="heart-button"
            onClick={() => {
              likeThisThought(oneThought._id);
              setLikedThoughts([...likedThoughts, oneThought._id]);
            }}
          >
            {likedThoughts.includes(oneThought._id) ? (
              <Heart />
            ) : (
              <EmptyHeart />
            )}
          </button>
          <span id={oneThought._id}> x {oneThought.hearts}</span>
        </div>
        <p>{moment(oneThought.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default SingleThought;
