import React from "react";
import { formatDistance } from "date-fns";

const ThoughtItem=({thought, onLikesIncrease}) => {
  return(
    <main>
<div className="comment-container">COMMENT-CONTAINER</div>
<p className="thought-text">THOUGHT MESSAGE{thought.message}</p>

<div className="like-box">LIKE-BOX
<div className="heart">HEART
<button className="like-button" onClick={() => onLikesIncrease(thought._id)}>LIKE-BUTTON
{' '}
</button>
{' '}

</div>

<p className="date">DATE
            {formatDistance(new Date(thought.createdAt), new Date())} ago
          </p>



</div>

    </main>
  )
}

export default ThoughtItem;