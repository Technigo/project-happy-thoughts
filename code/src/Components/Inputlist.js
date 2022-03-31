import React from "react";
import LikeButton from "./LikeButton";
import { formatRelative } from "date-fns";

// RENDERING THE API DATA/THOUGHTS FEED AND INJECTED BUTTON COMPONENT
const Inputlist = ({ thought, messageID, onLikeMessage }) => {
  const time = formatRelative(new Date(thought.createdAt), new Date());
    return (
      <section className="thoughts-container">
            <div className="thought-box" key={thought._id}>
            <p>{thought.message}</p>
            <LikeButton 
              messageID={messageID} 
              thought={thought}
              onLikeMessage={onLikeMessage}
              />
              <p className="date">{time}</p>
            </div>
      </section>
    )
  }

export default Inputlist;

