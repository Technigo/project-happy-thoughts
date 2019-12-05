import React, { useState, useEffect } from 'react';
import "./heart.css";

export const Heart = props => {
  const [like, setLikes] = useState(false)

  return (
    <li>
      <button className="like-button" onClick={() => setLikes(like === true)}>
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
      x {props.hearts}
    </li>
  )
}