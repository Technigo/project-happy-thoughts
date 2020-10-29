import React from 'react';
import moment from 'moment'

import './ThoughtMessage.css'

export const ThoughtMessage = ({thought, onPostHearts}) => {
  
  const handleClick = () => {
    onPostHearts(thought._id)
  }

  return (
    <article key={thought._id}>
      
      <h2 className='thought'>
        {thought.message}
      </h2>

      <div className='wrapper'>
        <div className='like-button-container'>

          <button
            className={thought.hearts > 0 ? 'liked' : 'not-liked'}
            type='button' 
            onClick={handleClick}
          >
            <span role='img' aria-label='heart'>
              {'❤️'}
            </span>
          </button>

          <p className='likes-text'>
            x {thought.hearts}
          </p>

        </div>

        <p className='time-text'>
          {moment(thought.createdAt).fromNow()}
        </p>
        
      </div>
    </article>  
  )
}