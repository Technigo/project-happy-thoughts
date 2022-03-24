import React from "react";
import LikeButton from "./LikeButton";
import { formatRelative } from "date-fns";

const Inputlist = ({ loading, thought, messageID, likeMessage }) => {
  const date = formatRelative(new Date(thought.createdAt), new Date());

  if (loading) {
    return (
    <section className="thoughts-container">
      <div className="loading-page">
      <h2>Loading...</h2>
      </div>
    </section>
    )
  }
    return (
      <section className="thoughts-container">
            <div className="thought-box" key={thought._id}>
            <p className="date">{date}</p>
            <p>{thought.message}</p>
            <LikeButton 
              messageID={messageID} 
              thought={thought}
              likeMessage={likeMessage}
              />
            </div>
      </section>
    )
  }

export default Inputlist;

