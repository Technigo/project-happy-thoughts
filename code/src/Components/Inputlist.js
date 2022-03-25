import React from "react";
import LikeButton from "./LikeButton";
import { formatRelative } from "date-fns";

const Inputlist = ({ thought, messageID, onLikeMessage }) => {
  const time = formatRelative(new Date(thought.createdAt), new Date());
    return (
      <section className="thoughts-container">
            <div className="thought-box" key={thought._id}>
            <p className="date">{time}</p>
            <p>{thought.message}</p>
            <LikeButton 
              messageID={messageID} 
              thought={thought}
              onLikeMessage={onLikeMessage}
              />
            </div>
      </section>
    )
  }

export default Inputlist;

