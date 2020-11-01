import React from 'react';
import moment from 'moment';

import 'Styles/thoughtslist.css';

export const ThoughtsList = ({thought, onLike}) => {
  
  // Function for handling like-button
  const handleLikes = () => {
    onLike(thought._id);
  };
  
  /* Returning an article with key=_id, message,
  hearts (number of likes) and time created for each thought from the API */
  return (
    <article className='thoughts-article' key={thought._id}>
      <p className='thoughts-article__text'>
        {thought.message}
      </p>
      <div className='thoughts-article__info'>
        <div className='thoughts-article__likes'>
          <button 
            className= {thought.hearts > 0 ? 'button-liked' : 'button-unliked'}
            onClick={handleLikes}
          >
            <span className='heart' role='img' aria-label='heart'> ❤️ </span>
          </button>
          <p className='number-of-hearts'> x {thought.hearts} </p>
        </div>
        <div className='thoughts-article__time'>
          <p>
            {moment(thought.createdAt).fromNow() /* Using moment to show time in a nice way */}
          </p>
        </div>
      </div>
    </article>
  );
};