import React from "react";
import moment from "moment";

const Posts = (thoughts) => {
  return thoughts.map((thought) => (
    <div key={thought._id}>
      <p>{thought.message}</p>
      <button>💗 {thought.hearts}</button>
      <p className="date">
        - Created at: {moment(thought.createdAt).fromNow()}
      </p>
    </div>
  ));
};

// export default Posts;
