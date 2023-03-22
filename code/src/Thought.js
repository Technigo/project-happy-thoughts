import React from 'react';

export const Thought = (props) => {
  return (
    <article>
      <p>{props.thoughtMessage}</p>
      <div className="like-counter-date-container">
        <div className="like-counter-container">
          <button type="submit" handleLikeSubmit={props.handleLikeSubmit}>Like</button>
          <p>like counter</p>
        </div>
        <div>
          <p>{props.timeStamp}</p>
        </div>
      </div>
    </article>
  )
}