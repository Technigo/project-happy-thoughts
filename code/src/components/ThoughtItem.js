import React from "react";
import { formatDistance } from "date-fns";
import Emoji from "./Emoji";

const ThoughtItem=({thought, onLikesIncrease}) => {
  return(
    <main>
<div className="comment-container">
<p className="thought-text">{thought.message}</p>

<div className="like-box">
<div className="like">
<button className="like-button" onClick={() => onLikesIncrease(thought._id)}>
{' '}
<Emoji symbol="❤️"/>   
</button>
{' '}

<p className="like-counter">x {thought.hearts}</p>
</div>             
<p className="time-tracker">
            {formatDistance(new Date(thought.createdAt), new Date())} ago
          </p>

</div>
</div>
    </main>
  )
}

export default ThoughtItem;