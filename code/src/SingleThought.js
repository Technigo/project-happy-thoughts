import React from "react";
import moment from "moment";

import { ReactComponent as Heart } from "./images/heart.svg";

const SingleThought = ({ oneThought, likeThisThought }) => {
  console.log("Component mounting");
  return (
    <div key={oneThought._id} className="card">
      <p>{oneThought.message}</p>
      <p>{moment(oneThought.createdAt).fromNow()}</p>
      <div>
        <button
          className="heart-link"
          onClick={() => {
            likeThisThought(oneThought._id);
          }}
        >
          <Heart className="icon" />
        </button>
        <span id={oneThought._id}>{oneThought.hearts}</span>
      </div>
    </div>
  );
};

export default SingleThought;
