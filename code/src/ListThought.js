import React from "react";
import moment from "moment";

const ListThought = ({ post, handleLikes }) => {
  return (
    <div className="content">
      <div className="TextPost">
        <p>{post.message}</p>
      </div>
      <div className="iconAndTime">
        <p onClick={() => handleLikes(post._id)}>
          <span role="img" aria-label="heart-emoji" className="icon">
            ❤️
          </span>
          <span className="like"> x {post.hearts} </span>
        </p>
        <p className="time">{moment(post.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default ListThought;
