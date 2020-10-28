import React from 'react';
import moment from 'moment'

import './ThoughtMessage.css'

export const ThoughtMessage = ({thought, onLikeThought}) => {
  const onLikeClick = event => {
    const LIKE_URL=`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought._id}/like`
    
    event.preventDefault()
        fetch(LIKE_URL, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:''
        }).then(()=> onLikeThought(thought._id)) 
    } 

  return (
    <article key={thought._id}>
      <p className='thought'>
        {thought.message}
      </p>
      <div className='wrapper'>
      <div className='like-button-container'>
        <button
          type='button'
          onClick={onLikeClick}
        >
          <span role='img' aria-label='heart'>
            ❤️
          </span>
        </button>
        
        <p className='amount-likes'>x {thought.hearts}</p>
        </div>
        <span className='time-posted'>
          {moment(thought.createdAt).fromNow()}
        </span>
        
      </div>
    </article>  
  )
}