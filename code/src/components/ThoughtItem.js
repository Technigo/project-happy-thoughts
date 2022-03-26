import React from "react";
import { formatDistance } from "date-fns";

const ThoughtItem=({thought, onLikesIncrease}) => {
  return(
    <main>
<div className="comment-container">COMMENT-CONTAINER</div>
<p className="thought-text">THOUGHT MESSAGE</p>

<div className="like-box">LIKE-BOX
<div className="heart">HEART
<button className="like-button" onClick={() => onLikesIncrease}>LIKE-BUTTON</button>

<p className="likes">LIKES</p>
</div>

<p className="date">DATE</p>


</div>

    </main>
  )
}

export default ThoughtItem;