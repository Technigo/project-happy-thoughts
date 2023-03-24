import React from 'react';
import { formatDistance } from 'date-fns';

export const Thought = (props) => {
  return (
    <div className="thought-article-container">
      <article className="thought-article">
        <h1 className="thought-message">{props.thoughtMessage}</h1>
        <div className="like-counter-date-container">
          <div className="like-counter-container">
            <button
              className={`like-button${props.likesCounter > 0 ? ' on' : ''} `}
              aria-label="like-button"
              type="button"
              onClick={props.handleLikeSubmit}>
            ❤️{props.heart}
            </button>
            <p>x{props.likesCounter}</p>
          </div>
          <div>
            <p>{formatDistance(new Date(props.timeStamp), Date.now(), {
              addSuffix: true
            })}
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

