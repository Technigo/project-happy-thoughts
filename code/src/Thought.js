import React from 'react';
import { formatDistance } from 'date-fns';

export const Thought = (props) => {
  return (
    <article>
      <p>{props.thoughtMessage}</p>
      <div className="like-counter-date-container">
        <div className="like-counter-container">
          <button type="submit" handleLikeSubmit={props.handleLikeSubmit}> ❤️ Like</button>
          <p>like counter</p>
        </div>
        <div>
          <p>{formatDistance(new Date(props.timeStamp), Date.now(), {
            addSuffix: true
          })}
          </p>
        </div>
      </div>
    </article>
  )
}