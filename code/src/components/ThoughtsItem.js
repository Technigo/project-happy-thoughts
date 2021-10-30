import React from "react";
import moment from 'moment';
import HeartButton from "./HeartButton";


const ThoughtsItem = ({ onLikesIncrease, thought, thoughtId, fetchThoughts, sumYourLikes }) => {

  return (
      <div className="thought-card">
        <p>{thought.message}</p>
        <div className="message-card-bottom-row">
          <HeartButton 
            onLikesIncrease={onLikesIncrease}
            thought={thought}
            thoughtId={thoughtId}
            fetchThoughts={fetchThoughts}
            sumYourLikes={sumYourLikes}
          />
          <p className="date-text">{moment(thought.createdAt).fromNow()}</p>
        </div>
      </div>
  )
}

export default ThoughtsItem
