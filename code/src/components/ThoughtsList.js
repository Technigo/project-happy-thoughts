import React from 'react';
import moment from 'moment';

import "styles/thoughtsList.css";

export const ThoughtsList = ({thought, onLike}) => {
  
  const handleLikes = () => {
    onLike(thought._id);
  };
  
  return (
    <article className='thoughts-article' key={thought._id}>
      <p className="thoughts-article__text">
        {thought.message}
      </p>
      <div className="thoughts-article__info">
        <button 
          className= {thought.hearts > 0 ? 'button-liked' : 'button-unliked'}
          onClick={handleLikes}
        >
          <span classname='heart-button' role='img' aria-label='heart'> ❤️ </span>
        </button>
        <p classname='thoughts-article__likes'> x {thought.hearts} </p>
        <p className='thoughts-article__time'>
          {moment(thought.createdAt).fromNow() /* Using moment to show time in a nice way */}
        </p>
      </div>
    </article>
  );
};