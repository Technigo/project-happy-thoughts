import React from "react";
import moment from "moment";

const Posts = (thoughts) => {
  {
    thoughts.map((thought) => (
      <div key={thought._id} className="post-container">
        <p>{thought.message}</p>
        <div className="like-div">
          <button className="heart-button">
            <span role="img" aria-label="heart icon">
              💗
            </span>
          </button>
          x{thought.hearts}
        </div>
        <p className="date">{moment(thought.createdAt).fromNow()}</p>
      </div>
    ));
  }
};

export default Posts;
